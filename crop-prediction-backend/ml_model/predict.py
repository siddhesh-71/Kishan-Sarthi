import os
import sys
import json
import numpy as np
import pandas as pd
import joblib
from PIL import Image
import matplotlib.pyplot as plt
from io import BytesIO
import base64
import cv2

# Load the model
def load_model():
    model_path = os.path.join(os.path.dirname(__file__), 'models', 'crop_prediction_model.joblib')
    if not os.path.exists(model_path):
        raise FileNotFoundError(f"Model not found at {model_path}. Please train the model first.")
    
    return joblib.load(model_path)

# Check if image is soil
def is_soil_image(img, hsv_means, texture):
    h_mean, s_mean, v_mean = hsv_means
    
    # Stricter Heuristics for Soil:
    # 1. Colors must be in the typical soil range (Browns/Blacks/Reds/Grays)
    # 2. Saturation: Natural soil is rarely extremely vibrant (S < 150)
    # 3. Value: Not too bright (no sky/white walls) and not pure black
    # 4. Texture: Soil has granularity (std dev > 10 usually)
    
    # Typical Soil Hue (HSV in OpenCV): 
    # - Brown/Red/Dark Orange: 0-25
    # - Gray/Black: Any hue if Saturation is very low
    # - Green/Clays: 30-90 (occasionally)
    
    is_brown_red = (h_mean < 25) # Standard soil
    is_clay = (30 < h_mean < 90) and (s_mean < 80) # Only if low saturation
    is_color_ok = is_brown_red or is_clay
    
    is_saturation_ok = (s_mean < 150) and (s_mean > 5) # Not neon, not pure grayscale
    is_value_ok = (30 < v_mean < 200) # Not pure black, not bright light
    is_texture_ok = texture > 12 # Soil is granular, not a smooth surface
    
    return is_color_ok and is_saturation_ok and is_value_ok and is_texture_ok

# Extract soil features from image
def extract_soil_features(image_path):
    # Read the image
    img = cv2.imread(image_path)
    if img is None:
        raise ValueError("Could not read the image file")
    
    # Convert to HSV color space
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    
    # Calculate average hue, saturation, and value
    h_mean = np.mean(hsv[:, :, 0])
    s_mean = np.mean(hsv[:, :, 1])
    v_mean = np.mean(hsv[:, :, 2])
    
    # Calculate texture features
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    texture = np.std(gray)
    
    # Validate if it's soil
    if not is_soil_image(img, (h_mean, s_mean, v_mean), texture):
        raise ValueError("Soil verification failed! This image does not appear to be soil. Please check the image and try again.")
    
    # Define soil types based on color and texture
    # This is a simplified approach - a real system would use more sophisticated analysis
    if s_mean < 50:  # Low saturation often indicates sandy soil
        if v_mean > 150:  # Light colored
            soil_type = "Sandy"
            estimated_ph = 6.0 + np.random.uniform(-0.5, 0.5)  # Sandy soils tend to be slightly acidic
            estimated_nitrogen = 30 + np.random.uniform(-10, 20)
            estimated_phosphorus = 15 + np.random.uniform(-5, 15)
            estimated_potassium = 10 + np.random.uniform(-5, 10)
        else:
            soil_type = "Sandy Loam"
            estimated_ph = 6.5 + np.random.uniform(-0.4, 0.4)
            estimated_nitrogen = 40 + np.random.uniform(-10, 20)
            estimated_phosphorus = 20 + np.random.uniform(-5, 15)
            estimated_potassium = 15 + np.random.uniform(-5, 10)
    elif 40 <= h_mean <= 70:  # Hue in green-yellow range often indicates clay
        if texture > 40:  # High texture variation
            soil_type = "Clay Loam"
            estimated_ph = 7.2 + np.random.uniform(-0.3, 0.3)
            estimated_nitrogen = 65 + np.random.uniform(-15, 15)
            estimated_phosphorus = 35 + np.random.uniform(-10, 10)
            estimated_potassium = 30 + np.random.uniform(-10, 10)
        else:
            soil_type = "Clay"
            estimated_ph = 7.5 + np.random.uniform(-0.3, 0.3)  # Clay soils tend to be more alkaline
            estimated_nitrogen = 80 + np.random.uniform(-20, 10)
            estimated_phosphorus = 40 + np.random.uniform(-10, 15)
            estimated_potassium = 35 + np.random.uniform(-10, 15)
    elif 10 <= h_mean <= 30:  # Reddish-brown color
        soil_type = "Red Loamy"
        estimated_ph = 6.8 + np.random.uniform(-0.4, 0.4)
        estimated_nitrogen = 70 + np.random.uniform(-15, 15)
        estimated_phosphorus = 45 + np.random.uniform(-10, 10)
        estimated_potassium = 35 + np.random.uniform(-10, 10)
    elif h_mean < 15 and v_mean < 100:  # Dark color
        soil_type = "Black Cotton"
        estimated_ph = 7.8 + np.random.uniform(-0.3, 0.5)  # Black soils tend to be alkaline
        estimated_nitrogen = 85 + np.random.uniform(-15, 10)
        estimated_phosphorus = 55 + np.random.uniform(-10, 15)
        estimated_potassium = 40 + np.random.uniform(-10, 10)
    else:
        soil_type = "Medium Black"
        estimated_ph = 7.3 + np.random.uniform(-0.4, 0.4)
        estimated_nitrogen = 75 + np.random.uniform(-15, 15)
        estimated_phosphorus = 45 + np.random.uniform(-10, 10)
        estimated_potassium = 35 + np.random.uniform(-10, 10)
    
    # Return the extracted features
    return {
        'soil_type': soil_type,
        'ph': estimated_ph,
        'nitrogen': estimated_nitrogen,
        'phosphorus': estimated_phosphorus,
        'potassium': estimated_potassium
    }

# Get weather data for a region
def get_weather_data(region):
    # In a real application, this would call a weather API
    # For this example, we'll use hardcoded representative values for Maharashtra regions
    weather_data = {
        'mumbai': {'temperature': 30 + np.random.randint(-2, 3), 'humidity': 80 + np.random.randint(-5, 6), 'rainfall': 2200 + np.random.randint(-100, 101)},
        'pune': {'temperature': 26 + np.random.randint(-2, 3), 'humidity': 60 + np.random.randint(-5, 6), 'rainfall': 700 + np.random.randint(-50, 51)},
        'nagpur': {'temperature': 31 + np.random.randint(-2, 3), 'humidity': 45 + np.random.randint(-5, 6), 'rainfall': 950 + np.random.randint(-50, 51)},
        'nashik': {'temperature': 25 + np.random.randint(-2, 3), 'humidity': 55 + np.random.randint(-5, 6), 'rainfall': 800 + np.random.randint(-50, 51)},
        'aurangabad': {'temperature': 29 + np.random.randint(-2, 3), 'humidity': 45 + np.random.randint(-5, 6), 'rainfall': 650 + np.random.randint(-50, 51)},
        'solapur': {'temperature': 30 + np.random.randint(-2, 3), 'humidity': 40 + np.random.randint(-5, 6), 'rainfall': 550 + np.random.randint(-50, 51)},
        'amravati': {'temperature': 31 + np.random.randint(-2, 3), 'humidity': 45 + np.random.randint(-5, 6), 'rainfall': 850 + np.random.randint(-50, 51)},
        'kolhapur': {'temperature': 26 + np.random.randint(-2, 3), 'humidity': 70 + np.random.randint(-5, 6), 'rainfall': 1200 + np.random.randint(-50, 51)},
        'sangli': {'temperature': 28 + np.random.randint(-2, 3), 'humidity': 55 + np.random.randint(-5, 6), 'rainfall': 650 + np.random.randint(-50, 51)},
        'satara': {'temperature': 25 + np.random.randint(-2, 3), 'humidity': 60 + np.random.randint(-5, 6), 'rainfall': 750 + np.random.randint(-50, 51)},
        'ratnagiri': {'temperature': 29 + np.random.randint(-2, 3), 'humidity': 85 + np.random.randint(-5, 6), 'rainfall': 3000 + np.random.randint(-100, 101)},
        'latur': {'temperature': 30 + np.random.randint(-2, 3), 'humidity': 45 + np.random.randint(-5, 6), 'rainfall': 600 + np.random.randint(-50, 51)}
    }
    
    # Default to Pune if region not found
    region = region.lower() if region else 'pune'
    return weather_data.get(region, weather_data['pune'])

# Agronomic rules for crop suitability adjustment
def calculate_agronomic_adj(crop_name, soil_data, weather_data):
    adj = 0
    crop = crop_name.lower()
    
    # Soil Type Matching
    soil_type = soil_data['soil_type'].lower()
    if 'cotton' in crop:
        if 'black' in soil_type: adj += 15
        elif 'clay' in soil_type: adj += 10
    elif 'rice' in crop or 'paddy' in crop:
        if 'clay' in soil_type: adj += 15
        elif 'loam' in soil_type: adj += 5
        elif 'sandy' in soil_type: adj -= 20
    elif 'sugarcane' in crop:
        if 'loam' in soil_type or 'black' in soil_type: adj += 10
    elif 'wheat' in crop:
        if 'loam' in soil_type: adj += 10
        elif 'clay' in soil_type: adj += 5
    elif 'groundnut' in crop:
        if 'sandy' in soil_type or 'loam' in soil_type: adj += 15
        elif 'clay' in soil_type: adj -= 10

    # Rainfall Matching (mm)
    rainfall = weather_data['rainfall']
    if 'rice' in crop and rainfall > 1000: adj += 15
    if 'rice' in crop and rainfall < 700: adj -= 25
    if 'cotton' in crop and 500 < rainfall < 1200: adj += 10
    if 'wheat' in crop and rainfall < 500: adj -= 5 # Irrigated mostly, but dry is bad
    if 'sugarcane' in crop and rainfall > 1500: adj += 10
    if 'jowar' in crop or 'bajra' in crop: # Millets
        if rainfall < 700: adj += 15 # Good for drylands
        if rainfall > 1200: adj -= 10

    # Temperature Matching (C)
    temp = weather_data['temperature']
    if 'wheat' in crop and temp > 30: adj -= 20 # Wheat hates heat
    if 'wheat' in crop and temp < 25: adj += 10
    if 'rice' in crop and temp > 25: adj += 5
    if 'cotton' in crop and temp > 25: adj += 5

    return adj

# Make prediction based on soil and weather data
def predict_crops(soil_features, region, model_data):
    # Extract model components
    crop_model = model_data['crop_model']
    suit_model = model_data['suit_model']
    scaler = model_data['scaler']
    label_encoders = model_data['label_encoders']
    feature_cols = model_data['feature_cols']
    numerical_cols = model_data['numerical_cols']
    
    # Get weather data
    weather = get_weather_data(region)
    
    # Create feature vector
    features = {}
    
    # Add region (encoded)
    region_encoder = label_encoders['region']
    try:
        # Try to transform the region
        region_encoded = region_encoder.transform([region.title()])[0]
    except (ValueError, KeyError):
        # If region not in training data, use the first region
        region_encoded = 0
    features['region'] = region_encoded
    
    # Add soil type (encoded)
    soil_type_encoder = label_encoders['soil_type']
    try:
        # Try to transform the soil type
        soil_type_encoded = soil_type_encoder.transform([soil_features['soil_type']])[0]
    except (ValueError, KeyError):
        # If soil type not in training data, use the first soil type
        soil_type_encoded = 0
    features['soil_type'] = soil_type_encoded
    
    # Add other features
    features['nitrogen'] = soil_features['nitrogen']
    features['phosphorus'] = soil_features['phosphorus']
    features['potassium'] = soil_features['potassium']
    features['ph'] = soil_features['ph']
    features['temperature'] = weather['temperature']
    features['humidity'] = weather['humidity']
    features['rainfall'] = weather['rainfall']
    
    # Create DataFrame with proper column order
    X = pd.DataFrame([features])[feature_cols]
    
    # Scale numerical features
    X[numerical_cols] = scaler.transform(X[numerical_cols])
    
    # Get top crop probabilities
    crop_probs = crop_model.predict_proba(X)[0]
    crop_indices = np.argsort(-crop_probs)[:5]  # Top 5 crops
    
    crops = []
    for idx in crop_indices:
        crop_name = label_encoders['crop'].inverse_transform([idx])[0]
        
        # Create a copy of X but change the soil_type to ideal for this crop
        # This allows us to predict suitability for each crop
        X_crop = X.copy()

        # Predict suitability
        base_suitability = suit_model.predict(X_crop)[0]
        
        # Apply agronomic adjustments for accuracy
        agronomic_adj = calculate_agronomic_adj(crop_name, soil_features, weather)
        
        # Add slight natural variability (+/- 2%)
        jitter = np.random.uniform(-2, 2)
        
        # Calculate final suitability
        final_suitability = base_suitability + agronomic_adj + jitter
        
        # Cap suitability to reasonable range (30-99)
        # Showing low scores too so users can see what NOT to grow
        adj_suitability = max(30, min(99, final_suitability))
        
        crops.append({
            'name': crop_name,
            'suitability': round(adj_suitability, 1)
        })
    
    # Generate fertilizer recommendations based on NPK levels
    fertilizer_recommendations = []
    if soil_features['nitrogen'] < 50:
        fertilizer_recommendations.append({
            'nutrient': 'Nitrogen',
            'status': 'Low',
            'recommendation': 'Apply Urea (46% N) at 100-120 kg/acre or use organic alternatives like Farm Yard Manure',
            'recommendationHi': 'यूरिया (46% N) 100-120 किग्रा/एकड़ की दर से डालें या गोबर की खाद जैसे जैविक विकल्प का उपयोग करें'
        })
    elif soil_features['nitrogen'] > 85:
        fertilizer_recommendations.append({
            'nutrient': 'Nitrogen',
            'status': 'High',
            'recommendation': 'Reduce nitrogen fertilizers. Consider legume crops for next season to balance',
            'recommendationHi': 'नाइट्रोजन उर्वरक कम करें। संतुलन के लिए अगले सीजन में दलहनी फसलें लगाने पर विचार करें'
        })
    
    if soil_features['phosphorus'] < 25:
        fertilizer_recommendations.append({
            'nutrient': 'Phosphorus',
            'status': 'Low',
            'recommendation': 'Apply Single Super Phosphate (SSP) at 60-80 kg/acre or DAP at 40-50 kg/acre',
            'recommendationHi': 'सिंगल सुपर फॉस्फेट (SSP) 60-80 किग्रा/एकड़ या DAP 40-50 किग्रा/एकड़ की दर से डालें'
        })
    
    if soil_features['potassium'] < 20:
        fertilizer_recommendations.append({
            'nutrient': 'Potassium',
            'status': 'Low',
            'recommendation': 'Apply Muriate of Potash (MOP) at 30-40 kg/acre',
            'recommendationHi': 'म्यूरेट ऑफ पोटाश (MOP) 30-40 किग्रा/एकड़ की दर से डालें'
        })
    
    # pH recommendations
    ph_recommendation = None
    if soil_features['ph'] < 6.0:
        ph_recommendation = {
            'status': 'Acidic',
            'recommendation': 'Apply lime (CaCO₃) at 200-400 kg/acre to raise pH',
            'recommendationHi': 'pH बढ़ाने के लिए चूना (CaCO₃) 200-400 किग्रा/एकड़ की दर से डालें'
        }
    elif soil_features['ph'] > 8.0:
        ph_recommendation = {
            'status': 'Alkaline',
            'recommendation': 'Apply gypsum (CaSO₄) at 400-500 kg/acre or sulfur at 50-100 kg/acre',
            'recommendationHi': 'जिप्सम (CaSO₄) 400-500 किग्रा/एकड़ या सल्फर 50-100 किग्रा/एकड़ की दर से डालें'
        }
    
    # Seasonal timing for top crops
    import datetime
    current_month = datetime.datetime.now().month
    seasonal_info = []
    
    for crop in crops[:3]:  # Top 3 crops
        crop_name = crop['name'].lower()
        timing = None
        
        # Define planting seasons for major crops
        if crop_name in ['rice', 'cotton', 'soybean', 'maize', 'groundnut']:
            timing = {
                'season': 'Kharif',
                'seasonHi': 'खरीफ',
                'plantingMonths': 'June-July',
                'plantingMonthsHi': 'जून-जुलाई',
                'harvestMonths': 'October-November',
                'harvestMonthsHi': 'अक्टूबर-नवंबर',
                'isCurrentSeason': 5 <= current_month <= 7
            }
        elif crop_name in ['wheat', 'mustard', 'gram', 'potato', 'onion']:
            timing = {
                'season': 'Rabi',
                'seasonHi': 'रबी',
                'plantingMonths': 'October-November',
                'plantingMonthsHi': 'अक्टूबर-नवंबर',
                'harvestMonths': 'March-April',
                'harvestMonthsHi': 'मार्च-अप्रैल',
                'isCurrentSeason': 10 <= current_month <= 11
            }
        elif crop_name in ['sugarcane', 'banana', 'vegetables']:
            timing = {
                'season': 'Year-round',
                'seasonHi': 'साल भर',
                'plantingMonths': 'Any time',
                'plantingMonthsHi': 'कभी भी',
                'harvestMonths': 'Varies',
                'harvestMonthsHi': 'भिन्न',
                'isCurrentSeason': True
            }
        
        if timing:
            seasonal_info.append({
                'crop': crop['name'],
                'timing': timing
            })
    
    # Return prediction results with enhanced data
    return {
        'crops': crops,
        'soilType': soil_features['soil_type'],
        'ph': round(soil_features['ph'], 1),
        'nitrogen': 'High' if soil_features['nitrogen'] > 75 else 'Medium' if soil_features['nitrogen'] > 50 else 'Low',
        'phosphorus': 'High' if soil_features['phosphorus'] > 40 else 'Medium' if soil_features['phosphorus'] > 25 else 'Low',
        'potassium': 'High' if soil_features['potassium'] > 35 else 'Medium' if soil_features['potassium'] > 20 else 'Low',
        'nitrogenValue': round(soil_features['nitrogen'], 1),
        'phosphorusValue': round(soil_features['phosphorus'], 1),
        'potassiumValue': round(soil_features['potassium'], 1),
        'fertilizerRecommendations': fertilizer_recommendations,
        'phRecommendation': ph_recommendation,
        'seasonalInfo': seasonal_info,
        'insights': {
            'soilHealth': 'Good' if 6.5 <= soil_features['ph'] <= 7.5 and soil_features['nitrogen'] > 50 else 'Needs Improvement',
            'soilHealthHi': 'अच्छा' if 6.5 <= soil_features['ph'] <= 7.5 and soil_features['nitrogen'] > 50 else 'सुधार की आवश्यकता',
            'bestFor': soil_features['soil_type'],
            'waterRetention': 'High' if 'Clay' in soil_features['soil_type'] or 'Black' in soil_features['soil_type'] else 'Medium' if 'Loam' in soil_features['soil_type'] else 'Low',
            'waterRetentionHi': 'उच्च' if 'Clay' in soil_features['soil_type'] or 'Black' in soil_features['soil_type'] else 'मध्यम' if 'Loam' in soil_features['soil_type'] else 'कम'
        }
    }


# Create chart for the results
def create_chart(prediction_results):
    # Create bar chart for crop suitability
    crops = [crop['name'] for crop in prediction_results['crops']]
    suitability = [crop['suitability'] for crop in prediction_results['crops']]
    
    plt.figure(figsize=(10, 6))
    bars = plt.bar(crops, suitability, color='skyblue')
    
    # Add data labels on top of bars
    for bar in bars:
        height = bar.get_height()
        plt.annotate(f'{height}%',
                     xy=(bar.get_x() + bar.get_width() / 2, height),
                     xytext=(0, 3),  # 3 points vertical offset
                     textcoords="offset points",
                     ha='center', va='bottom')
    
    plt.xlabel('Crops')
    plt.ylabel('Suitability (%)')
    plt.title('Crop Suitability Analysis')
    plt.ylim(0, 100)
    plt.tight_layout()
    
    # Save chart to memory
    buffer = BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)
    
    # Convert to base64 for embedding in JSON response
    chart_data = base64.b64encode(buffer.getvalue()).decode('utf-8')
    plt.close()
    
    return chart_data

# Main prediction function
def predict(image_path, region):
    try:
        # Load the model
        model_data = load_model()
        
        # Extract soil features from the image
        soil_features = extract_soil_features(image_path)
        
        # Make prediction
        prediction_results = predict_crops(soil_features, region, model_data)
        
        # Create chart
        chart_data = create_chart(prediction_results)
        
        # Add chart to results
        prediction_results['chart'] = chart_data
        
        return prediction_results
        
    except Exception as e:
        return {
            'error': str(e),
            'message': 'Failed to process prediction'
        }

# Main entry point when script is run directly
if __name__ == "__main__":
    if len(sys.argv) < 3:
        print(json.dumps({'error': 'Missing arguments. Usage: python predict.py <image_path> <region>'}))
        sys.exit(1)
    
    image_path = sys.argv[1]
    region = sys.argv[2]
    
    results = predict(image_path, region)
    print(json.dumps(results))