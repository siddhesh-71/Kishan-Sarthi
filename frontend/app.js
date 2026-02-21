const API_URL = 'http://localhost:5000';

// State
let currentLang = 'en';
let currentTheme = 'light';
let selectedFile = null;

// Translation Dictionary
const i18n = {
    'en': {
        'nav-brand': 'KishanSarthi',
        'nav-features': 'Features',
        'nav-schemes': 'Schemes',
        'nav-guidance': 'Guidance',
        'nav-community': 'Community',
        'nav-contact': 'Contact',
        'nav-login': 'Login',
        'nav-signup': 'Sign Up',
        'hero-tag': "India's Premier Agricultural Platform",
        'hero-title': 'Empowering Indian Farmers with <span>Smart Technology</span>',
        'hero-sub': 'Access government schemes, expert farming guidance, weather insights, and connect with a community of agricultural experts and fellow farmers.',
        'hero-cta-main': 'Get Started',
        'hero-cta-demo': 'Watch Demo',
        'hero-cta-login': 'Login',
        'hero-stat-1': 'Available in 12+ Languages',
        'hero-stat-2': 'Completely Free Platform',
        'hero-stat-3': '24/7 Support Available',
        'hero-impact': 'in average farm yield',
        'services-title': 'Specialized Agricultural Services',
        'services-sub': 'Tailored solutions to meet the unique needs of every Indian farmer',
        'svc-1-title': 'Government Schemes',
        'svc-1-desc': 'Access centralized information about all agricultural subsidies and financial support.',
        'svc-1-f1': 'Eligibility checker for 200+ schemes',
        'svc-1-f2': 'Application assistance & tracking',
        'svc-2-title': 'Agricultural Policies',
        'svc-2-desc': 'Stay updated with the latest agricultural laws and policies that affect your farm.',
        'svc-2-f1': 'Simplified legal explanations',
        'svc-2-f2': 'Impact analysis for your region',
        'svc-3-title': 'Smart Farming Guidance',
        'svc-3-desc': 'Get personalized recommendations for crop selection and sustainable practices.',
        'svc-3-f1': 'Soil health & rotation advice',
        'svc-3-f2': 'Seasonal planting calendars',
        'svc-4-title': 'Digital Tools',
        'svc-4-desc': 'Access modern technological tools designed specifically for Indian agriculture.',
        'svc-4-f1': 'Weather forecasting & alerts',
        'svc-4-f2': 'Crop disease identification',
        'svc-5-title': 'Farmer Community',
        'svc-5-desc': 'Connect with fellow farmers and agricultural experts locally and nationally.',
        'svc-5-f1': 'Regional farming groups',
        'svc-5-f2': 'Expert Q&A sessions',
        'svc-6-title': 'Market Intelligence',
        'svc-6-desc': 'Real-time market price data and demand forecasts for your crops.',
        'svc-6-f1': 'Local Mandi price tracking',
        'svc-6-f2': 'Direct buyer connections',
        'learn-more': 'Learn more',
        'features-title': 'Smart Soil Analysis',
        'features-sub': 'Standard soil analysis machine learning model for Indian agriculture',
        'upload-title': 'Upload Soil Image',
        'upload-sub': 'Drag and drop your soil image to analyze',
        'select-region': 'Select Your Region',
        'btn-analyze': 'Analyze Soil Composition',
        'loading-text': 'AI is analyzing soil color and texture...',
        'schemes-title': 'Government Schemes & Policies',
        'schemes-sub': 'Access information about agricultural subsidies and funding programs.',
        'search-title': "Find Schemes You're Eligible For",
        'search-placeholder': 'Search for schemes, subsidies...',
        'filter-cat': 'Category',
        'filter-state': 'State/Central',
        'opt-all': 'All',
        'opt-finance': 'Financial Support',
        'opt-insure': 'Insurance',
        'opt-central': 'Central Govt',
        'opt-state': 'Maharashtra State',
        'btn-search': 'Search Schemes',
        'laws-title': 'Farmer Laws & Rights',
        'laws-sub': 'Essential legal guidance and protections for every Indian farmer',
        'testi-title': 'Real Farmers, Real Results',
        'testi-sub': 'Hear from farmers across India who have transformed their practices using KishanSarthi.',
        'user-1-role': 'Wheat & Rice Farmer, Punjab',
        'user-2-role': 'Cotton Farmer, Maharashtra',
        'user-3-role': 'Millet Farmer, Rajasthan',
        'testi-1': '"KishanSarthi helped me access PM-KISAN benefits I didn\'t know I was eligible for. My income increased by ₹40,000 in just one season!"',
        'testi-2': '"The smart soil analysis tool recommended a specific crop rotation that saved my harvest during unexpected rains. Truly a life-saver."',
        'testi-3': '"Connecting with experts through the community forum allowed me to implement organic farming techniques that reduced my input costs by 30%."',
        'cta-title': 'Ready to Transform Your Farming?',
        'cta-sub': 'Join 50,000+ farmers who are already using our platform to increase productivity and income.',
        'btn-join': 'Get Started Now',
        'btn-callback': 'Request Call Back',
        'footer-desc': 'Bridging the gap between traditional farming wisdom and modern technology to create a sustainable agricultural ecosystem.',
        'footer-links-h': 'Quick Links',
        'footer-support-h': 'Support',
        'footer-contact-h': 'Contact Us',
        'sup-1': 'Help Center',
        'sup-2': 'FAQs',
        'sup-3': 'Report an Issue',
        'sup-4': 'Privacy Policy',
        'reg-pune': 'Pune',
        'reg-mumbai': 'Mumbai',
        'reg-nagpur': 'Nagpur',
        'reg-nashik': 'Nashik',
        'reg-aurangabad': 'Aurangabad',
        'schemes-tag': 'Central & State Initiatives',
        'policies-tag': 'Legal & Regulations',
        'guidance-tag': 'Expert Farming Advice',
        'tools-tag': 'Agri-Tech Solutions',
        'community-tag': 'Farmer Forums & Experts',
        'market-tag': 'Real-time Mandi Prices',
        'analysis-tag': 'AI-Powered Forecasting',
        'legal-help-title': 'Need Legal Assistance?',
        'legal-help-sub': 'Connect with agricultural legal experts for personalized advice on land disputes or trade issues.',
        'btn-legal-consult': 'Talk to an Expert',
        'guide-1-title': 'Crop Rotation Strategies',
        'guide-1-desc': 'Optimize your soil health by alternating crops across seasons.',
        'guide-2-title': 'Precision Irrigation',
        'guide-2-desc': 'Reduce water waste while increasing yields with drip technology.',
        'guide-3-title': 'Organic Transition',
        'guide-3-desc': 'Switching to chemical-free farming? Start with our 5-step checklist.',
        'tool-1-title': 'Hyper-local Weather',
        'tool-1-desc': 'Get precision forecasts for your specific village and field.',
        'tool-2-title': 'Pest Identification',
        'tool-2-desc': 'Upload a photo of your crop to identify pests and diseases instantly.',
        'tool-3-title': 'Profit Calculator',
        'tool-3-desc': 'Estimate your seasonal earnings based on current market trends.',
        'btn-open-tool': 'Open Tool',
        'forum-1-title': 'Regional Wheat Growing',
        'forum-1-desc': 'Discuss challenges and tips for wheat farming in North India.',
        'forum-2-title': 'Ask an Agronomist',
        'forum-2-desc': 'Get your technical farming questions answered by professionals.',
        'btn-join-forum': 'Join Discussion',
        'btn-check-prices': 'Check Prices',
        'btn-view-buyers': 'View Buyers',
        'nav-home': 'Home',
        'nav-policies': 'Policies',
        'nav-tools': 'Tools',
        'nav-market': 'Market',
        'current-weather': 'Current Weather',
        'n-name': 'Nitrogen',
        'p-name': 'Phosphorus',
        'k-name': 'Potassium',
        'status-high': 'High',
        'status-medium': 'Medium',
        'status-low': 'Low'
    },
    'hi': {
        'nav-brand': 'किसान सारथी',
        'nav-features': 'सुविधाएं',
        'nav-schemes': 'योजनाएं',
        'nav-guidance': 'मार्गदर्शन',
        'nav-community': 'समुदाय',
        'nav-contact': 'संपर्क',
        'nav-login': 'लॉगिन',
        'nav-signup': 'साइन अप',
        'hero-tag': "भारत का प्रमुख कृषि मंच",
        'hero-title': 'स्मार्ट तकनीक के साथ भारतीय <span>किसानों का सशक्तीकरण</span>',
        'hero-sub': 'सरकारी योजनाओं, विशेषज्ञ खेती मार्गदर्शन, मौसम संबंधी जानकारी तक पहुँचें और कृषि विशेषज्ञों और साथी किसानों के समुदाय से जुड़ें।',
        'hero-cta-main': 'शुरू करें',
        'hero-cta-demo': 'डेमो देखें',
        'hero-cta-login': 'लॉगिन',
        'hero-stat-1': '12+ भाषाओं में उपलब्ध',
        'hero-stat-2': 'पूरी तरह से मुफ्त मंच',
        'hero-stat-3': '24/7 सहायता उपलब्ध',
        'hero-impact': 'औसत कृषि उपज में वृद्धि',
        'services-title': 'विशिष्ट कृषि सेवाएं',
        'services-sub': 'प्रत्येक भारतीय किसान की अद्वितीय आवश्यकताओं को पूरा करने के लिए तैयार समाधान',
        'svc-1-title': 'सरकारी योजनाएं',
        'svc-1-desc': 'सभी कृषि सब्सिडी और वित्तीय सहायता के बारे में केंद्रीकृत जानकारी तक पहुँचें।',
        'svc-1-f1': '200+ योजनाओं के लिए पात्रता जांचकर्ता',
        'svc-1-f2': 'आवेदन सहायता और ट्रैकिंग',
        'svc-2-title': 'कृषि नीतियां',
        'svc-2-desc': 'नवीनतम कृषि कानूनों और नीतियों के साथ अपडेट रहें जो आपके खेत को प्रभावित करते हैं।',
        'svc-2-f1': 'सरलीकृत कानूनी स्पष्टीकरण',
        'svc-2-f2': 'आपके क्षेत्र के लिए प्रभाव विश्लेषण',
        'svc-3-title': 'स्मार्ट खेती मार्गदर्शन',
        'svc-3-desc': 'फसल चयन और टिकाऊ प्रथाओं के लिए व्यक्तिगत सिफारिशें प्राप्त करें।',
        'svc-3-f1': 'मिट्टी स्वास्थ्य और रोटेशन सलाह',
        'svc-3-f2': 'मौसमी रोपण कैलेंडर',
        'svc-4-title': 'डिजिटल उपकरण',
        'svc-4-desc': 'विशेष रूप से भारतीय कृषि के लिए डिज़ाइन किए गए आधुनिक तकनीकी उपकरणों तक पहुँचें।',
        'svc-4-f1': 'मौसम पूर्वानुमान और सतर्कताएं',
        'svc-4-f2': 'फसल रोग पहचान',
        'svc-5-title': 'किसान समुदाय',
        'svc-5-desc': 'स्थानीय और राष्ट्रीय स्तर पर साथी किसानों और कृषि विशेषज्ञों से जुड़ें।',
        'svc-5-f1': 'क्षेत्रीय कृषि समूह',
        'svc-5-f2': 'विशेषज्ञ प्रश्नोत्तर सत्र',
        'svc-6-title': 'बाजार बुद्धिमत्ता',
        'svc-6-desc': 'अपनी फसलों के लिए वास्तविक समय के बाजार मूल्य डेटा और मांग पूर्वानुमान।',
        'svc-6-f1': 'स्थानीय मंडी मूल्य ट्रैकिंग',
        'svc-6-f2': 'सीधे खरीदार कनेक्शन',
        'learn-more': 'अधिक जानें',
        'features-title': 'स्मार्ट मिट्टी विश्लेषण',
        'features-sub': 'भारतीय कृषि के लिए मानक मिट्टी विश्लेषण मशीन लर्निंग मॉडल',
        'upload-title': 'मिट्टी का फोटो अपलोड करें',
        'upload-sub': 'विश्लेषण करने के लिए अपनी मिट्टी की छवि खींचें या चुनें',
        'select-region': 'अपना क्षेत्र चुनें',
        'btn-analyze': 'मिट्टी संरचना का विश्लेषण करें',
        'loading-text': 'एआई मिट्टी के रंग और बनावट का विश्लेषण कर रहा है...',
        'schemes-title': 'सरकारी योजनाएं और नीतियां',
        'schemes-sub': 'कृषि सब्सिडी और वित्त पोषण कार्यक्रमों के बारे में जानकारी प्राप्त करें।',
        'search-title': 'उन योजनाओं को खोजें जिनके लिए आप पात्र हैं',
        'search-placeholder': 'योजनाओं, सब्सिडी की खोज करें...',
        'filter-cat': 'श्रेणी',
        'filter-state': 'राज्य/केंद्र',
        'opt-all': 'सभी',
        'opt-finance': 'वित्तीय सहायता',
        'opt-insure': 'बीमा',
        'opt-central': 'केंद्र सरकार',
        'opt-state': 'महाराष्ट्र राज्य',
        'btn-search': 'योजनाएं खोजें',
        'laws-title': 'किसान कानून और अधिकार',
        'laws-sub': 'प्रत्येक भारतीय किसान के लिए आवश्यक कानूनी मार्गदर्शन और सुरक्षा',
        'testi-title': 'असली किसान, असली परिणाम',
        'testi-sub': 'भारत भर के उन किसानों से सुनें जिन्होंने किसान सारथी का उपयोग करके अपनी कृषि प्रथाओं को बदल दिया है।',
        'user-1-role': 'गेहूं और चावल किसान, पंजाब',
        'user-2-role': 'कपास किसान, महाराष्ट्र',
        'user-3-role': 'बाजरा किसान, राजस्थान',
        'testi-1': '"किसान सारथी ने मुझे उन पीएम-किसान लाभों तक पहुँचने में मदद की जिनके बारे में मुझे पता नहीं था कि मैं पात्र हूँ। मेरी आय सिर्फ एक सीजन में ₹40,000 बढ़ गई!"',
        'testi-2': '"स्मार्ट मिट्टी विश्लेषण उपकरण ने एक विशिष्ट फसल रोटेशन की सिफारिश की जिसने अप्रत्याशित बारिश के दौरान मेरी फसल को बचा लिया। वास्तव में एक जीवन रक्षक।"',
        'testi-3': '"सामुदायिक मंच के माध्यम से विशेषज्ञों से जुड़ने से मुझे जैविक खेती तकनीकों को लागू करने की अनुमति मिली जिसने मेरी लागत को 30% कम कर दिया।"',
        'cta-title': 'क्या आप अपनी खेती बदलने के लिए तैयार हैं?',
        'cta-sub': '50,000+ किसानों से जुड़ें जो उत्पादकता और आय बढ़ाने के लिए पहले से ही हमारे मंच का उपयोग कर रहे हैं।',
        'btn-join': 'अभी शुरू करें',
        'btn-callback': 'कॉल बैक का अनुरोध करें',
        'footer-desc': 'एक टिकाऊ कृषि पारिस्थितिकी तंत्र बनाने के लिए पारंपरिक खेती के ज्ञान और आधुनिक तकनीक के बीच की खाई को पाटना।',
        'footer-links-h': 'त्वरित लिंक',
        'footer-support-h': 'सहायता',
        'footer-contact-h': 'संपर्क करें',
        'sup-1': 'हेल्प सेंटर',
        'sup-2': 'अक्सर पूछे जाने वाले प्रश्न',
        'sup-3': 'समस्या की रिपोर्ट करें',
        'sup-4': 'गोपनीयता नीति',
        'reg-pune': 'पुणे',
        'reg-mumbai': 'मुंबई',
        'reg-nagpur': 'नागपूर',
        'reg-nashik': 'नाशिक',
        'reg-aurangabad': 'छत्रपती संभाजीनगर',
        'schemes-tag': 'केंद्रीय और राज्य पहल',
        'policies-tag': 'कानूनी और विनियम',
        'guidance-tag': 'विशेषज्ञ कृषि सलाह',
        'tools-tag': 'कृषि-तकनीक समाधान',
        'community-tag': 'किसान मंच और विशेषज्ञ',
        'market-tag': 'वास्तविक समय मंडी मूल्य',
        'analysis-tag': 'एआई-आधारित पूर्वानुमान',
        'legal-help-title': 'कानूनी सहायता चाहिए?',
        'legal-help-sub': 'भूमि विवादों या व्यापार मुद्दों पर व्यक्तिगत सलाह के लिए कृषि कानूनी विशेषज्ञों से जुड़ें।',
        'btn-legal-consult': 'विशेषज्ञ से बात करें',
        'guide-1-title': 'फसल चक्र रणनीतियाँ',
        'guide-1-desc': 'मौसमों में फसलों को बारी-बारी से बदलकर अपनी मिट्टी के स्वास्थ्य को अनुकूलित करें।',
        'guide-2-title': 'सटीक सिंचाई',
        'guide-2-desc': 'ड्रिप तकनीक के साथ पैदावार बढ़ाते हुए पानी की बर्बादी कम करें।',
        'guide-3-title': 'जैविक परिवर्तन',
        'guide-3-desc': 'रसायन मुक्त खेती की ओर बढ़ रहे हैं? हमारी 5-चरणीय चेकलिस्ट के साथ शुरू करें।',
        'tool-1-title': 'हाइपर-लोकल मौसम',
        'tool-1-desc': 'अपने विशिष्ट गांव और खेत के लिए सटीक पूर्वानुमान प्राप्त करें।',
        'tool-2-title': 'कीट पहचान',
        'tool-2-desc': 'कीटों और रोगों की तुरंत पहचान करने के लिए अपनी फसल की फोटो अपलोड करें।',
        'tool-3-title': 'लाभ कैलकुलेटर',
        'tool-3-desc': 'वर्तमान बाजार प्रवृत्तियों के आधार पर अपनी मौसमी कमाई का अनुमान लगाएं।',
        'btn-open-tool': 'टूल खोलें',
        'forum-1-title': 'क्षेत्रीय गेहूं की खेती',
        'forum-1-desc': 'उत्तर भारत में गेहूं की खेती के लिए चुनौतियों और सुझावों पर चर्चा करें।',
        'forum-2-title': 'कृषि विज्ञानी से पूछें',
        'forum-2-desc': 'प्रमाणित पेशेवरों द्वारा अपने तकनीकी कृषि प्रश्नों के उत्तर प्राप्त करें।',
        'btn-join-forum': 'चर्चा में शामिल हों',
        'btn-check-prices': 'कीमतें जांचें',
        'btn-view-buyers': 'खरीदार देखें',
        'nav-home': 'होम',
        'nav-policies': 'नीतियां',
        'nav-tools': 'उपकरण',
        'nav-market': 'बाजार',
        'current-weather': 'वर्तमान मौसम',
        'n-name': 'नाइट्रोजन',
        'p-name': 'फॉस्फोरस',
        'k-name': 'पोटैशियम',
        'status-high': 'उच्च',
        'status-medium': 'मध्यम',
        'status-low': 'काम'
    }
};

// --- Core Initialization ---
function init() {
    console.log("Initializing KishanSarthi App...");
    loadSettings();
    setupToggles();
    setupPrediction();
    setupWaterCalculator(); // Add Water Calculator Setup
    initCommunity(); // Initialize Community Page
    setupNavigation();
    setupSchemeFilters();
    setupPolicyFilters();
    setupGuidanceFilters();
    checkStatus();
    // updateTranslations will handle renderContent/renderLaws/renderSchemes/renderGuidance
    updateTranslations();
}

// Ensure init runs when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // If DOM already loaded, run immediately
    init();
}

function loadSettings() {
    const savedLang = localStorage.getItem('kishanSarthiLang');
    const savedTheme = localStorage.getItem('kishanSarthiTheme');
    if (savedLang) currentLang = savedLang;
    if (savedTheme) {
        currentTheme = savedTheme;
        document.documentElement.setAttribute('data-theme', currentTheme);
    }
}

function renderContent() {
    // This is now redundant as updateTranslations calls renderLaws/renderSchemes
}

function setupNavigation() {
    const getStartedBtn = document.getElementById('btn-get-started');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', () => {
            document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
        });
    }

    document.querySelectorAll('.nav-links a, .footer-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetEl = document.querySelector(targetId);
                if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// --- Toggles (Theme & Language) ---
function setupToggles() {
    const themeBtn = document.getElementById('theme-toggle');
    const langBtn = document.getElementById('lang-toggle');

    if (themeBtn) {
        updateThemeUI();
        themeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("Theme toggle clicked");
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', currentTheme);
            saveSettings();
            updateThemeUI();
        });
    }

    if (langBtn) {
        updateLangUI();
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("Language toggle clicked");
            currentLang = currentLang === 'en' ? 'hi' : 'en';
            saveSettings();
            updateLangUI();
            updateTranslations();
        });
    }
}

function updateThemeUI() {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return;

    // Update data-theme on html element
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Update button icon
    const iconName = currentTheme === 'light' ? 'moon' : 'sun';
    themeBtn.innerHTML = `<i data-lucide="${iconName}"></i>`;
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function updateLangUI() {
    const langBtn = document.getElementById('lang-toggle');
    if (!langBtn) return;

    // Update html lang attribute
    document.documentElement.lang = currentLang;

    // Update button content
    const nextLang = currentLang === 'en' ? 'HI' : 'EN';
    langBtn.innerHTML = `
        <i data-lucide="languages"></i>
        <span id="lang-text" style="font-size: 0.8rem; margin-left: 4px;">${nextLang}</span>
    `;
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function saveSettings() {
    try {
        localStorage.setItem('kishanSarthiLang', currentLang);
        localStorage.setItem('kishanSarthiTheme', currentTheme);
    } catch (e) {
        console.warn("Could not save settings to localStorage:", e);
    }
}

function updateTranslations() {
    console.log(`Applying translations for language: ${currentLang}`);
    if (!i18n[currentLang]) {
        console.error(`Missing dictionary for language: ${currentLang}`);
        return;
    }

    // Standard text content
    const elements = document.querySelectorAll('[data-i18n]');
    console.log(`Found ${elements.length} elements to translate`);

    elements.forEach(el => {
        try {
            const key = el.getAttribute('data-i18n');
            if (i18n[currentLang][key]) {
                el.innerHTML = i18n[currentLang][key];
            } else {
                console.warn(`Missing translation key: "${key}" for language: "${currentLang}"`);
            }
        } catch (e) {
            console.error("Error translating element:", el, e);
        }
    });

    // Attributes (like placeholders)
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
        try {
            const attrMap = el.getAttribute('data-i18n-attr');
            const [attr, key] = attrMap.split(':');
            if (i18n[currentLang][key]) {
                el.setAttribute(attr, i18n[currentLang][key]);
            }
        } catch (e) {
            console.error("Error translating attribute:", el, e);
        }
    });

    // Re-render dynamic lists
    try {
        renderLaws();
        renderSchemes();
        renderGuidance();
    } catch (e) {
        console.error("Error rendering dynamic content:", e);
    }

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// --- Content Rendering ---
// Comprehensive Agricultural Policies Database
const policiesDatabase = [
    {
        id: 1,
        category: 'Price Support',
        categoryHi: 'मूल्य समर्थन',
        type: 'Central',
        typeHi: 'केंद्रीय',
        title: 'Minimum Support Price (MSP) Policy',
        titleHi: 'न्यूनतम समर्थन मूल्य (एमएसपी) नीति',
        desc: 'Government-announced minimum prices for major agricultural commodities to protect farmers from price fluctuations.',
        descHi: 'किसानों को मूल्य उतार-चढ़ाव से बचाने के लिए प्रमुख कृषि वस्तुओं के लिए सरकार द्वारा घोषित न्यूनतम मूल्य।',
        provisions: ['Covers 23 crops including wheat, rice, pulses', 'Based on cost of production + profit margin', 'Announced before sowing season'],
        provisionsHi: ['गेहूं, चावल, दालों सहित 23 फसलों को कवर करता है', 'उत्पादन लागत + लाभ मार्जिन पर आधारित', 'बुवाई के मौसम से पहले घोषित'],
        impact: 'Ensures minimum income guarantee for farmers',
        impactHi: 'किसानों के लिए न्यूनतम आय की गारंटी सुनिश्चित करता है',
        icon: 'trending-up',
        link: 'https://agricoop.nic.in/'
    },
    {
        id: 2,
        category: 'Trade & Marketing',
        categoryHi: 'व्यापार और विपणन',
        type: 'State',
        typeHi: 'राज्य',
        title: 'Agricultural Produce Market Committee (APMC) Act',
        titleHi: 'कृषि उपज बाजार समिति (एपीएमसी) अधिनियम',
        desc: 'Regulates the marketing of agricultural produce and establishes market yards for fair trade.',
        descHi: 'कृषि उपज के विपणन को नियंत्रित करता है और निष्पक्ष व्यापार के लिए बाजार यार्ड स्थापित करता है।',
        provisions: ['Regulated market yards (mandis)', 'Licensing of traders and commission agents', 'Quality standards and grading'],
        provisionsHi: ['विनियमित बाजार यार्ड (मंडियां)', 'व्यापारियों और कमीशन एजेंटों का लाइसेंसिंग', 'गुणवत्ता मानक और ग्रेडिंग'],
        impact: 'Provides organized marketplace and prevents exploitation',
        impactHi: 'संगठित बाजार प्रदान करता है और शोषण को रोकता है',
        icon: 'store',
        link: 'https://enam.gov.in/'
    },
    {
        id: 3,
        category: 'Land Rights',
        categoryHi: 'भूमि अधिकार',
        type: 'State',
        typeHi: 'राज्य',
        title: 'Land Ceiling Acts',
        titleHi: 'भूमि सीमा अधिनियम',
        desc: 'Limits the maximum amount of agricultural land that can be owned by an individual or family.',
        descHi: 'किसी व्यक्ति या परिवार के स्वामित्व वाली कृषि भूमि की अधिकतम मात्रा को सीमित करता है।',
        provisions: ['Maximum land holding limits vary by state', 'Surplus land redistribution to landless', 'Exemptions for certain categories'],
        provisionsHi: ['अधिकतम भूमि धारण सीमा राज्य के अनुसार भिन्न होती है', 'भूमिहीनों को अधिशेष भूमि का पुनर्वितरण', 'कुछ श्रेणियों के लिए छूट'],
        impact: 'Promotes equitable land distribution',
        impactHi: 'समान भूमि वितरण को बढ़ावा देता है',
        icon: 'map',
        link: 'https://dolr.gov.in/'
    },
    {
        id: 4,
        category: 'Legal Framework',
        categoryHi: 'कानूनी ढांचा',
        type: 'Central',
        typeHi: 'केंद्रीय',
        title: 'Farmers (Empowerment and Protection) Agreement on Price Assurance and Farm Services Act, 2020',
        titleHi: 'किसान (सशक्तिकरण और संरक्षण) मूल्य आश्वासन और कृषि सेवा समझौता अधिनियम, 2020',
        desc: 'Framework for contract farming with written agreements between farmers and buyers.',
        descHi: 'किसानों और खरीदारों के बीच लिखित समझौतों के साथ अनुबंध खेती के लिए ढांचा।',
        provisions: ['Written farming agreements', 'Price assurance mechanisms', 'Dispute resolution framework'],
        provisionsHi: ['लिखित कृषि समझौते', 'मूल्य आश्वासन तंत्र', 'विवाद समाधान ढांचा'],
        impact: 'Enables direct farmer-buyer engagement',
        impactHi: 'प्रत्यक्ष किसान-खरीदार जुड़ाव को सक्षम बनाता है',
        icon: 'file-text',
        link: 'https://agricoop.nic.in/'
    },
    {
        id: 5,
        category: 'Price Control',
        categoryHi: 'मूल्य नियंत्रण',
        type: 'Central',
        typeHi: 'केंद्रीय',
        title: 'Essential Commodities Act, 1955',
        titleHi: 'आवश्यक वस्तु अधिनियम, 1955',
        desc: 'Regulates production, supply, and distribution of essential commodities to prevent hoarding and black marketing.',
        descHi: 'जमाखोरी और कालाबाजारी को रोकने के लिए आवश्यक वस्तुओं के उत्पादन, आपूर्ति और वितरण को नियंत्रित करता है।',
        provisions: ['Stock limits on essential commodities', 'Price control measures', 'Penalties for hoarding'],
        provisionsHi: ['आवश्यक वस्तुओं पर स्टॉक सीमा', 'मूल्य नियंत्रण उपाय', 'जमाखोरी के लिए दंड'],
        impact: 'Ensures availability and fair pricing of essentials',
        impactHi: 'आवश्यक वस्तुओं की उपलब्धता और उचित मूल्य सुनिश्चित करता है',
        icon: 'shield-check',
        link: 'https://consumeraffairs.nic.in/'
    },
    {
        id: 6,
        category: 'Debt Relief',
        categoryHi: 'ऋण राहत',
        type: 'Central',
        typeHi: 'केंद्रीय',
        title: 'Agricultural Debt Waiver and Debt Relief Scheme',
        titleHi: 'कृषि ऋण माफी और ऋण राहत योजना',
        desc: 'Periodic schemes to waive agricultural loans for small and marginal farmers facing financial distress.',
        descHi: 'वित्तीय संकट का सामना कर रहे छोटे और सीमांत किसानों के लिए कृषि ऋण माफ करने की आवधिक योजनाएं।',
        provisions: ['Complete waiver for small farmers', 'Partial relief for marginal farmers', 'Eligibility based on land holding'],
        provisionsHi: ['छोटे किसानों के लिए पूर्ण माफी', 'सीमांत किसानों के लिए आंशिक राहत', 'भूमि धारण के आधार पर पात्रता'],
        impact: 'Provides financial relief and fresh start',
        impactHi: 'वित्तीय राहत और नई शुरुआत प्रदान करता है',
        icon: 'hand-heart',
        link: 'https://agricoop.nic.in/'
    },
    {
        id: 7,
        category: 'Seed & Variety',
        categoryHi: 'बीज और किस्म',
        type: 'Central',
        typeHi: 'केंद्रीय',
        title: 'Seeds Act, 1966 & Protection of Plant Varieties and Farmers Rights Act, 2001',
        titleHi: 'बीज अधिनियम, 1966 और पौध किस्मों और किसानों के अधिकार संरक्षण अधिनियम, 2001',
        desc: 'Regulates seed quality and protects plant breeders and farmers rights over new varieties.',
        descHi: 'बीज गुणवत्ता को नियंत्रित करता है और नई किस्मों पर पौध प्रजनकों और किसानों के अधिकारों की रक्षा करता है।',
        provisions: ['Seed certification standards', 'Plant variety registration', 'Farmers rights to save and sell seeds'],
        provisionsHi: ['बीज प्रमाणन मानक', 'पौध किस्म पंजीकरण', 'बीज बचाने और बेचने के किसानों के अधिकार'],
        impact: 'Ensures quality seeds and protects traditional knowledge',
        impactHi: 'गुणवत्ता वाले बीज सुनिश्चित करता है और पारंपरिक ज्ञान की रक्षा करता है',
        icon: 'sprout',
        link: 'https://seednet.gov.in/'
    },
    {
        id: 8,
        category: 'Water Management',
        categoryHi: 'जल प्रबंधन',
        type: 'State',
        typeHi: 'राज्य',
        title: 'Irrigation and Water Resource Management Policies',
        titleHi: 'सिंचाई और जल संसाधन प्रबंधन नीतियां',
        desc: 'State-level policies governing water allocation, irrigation infrastructure, and groundwater management.',
        descHi: 'जल आवंटन, सिंचाई बुनियादी ढांचे और भूजल प्रबंधन को नियंत्रित करने वाली राज्य स्तरीय नीतियां।',
        provisions: ['Water allocation priorities', 'Groundwater regulation', 'Irrigation infrastructure development'],
        provisionsHi: ['जल आवंटन प्राथमिकताएं', 'भूजल विनियमन', 'सिंचाई बुनियादी ढांचे का विकास'],
        impact: 'Ensures sustainable water use for agriculture',
        impactHi: 'कृषि के लिए टिकाऊ जल उपयोग सुनिश्चित करता है',
        icon: 'droplet',
        link: 'https://jalshakti-dowr.gov.in/'
    },
    {
        id: 9,
        category: 'Export-Import',
        categoryHi: 'निर्यात-आयात',
        type: 'Central',
        typeHi: 'केंद्रीय',
        title: 'Foreign Trade (Development and Regulation) Act - Agricultural Exports',
        titleHi: 'विदेश व्यापार (विकास और विनियमन) अधिनियम - कृषि निर्यात',
        desc: 'Regulates export and import of agricultural commodities to balance domestic supply and international trade.',
        descHi: 'घरेलू आपूर्ति और अंतर्राष्ट्रीय व्यापार को संतुलित करने के लिए कृषि वस्तुओं के निर्यात और आयात को नियंत्रित करता है।',
        provisions: ['Export quotas and restrictions', 'Import duties and tariffs', 'Quality standards for exports'],
        provisionsHi: ['निर्यात कोटा और प्रतिबंध', 'आयात शुल्क और टैरिफ', 'निर्यात के लिए गुणवत्ता मानक'],
        impact: 'Opens international markets for farmers',
        impactHi: 'किसानों के लिए अंतर्राष्ट्रीय बाजार खोलता है',
        icon: 'globe',
        link: 'https://commerce.gov.in/'
    },
    {
        id: 10,
        category: 'Land Rights',
        categoryHi: 'भूमि अधिकार',
        type: 'Central',
        typeHi: 'केंद्रीय',
        title: 'Digital India Land Records Modernization Programme (DILRMP)',
        titleHi: 'डिजिटल इंडिया भूमि अभिलेख आधुनिकीकरण कार्यक्रम (डीआईएलआरएमपी)',
        desc: 'Digitization of land records for transparent land ownership and easy access to land documents.',
        descHi: 'पारदर्शी भूमि स्वामित्व और भूमि दस्तावेजों तक आसान पहुंच के लिए भूमि अभिलेखों का डिजिटलीकरण।',
        provisions: ['Online land records access', 'Computerized mutation process', 'Integration with other databases'],
        provisionsHi: ['ऑनलाइन भूमि रिकॉर्ड एक्सेस', 'कम्प्यूटरीकृत म्यूटेशन प्रक्रिया', 'अन्य डेटाबेस के साथ एकीकरण'],
        impact: 'Reduces land disputes and corruption',
        impactHi: 'भूमि विवादों और भ्रष्टाचार को कम करता है',
        icon: 'file-check',
        link: 'https://dolr.gov.in/'
    }
];

// Filter and search state for policies
let filteredPolicies = [...policiesDatabase];
let policySearchQuery = '';
let selectedPolicyCategory = 'all';
let selectedPolicyType = 'all';

function renderLaws() {
    const lawsList = document.getElementById('laws-list');
    const policiesList = document.getElementById('policies-list');

    // Support both old laws-list and new policies-list
    const targetList = policiesList || lawsList;
    if (!targetList) return;

    const policies = filteredPolicies.length > 0 ? filteredPolicies : policiesDatabase;

    if (policies.length === 0) {
        targetList.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem;">
                <i data-lucide="search-x" style="width: 64px; height: 64px; color: var(--text-dim); margin-bottom: 1rem;"></i>
                <h3 style="color: var(--text-dim);">${currentLang === 'en' ? 'No policies found' : 'कोई नीति नहीं मिली'}</h3>
                <p style="color: var(--text-dim);">${currentLang === 'en' ? 'Try adjusting your filters' : 'अपने फ़िल्टर समायोजित करने का प्रयास करें'}</p>
            </div>
        `;
        if (typeof lucide !== 'undefined') lucide.createIcons();
        return;
    }

    targetList.innerHTML = policies.map(policy => `
        <div class="policy-card card" data-policy-id="${policy.id}">
            <div class="scheme-header">
                <div class="scheme-icon" style="background: linear-gradient(135deg, #f59e0b, #d97706);">
                    <i data-lucide="${policy.icon}"></i>
                </div>
                <div class="scheme-tags">
                    <span class="hero-tag">${currentLang === 'en' ? policy.category : policy.categoryHi}</span>
                    <span class="scheme-level">${currentLang === 'en' ? policy.type : policy.typeHi}</span>
                </div>
            </div>
            <h3 class="scheme-title">${currentLang === 'en' ? policy.title : policy.titleHi}</h3>
            <p class="scheme-desc">${currentLang === 'en' ? policy.desc : policy.descHi}</p>
            <div class="policy-provisions">
                <h4>${currentLang === 'en' ? 'Key Provisions:' : 'मुख्य प्रावधान:'}</h4>
                <ul>
                    ${(currentLang === 'en' ? policy.provisions : policy.provisionsHi).map(provision => `
                        <li><i data-lucide="check-circle"></i> ${provision}</li>
                    `).join('')}
                </ul>
            </div>
            <div class="policy-impact">
                <strong>${currentLang === 'en' ? 'Impact:' : 'प्रभाव:'}</strong>
                <span>${currentLang === 'en' ? policy.impact : policy.impactHi}</span>
            </div>
            <div class="scheme-actions">
                <a href="${policy.link}" target="_blank" class="primary-btn sm">
                    ${currentLang === 'en' ? 'View Official Document' : 'आधिकारिक दस्तावेज़ देखें'}
                    <i data-lucide="external-link"></i>
                </a>
            </div>
        </div>
    `).join('');

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Comprehensive Government Schemes Database
const schemesDatabase = [
    {
        id: 1,
        category: 'Financial Support',
        categoryHi: 'वित्तीय सहायता',
        level: 'Central',
        levelHi: 'केंद्रीय',
        title: 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
        titleHi: 'पीएम-किसान (प्रधानमंत्री किसान सम्मान निधि)',
        desc: 'Direct income support of ₹6,000 per year in three equal installments to all landholding farmer families.',
        descHi: 'सभी भूमिधारक किसान परिवारों को तीन समान किस्तों में प्रति वर्ष ₹6,000 की प्रत्यक्ष आय सहायता।',
        benefits: ['₹2,000 every 4 months', 'Direct bank transfer', 'No paperwork after registration'],
        benefitsHi: ['हर 4 महीने में ₹2,000', 'सीधे बैंक हस्तांतरण', 'पंजीकरण के बाद कोई कागजी कार्रवाई नहीं'],
        eligibility: 'All landholding farmers (small & marginal)',
        eligibilityHi: 'सभी भूमिधारक किसान (छोटे और सीमांत)',
        icon: 'banknote',
        link: 'https://pmkisan.gov.in/'
    },
    {
        id: 2,
        category: 'Crop Insurance',
        categoryHi: 'फसल बीमा',
        level: 'Central',
        levelHi: 'केंद्रीय',
        title: 'PMFBY (Pradhan Mantri Fasal Bima Yojana)',
        titleHi: 'पीएमएफबीवाई (प्रधानमंत्री फसल बीमा योजना)',
        desc: 'Comprehensive insurance cover against crop loss due to natural calamities, pests & diseases.',
        descHi: 'प्राकृतिक आपदाओं, कीटों और बीमारियों के कारण फसल नुकसान के खिलाफ व्यापक बीमा कवर।',
        benefits: ['2% premium for Kharif crops', '1.5% for Rabi crops', 'Full sum insured for total crop loss'],
        benefitsHi: ['खरीफ फसलों के लिए 2% प्रीमियम', 'रबी के लिए 1.5%', 'कुल फसल नुकसान के लिए पूर्ण बीमित राशि'],
        eligibility: 'All farmers including sharecroppers & tenant farmers',
        eligibilityHi: 'बटाईदार और किरायेदार किसानों सहित सभी किसान',
        icon: 'cloud-rain',
        link: 'https://pmfby.gov.in/'
    },
    {
        id: 3,
        category: 'Credit & Loans',
        categoryHi: 'क्रेडिट और ऋण',
        level: 'Central',
        levelHi: 'केंद्रीय',
        title: 'Kisan Credit Card (KCC)',
        titleHi: 'किसान क्रेडिट कार्ड (केसीसी)',
        desc: 'Short-term credit facility for farmers to meet agricultural expenses at subsidized interest rates.',
        descHi: 'सब्सिडी वाली ब्याज दरों पर कृषि खर्चों को पूरा करने के लिए किसानों के लिए अल्पकालिक ऋण सुविधा।',
        benefits: ['Up to ₹3 lakh at 7% interest', '3% interest subvention', 'Flexible repayment'],
        benefitsHi: ['7% ब्याज पर ₹3 लाख तक', '3% ब्याज सब्सिडी', 'लचीली पुनर्भुगतान'],
        eligibility: 'Farmers with cultivable land',
        eligibilityHi: 'खेती योग्य भूमि वाले किसान',
        icon: 'credit-card',
        link: 'https://www.nabard.org/content1.aspx?id=523'
    },
    {
        id: 4,
        category: 'Irrigation',
        categoryHi: 'सिंचाई',
        level: 'Central',
        levelHi: 'केंद्रीय',
        title: 'PMKSY (Pradhan Mantri Krishi Sinchayee Yojana)',
        titleHi: 'पीएमकेएसवाई (प्रधानमंत्री कृषि सिंचाई योजना)',
        desc: 'Expand cultivable area with assured irrigation and improve water use efficiency through micro-irrigation.',
        descHi: 'सुनिश्चित सिंचाई के साथ खेती योग्य क्षेत्र का विस्तार और सूक्ष्म सिंचाई के माध्यम से जल उपयोग दक्षता में सुधार।',
        benefits: ['Drip/sprinkler subsidy up to 55%', 'Watershed development', 'Water conservation'],
        benefitsHi: ['ड्रिप/स्प्रिंकलर सब्सिडी 55% तक', 'जलसंभर विकास', 'जल संरक्षण'],
        eligibility: 'All categories of farmers',
        eligibilityHi: 'सभी श्रेणियों के किसान',
        icon: 'droplets',
        link: 'https://pmksy.gov.in/'
    },
    {
        id: 5,
        category: 'Organic Farming',
        categoryHi: 'जैविक खेती',
        level: 'Central',
        levelHi: 'केंद्रीय',
        title: 'Paramparagat Krishi Vikas Yojana (PKVY)',
        titleHi: 'परम्परागत कृषि विकास योजना (पीकेवीवाई)',
        desc: 'Promote organic farming and improve soil health through cluster-based approach.',
        descHi: 'समूह-आधारित दृष्टिकोण के माध्यम से जैविक खेती को बढ़ावा देना और मिट्टी के स्वास्थ्य में सुधार करना।',
        benefits: ['₹50,000/ha for 3 years', 'Organic certification support', 'Market linkage'],
        benefitsHi: ['3 साल के लिए ₹50,000/हेक्टेयर', 'जैविक प्रमाणन सहायता', 'बाजार संबंध'],
        eligibility: 'Farmers willing to adopt organic farming',
        eligibilityHi: 'जैविक खेती अपनाने के इच्छुक किसान',
        icon: 'leaf',
        link: 'https://pgsindia-ncof.gov.in/'
    },
    {
        id: 6,
        category: 'Market Access',
        categoryHi: 'बाजार पहुंच',
        level: 'Central',
        levelHi: 'केंद्रीय',
        title: 'e-NAM (National Agriculture Market)',
        titleHi: 'ई-नाम (राष्ट्रीय कृषि बाजार)',
        desc: 'Online trading platform for agricultural commodities across India for better price discovery.',
        descHi: 'बेहतर मूल्य खोज के लिए पूरे भारत में कृषि वस्तुओं के लिए ऑनलाइन ट्रेडिंग प्लेटफॉर्म।',
        benefits: ['Access to 1000+ mandis', 'Transparent pricing', 'Online payment'],
        benefitsHi: ['1000+ मंडियों तक पहुंच', 'पारदर्शी मूल्य निर्धारण', 'ऑनलाइन भुगतान'],
        eligibility: 'All farmers and traders',
        eligibilityHi: 'सभी किसान और व्यापारी',
        icon: 'shopping-cart',
        link: 'https://www.enam.gov.in/'
    },
    {
        id: 7,
        category: 'Pension',
        categoryHi: 'पेंशन',
        level: 'Central',
        levelHi: 'केंद्रीय',
        title: 'PM-KMY (Pradhan Mantri Kisan Maan Dhan Yojana)',
        titleHi: 'पीएम-केएमवाई (प्रधानमंत्री किसान मानधन योजना)',
        desc: 'Old age pension scheme for small and marginal farmers ensuring ₹3,000 monthly pension after 60 years.',
        descHi: 'छोटे और सीमांत किसानों के लिए वृद्धावस्था पेंशन योजना जो 60 वर्ष के बाद ₹3,000 मासिक पेंशन सुनिश्चित करती है।',
        benefits: ['₹3,000/month after 60', 'Minimal contribution (₹55-200/month)', 'Family pension available'],
        benefitsHi: ['60 के बाद ₹3,000/माह', 'न्यूनतम योगदान (₹55-200/माह)', 'पारिवारिक पेंशन उपलब्ध'],
        eligibility: 'Small & marginal farmers (18-40 years)',
        eligibilityHi: 'छोटे और सीमांत किसान (18-40 वर्ष)',
        icon: 'wallet',
        link: 'https://maandhan.in/'
    },
    {
        id: 8,
        category: 'Soil Health',
        categoryHi: 'मिट्टी स्वास्थ्य',
        level: 'Central',
        levelHi: 'केंद्रीय',
        title: 'Soil Health Card Scheme',
        titleHi: 'मृदा स्वास्थ्य कार्ड योजना',
        desc: 'Free soil testing and health cards with nutrient recommendations for optimal crop productivity.',
        descHi: 'इष्टतम फसल उत्पादकता के लिए पोषक तत्व सिफारिशों के साथ मुफ्त मिट्टी परीक्षण और स्वास्थ्य कार्ड।',
        benefits: ['Free soil testing', 'Customized fertilizer recommendations', 'Issued every 2 years'],
        benefitsHi: ['मुफ्त मिट्टी परीक्षण', 'अनुकूलित उर्वरक सिफारिशें', 'हर 2 साल में जारी'],
        eligibility: 'All farmers',
        eligibilityHi: 'सभी किसान',
        icon: 'flask-conical',
        link: 'https://soilhealth.dac.gov.in/'
    },
    {
        id: 9,
        category: 'Mechanization',
        categoryHi: 'यंत्रीकरण',
        level: 'Central',
        levelHi: 'केंद्रीय',
        title: 'Sub-Mission on Agricultural Mechanization (SMAM)',
        titleHi: 'कृषि यंत्रीकरण पर उप-मिशन (एसएमएएम)',
        desc: 'Financial assistance for purchase of agricultural machinery and equipment.',
        descHi: 'कृषि मशीनरी और उपकरण खरीदने के लिए वित्तीय सहायता।',
        benefits: ['40-50% subsidy on equipment', 'Custom Hiring Centers', 'Training support'],
        benefitsHi: ['उपकरण पर 40-50% सब्सिडी', 'कस्टम हायरिंग सेंटर', 'प्रशिक्षण सहायता'],
        eligibility: 'Individual farmers, FPOs, cooperatives',
        eligibilityHi: 'व्यक्तिगत किसान, एफपीओ, सहकारी समितियां',
        icon: 'cog',
        link: 'https://agrimachinery.nic.in/'
    },
    {
        id: 10,
        category: 'Financial Support',
        categoryHi: 'वित्तीय सहायता',
        level: 'State',
        levelHi: 'राज्य',
        title: 'Maharashtra Agri Business Network (MABN)',
        titleHi: 'महाराष्ट्र कृषि व्यवसाय नेटवर्क (एमएबीएन)',
        desc: 'State scheme for promoting agri-entrepreneurship and value addition in Maharashtra.',
        descHi: 'महाराष्ट्र में कृषि उद्यमिता और मूल्य संवर्धन को बढ़ावा देने के लिए राज्य योजना।',
        benefits: ['Subsidy on processing units', 'Marketing support', 'Technical guidance'],
        benefitsHi: ['प्रसंस्करण इकाइयों पर सब्सिडी', 'विपणन सहायता', 'तकनीकी मार्गदर्शन'],
        eligibility: 'Farmers and agri-entrepreneurs in Maharashtra',
        eligibilityHi: 'महाराष्ट्र में किसान और कृषि उद्यमी',
        icon: 'briefcase',
        link: 'https://krishi.maharashtra.gov.in/'
    }
];

// Filter and search state
let filteredSchemes = [...schemesDatabase];
let searchQuery = '';
let selectedCategory = 'all';
let selectedLevel = 'all';

function renderSchemes() {
    const schemesList = document.getElementById('schemes-list');
    if (!schemesList) return;

    const schemes = filteredSchemes.length > 0 ? filteredSchemes : schemesDatabase;

    if (schemes.length === 0) {
        schemesList.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem;">
                <i data-lucide="search-x" style="width: 64px; height: 64px; color: var(--text-dim); margin-bottom: 1rem;"></i>
                <h3 style="color: var(--text-dim);">${currentLang === 'en' ? 'No schemes found' : 'कोई योजना नहीं मिली'}</h3>
                <p style="color: var(--text-dim);">${currentLang === 'en' ? 'Try adjusting your filters' : 'अपने फ़िल्टर समायोजित करने का प्रयास करें'}</p>
            </div>
        `;
        if (typeof lucide !== 'undefined') lucide.createIcons();
        return;
    }

    schemesList.innerHTML = schemes.map(scheme => `
        <div class="scheme-card card" data-scheme-id="${scheme.id}">
            <div class="scheme-header">
                <div class="scheme-icon">
                    <i data-lucide="${scheme.icon}"></i>
                </div>
                <div class="scheme-tags">
                    <span class="hero-tag">${currentLang === 'en' ? scheme.category : scheme.categoryHi}</span>
                    <span class="scheme-level">${currentLang === 'en' ? scheme.level : scheme.levelHi}</span>
                </div>
            </div>
            <h3 class="scheme-title">${currentLang === 'en' ? scheme.title : scheme.titleHi}</h3>
            <p class="scheme-desc">${currentLang === 'en' ? scheme.desc : scheme.descHi}</p>
            <div class="scheme-benefits">
                <h4>${currentLang === 'en' ? 'Key Benefits:' : 'मुख्य लाभ:'}</h4>
                <ul>
                    ${(currentLang === 'en' ? scheme.benefits : scheme.benefitsHi).map(benefit => `
                        <li><i data-lucide="check-circle"></i> ${benefit}</li>
                    `).join('')}
                </ul>
            </div>
            <div class="scheme-eligibility">
                <strong>${currentLang === 'en' ? 'Eligibility:' : 'पात्रता:'}</strong>
                <span>${currentLang === 'en' ? scheme.eligibility : scheme.eligibilityHi}</span>
            </div>
            <div class="scheme-actions">
                <a href="${scheme.link}" target="_blank" class="primary-btn sm">
                    ${currentLang === 'en' ? 'Apply Now' : 'अभी आवेदन करें'}
                    <i data-lucide="external-link"></i>
                </a>
                <button class="secondary-btn sm" onclick="viewSchemeDetails(${scheme.id})">
                    ${currentLang === 'en' ? 'Learn More' : 'अधिक जानें'}
                    <i data-lucide="info"></i>
                </button>
            </div>
        </div>
    `).join('');

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Search and filter functionality
function setupSchemeFilters() {
    const searchInput = document.querySelector('.search-input-wrapper input');
    const filterGroups = document.querySelectorAll('.filter-group select');
    const categorySelect = filterGroups[0]; // First select is category
    const levelSelect = filterGroups[1]; // Second select is level
    const searchBtn = document.querySelector('.search-container .primary-btn');

    if (!searchInput) {
        console.warn('Search input not found');
        return;
    }

    function applyFilters() {
        filteredSchemes = schemesDatabase.filter(scheme => {
            const matchesSearch = searchQuery === '' ||
                scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                scheme.titleHi.includes(searchQuery) ||
                scheme.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                scheme.descHi.includes(searchQuery);

            const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory;
            const matchesLevel = selectedLevel === 'all' || scheme.level === selectedLevel;

            return matchesSearch && matchesCategory && matchesLevel;
        });

        renderSchemes();
    }

    // Search input listener
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
    });

    // Category filter listener
    if (categorySelect) {
        categorySelect.addEventListener('change', (e) => {
            selectedCategory = e.target.value;
            applyFilters();
        });
    }

    // Level filter listener
    if (levelSelect) {
        levelSelect.addEventListener('change', (e) => {
            selectedLevel = e.target.value;
            applyFilters();
        });
    }

    // Search button listener
    if (searchBtn) {
        searchBtn.addEventListener('click', applyFilters);
    }

    // Enter key support for search
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') applyFilters();
    });
}

// View scheme details (modal or detailed view)
function viewSchemeDetails(schemeId) {
    const scheme = schemesDatabase.find(s => s.id === schemeId);
    if (!scheme) return;

    alert(`${currentLang === 'en' ? 'Detailed information for' : 'के लिए विस्तृत जानकारी'}: ${currentLang === 'en' ? scheme.title : scheme.titleHi}\n\n${currentLang === 'en' ? 'This feature will open a detailed modal with application process, required documents, and contact information.' : 'यह सुविधा आवेदन प्रक्रिया, आवश्यक दस्तावेज और संपर्क जानकारी के साथ एक विस्तृत मोडल खोलेगी।'}`);
}

// Policy search and filter functionality
function setupPolicyFilters() {
    const searchInput = document.querySelector('.policy-search-input');
    const filterGroups = document.querySelectorAll('.policy-filter-group select');
    const categorySelect = filterGroups[0];
    const typeSelect = filterGroups[1];
    const searchBtn = document.querySelector('.policy-search-btn');

    if (!searchInput) {
        console.warn('Policy search input not found');
        return;
    }

    function applyFilters() {
        filteredPolicies = policiesDatabase.filter(policy => {
            const matchesSearch = policySearchQuery === '' ||
                policy.title.toLowerCase().includes(policySearchQuery.toLowerCase()) ||
                policy.titleHi.includes(policySearchQuery) ||
                policy.desc.toLowerCase().includes(policySearchQuery.toLowerCase()) ||
                policy.descHi.includes(policySearchQuery);

            const matchesCategory = selectedPolicyCategory === 'all' || policy.category === selectedPolicyCategory;
            const matchesType = selectedPolicyType === 'all' || policy.type === selectedPolicyType;

            return matchesSearch && matchesCategory && matchesType;
        });

        renderLaws(); // renderLaws handles both policies and laws
    }

    // Search input listener
    searchInput.addEventListener('input', (e) => {
        policySearchQuery = e.target.value;
    });

    // Category filter listener
    if (categorySelect) {
        categorySelect.addEventListener('change', (e) => {
            selectedPolicyCategory = e.target.value;
            applyFilters();
        });
    }

    // Type filter listener
    if (typeSelect) {
        typeSelect.addEventListener('change', (e) => {
            selectedPolicyType = e.target.value;
            applyFilters();
        });
    }

    // Search button listener
    if (searchBtn) {
        searchBtn.addEventListener('click', applyFilters);
    }

    // Enter key support for search
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') applyFilters();
    });
}

// --- Farming Guidance Content ---
// Comprehensive Farming Guidance Database
const guidanceDatabase = [
    {
        id: 1,
        category: 'Crop Selection',
        categoryHi: 'फसल चयन',
        title: 'Choosing the Right Crop for Your Soil',
        titleHi: 'अपनी मिट्टी के लिए सही फसल चुनना',
        summary: 'Match crops to your soil type and climate for maximum yield and profitability.',
        summaryHi: 'अधिकतम उपज और लाभप्रदता के लिए अपनी मिट्टी के प्रकार और जलवायु से फसलों का मिलान करें।',
        problem: 'Many farmers face low yields and crop failures because they plant crops unsuitable for their soil type. Wrong crop selection leads to poor germination, stunted growth, increased pest attacks, and ultimately financial losses. For example, growing rice in sandy soil or wheat in waterlogged clay soil results in crop failure.',
        problemHi: 'कई किसानों को कम उपज और फसल विफलता का सामना करना पड़ता है क्योंकि वे अपनी मिट्टी के प्रकार के लिए अनुपयुक्त फसलें लगाते हैं। गलत फसल चयन से खराब अंकुरण, अवरुद्ध विकास, कीट हमलों में वृद्धि और अंततः वित्तीय नुकसान होता है। उदाहरण के लिए, रेतीली मिट्टी में चावल या जलभराव वाली मिट्टी में गेहूं उगाने से फसल विफल हो जाती है।',
        solution: 'Conduct soil testing to determine pH, texture, and nutrient levels. Match crops to soil characteristics: Sandy soils (pH 6-7) are ideal for groundnut, watermelon, carrots. Clay soils (pH 6.5-7.5) suit rice, wheat, cotton. Loamy soils (pH 6-7) are best for most vegetables and fruits. Consider local rainfall patterns and temperature ranges when selecting varieties.',
        solutionHi: 'पीएच, बनावट और पोषक तत्व स्तर निर्धारित करने के लिए मिट्टी परीक्षण करें। मिट्टी की विशेषताओं से फसलों का मिलान करें: रेतीली मिट्टी (पीएच 6-7) मूंगफली, तरबूज, गाजर के लिए आदर्श है। मिट्टी की मिट्टी (पीएच 6.5-7.5) चावल, गेहूं, कपास के अनुकूल है। दोमट मिट्टी (पीएच 6-7) अधिकांश सब्जियों और फलों के लिए सर्वोत्तम है। किस्मों का चयन करते समय स्थानीय वर्षा पैटर्न और तापमान सीमा पर विचार करें।',
        steps: [
            'Step 1: Get soil tested at nearest Krishi Vigyan Kendra (KVK) - costs ₹50-100',
            'Step 2: Check soil pH - acidic (<6.5), neutral (6.5-7.5), or alkaline (>7.5)',
            'Step 3: Identify soil texture - sandy, clay, loamy, or silt by feel test',
            'Step 4: Match crops: Rice/Sugarcane (clay), Bajra/Groundnut (sandy), Vegetables (loamy)',
            'Step 5: Consider water availability - choose drought-resistant crops if rainfall is low',
            'Step 6: Check market demand and prices for selected crops in your region'
        ],
        stepsHi: [
            'चरण 1: निकटतम कृषि विज्ञान केंद्र (केवीके) पर मिट्टी परीक्षण कराएं - लागत ₹50-100',
            'चरण 2: मिट्टी का पीएच जांचें - अम्लीय (<6.5), तटस्थ (6.5-7.5), या क्षारीय (>7.5)',
            'चरण 3: मिट्टी की बनावट पहचानें - रेतीली, मिट्टी, दोमट, या गाद महसूस परीक्षण द्वारा',
            'चरण 4: फसलों का मिलान करें: चावल/गन्ना (मिट्टी), बाजरा/मूंगफली (रेतीली), सब्जियां (दोमट)',
            'चरण 5: पानी की उपलब्धता पर विचार करें - यदि वर्षा कम है तो सूखा प्रतिरोधी फसलें चुनें',
            'चरण 6: अपने क्षेत्र में चयनित फसलों की बाजार मांग और कीमतें जांचें'
        ],
        outcome: 'Expected Results: 30-40% increase in crop yield, reduced fertilizer costs by 20%, better disease resistance, and improved profit margins. Crops will show healthier growth, stronger roots, and higher market value.',
        outcomeHi: 'अपेक्षित परिणाम: फसल उपज में 30-40% वृद्धि, उर्वरक लागत में 20% की कमी, बेहतर रोग प्रतिरोध और बेहतर लाभ मार्जिन। फसलें स्वस्थ विकास, मजबूत जड़ें और उच्च बाजार मूल्य दिखाएंगी।',
        icon: 'sprout',
        difficulty: 'Beginner',
        difficultyHi: 'शुरुआती'
    },
    {
        id: 2,
        category: 'Pest Management',
        categoryHi: 'कीट प्रबंधन',
        title: 'Integrated Pest Management (IPM)',
        titleHi: 'एकीकृत कीट प्रबंधन (आईपीएम)',
        summary: 'Control pests naturally while reducing chemical pesticide use.',
        summaryHi: 'रासायनिक कीटनाशकों के उपयोग को कम करते हुए कीटों को प्राकृतिक रूप से नियंत्रित करें।',
        problem: 'Excessive use of chemical pesticides costs farmers ₹15,000-25,000 per hectare annually, kills beneficial insects, creates pesticide-resistant pests, contaminates soil and water, and causes health issues. Farmers often spray pesticides preventively without checking pest levels, leading to unnecessary expenses and environmental damage.',
        problemHi: 'रासायनिक कीटनाशकों के अत्यधिक उपयोग से किसानों को प्रति हेक्टेयर ₹15,000-25,000 वार्षिक खर्च होता है, लाभकारी कीड़े मर जाते हैं, कीटनाशक प्रतिरोधी कीट पैदा होते हैं, मिट्टी और पानी दूषित होते हैं, और स्वास्थ्य समस्याएं होती हैं। किसान अक्सर कीट स्तर की जांच किए बिना निवारक रूप से कीटनाशकों का छिड़काव करते हैं, जिससे अनावश्यक खर्च और पर्यावरण क्षति होती है।',
        solution: 'IPM combines biological, cultural, and mechanical methods to control pests economically. Monitor pest populations weekly using yellow sticky traps. Spray only when pest count exceeds Economic Threshold Level (ETL). Use neem oil (5ml/liter), Bt (Bacillus thuringiensis) for caterpillars, Trichoderma for fungal diseases. Introduce natural predators like ladybugs, lacewings, and parasitic wasps.',
        solutionHi: 'आईपीएम कीटों को आर्थिक रूप से नियंत्रित करने के लिए जैविक, सांस्कृतिक और यांत्रिक तरीकों को जोड़ता है। पीले चिपचिपे जाल का उपयोग करके साप्ताहिक कीट आबादी की निगरानी करें। केवल तभी स्प्रे करें जब कीट गिनती आर्थिक सीमा स्तर (ईटीएल) से अधिक हो। कैटरपिलर के लिए नीम तेल (5 मिली/लीटर), बीटी (बैसिलस थुरिंजिएंसिस), फंगल रोगों के लिए ट्राइकोडर्मा का उपयोग करें। लेडीबग, लेसविंग और परजीवी ततैया जैसे प्राकृतिक शिकारियों को शामिल करें।',
        steps: [
            'Step 1: Install 8-10 yellow sticky traps per acre to monitor pest population',
            'Step 2: Check traps weekly - spray only if pest count exceeds 5-10 per trap',
            'Step 3: Use neem oil spray (50ml neem oil + 10ml soap in 10 liters water)',
            'Step 4: Release Trichogramma cards (5-6 cards/acre) for bollworm control',
            'Step 5: Plant marigold, mustard borders to attract beneficial insects',
            'Step 6: Remove and destroy infected plant parts immediately'
        ],
        stepsHi: [
            'चरण 1: कीट आबादी की निगरानी के लिए प्रति एकड़ 8-10 पीले चिपचिपे जाल स्थापित करें',
            'चरण 2: साप्ताहिक जाल की जांच करें - केवल तभी स्प्रे करें जब कीट गिनती प्रति जाल 5-10 से अधिक हो',
            'चरण 3: नीम तेल स्प्रे का उपयोग करें (50 मिली नीम तेल + 10 मिली साबुन 10 लीटर पानी में)',
            'चरण 4: बॉलवर्म नियंत्रण के लिए ट्राइकोग्रामा कार्ड (5-6 कार्ड/एकड़) जारी करें',
            'चरण 5: लाभकारी कीड़ों को आकर्षित करने के लिए गेंदा, सरसों की सीमाएं लगाएं',
            'चरण 6: संक्रमित पौधे के हिस्सों को तुरंत हटाएं और नष्ट करें'
        ],
        outcome: 'Expected Results: 60-70% reduction in pesticide costs (save ₹10,000-15,000/hectare), healthier crops with 25-30% higher yields, improved soil health, safer produce with no chemical residues, and protection of beneficial insects that naturally control pests.',
        outcomeHi: 'अपेक्षित परिणाम: कीटनाशक लागत में 60-70% की कमी (₹10,000-15,000/हेक्टेयर की बचत), 25-30% अधिक उपज के साथ स्वस्थ फसलें, बेहतर मिट्टी स्वास्थ्य, बिना रासायनिक अवशेषों के सुरक्षित उत्पाद, और लाभकारी कीड़ों की सुरक्षा जो स्वाभाविक रूप से कीटों को नियंत्रित करते हैं।',
        icon: 'bug',
        difficulty: 'Intermediate',
        difficultyHi: 'मध्यवर्ती'
    },
    {
        id: 3,
        category: 'Irrigation',
        categoryHi: 'सिंचाई',
        title: 'Drip Irrigation: Save Water, Boost Yield',
        titleHi: 'ड्रिप सिंचाई: पानी बचाएं, उपज बढ़ाएं',
        summary: 'Modern drip systems can reduce water usage by 40-70% while increasing crop productivity.',
        summaryHi: 'आधुनिक ड्रिप सिस्टम फसल उत्पादकता बढ़ाते हुए पानी के उपयोग को 40-70% तक कम कर सकते हैं।',
        problem: 'Flood irrigation wastes 50-60% water through evaporation and runoff, leading to waterlogging, soil salinity, and weed growth. Farmers spend ₹8,000-12,000 per acre on diesel/electricity for pumping excess water. Uneven water distribution causes some plants to get too much water while others remain dry, reducing overall yield by 20-30%.',
        problemHi: 'बाढ़ सिंचाई वाष्पीकरण और अपवाह के माध्यम से 50-60% पानी बर्बाद करती है, जिससे जलभराव, मिट्टी लवणता और खरपतवार वृद्धि होती है। किसान अतिरिक्त पानी पंप करने के लिए डीजल/बिजली पर प्रति एकड़ ₹8,000-12,000 खर्च करते हैं। असमान पानी वितरण के कारण कुछ पौधों को बहुत अधिक पानी मिलता है जबकि अन्य सूखे रहते हैं, जिससे कुल उपज में 20-30% की कमी होती है।',
        solution: 'Drip irrigation delivers water directly to plant roots through emitters, saving 40-70% water. Install inline drip laterals with 30-45cm spacing for vegetables, 60-90cm for row crops. Use 2-4 liter/hour emitters. Drip systems cost ₹35,000-50,000 per acre but government provides 50-90% subsidy under PMKSY scheme. System pays for itself in 2-3 years through water and energy savings.',
        solutionHi: 'ड्रिप सिंचाई उत्सर्जकों के माध्यम से सीधे पौधे की जड़ों तक पानी पहुंचाती है, 40-70% पानी की बचत करती है। सब्जियों के लिए 30-45 सेमी स्पेसिंग, पंक्ति फसलों के लिए 60-90 सेमी के साथ इनलाइन ड्रिप लेटरल स्थापित करें। 2-4 लीटर/घंटा उत्सर्जकों का उपयोग करें। ड्रिप सिस्टम की लागत प्रति एकड़ ₹35,000-50,000 है लेकिन सरकार पीएमकेएसवाई योजना के तहत 50-90% सब्सिडी प्रदान करती है। सिस्टम पानी और ऊर्जा बचत के माध्यम से 2-3 वर्षों में खुद के लिए भुगतान करता है।',
        steps: [
            'Step 1: Apply for PMKSY subsidy at agriculture department (get 50-90% cost covered)',
            'Step 2: Install main pipeline, sub-mains, and drip laterals with proper filtration system',
            'Step 3: Place emitters 30cm apart for vegetables, 60cm for cotton/sugarcane',
            'Step 4: Run system for 1-2 hours daily (morning 6-8 AM or evening 5-7 PM)',
            'Step 5: Flush drip lines weekly to prevent clogging',
            'Step 6: Add water-soluble fertilizers through drip system (fertigation)'
        ],
        stepsHi: [
            'चरण 1: कृषि विभाग में पीएमकेएसवाई सब्सिडी के लिए आवेदन करें (50-90% लागत कवर करें)',
            'चरण 2: उचित निस्पंदन प्रणाली के साथ मुख्य पाइपलाइन, उप-मुख्य और ड्रिप लेटरल स्थापित करें',
            'चरण 3: सब्जियों के लिए 30 सेमी अलग, कपास/गन्ने के लिए 60 सेमी उत्सर्जक रखें',
            'चरण 4: दैनिक 1-2 घंटे के लिए सिस्टम चलाएं (सुबह 6-8 बजे या शाम 5-7 बजे)',
            'चरण 5: रुकावट को रोकने के लिए साप्ताहिक ड्रिप लाइनों को फ्लश करें',
            'चरण 6: ड्रिप सिस्टम के माध्यम से पानी में घुलनशील उर्वरक जोड़ें (फर्टिगेशन)'
        ],
        outcome: 'Expected Results: 40-60% water savings, 25-50% increase in crop yield, 30% reduction in fertilizer use through fertigation, ₹15,000-20,000 annual savings on electricity/diesel, uniform crop growth, reduced weed growth, and lower disease incidence due to dry foliage.',
        outcomeHi: 'अपेक्षित परिणाम: 40-60% पानी की बचत, फसल उपज में 25-50% वृद्धि, फर्टिगेशन के माध्यम से उर्वरक उपयोग में 30% की कमी, बिजली/डीजल पर ₹15,000-20,000 वार्षिक बचत, समान फसल वृद्धि, कम खरपतवार वृद्धि, और सूखे पत्ते के कारण कम रोग घटना।',
        icon: 'droplets',
        difficulty: 'Intermediate',
        difficultyHi: 'मध्यवर्ती'
    },
    {
        id: 4,
        category: 'Soil Health',
        categoryHi: 'मिट्टी स्वास्थ्य',
        title: 'Composting for Nutrient-Rich Soil',
        titleHi: 'पोषक तत्वों से भरपूर मिट्टी के लिए कम्पोस्टिंग',
        summary: 'Turn farm waste into valuable organic fertilizer through proper composting techniques.',
        summaryHi: 'उचित कम्पोस्टिंग तकनीकों के माध्यम से खेत के कचरे को मूल्यवान जैविक उर्वरक में बदलें।',
        problem: 'Farmers often burn agricultural waste or leave it in piles where it loses nutrients and attracts pests. This practice results in soil degradation and the need for expensive chemical fertilizers (costing ₹5,000-8,000 per season). Poor soil organic carbon levels mean the soil cannot hold water or nutrients effectively.',
        problemHi: 'किसान अक्सर कृषि कचरे को जला देते हैं या उसे ढेरों में छोड़ देते हैं जहाँ वह पोषक तत्व खो देता है और कीटों को आकर्षित करता है। इस प्रथा के परिणामस्वरूप मिट्टी का क्षरण होता है और महंगे रासायनिक उर्वरकों की आवश्यकता होती है (प्रति मौसम ₹5,000-8,000 की लागत)। मिट्टी के जैविक कार्बन का स्तर कम होने का अर्थ है कि मिट्टी पानी या पोषक तत्वों को प्रभावी ढंग से नहीं रोक सकती।',
        solution: 'Implement aerobic composting to convert organic waste into high-quality humus. This increases soil organic carbon and provides a slow-release source of all essential nutrients. Composting reduces fertilizer dependency by 30-50% within two years.',
        solutionHi: 'जैविक कचरे को उच्च गुणवत्ता वाले धरण (ह्यूमस) में बदलने के लिए एरोबिक कम्पोस्टिंग लागू करें। यह मिट्टी के जैविक कार्बन को बढ़ाता है और सभी आवश्यक पोषक तत्वों का धीरे-धीरे जारी होने वाला स्रोत प्रदान करता है। कम्पोस्टिंग दो वर्षों के भीतर उर्वरक निर्भरता को 30-50% तक कम कर देता है।',
        steps: [
            'Step 1: Choose a shaded spot and dig a pit (10ft x 6ft x 3ft) or use a heap method.',
            'Step 2: Layer 1: 6 inches of dry waste (stalks, dried leaves) for carbon.',
            'Step 3: Layer 2: 2 inches of green waste (weeds, vegetable scraps) or cow dung slurry for nitrogen.',
            'Step 4: Keep the moisture level like a wrung-out sponge (approx 50-60%).',
            'Step 5: Turn the pile every 15 days to provide oxygen and speed up decomposition.',
            'Step 6: Use after 3 months when the material is dark, crumbly, and smells like earth.'
        ],
        stepsHi: [
            'चरण 1: एक छायादार स्थान चुनें और एक गड्ढा (10 फीट x 6 फीट x 3 फीट) खोदें या ढेर विधि का उपयोग करें।',
            'चरण 2: परत 1: कार्बन के लिए 6 इंच सूखा कचरा (डंठल, सूखी पत्तियां)।',
            'चरण 3: परत 2: नाइट्रोजन के लिए 2 इंच गीला कचरा (खरपतवार, सब्जियों के छिलके) या गोबर का घोल।',
            'चरण 4: नमी का स्तर एक निचोड़े हुए स्पंज की तरह रखें (लगभग 50-60%)।',
            'चरण 5: ऑक्सीजन प्रदान करने और अपघटन को तेज करने के लिए हर 15 दिनों में ढेर को पलटें।',
            'चरण 6: 3 महीने के बाद उपयोग करें जब सामग्री काली, भुरभुरी हो और मिट्टी जैसी महक आए।'
        ],
        outcome: 'Expected Results: Doubled soil organic matter in 3 years, 20% improvement in water retention, and a saving of ₹4,000 per acre on chemical fertilizers. Plants will show better disease resistance and uniform growth.',
        outcomeHi: 'अपेक्षित परिणाम: 3 वर्षों में मिट्टी के जैविक पदार्थ में दोगुनी वृद्धि, जल धारण क्षमता में 20% सुधार, और रासायनिक उर्वरकों पर प्रति एकड़ ₹4,000 की बचत। पौधे बेहतर रोग प्रतिरोध और समान विकास दिखाएंगे।',
        icon: 'leaf',
        difficulty: 'Beginner',
        difficultyHi: 'शुरुआती'
    },
    {
        id: 5,
        category: 'Seasonal Farming',
        categoryHi: 'मौसमी खेती',
        title: 'Kharif Season Crop Planning',
        titleHi: 'खरीफ सीजन फसल योजना',
        summary: 'Maximize monsoon season productivity with proper crop selection and timing.',
        summaryHi: 'उचित फसल चयन और समय के साथ मानसून सीजन उत्पादकता को अधिकतम करें।',
        problem: 'Uncertain monsoons and poor drainage during Kharif (June-October) lead to waterlogging or drought stress. Planting at the wrong time or using long-duration varieties in low-rainfall areas leads to yield losses of up to 50%.',
        problemHi: 'खरीफ (जून-अक्टूबर) के दौरान अनिश्चित मानसून और खराब जल निकासी से जलभराव या सूखे का तनाव होता है। गलत समय पर रोपण या कम वर्षा वाले क्षेत्रों में लंबी अवधि की किस्मों का उपयोग करने से 50% तक उपज का नुकसान होता है।',
        solution: 'Adopt "Climate-Resilient Agriculture" by selecting short-duration varieties and practicing ridge-and-furrow planting. This ensures proper drainage during heavy rains and moisture retention during dry spells.',
        solutionHi: 'कम अवधि की किस्मों का चयन करके और "मेढ़ और कूड़" (ridge-and-furrow) रोपण का अभ्यास करके "जलवायु-लचीला कृषि" अपनाएं। यह भारी बारिश के दौरान उचित जल निकासी और सूखे के दौरान नमी प्रतिधारण सुनिश्चित करता है।',
        steps: [
            'Step 1: Treat seeds with fungicides (Thiram/Carbendazim) before sowing.',
            'Step 2: Sow with the first 50-75mm of monsoon rain for optimal germination.',
            'Step 3: Use Ridge-and-Furrow method for soybean/maize to avoid waterlogging.',
            'Step 4: Practice "Intercropping" (e.g., Pigeon pea with Soybean) to reduce risk.',
            'Step 5: Apply first dose of Nitrogen 20-25 days after sowing.',
            'Step 6: Monitor for Fall Armyworm in Maize and Stem Borer in Rice.'
        ],
        stepsHi: [
            'चरण 1: बुवाई से पहले बीजों को कवकनाशी (थिरम/कार्बेंडाजिम) से उपचारित करें।',
            'चरण 2: इष्टतम अंकुरण के लिए मानसून की पहली 50-75 मिमी बारिश के साथ बुवाई करें।',
            'चरण 3: जलभराव से बचने के लिए सोयाबीन/मक्के के लिए मेढ़ और कूड़ विधि का उपयोग करें।',
            'चरण 4: जोखिम कम करने के लिए "अंतःफसल" (जैसे, सोयाबीन के साथ अरहर) का अभ्यास करें।',
            'चरण 5: बुवाई के 20-25 दिन बाद नाइट्रोजन की पहली खुराक दें।',
            'चरण 6: मक्के में फॉल आर्मीवर्म और धान में तना छेदक की निगरानी करें।'
        ],
        outcome: 'Expected Results: Stable yields despite rainfall variations, 25% higher profit through risk mitigation, and reduced costs on re-sowing. Farmers can expect 15-20 quintals per acre for major Kharif crops.',
        outcomeHi: 'अपेक्षित परिणाम: वर्षा की भिन्नता के बावजूद स्थिर उपज, जोखिम शमन के माध्यम से 25% अधिक लाभ, और पुन: बुवाई पर कम लागत। किसान प्रमुख खरीफ फसलों के लिए 15-20 क्विंटल प्रति एकड़ की उम्मीद कर सकते हैं।',
        icon: 'cloud-rain',
        difficulty: 'Intermediate',
        difficultyHi: 'मध्यवर्ती'
    },
    {
        id: 6,
        category: 'Seasonal Farming',
        categoryHi: 'मौसमी खेती',
        title: 'Rabi Season Best Practices',
        titleHi: 'रबी सीजन सर्वोत्तम प्रथाएं',
        summary: 'Optimize winter crop yields with strategic planning and management.',
        summaryHi: 'रणनीतिक योजना और प्रबंधन के साथ सर्दियों की फसल की पैदावार को अनुकूलित करें।',
        problem: 'Rabi crops (Wheat, Mustard, Gram) often suffer from "Terminal Heat Stress" (rising temperatures during grain filling) and dwindling groundwater levels. Late sowing can reduce wheat yield by 40-50 kg per hectare for every day delayed after November 15th.',
        problemHi: 'रबी फसलों (गेहूं, सरसों, चना) को अक्सर "टर्मिनल हीट स्ट्रेस" (दाना भरते समय बढ़ता तापमान) और घटते भूजल स्तर का सामना करना पड़ता है। देर से बुवाई करने से 15 नवंबर के बाद हर दिन की देरी के लिए गेहूं की उपज में 40-50 किलोग्राम प्रति हेक्टेयर की कमी आ सकती है।',
        solution: 'Shift to early-sowing varieties and use modern irrigation like sprinklers. Maintaining soil moisture during the "Crown Root Initiation" (CRI) stage in wheat is critical for productivity.',
        solutionHi: 'जल्दी बुवाई वाली किस्मों को अपनाएं और स्प्रिंकलर जैसी आधुनिक सिंचाई का उपयोग करें। गेहूं में "क्राउन रूट इनीशिएशन" (CRI) चरण के दौरान मिट्टी की नमी बनाए रखना उत्पादकता के लिए महत्वपूर्ण है।',
        steps: [
            'Step 1: Finish sowing Wheat by Nov 15th and Mustard by Oct 15th.',
            'Step 2: Use "Zero-Till Seed Drill" to save moisture and cost (₹2,000/acre).',
            'Step 3: Ensure CRI stage irrigation at 21 days for wheat.',
            'Step 4: Use sulfur-rich fertilizers for Mustard to increase oil content.',
            'Step 5: Monitor for aphids in Mustard during cloudy weather.',
            'Step 6: Harvest when grain moisture reaches 12% to avoid storage losses.'
        ],
        stepsHi: [
            'चरण 1: 15 नवंबर तक गेहूं और 15 अक्टूबर तक सरसों की बुवाई पूरी कर लें।',
            'चरण 2: नमी और लागत (₹2,000/एकड़) बचाने के लिए "जीरो-टिल सीड ड्रिल" का उपयोग करें।',
            'चरण 3: गेहूं के लिए 21 दिनों पर CRI चरण की सिंचाई सुनिश्चित करें।',
            'चरण 4: तेल की मात्रा बढ़ाने के लिए सरसों के लिए सल्फर युक्त उर्वरकों का उपयोग करें।',
            'चरण 5: बादल छाए रहने के दौरान सरसों में माहू (एफिड्स) की निगरानी करें।',
            'चरण 6: भंडारण के नुकसान से बचने के लिए दाने की नमी 12% होने पर कटाई करें।'
        ],
        outcome: 'Expected Results: 15-20% higher yield through timely sowing, 30% water saving with zero-tillage, and higher market price due to better grain quality. Wheat yield can reach 20-25 quintals per acre.',
        outcomeHi: 'अपेक्षित परिणाम: समय पर बुवाई के माध्यम से 15-20% अधिक उपज, जीरो-टिल्लगे के साथ 30% पानी की बचत, और बेहतर दाने की गुणवत्ता के कारण उच्च बाजार मूल्य। गेहूं की उपज 20-25 क्विंटल प्रति एकड़ तक पहुंच सकती है।',
        icon: 'snowflake',
        difficulty: 'Intermediate',
        difficultyHi: 'मध्यवर्ती'
    },
    {
        id: 7,
        category: 'Modern Techniques',
        categoryHi: 'आधुनिक तकनीकें',
        title: 'Precision Agriculture with Technology',
        titleHi: 'प्रौद्योगिकी के साथ सटीक कृषि',
        summary: 'Use GPS, drones, and sensors to optimize farming operations and reduce costs.',
        summaryHi: 'खेती के संचालन को अनुकूलित करने और लागत कम करने के लिए जीपीएस, ड्रोन और सेंसर का उपयोग करें।',
        problem: 'Traditional farming applies fertilizers and water uniformly across entire fields, ignoring local variations. This leads to over-application in some areas (causing toxicity and leaching) and under-application in others (causing nutrient deficiency), resulting in a 15-20% waste of input costs.',
        problemHi: 'पारंपरिक खेती पूरे खेतों में उर्वरकों और पानी को समान रूप से लागू करती है, स्थानीय विविधताओं की अनदेखी करती है। इससे कुछ क्षेत्रों में अत्यधिक प्रयोग (विषाक्तता और लीचिंग का कारण) और अन्य क्षेत्रों में कम प्रयोग (पोषक तत्वों की कमी का कारण) होता है, जिसके परिणामस्वरूप इनपुट लागत का 15-20% अपव्यय होता है।',
        solution: 'Adopt "Variable Rate Technology" (VRT) and remote sensing. By identifying specific areas that need more or less attention, farmers can optimize inputs, increasing efficiency by 30% and reducing environmental impact.',
        solutionHi: "परिवर्तनीय दर प्रौद्योगिकी (VRT) और रिमोट सेंसिंग को अपनाएं। उन विशिष्ट क्षेत्रों की पहचान करके जिन्हें अधिक या कम ध्यान देने की आवश्यकता है, किसान इनपुट को अनुकूलित कर सकते हैं, दक्षता में 30% की वृद्धि कर सकते हैं और पर्यावरणीय प्रभाव को कम कर सकते हैं।",
        steps: [
            'Step 1: Download a farm mapping app to track health via satellite (like Bhuvan-NUIS).',
            'Step 2: Use a Leaf Color Chart (LCC) to determine exact Nitrogen needs (cost: ₹100).',
            'Step 3: Group areas of your field into High, Medium, and Low productivity zones.',
            'Step 4: Hire a drone service for rapid urea spraying (costs ₹500/acre, saves 20% urea).',
            'Step 5: Install a ₹2,000 automatic soil moisture sensor to trigger irrigation pumps.',
            'Step 6: Keep digital records of every spray and harvest for better future planning.'
        ],
        stepsHi: [
            'चरण 1: सैटेलाइट के माध्यम से स्वास्थ्य को ट्रैक करने के लिए एक फार्म मैपिंग ऐप डाउनलोड करें (जैसे भुवन-एनयूआईएस)।',
            'चरण 2: सटीक नाइट्रोजन की जरूरतों को निर्धारित करने के लिए लीफ कलर चार्ट (LCC) का उपयोग करें (लागत: ₹100)।',
            'चरण 3: अपने खेत के क्षेत्रों को उच्च, मध्यम और निम्न उत्पादकता क्षेत्रों में समूहित करें।',
            'चरण 4: यूरिया के तेजी से छिड़काव के लिए ड्रोन सेवा किराए पर लें (लागत ₹500/एकड़, 20% यूरिया बचाती है)।',
            'चरण 5: सिंचाई पंपों को ट्रिगर करने के लिए ₹2,000 का स्वचालित मिट्टी नमी सेंसर स्थापित करें।',
            'चरण 6: बेहतर भविष्य की योजना के लिए हर छिड़काव और फसल का डिजिटल रिकॉर्ड रखें।'
        ],
        outcome: 'Expected Results: 15-20% reduction in fertilizer and chemical costs, 10% yield increase through precision management, and significantly lower labor requirements. ROI typically achieved within 1 year.',
        outcomeHi: 'अपेक्षित परिणाम: उर्वरक और रासायनिक लागतों में 15-20% की कमी, सटीक प्रबंधन के माध्यम से 10% उपज में वृद्धि, और काफी कम श्रम आवश्यकताएं। ROI आम तौर पर 1 वर्ष के भीतर प्राप्त किया जाता है।',
        icon: 'cpu',
        difficulty: 'Advanced',
        difficultyHi: 'उन्नत'
    },
    {
        id: 8,
        category: 'Organic Farming',
        categoryHi: 'जैविक खेती',
        title: 'Transitioning to Organic Farming',
        titleHi: 'जैविक खेती में संक्रमण',
        summary: 'Step-by-step guide to convert conventional farming to certified organic practices.',
        summaryHi: 'पारंपरिक खेती को प्रमाणित जैविक प्रथाओं में बदलने के लिए चरण-दर-चरण मार्गदर्शिका।',
        problem: 'Long-term use of chemicals has killed natural soil life, reduced fertility, and increased farmers\' debt due to rising input costs. Sudden stops in chemical use lead to a massive drop in yield, discouraging farmers from moving to healthier practices.',
        problemHi: 'रसायनों के दीर्घकालिक उपयोग ने प्राकृतिक मिट्टी के जीवन को मार दिया है, उर्वरता कम कर दी है, और बढ़ती इनपुट लागत के कारण किसानों का कर्ज बढ़ गया है। रासायनिक उपयोग को अचानक बंद करने से उपज में भारी गिरावट आती है, जिससे किसान स्वास्थ्यप्रद प्रथाओं को अपनाने से हतोत्साहित होते हैं।',
        solution: 'Follow a 3-year "Gradual Conversion" model. Start by replacing 30% of chemicals with bio-inputs in the first year, focusing on soil health. Use "Jeevamrut" and "Ghanjeevamrut" to rebuild the bacterial population of the soil.',
        solutionHi: '3-वर्षीय "क्रमिक रूपांतरण" मॉडल का पालन करें। पहले वर्ष में मिट्टी के स्वास्थ्य पर ध्यान केंद्रित करते हुए 30% रसायनों को जैव-इनपुट से बदलना शुरू करें। मिट्टी की बैक्टीरिया आबादी के पुनर्निर्माण के लिए "जीवामृत" और "घनजीवामृत" का उपयोग करें।',
        steps: [
            'Step 1: Register for NPOP/PGS-India certification at the local DAO office.',
            'Step 2: Start a Vermicompost bed (size 10x3x2 ft) to produce 1 ton of manure/month.',
            'Step 3: Prepare Jeevamrut (Cow dung, urine, jaggery, gram flour) every 15 days.',
            'Step 4: Use green manuring (Dhaincha/Sunhemp) to fix natural Nitrogen.',
            'Step 5: Practice "Mulching" to keep moisture and encourage earthworms.',
            'Step 6: Buffer zone creation: Grow fences to prevent chemical drift from neighbors.'
        ],
        stepsHi: [
            'चरण 1: स्थानीय DAO कार्यालय में NPOP/PGS-India प्रमाणन के लिए पंजीकरण करें।',
            'चरण 2: प्रति माह 1 टन खाद तैयार करने के लिए वर्मीकम्पोस्ट बेड (आकार 10x3x2 फीट) शुरू करें।',
            'चरण 3: हर 15 दिनों में जीवामृत (गोबर, गौमूत्र, गुड़, बेसन) तैयार करें।',
            'चरण 4: प्राकृतिक नाइट्रोजन को स्थिर करने के लिए हरी खाद (ढैंचा/सनहेम्प) का उपयोग करें।',
            'चरण 5: नमी बनाए रखने और केंचुओं को प्रोत्साहित करने के लिए "मल्चिंग" का अभ्यास करें।',
            'चरण 6: बफर जोन निर्माण: पड़ोसियों से रासायनिक बहाव को रोकने के लिए बाड़ लगाएं।'
        ],
        outcome: 'Expected Results: 0% chemical input cost after 3 years, 20-50% premium price for organic produce, and restored soil fertility. While yield may drop 10% initially, net profit increases due to zero input costs.',
        outcomeHi: 'अपेक्षित परिणाम: 3 वर्षों के बाद 0% रासायनिक इनपुट लागत, जैविक उपज के लिए 20-50% प्रीमियम मूल्य, और मिट्टी की उर्वरता की बहाली। हालांकि शुरू में उपज में 10% की गिरावट आ सकती है, लेकिन शून्य इनपुट लागत के कारण शुद्ध लाभ बढ़ता है।',
        icon: 'heart',
        difficulty: 'Advanced',
        difficultyHi: 'उन्नत'
    },
    {
        id: 9,
        category: 'Crop Selection',
        categoryHi: 'फसल चयन',
        title: 'High-Value Cash Crops for Small Farms',
        titleHi: 'छोटे खेतों के लिए उच्च मूल्य वाली नकदी फसलें',
        summary: 'Maximize income from limited land with profitable specialty crops.',
        summaryHi: 'लाभदायक विशेष फसलों के साथ सीमित भूमि से आय को अधिकतम करें।',
        problem: 'Small farmers (holding < 2 acres) often grow low-value cereals like wheat or paddy, which provide minimal profits after meeting family needs. This makes it difficult to recover from a single crop failure or to invest in better education or health for the family.',
        problemHi: 'छोटे किसान (< 2 एकड़ जोत) अक्सर गेहूं या धान जैसे कम मूल्य वाले अनाज उगाते हैं, जो पारिवारिक जरूरतों को पूरा करने के बाद न्यूनतम लाभ प्रदान करते हैं। इससे एक भी फसल की विफलता से उबरना या परिवार के लिए बेहतर शिक्षा या स्वास्थ्य में निवेश करना मुश्किल हो जाता है।',
        solution: 'Diversify into "High-Value Horticulture". Diversifying just 20% of your land into spices, flowers, or exotic vegetables can generate more income than the remaining 80% under traditional crops.',
        solutionHi: '"उच्च मूल्य बागवानी" में विविधता लाएं। अपनी भूमि का केवल 20% मसालों, फूलों या विदेशी सब्जियों में विविधता लाने से पारंपरिक फसलों के तहत शेष 80% की तुलना में अधिक आय उत्पन्न हो सकती है।',
        steps: [
            'Step 1: Dedicate 0.25 acre to high-value crops like Saffron (Kashmir) or Vanilla.',
            'Step 2: In South/Central India, try Ginger or Turmeric (earn ₹2-3 Lakh/acre).',
            'Step 3: Build a Low-Cost Polyhouse (₹1-2 Lakh) for off-season vegetables.',
            'Step 4: Grow Floriculture (Marigold/Jasmine) for steady daily/weekly cash flow.',
            'Step 5: Plant Fruit trees (Guava/Lemon) on borders for long-term income.',
            'Step 6: Link directly to urban markets or nearby food processors for 20% better rates.'
        ],
        stepsHi: [
            'चरण 1: केसर (कश्मीर) या वेनिला जैसी उच्च मूल्य वाली फसलों के लिए 0.25 एकड़ समर्पित करें।',
            'चरण 2: दक्षिण/मध्य भारत में, अदरक या हल्दी आजमाएं (₹2-3 लाख/एकड़ कमाएं)।',
            'चरण 3: ऑफ-सीजन सब्जियों के लिए कम लागत वाला पॉलीहाउस (₹1-2 लाख) बनाएं।',
            'चरण 4: स्थिर दैनिक/साप्ताहिक नकदी प्रवाह के लिए फूलों की खेती (गेंदा/चमेली) करें।',
            'चरण 5: दीर्घकालिक आय के लिए सीमाओं पर फलदार पेड़ (अमरूद/नींबू) लगाएं।',
            'चरण 6: 20% बेहतर दरों के लिए सीधे शहरी बाजारों या पास के खाद्य प्रोसेसर से जुड़ें।'
        ],
        outcome: 'Expected Results: Net annual income increase of ₹50,000 to ₹1,50,000 per acre, year-round employment for family members, and better resilience against price drops in staple cereals.',
        outcomeHi: 'अपेक्षित परिणाम: प्रति एकड़ ₹50,000 से ₹1,50,000 की शुद्ध वार्षिक आय में वृद्धि, परिवार के सदस्यों के लिए साल भर रोजगार, और मुख्य अनाजों की कीमतों में गिरावट के खिलाफ बेहतर लचीलापन।',
        icon: 'trending-up',
        difficulty: 'Advanced',
        difficultyHi: 'उन्नत'
    },
    {
        id: 10,
        category: 'Pest Management',
        categoryHi: 'कीट प्रबंधन',
        title: 'Natural Pest Repellents from Kitchen',
        titleHi: 'रसोई से प्राकृतिक कीट विकर्षक',
        summary: 'Make effective organic pesticides using common household ingredients.',
        summaryHi: 'सामान्य घरेलू सामग्री का उपयोग करके प्रभावी जैविक कीटनाशक बनाएं।',
        problem: 'Sucking pests like aphids, whiteflies, and mites attack vegetables daily. Using strong chemicals on home-grown vegetables can be toxic to the family. Furthermore, buying small quantities of commercial pesticides is expensive and often ineffective if stored poorly.',
        problemHi: 'माहू (एफिड्स), सफेद मक्खी और मकड़ी (माइट्स) जैसे चूसने वाले कीट रोजाना सब्जियों पर हमला करते हैं। घर में उगाई जाने वाली सब्जियों पर कड़े रसायनों का उपयोग परिवार के लिए विषाक्त हो सकता है। इसके अलावा, कम मात्रा में व्यावसायिक कीटनाशक खरीदना महंगा होता है और यदि ठीक से संग्रहित न किया जाए तो अक्सर अप्रभावी होता है।',
        solution: 'Utilize "Home-Grown Pestedes". Kitchen ingredients like Garlic, Ginger, Chili, and Buttermilk are potent repellents and natural fungicides. They cost almost zero and are completely safe for humans.',
        solutionHi: '"घर में उगने वाले कीटनाशकों" का उपयोग करें। लहसुन, अदरक, मिर्च और छाछ जैसे रसोई के सामान शक्तिशाली विकर्षक और प्राकृतिक कवकनाशी हैं। इनमें लगभग शून्य लागत आती है और ये मनुष्यों के लिए पूरी तरह से सुरक्षित हैं।',
        steps: [
            'Step 1: Garlic-Chili Spray: Grind 50g Garlic + 50g Green Chili into a paste.',
            'Step 2: Soak paste in 1 liter water overnight, strain with a fine cloth.',
            'Step 3: Add 5ml liquid soap (to help it stick) and dilute in 5 liters water.',
            'Step 4: Use "Sour Buttermilk" (stored 15 days) to cure yellowing and fungal spots.',
            'Step 5: Spray on both sides of leaves during early morning hours.',
            'Step 6: Repeat every 7 days for prevention, or every 3 days during attack.'
        ],
        stepsHi: [
            'चरण 1: लहसुन-मिर्च स्प्रे: 50 ग्राम लहसुन + 50 ग्राम हरी मिर्च को पीसकर पेस्ट बना लें।',
            'चरण 2: पेस्ट को रात भर 1 लीटर पानी में भिगोएँ, एक महीन कपड़े से छान लें।',
            'चरण 3: 5 मिली तरल साबुन (चिपकाने में मदद के लिए) डालें और 5 लीटर पानी में घोलें।',
            'चरण 4: पीलापन और फंगल धब्बों को ठीक करने के लिए "खट्टी छाछ" (15 दिन पुरानी) का उपयोग करें।',
            'चरण 5: सुबह जल्दी पत्तियों के दोनों ओर छिड़काव करें।',
            'चरण 6: रोकथाम के लिए हर 7 दिनों में, या हमले के दौरान हर 3 दिनों में दोहराएं।'
        ],
        outcome: 'Expected Results: 100% safe, toxin-free vegetables for consumption, ₹1,000-2,000 monthly saving on shop-bought pesticides, and healthy plants with glossy, disease-free leaves.',
        outcomeHi: 'अपेक्षित परिणाम: सेवन के लिए 100% सुरक्षित, विष मुक्त सब्जियां, दुकान से खरीदे गए कीटनाशकों पर ₹1,000-2,000 की मासिक बचत, और चमकदार, रोग मुक्त पत्तियों वाले स्वस्थ पौधे।',
        icon: 'flask',
        difficulty: 'Beginner',
        difficultyHi: 'शुरुआती'
    },
    {
        id: 11,
        category: 'Soil Health',
        categoryHi: 'मिट्टी स्वास्थ्य',
        title: 'Green Manuring for Soil Enrichment',
        titleHi: 'मिट्टी संवर्धन के लिए हरी खाद',
        summary: 'Improve soil fertility naturally by growing and plowing in green manure crops.',
        summaryHi: 'हरी खाद फसलों को उगाकर और जोतकर मिट्टी की उर्वरता को प्राकृतिक रूप से सुधारें।',
        problem: 'Intensive farming with only chemical Urea has destroyed the "Soil Structure". The soil becomes hard like brick, lacks air for roots, and cannot absorb rainwater. This leads to poor root development and high irrigation costs because the soil dries out quickly.',
        problemHi: 'केवल रासायनिक यूरिया के साथ गहन खेती ने "मिट्टी की संरचना" को नष्ट कर दिया है। मिट्टी ईंट की तरह सख्त हो जाती है, जड़ों के लिए हवा की कमी होती है, और बारिश के पानी को सोख नहीं पाती है। इससे जड़ों का विकास खराब होता है और सिंचाई की लागत अधिक होती है क्योंकि मिट्टी जल्दी सूख जाती है।',
        solution: 'Use "In-situ Green Manuring". Planting fast-growing legumes like Dhaincha or Sunhemp and plowing them into the soil adds 10-15 tons of organic biomass per hectare and fixes nitrogen naturally.',
        solutionHi: '"इन-सीटू हरी खाद" का उपयोग करें। ढैंचा या सनहेम्प जैसी तेजी से बढ़ने वाली फलियों को लगाना और उन्हें मिट्टी में जोतना प्रति हेक्टेयर 10-15 टन जैविक बायोमास जोड़ता है और प्राकृतिक रूप से नाइट्रोजन को स्थिर करता है।',
        steps: [
            'Step 1: Sow 25kg/ha of Dhaincha or Sunhemp seeds in May-June.',
            'Step 2: Let it grow for 45-50 days until it starts flowering.',
            'Step 3: Use a disk harrow or Rotavator to crush and plow the crop into the soil.',
            'Step 4: Keep the field flooded for 10-15 days for rapid decomposition.',
            'Step 5: Sow your main crop (Paddy/Wheat) after the biomass turns dark.',
            'Step 6: Reduce your Urea application by 50% for the next crop.'
        ],
        stepsHi: [
            'चरण 1: मई-जून में 25 किग्रा/हेक्टेयर ढैंचा या सनहेम्प के बीज बोएं।',
            'चरण 2: इसे 45-50 दिनों तक बढ़ने दें जब तक कि इसमें फूल न आने लगें।',
            'चरण 3: फसल को कुचलने और मिट्टी में जोतने के लिए डिस्क हैरो या रोटावेटर का उपयोग करें।',
            'चरण 4: तेजी से अपघटन के लिए खेत को 10-15 दिनों तक पानी से भरकर रखें।',
            'चरण 5: बायोमास के काला होने के बाद अपनी मुख्य फसल (धान/गेहूं) बोएं।',
            'चरण 6: अगली फसल के लिए अपने यूरिया प्रयोग को 50% कम कर दें।'
        ],
        outcome: 'Expected Results: 40-60kg Nitrogen fixed naturally per hectare, improved soil porosity (softer soil), 20% saving on irrigation water, and a 10-15% permanent yield increase within 2 seasons.',
        outcomeHi: 'अपेक्षित परिणाम: प्रति हेक्टेयर 40-60 किग्रा नाइट्रोजन प्राकृतिक रूप से स्थिर, मिट्टी की रंध्रता (सॉफ्ट सॉइल) में सुधार, सिंचाई के पानी पर 20% की बचत, और 2 मौसमों के भीतर 10-15% स्थायी उपज वृद्धि।',
        icon: 'recycle',
        difficulty: 'Beginner',
        difficultyHi: 'शुरुआती'
    },
    {
        id: 12,
        category: 'Modern Techniques',
        categoryHi: 'आधुनिक तकनीकें',
        title: 'Hydroponics: Soil-less Farming',
        titleHi: 'हाइड्रोपोनिक्स: मिट्टी रहित खेती',
        summary: 'Grow crops without soil using nutrient-rich water solutions for year-round production.',
        summaryHi: 'साल भर उत्पादन के लिए पोषक तत्वों से भरपूर पानी के घोल का उपयोग करके मिट्टी के बिना फसलें उगाएं।',
        problem: 'In urban areas or places with contaminated/saline soil, traditional farming is impossible. Also, seasonal constraints prevent growing high-demand crops like strawberries or exotic lettuce year-round. Traditional soil-based farming on a large scale is also susceptible to soil-borne diseases.',
        problemHi: 'शहरी क्षेत्रों या दूषित/लवणीय मिट्टी वाले स्थानों में, पारंपरिक खेती असंभव है। इसके अलावा, मौसमी बाधाएं स्ट्रॉबेरी या विदेशी सलाद जैसी उच्च मांग वाली फसलों को साल भर उगाने से रोकती हैं। बड़े पैमाने पर पारंपरिक मिट्टी आधारित खेती भी मिट्टी से होने वाले रोगों के प्रति संवेदनशील होती है।',
        solution: 'Shift to "Controlled Environment Hydroponics". By growing plants in water with balanced nutrients, you eliminate soil diseases, reduce water use by 90%, and can grow 4 times more plants in the same area.',
        solutionHi: '"नियंत्रित वातावरण हाइड्रोपोनिक्स" की ओर बढ़ें। संतुलित पोषक तत्वों के साथ पानी में पौधे उगाकर, आप मिट्टी के रोगों को खत्म करते हैं, पानी के उपयोग को 90% तक कम करते हैं, और उसी क्षेत्र में 4 गुना अधिक पौधे उगा सकते हैं।',
        steps: [
            'Step 1: Choose a system: NFT (Nutrient Film Technique) is best for leafy greens.',
            'Step 2: Buy a basic kit or build one using PVC pipes with 3-inch holes.',
            'Step 3: Measure Water pH (keep 5.5-6.5) and TDS (keep 800-1200 ppm).',
            'Step 4: Use Cocopeat or Clay balls to support plant roots in net cups.',
            'Step 5: Run a small water pump to circulate nutrient solution 24/7.',
            'Step 6: Monitor nutrient levels weekly and refresh the water every 15 days.'
        ],
        stepsHi: [
            'चरण 1: एक सिस्टम चुनें: पत्तेदार साग के लिए NFT (न्यूट्रिएंट फिल्म तकनीक) सबसे अच्छा है।',
            'चरण 2: एक बेसिक किट खरीदें या 3 इंच के छेद वाले पीवीसी पाइप का उपयोग करके एक बनाएं।',
            'चरण 3: पानी का pH (5.5-6.5 रखें) और TDS (800-1200 पीपीएम रखें) मापें।',
            'चरण 4: नेट कप में पौधों की जड़ों को सहारा देने के लिए कोकोपीट या क्ले बॉल्स का उपयोग करें।',
            'चरण 5: पोषक घोल को 24/7 प्रसारित करने के लिए एक छोटा पानी का पंप चलाएं।',
            'चरण 6: साप्ताहिक पोषक तत्वों के स्तर की निगरानी करें और हर 15 दिनों में पानी बदलें।'
        ],
        outcome: 'Expected Results: 90% less water usage, 30-50% faster growth rate, 0 soil diseases, and ability to grow crops vertically in small spaces (terrace/balcony). High profitability for urban entrepreneurs.',
        outcomeHi: 'अपेक्षित परिणाम: 90% कम पानी का उपयोग, 30-50% तेज विकास दर, 0 मिट्टी जनित रोग, और छोटे स्थानों (छत/बालकनी) में लंबवत रूप से फसलें उगाने की क्षमता। शहरी उद्यमियों के लिए उच्च लाभप्रदता।',
        icon: 'beaker',
        difficulty: 'Advanced',
        difficultyHi: 'उन्नत'
    }
];


// Filter and search state for guidance
let filteredGuidance = [...guidanceDatabase];
let guidanceSearchQuery = '';
let selectedGuidanceCategory = 'all';

function renderGuidance() {
    const guidanceList = document.getElementById('guidance-list');
    if (!guidanceList) return;

    const guidance = filteredGuidance.length > 0 ? filteredGuidance : guidanceDatabase;

    if (guidance.length === 0) {
        guidanceList.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem;">
                <i data-lucide="search-x" style="width: 64px; height: 64px; color: var(--text-dim); margin-bottom: 1rem;"></i>
                <h3 style="color: var(--text-dim);">${currentLang === 'en' ? 'No guidance found' : 'कोई मार्गदर्शन नहीं मिला'}</h3>
                <p style="color: var(--text-dim);">${currentLang === 'en' ? 'Try adjusting your filters' : 'अपने फ़िल्टर समायोजित करने का प्रयास करें'}</p>
            </div>
        `;
        if (typeof lucide !== 'undefined') lucide.createIcons();
        return;
    }

    guidanceList.innerHTML = guidance.map(guide => `
        <div class="guidance-card card" data-guidance-id="${guide.id}">
            <div class="scheme-header">
                <div class="scheme-icon" style="background: linear-gradient(135deg, #10b981, #059669);">
                    <i data-lucide="${guide.icon}"></i>
                </div>
                <div class="scheme-tags">
                    <span class="hero-tag">${currentLang === 'en' ? guide.category : guide.categoryHi}</span>
                    <span class="guidance-difficulty">${currentLang === 'en' ? guide.difficulty : guide.difficultyHi}</span>
                </div>
            </div>
            <h3 class="scheme-title">${currentLang === 'en' ? guide.title : guide.titleHi}</h3>
            <p class="scheme-desc">${currentLang === 'en' ? guide.summary : guide.summaryHi}</p>
            
            ${guide.problem ? `
            <div class="guidance-section">
                <h4 class="guidance-section-title"><i data-lucide="alert-circle"></i> ${currentLang === 'en' ? 'The Problem' : 'समस्या'}</h4>
                <p class="guidance-section-content">${currentLang === 'en' ? guide.problem : guide.problemHi}</p>
            </div>
            ` : ''}
            
            ${guide.solution ? `
            <div class="guidance-section">
                <h4 class="guidance-section-title"><i data-lucide="lightbulb"></i> ${currentLang === 'en' ? 'The Solution' : 'समाधान'}</h4>
                <p class="guidance-section-content">${currentLang === 'en' ? guide.solution : guide.solutionHi}</p>
            </div>
            ` : ''}
            
            ${guide.steps ? `
            <div class="guidance-section">
                <h4 class="guidance-section-title"><i data-lucide="list-ordered"></i> ${currentLang === 'en' ? 'Step-by-Step Guide' : 'चरण-दर-चरण मार्गदर्शिका'}</h4>
                <ol class="guidance-steps">
                    ${(currentLang === 'en' ? guide.steps : guide.stepsHi).map(step => `
                        <li>${step}</li>
                    `).join('')}
                </ol>
            </div>
            ` : ''}
            
            ${guide.outcome ? `
            <div class="guidance-section outcome-section">
                <h4 class="guidance-section-title"><i data-lucide="trending-up"></i> ${currentLang === 'en' ? 'Expected Results' : 'अपेक्षित परिणाम'}</h4>
                <p class="guidance-section-content">${currentLang === 'en' ? guide.outcome : guide.outcomeHi}</p>
            </div>
            ` : ''}

            <button class="view-details-btn" onclick="toggleGuidanceDetails(this)">
                <span>${currentLang === 'en' ? 'View Full Guide' : 'पूरा विवरण देखें'}</span>
                <i data-lucide="chevron-down"></i>
            </button>
        </div>
    `).join('');


    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Global toggle function for guidance cards
window.toggleGuidanceDetails = function (btn) {
    const card = btn.closest('.guidance-card');
    const isExpanded = card.classList.toggle('expanded');
    const btnText = btn.querySelector('span');

    if (isExpanded) {
        btnText.textContent = currentLang === 'en' ? 'Close Guide' : 'विवरण बंद करें';
    } else {
        btnText.textContent = currentLang === 'en' ? 'View Full Guide' : 'पूरा विवरण देखें';
        // Scroll back to top of card if it's now out of view
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    if (typeof lucide !== 'undefined') lucide.createIcons();
};

// Guidance search and filter functionality
function setupGuidanceFilters() {
    const searchInput = document.querySelector('.guidance-search-input');
    const categorySelect = document.querySelector('.guidance-filter-group select');
    const searchBtn = document.querySelector('.guidance-search-btn');

    if (!searchInput) {
        console.warn('Guidance search input not found');
        return;
    }

    function applyFilters() {
        filteredGuidance = guidanceDatabase.filter(guide => {
            const matchesSearch = guidanceSearchQuery === '' ||
                guide.title.toLowerCase().includes(guidanceSearchQuery.toLowerCase()) ||
                guide.titleHi.includes(guidanceSearchQuery) ||
                guide.summary.toLowerCase().includes(guidanceSearchQuery.toLowerCase()) ||
                guide.summaryHi.includes(guidanceSearchQuery);

            const matchesCategory = selectedGuidanceCategory === 'all' || guide.category === selectedGuidanceCategory;

            return matchesSearch && matchesCategory;
        });

        renderGuidance();
    }

    // Search input listener
    searchInput.addEventListener('input', (e) => {
        guidanceSearchQuery = e.target.value;
    });

    // Category filter listener
    if (categorySelect) {
        categorySelect.addEventListener('change', (e) => {
            selectedGuidanceCategory = e.target.value;
            applyFilters();
        });
    }

    // Search button listener
    if (searchBtn) {
        searchBtn.addEventListener('click', applyFilters);
    }

    // Enter key support for search
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') applyFilters();
    });
}

// --- Prediction Logic ---
function setupPrediction() {
    const dropZone = document.getElementById('drop-zone');
    if (!dropZone) return; // Not on analysis page

    const fileInput = document.getElementById('file-input');
    const uploadPlaceholder = document.getElementById('upload-placeholder');
    const imagePreview = document.getElementById('image-preview');
    const removeImgBtn = document.getElementById('remove-img');
    const predictBtn = document.getElementById('predict-btn');
    const resultsDiv = document.getElementById('results');
    const loadingDiv = document.getElementById('loading');
    const regionSelect = document.getElementById('region-select');

    dropZone.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', (e) => handleFile(e.target.files[0]));

    function handleFile(file) {
        if (file && file.type.startsWith('image/')) {
            selectedFile = file;
            const reader = new FileReader();
            reader.onload = (e) => {
                imagePreview.src = e.target.result;
                imagePreview.classList.remove('hidden');
                uploadPlaceholder.classList.add('hidden');
                removeImgBtn.classList.remove('hidden');
                predictBtn.disabled = false;
            };
            reader.readAsDataURL(file);
        }
    }

    removeImgBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        selectedFile = null;
        imagePreview.classList.add('hidden');
        uploadPlaceholder.classList.remove('hidden');
        removeImgBtn.classList.add('hidden');
        predictBtn.disabled = true;
        resultsDiv.classList.add('hidden');
    });

    predictBtn.addEventListener('click', async () => {
        if (!selectedFile) return;
        loadingDiv.classList.remove('hidden');
        resultsDiv.classList.add('hidden');

        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('region', regionSelect.value);

        try {
            const res = await fetch(`${API_URL}/predict`, { method: 'POST', body: formData });
            if (!res.ok) throw new Error('Prediction failed');
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            displayResults(data);
        } catch (err) {
            alert(err.message);
        } finally {
            loadingDiv.classList.add('hidden');
        }
    });
}

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <div class="card" style="padding: 2.5rem; border-top: 6px solid var(--primary);">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 2rem;">
                <div>
                     <h2 style="margin-bottom: 0.5rem;">${currentLang === 'en' ? 'Soil Health Report' : 'मिट्टी स्वास्थ्य रिपोर्ट'}</h2>
                     <p style="color: var(--text-dim);">${currentLang === 'en' ? 'AI-based analysis complete' : 'एआई-आधारित विश्लेषण पूरा हुआ'}</p>
                </div>
                <div class="hero-tag" style="background: var(--primary); color: white; padding: 0.6rem 1.25rem;">${data.soilType}</div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1.5rem;">
                <div style="background: var(--bg-main); padding: 1.5rem; border-radius: 20px; text-align: center;">
                    <p style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 0.5rem;">pH Level</p>
                    <h3 style="font-size: 1.75rem; color: var(--primary);">${data.ph}</h3>
                </div>
                <div style="background: var(--bg-main); padding: 1.5rem; border-radius: 20px; text-align: center;">
                    <p style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 0.5rem;">Nitrogen (N)</p>
                    <h3 style="font-size: 1.75rem; color: var(--primary);">${data.nitrogen}</h3>
                </div>
                <div style="background: var(--bg-main); padding: 1.5rem; border-radius: 20px; text-align: center;">
                    <p style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 0.5rem;">Phosphorus (P)</p>
                    <h3 style="font-size: 1.75rem; color: var(--primary);">${data.phosphorus}</h3>
                </div>
                <div style="background: var(--bg-main); padding: 1.5rem; border-radius: 20px; text-align: center;">
                    <p style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 0.5rem;">Potassium (K)</p>
                    <h3 style="font-size: 1.75rem; color: var(--primary);">${data.potassium}</h3>
                </div>
            </div>
        </div>
        <div class="card" style="padding: 2.5rem;">
            <h2 style="margin-bottom: 1.5rem;">${currentLang === 'en' ? 'Recommended Crops' : 'अनुशंसित फसलें'}</h2>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                ${data.crops.map(crop => `
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 1.25rem; background: var(--bg-main); border-radius: 16px;">
                        <span style="font-weight: 700; font-size: 1.1rem;">${crop.name}</span>
                        <span style="padding: 0.5rem 1rem; background: var(--primary-light); color: var(--primary-dark); border-radius: 99px; font-weight: 700; font-size: 0.9rem;">${crop.suitability}% Match</span>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="card" style="padding: 2.5rem; grid-column: 1 / -1;">
            <h2 style="margin-bottom: 1.5rem;">${currentLang === 'en' ? 'Crop Suitability Chart' : 'फसल उपयुक्तता चार्ट'}</h2>
            <div style="background: white; padding: 1rem; border-radius: 16px;">
                <img src="data:image/png;base64,${data.chart}" style="width: 100%; border-radius: 8px;">
            </div>
        </div>
    `;
    resultsDiv.classList.remove('hidden');
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

async function checkStatus() {
    try {
        const res = await fetch(`${API_URL}/model-status`);
        const data = await res.json();
        // UI updates for status if needed
    } catch (e) { }
}

// Removed redundant init(); call

// Mobile Menu Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (icon && window.lucide) {
                if (navLinks.classList.contains('active')) {
                    icon.setAttribute('data-lucide', 'x');
                } else {
                    icon.setAttribute('data-lucide', 'menu');
                }
                lucide.createIcons();
            }
        });
    }
});

// --- Soil Analysis Prediction System ---
function setupPrediction() {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const predictBtn = document.getElementById('predict-btn');
    const removeBtn = document.getElementById('remove-img');
    const imagePreview = document.getElementById('image-preview');
    const uploadPlaceholder = document.getElementById('upload-placeholder');
    const regionSelect = document.getElementById('region-select');

    if (!dropZone || !fileInput || !predictBtn) {
        console.log('Prediction elements not found on this page');
        return;
    }

    // Click to upload
    dropZone.addEventListener('click', (e) => {
        if (e.target !== removeBtn && !removeBtn.contains(e.target)) {
            fileInput.click();
        }
    });

    // File selection
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            handleFileSelect(file);
        }
    });

    // Drag and drop
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.style.borderColor = 'var(--farm-sage)';
        dropZone.style.background = 'var(--farm-sage-light)';
    });

    dropZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.style.borderColor = '#cfd8c7';
        dropZone.style.background = 'white';
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.style.borderColor = '#cfd8c7';
        dropZone.style.background = 'white';

        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            handleFileSelect(file);
        } else {
            showError(currentLang === 'en' ? 'Please upload an image file' : 'कृपया एक छवि फ़ाइल अपलोड करें');
        }
    });

    // Remove image
    if (removeBtn) {
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            clearImage();
        });
    }

    // Predict button
    predictBtn.addEventListener('click', () => {
        if (selectedFile) {
            predictSoil();
        }
    });

    // Region change - fetch weather
    if (regionSelect) {
        regionSelect.addEventListener('change', () => {
            if (selectedFile) {
                predictBtn.disabled = false;
            }
            fetchWeather(regionSelect.value);
            updateLocationText(regionSelect.options[regionSelect.selectedIndex].text);
        });
        // Fetch weather for initial selection
        fetchWeather(regionSelect.value);
        updateLocationText(regionSelect.options[regionSelect.selectedIndex].text);
    }
}

// Weather API Integration
async function fetchWeather(region) {
    const weatherWidget = document.getElementById('weather-widget');
    const weatherTemp = document.getElementById('weather-temp');
    const weatherCondition = document.getElementById('weather-condition');
    const weatherHumidity = document.getElementById('weather-humidity');
    const weatherWind = document.getElementById('weather-wind');
    const weatherIcon = document.getElementById('weather-icon');

    if (!weatherWidget) return;

    // City coordinates for Maharashtra regions
    const cityCoords = {
        'pune': { lat: 18.5204, lon: 73.8567 },
        'mumbai': { lat: 19.0760, lon: 72.8777 },
        'nagpur': { lat: 21.1458, lon: 79.0882 },
        'nashik': { lat: 19.9975, lon: 73.7898 },
        'aurangabad': { lat: 19.8762, lon: 75.3433 }
    };

    // Realistic fallback data in case API key fails
    const simulatedWeather = {
        'pune': { temp: 21, condition: 'Clear', humidity: 45, wind: 12, icon: '🌙' },
        'mumbai': { temp: 23, condition: 'Clear', humidity: 58, wind: 8, icon: '🌙' },
        'nagpur': { temp: 20, condition: 'Clear', humidity: 30, wind: 10, icon: '🌙' },
        'nashik': { temp: 19, condition: 'Clear', humidity: 50, wind: 9, icon: '🌙' },
        'aurangabad': { temp: 22, condition: 'Clear', humidity: 40, wind: 11, icon: '🌙' }
    };

    const coords = cityCoords[region];
    if (!coords) return;

    console.log('Fetching weather for:', region, coords);

    try {
        // Using OpenWeatherMap API (free tier)
        const API_KEY = '894d1e83d48378c1f8e4b06c8c3f67c1'; // Free demo key
        const langParam = currentLang === 'hi' ? 'hi' : 'en';
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&lang=${langParam}&appid=${API_KEY}`;

        console.log('Weather API URL:', url);
        const response = await fetch(url);
        const data = await response.json();
        console.log('Weather API response:', data);

        if (!response.ok) {
            throw new Error(data.message || 'Weather API failed');
        }

        if (data.main && data.weather) {
            // Update temperature
            weatherTemp.textContent = `${Math.round(data.main.temp)}°C`;

            // Update condition
            weatherCondition.textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);

            // Update humidity
            weatherHumidity.textContent = data.main.humidity;

            // Update wind speed (convert m/s to km/h)
            weatherWind.textContent = Math.round(data.wind.speed * 3.6);

            // Update weather icon
            const iconMap = {
                '01d': '☀️', '01n': '🌙',
                '02d': '⛅', '02n': '☁️',
                '03d': '☁️', '03n': '☁️',
                '04d': '☁️', '04n': '☁️',
                '09d': '🌧️', '09n': '🌧️',
                '10d': '🌦️', '10n': '🌧️',
                '11d': '⛈️', '11n': '⛈️',
                '13d': '❄️', '13n': '❄️',
                '50d': '🌫️', '50n': '🌫️'
            };
            weatherIcon.textContent = iconMap[data.weather[0].icon] || '🌤️';

            // Show widget with animation
            weatherWidget.style.display = 'block';
            weatherWidget.style.animation = 'slideInRight 0.5s ease';
        }
    } catch (error) {
        console.error('Weather fetch error:', error);
        console.log('Failed to fetch weather for:', region);
        console.log('API URL was:', `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=894d1e83d48378c1f8e4b06c8c3f67c1`);

        // Use simulated data for the selected region
        const fallback = simulatedWeather[region] || simulatedWeather['pune'];

        weatherWidget.style.display = 'block';
        weatherTemp.textContent = `${fallback.temp}°C`;
        weatherCondition.textContent = fallback.condition;
        weatherHumidity.textContent = fallback.humidity;
        weatherWind.textContent = fallback.wind;
        weatherIcon.textContent = fallback.icon;
    }
}

function isSoilImage(imageDataUrl, callback) {
    const img = new Image();
    img.onload = function () {
        const canvas = document.createElement('canvas');
        const MAX_DIM = 100;
        canvas.width = Math.min(img.width, MAX_DIM);
        canvas.height = Math.min(img.height, MAX_DIM);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        const totalPixels = canvas.width * canvas.height;

        let soilPixelCount = 0;

        for (let i = 0; i < pixels.length; i += 4) {
            const r = pixels[i];
            const g = pixels[i + 1];
            const b = pixels[i + 2];

            // Convert RGB to HSL for better color analysis
            const rn = r / 255, gn = g / 255, bn = b / 255;
            const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
            const l = (max + min) / 2;
            let s = 0, h = 0;
            if (max !== min) {
                const d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case rn: h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6; break;
                    case gn: h = ((bn - rn) / d + 2) / 6; break;
                    case bn: h = ((rn - gn) / d + 4) / 6; break;
                }
            }
            const hDeg = h * 360;

            // Soil heuristic:
            // - Earthy/brown hues: orange-brown (hue 10-50) with low-med saturation
            // - Red soil: hue 0-15 or 340-360
            // - Dark/gray soils: very low saturation and low-mid lightness
            // - Exclude: vivid greens (plants), vivid blues (sky/water), vivid reds
            const isBrown = (hDeg >= 10 && hDeg <= 50) && s >= 0.05 && s <= 0.75 && l >= 0.1 && l <= 0.75;
            const isRedSoil = ((hDeg >= 0 && hDeg <= 15) || (hDeg >= 340 && hDeg <= 360)) && s >= 0.1 && s <= 0.7 && l >= 0.1 && l <= 0.6;
            const isDarkGray = s <= 0.15 && l >= 0.1 && l <= 0.65;
            const isYellowSoil = (hDeg >= 38 && hDeg <= 65) && s >= 0.05 && s <= 0.6 && l >= 0.2 && l <= 0.7;

            if (isBrown || isRedSoil || isDarkGray || isYellowSoil) {
                soilPixelCount++;
            }
        }

        const soilRatio = soilPixelCount / totalPixels;
        // Accept if more than 35% of pixels match soil-like colors
        callback(soilRatio >= 0.35, soilRatio);
    };
    img.onerror = function () {
        callback(false, 0);
    };
    img.src = imageDataUrl;
}

function handleFileSelect(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const dataUrl = e.target.result;

        // Validate that the image looks like a soil image before accepting it
        isSoilImage(dataUrl, (isValid, ratio) => {
            if (!isValid) {
                // Reject the file - not a soil image
                const fileInput = document.getElementById('file-input');
                if (fileInput) fileInput.value = '';
                selectedFile = null;

                const errorMsg = currentLang === 'en'
                    ? '❌ This does not appear to be a soil image. Please upload a clear photo of soil (earth/ground). Sky, plants, people, or other objects are not accepted.'
                    : '❌ यह मिट्टी की छवि नहीं लगती। कृपया मिट्टी (भूमि/ज़मीन) की स्पष्ट फ़ोटो अपलोड करें। आकाश, पौधे, लोग या अन्य वस्तुएं स्वीकार नहीं की जाती हैं।';
                showError(errorMsg);
                return;
            }

            // Passed soil validation — proceed
            selectedFile = file;

            const imagePreview = document.getElementById('image-preview');
            const sideCard = document.getElementById('side-card');
            const predictBtn = document.getElementById('predict-btn');

            if (imagePreview) imagePreview.src = dataUrl;
            if (sideCard) sideCard.classList.remove('hidden');
            if (predictBtn) predictBtn.disabled = false;

            // Hide any previous results/errors
            const resultsDiv = document.getElementById('results');
            const errorDiv = document.getElementById('error-container');
            if (resultsDiv) resultsDiv.classList.add('hidden');
            if (errorDiv) errorDiv.classList.add('hidden');

            // Fetch weather for default region
            const regionSelect = document.getElementById('region-select');
            if (regionSelect) {
                fetchWeather(regionSelect.value);
                updateLocationText(regionSelect.options[regionSelect.selectedIndex].text);
            }
        });
    };
    reader.readAsDataURL(file);
}

function updateLocationText(text) {
    const locationText = document.getElementById('location-text');
    if (locationText) {
        locationText.textContent = text;
    }
}

function clearImage() {
    selectedFile = null;
    const imagePreview = document.getElementById('image-preview');
    const sideCard = document.getElementById('side-card');
    const predictBtn = document.getElementById('predict-btn');
    const fileInput = document.getElementById('file-input');

    if (imagePreview) imagePreview.src = '';
    if (sideCard) sideCard.classList.add('hidden');
    if (predictBtn) predictBtn.disabled = true;
    if (fileInput) fileInput.value = '';

    // Show upload tool section again
    const uploadToolLayout = document.querySelector('.farm-tool-layout');
    if (uploadToolLayout) {
        uploadToolLayout.style.display = 'flex';
    }

    // Hide results
    const resultsDiv = document.getElementById('results');
    const errorDiv = document.getElementById('error-container');
    if (resultsDiv) resultsDiv.classList.add('hidden');
    if (errorDiv) errorDiv.classList.add('hidden');
}

async function predictSoil() {
    const loadingDiv = document.getElementById('loading');
    const resultsDiv = document.getElementById('results');
    const errorDiv = document.getElementById('error-container');
    const regionSelect = document.getElementById('region-select');

    // Hide previous results and errors
    if (resultsDiv) resultsDiv.classList.add('hidden');
    if (errorDiv) errorDiv.classList.add('hidden');

    // Show loading
    if (loadingDiv) {
        loadingDiv.classList.remove('hidden');
    }

    try {
        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('region', regionSelect ? regionSelect.value : 'pune');

        const response = await fetch(`${API_URL}/predict`, {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        // Hide loading
        if (loadingDiv) loadingDiv.classList.add('hidden');

        if (data.error) {
            showError(data.error);
        } else {
            displayResults(data);
        }
    } catch (error) {
        console.error('Prediction error:', error);
        if (loadingDiv) loadingDiv.classList.add('hidden');
        showError(currentLang === 'en'
            ? 'Failed to connect to the server. Please make sure the backend is running.'
            : 'सर्वर से कनेक्ट करने में विफल। कृपया सुनिश्चित करें कि बैकएंड चल रहा है।');
    }
}

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    if (!resultsDiv) return;

    // Get LIVE weather data from the weather widget
    const weatherTemp = document.getElementById('weather-temp');
    const weatherCondition = document.getElementById('weather-condition');
    const weatherHumidity = document.getElementById('weather-humidity');
    const weatherWind = document.getElementById('weather-wind');
    const weatherIcon = document.getElementById('weather-icon');

    const temp = weatherTemp?.textContent || '25°C';
    const condition = weatherCondition?.textContent || 'Clear';
    const humidity = weatherHumidity?.textContent || '65';
    const wind = weatherWind?.textContent || '12';
    const icon = weatherIcon?.textContent || '☀️';

    // Calculate soil health score based on pH and NPK levels
    const phScore = data.ph >= 6.0 && data.ph <= 7.5 ? 100 : Math.max(0, 100 - Math.abs(data.ph - 6.5) * 20);
    const nScore = data.nitrogenValue >= 80 ? 100 : (data.nitrogenValue / 80) * 100;
    const pScore = data.phosphorusValue >= 50 ? 100 : (data.phosphorusValue / 50) * 100;
    const kScore = data.potassiumValue >= 40 ? 100 : (data.potassiumValue / 40) * 100;
    const healthScore = Math.round((phScore + nScore + pScore + kScore) / 4);
    const targetStrokeDash = (healthScore / 100) * 565.48; // Circumference of 2*PI*90

    // Get region name for display
    const regionSelect = document.getElementById('region-select');
    const regionName = regionSelect?.options[regionSelect.selectedIndex]?.text || 'Your Region';

    const dashboardHtml = `
        <div class="farmflow-container fade-in-up">
            <div style="text-align: center; margin-bottom: 2rem;">
                <button onclick="window.location.reload()" style="background: white; color: var(--farm-dark); padding: 0.875rem 2rem; border-radius: 24px; border: 2px solid var(--farm-sage); font-weight: 700; cursor: pointer; transition: all 0.3s ease; display: inline-flex; align-items: center; gap: 0.5rem;">
                    <i data-lucide="refresh-cw" style="width: 18px; height: 18px;"></i>
                    New Analysis
                </button>
            </div>
            <div class="farmflow-dashboard">
                <!-- Column 1: Soil Health -->
                <div class="farm-card">
                    <div style="position: absolute; top: 1.5rem; right: 1.5rem; opacity: 0.08;">
                        <i data-lucide="shovel" style="width: 48px; height: 48px; color: var(--farm-sage);"></i>
                    </div>
                    <h2 style="color: var(--farm-dark); font-size: 1.5rem; margin-bottom: 1.5rem;">Soil Health</h2>
                    <div class="gauge-container">
                        <svg class="gauge-svg" viewBox="0 0 200 200">
                            <circle class="gauge-bg" cx="100" cy="100" r="90"></circle>
                            <circle id="gauge-anim" class="gauge-fill" cx="100" cy="100" r="90" style="stroke-dasharray: 0 565.48;"></circle>
                        </svg>
                        <div class="gauge-text">
                            <span class="gauge-value">${healthScore}%</span>
                            <span class="gauge-label">${currentLang === 'en' ? 'Quality' : 'गुणवत्ता'}</span>
                        </div>
                    </div>
                    <div style="text-align: left; margin-top: 1.5rem; padding: 1.25rem; background: var(--farm-bg); border-radius: 16px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
                            <span style="font-weight: 600; color: var(--farm-dark);">pH Level:</span>
                            <span style="font-weight: 700; color: var(--farm-sage);">${data.ph}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
                            <span style="font-weight: 600; color: var(--farm-dark);">Nitrogen:</span>
                            <span style="font-weight: 700; color: var(--farm-sage);">${data.nitrogen}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="font-weight: 600; color: var(--farm-dark);">Status:</span>
                            <span style="font-weight: 700; color: #10b981;">${currentLang === 'en' ? data.insights.soilHealth : data.insights.soilHealthHi}</span>
                        </div>
                    </div>
                </div>

                <!-- Column 2: Crop Monitor -->
                <div class="farm-card">
                    <div style="display: flex; gap: 0.75rem; justify-content: center; margin-bottom: 1.5rem;">
                        <div class="farm-icon-box"><i data-lucide="wheat" style="width: 20px; height: 20px;"></i></div>
                        <div class="farm-icon-box"><i data-lucide="leaf" style="width: 20px; height: 20px;"></i></div>
                        <div class="farm-icon-box"><i data-lucide="sprout" style="width: 20px; height: 20px;"></i></div>
                    </div>
                    <h2 style="color: var(--farm-dark); font-size: 1.5rem; margin-bottom: 1.5rem;">Crop Monitor</h2>
                    <div style="margin-top: 1.5rem;">
                        ${data.crops.slice(0, 3).map((crop, idx) => `
                            <div class="farm-progress-item">
                                <div class="farm-progress-label">
                                    <span style="display: flex; align-items: center; gap: 0.5rem;">
                                        <span style="width: 24px; height: 24px; background: var(--farm-sage-light); border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 800; color: var(--farm-dark);">${idx + 1}</span>
                                        ${crop.name}
                                    </span>
                                    <span style="color: var(--farm-sage); font-weight: 800;">${crop.suitability}%</span>
                                </div>
                                <div class="farm-progress-bar-bg">
                                    <div class="farm-progress-bar-fill" style="width: ${crop.suitability}%;"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div style="margin-top: 1.5rem; padding: 1rem; background: var(--farm-bg); border-radius: 12px; text-align: left;">
                        <p style="color: var(--farm-dark); font-weight: 700; font-size: 0.875rem; margin: 0;">
                            <i data-lucide="calendar" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i>
                            Estimated Harvest: 10-12 weeks
                        </p>
                    </div>
                </div>

                <!-- Column 3: Weather & Planning -->
                <div class="farm-card">
                    <div style="position: absolute; top: 1.5rem; right: 1.5rem; opacity: 0.08;">
                        <i data-lucide="cloud-sun" style="width: 48px; height: 48px; color: var(--farm-sage);"></i>
                    </div>
                    <h2 style="color: var(--farm-dark); font-size: 1.5rem; margin-bottom: 1.5rem;">Weather & Planning</h2>
                    <div style="font-size: 4.5rem; margin: 1rem 0; line-height: 1;">${icon}</div>
                    <div class="farm-weather-main" style="font-size: 1.5rem; margin-bottom: 0.5rem;">${temp}</div>
                    <div style="font-size: 1rem; color: var(--farm-accent); font-weight: 600; margin-bottom: 0.25rem; text-transform: capitalize;">${condition}</div>
                    <div style="font-size: 0.875rem; color: var(--text-dim); font-weight: 600; margin-bottom: 1.5rem;">${regionName}</div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 2rem;">
                        <div style="background: var(--farm-bg); padding: 0.875rem; border-radius: 12px; text-align: center;">
                            <i data-lucide="droplets" style="width: 20px; height: 20px; color: var(--farm-sage); margin-bottom: 0.25rem;"></i>
                            <div style="font-size: 1.25rem; font-weight: 800; color: var(--farm-dark);">${humidity}%</div>
                            <div style="font-size: 0.75rem; color: var(--text-dim); font-weight: 600;">Humidity</div>
                        </div>
                        <div style="background: var(--farm-bg); padding: 0.875rem; border-radius: 12px; text-align: center;">
                            <i data-lucide="wind" style="width: 20px; height: 20px; color: var(--farm-sage); margin-bottom: 0.25rem;"></i>
                            <div style="font-size: 1.25rem; font-weight: 800; color: var(--farm-dark);">${wind}</div>
                            <div style="font-size: 0.75rem; color: var(--text-dim); font-weight: 600;">km/h</div>
                        </div>
                    </div>
                    
                    <button class="farm-btn" style="width: 100%;">
                        <i data-lucide="calendar-check" style="width: 18px; height: 18px;"></i>
                        Irrigation Schedule
                    </button>
                </div>
            </div>
        </div>
    `;

    resultsDiv.innerHTML = dashboardHtml;

    // Fertilizer Recommendations
    const fertilizerHtml = data.fertilizerRecommendations && data.fertilizerRecommendations.length > 0 ? `
        <div class="glass-card fade-in-up" style="padding: 2.5rem; border-radius: 24px; animation-delay: 0.5s; background: rgba(245, 158, 11, 0.03); border-color: rgba(245, 158, 11, 0.1);">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                <i data-lucide="droplets" style="color: #f59e0b;"></i>
                <h2 style="margin: 0; font-size: 1.5rem; font-weight: 800; color: #92400e;">Fertilizer Recommendations</h2>
            </div>
            <div style="display: grid; gap: 1.25rem;">
                ${data.fertilizerRecommendations.map(rec => `
                    <div style="background: var(--bg-surface); padding: 1.5rem; border-radius: 16px; border-left: 4px solid #f59e0b; box-shadow: var(--shadow);">
                        <div style="font-weight: 800; color: #92400e; margin-bottom: 0.5rem; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 0.5px;">${rec.nutrient} • ${rec.status}</div>
                        <p style="margin: 0; color: var(--text-main); line-height: 1.7; font-size: 1rem; font-weight: 500;">${currentLang === 'en' ? rec.recommendation : rec.recommendationHi}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '';

    // pH Recommendation
    const phRecommendationHtml = data.phRecommendation ? `
        <div class="glass-card fade-in-up" style="padding: 2.5rem; border-radius: 24px; animation-delay: 0.6s; background: rgba(59, 130, 246, 0.03); border-color: rgba(59, 130, 246, 0.1);">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                <i data-lucide="beaker" style="color: #3b82f6;"></i>
                <h3 style="margin: 0; font-size: 1.375rem; font-weight: 800; color: #1e40af;">pH Correction Needed</h3>
            </div>
            <div style="background: var(--bg-surface); padding: 1.5rem; border-radius: 16px; box-shadow: var(--shadow);">
                <p style="margin: 0 0 0.75rem 0; color: #1e40af; font-weight: 800; text-transform: uppercase; font-size: 0.875rem;">Status: ${data.phRecommendation.status}</p>
                <p style="margin: 0; color: var(--text-main); line-height: 1.7; font-size: 1rem; font-weight: 500;">${currentLang === 'en' ? data.phRecommendation.recommendation : data.phRecommendation.recommendationHi}</p>
            </div>
        </div>
    ` : '';

    // Chart visualization
    const chartHtml = data.chart ? `
        <div class="glass-card fade-in-up" style="max-width: 900px; margin: 3rem auto; padding: 2.5rem; border-radius: 40px; animation-delay: 0.4s;">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                <i data-lucide="bar-chart-3" style="color: var(--primary);"></i>
                <h2 style="margin: 0; font-size: 1.5rem; font-weight: 800;">Suitability Analysis</h2>
            </div>
            <div style="background: white; padding: 1.5rem; border-radius: 24px; border: 1px solid var(--border);">
                <img src="data:image/png;base64,${data.chart}" alt="Crop Suitability Chart" style="width: 100%; border-radius: 12px;">
            </div>
        </div>
    ` : '';

    resultsDiv.innerHTML = dashboardHtml + chartHtml;
    resultsDiv.classList.remove('hidden');

    // Hide the upload tool section after successful analysis
    const uploadToolLayout = document.querySelector('.farm-tool-layout');
    if (uploadToolLayout) {
        uploadToolLayout.style.display = 'none';
    }

    // Reinitialize lucide icons
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // Trigger Gauge Animation
    setTimeout(() => {
        const gaugeAnim = document.getElementById('gauge-anim');
        if (gaugeAnim) {
            gaugeAnim.style.strokeDasharray = `${targetStrokeDash} 565.48`;
        }
    }, 100);

    // Scroll to results with smooth animation
    setTimeout(() => {
        resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
}

// Helper function to create clean nutrient bars
function createCleanNutrientBar(name, symbol, level, value, color, maxValue) {
    const percentage = Math.min((value / maxValue) * 100, 100);
    const statusColor = level === 'High' ? '#10b981' : level === 'Medium' ? '#f59e0b' : '#ef4444';
    const localizedLevel = i18n[currentLang][`status-${level.toLowerCase()}`] || level;

    return `
        <div class="nutrient-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <div style="width: 44px; height: 44px; border-radius: 12px; background: ${color}; display: flex; align-items: center; justify-content: center; font-weight: 800; color: white; font-size: 1.25rem; box-shadow: 0 4px 12px ${color}44;">
                        ${symbol}
                    </div>
                    <div style="text-align: left;">
                        <div style="font-weight: 700; color: var(--text-main); font-size: 1rem;">${name}</div>
                        <div style="font-size: 0.8125rem; color: var(--text-dim); font-weight: 600;">${value} kg/acre</div>
                    </div>
                </div>
                <div style="padding: 0.4rem 0.75rem; border-radius: 99px; background: ${statusColor}15; color: ${statusColor}; font-weight: 700; font-size: 0.75rem; border: 1px solid ${statusColor}33; text-transform: uppercase;">
                    ${localizedLevel}
                </div>
            </div>
            <div style="width: 100%; height: 8px; background: var(--border); border-radius: 99px; overflow: hidden;">
                <div style="width: ${percentage}%; height: 100%; background: ${color}; border-radius: 99px; transition: width 1s cubic-bezier(0.17, 0.67, 0.83, 0.67);"></div>
            </div>
        </div>
    `;
}

function createCleanCropCard(crop, index, seasonalInfo) {
    const timing = seasonalInfo?.find(s => s.crop === crop.name)?.timing;
    const isCurrentSeason = timing?.isCurrentSeason;
    const rankColors = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444'];
    const rankColor = rankColors[index] || '#6b7280';

    return `
        <div class="crop-item-modern">
            <div style="display: flex; align-items: center; gap: 1.25rem; flex: 1;">
                <div style="width: 48px; height: 48px; border-radius: 14px; background: ${rankColor}; display: flex; align-items: center; justify-content: center; color: white; font-weight: 800; font-size: 1.5rem; box-shadow: 0 4px 12px ${rankColor}44;">
                    ${index + 1}
                </div>
                <div style="text-align: left; flex: 1;">
                    <div style="font-size: 1.25rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.25rem;">${crop.name}</div>
                    ${timing ? `
                        <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: var(--text-dim); font-weight: 600;">
                            <i data-lucide="calendar" style="width: 16px; height: 16px;"></i>
                            <span>${currentLang === 'en' ? timing.season : timing.seasonHi} (${currentLang === 'en' ? timing.plantingMonths : timing.plantingMonthsHi})</span>
                            ${isCurrentSeason ? `<span class="shimmer" style="padding: 0.25rem 0.75rem; background: var(--primary); color: white; border-radius: 99px; font-size: 0.75rem; font-weight: 700; margin-left: 0.5rem;">PLANT NOW</span>` : ''}
                        </div>
                    ` : ''}
                </div>
            </div>
            <div style="text-align: right;">
                <div style="font-size: 1.75rem; font-weight: 900; color: ${rankColor}; line-height: 1;">${crop.suitability}%</div>
                <div style="font-size: 0.75rem; color: var(--text-dim); font-weight: 700; margin-top: 0.25rem; text-transform: uppercase; letter-spacing: 0.5px;">Match</div>
            </div>
        </div>
    `;
}

// Helper function to get rank-based colors
function getRankColor(index) {
    const colors = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444'];
    return colors[index] || '#6b7280';
}

function showError(message) {
    const errorDiv = document.getElementById('error-container');
    const errorMessage = document.getElementById('error-message');

    if (errorDiv && errorMessage) {
        errorMessage.textContent = message;
        errorDiv.classList.remove('hidden');

        // Reinitialize lucide icons
        if (typeof lucide !== 'undefined') lucide.createIcons();

        // Scroll to error
        errorDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

async function checkStatus() {
    try {
        const response = await fetch(`${API_URL}/model-status`);
        const data = await response.json();

        if (!data.modelExists) {
            console.warn('ML model not found. Please train the model first.');
        } else {
            console.log('ML model is ready');
        }
    } catch (error) {
        console.log('Backend server not running or not accessible');
    }
}

// --- Water Requirement Calculator ---
function setupWaterCalculator() {
    const calcBtn = document.getElementById('calc-water-btn');
    if (calcBtn) {
        calcBtn.addEventListener('click', calculateWater);
    }
}

function calculateWater() {
    const region = document.getElementById('water-region').value;
    const crop = document.getElementById('water-crop').value;
    const soil = document.getElementById('water-soil').value;
    const areaInput = document.getElementById('water-area');
    const area = parseFloat(areaInput.value);
    const unit = document.getElementById('water-unit').value;
    const resultDiv = document.getElementById('water-result');

    if (!area || area <= 0) {
        // Show validation error
        areaInput.style.borderColor = '#ef4444';
        setTimeout(() => areaInput.style.borderColor = '#e0e6d9', 2000);
        return;
    }

    // Base water requirement in mm per season
    const waterReqs = {
        'rice': 1200,
        'wheat': 450,
        'cotton': 700,
        'sugarcane': 2000,
        'maize': 500,
        'soybean': 450
    };

    // Regional Factor (Heat/Evaporation multiplier)
    const regionalFactors = {
        'pune': 1.0,
        'mumbai': 1.1,
        'nagpur': 1.4, // Very hot
        'nashik': 1.1,
        'aurangabad': 1.3
    };

    // Soil Factor (Retention capability)
    // Low factor = holds water well (need less irrigation)
    // High factor = drains fast (need more irrigation)
    const soilFactors = {
        'clay': 0.8,
        'black': 0.85,
        'loam': 1.0,
        'red': 1.1,
        'sandy': 1.3
    };

    // Unit Conversion to Meters Squared
    let areaInSqMeters = 0;
    if (unit === 'acre') areaInSqMeters = area * 4046.86;
    else if (unit === 'hectare') areaInSqMeters = area * 10000;
    else if (unit === 'guntha') areaInSqMeters = area * 101.17;

    // Calculation logic
    const reqMm = waterReqs[crop] || 500;
    const regFactor = regionalFactors[region] || 1.0;
    const sFactor = soilFactors[soil] || 1.0;

    // Total adjusted depth
    const totalMm = reqMm * regFactor * sFactor;

    // Volume (m3) = Area (m2) * Depth (m)
    const volumeM3 = areaInSqMeters * (totalMm / 1000);

    // Convert to Gallons (1 m3 = 264.172 Gallons)
    const totalGallons = volumeM3 * 264.172;

    // Daily Usage Calculation
    // Estimate crop duration in days
    const cropDurations = {
        'rice': 120, // 4 months
        'wheat': 120,
        'cotton': 160,
        'sugarcane': 365, // Year round
        'maize': 100,
        'soybean': 100
    };
    const days = cropDurations[crop] || 120;
    const dailyGallons = totalGallons / days;

    // Update Display
    document.getElementById('water-value').textContent = Math.round(totalGallons).toLocaleString();
    document.getElementById('water-value-daily').textContent = Math.round(dailyGallons).toLocaleString();

    // Update text formatting
    const cropName = document.querySelector(`#water-crop option[value="${crop}"]`).textContent;
    const regionName = document.querySelector(`#water-region option[value="${region}"]`).textContent;
    const soilName = document.querySelector(`#water-soil option[value="${soil}"]`).textContent.split(' ')[0];

    document.getElementById('water-crop-display').textContent = cropName;
    document.getElementById('water-region-display').textContent = `${regionName} (${soilName} Soil)`;

    // Show result
    resultDiv.classList.remove('hidden');

    // Smooth scroll to result
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// --- Community Page Dynamic Content ---
const communityData = {
    stats: {
        farmers: 12500,
        experts: 350,
        discussions: 45000,
        solutions: 38200
    },
    forums: [
        {
            id: 1,
            icon: 'wheat',
            title: 'Regional Wheat Growing',
            description: 'Discuss challenges and tips for wheat farming in North India. Share variety recommendations and seasonal insights.',
            members: 2300,
            posts: 450,
            lastActive: '2 min ago',
            color: '#f59e0b',
            badge: { text: 'Active Now', type: 'active' }
        },
        {
            id: 2,
            icon: 'shield-check',
            title: 'Ask an Agronomist',
            description: 'Get your technical farming questions answered by certified professionals with verified credentials.',
            members: 5100,
            posts: 1200,
            lastActive: '5 min ago',
            color: '#6366f1',
            badge: { text: 'Verified Experts', type: 'expert' }
        },
        {
            id: 3,
            icon: 'sprout',
            title: 'Organic Farming Practices',
            description: 'Share and learn sustainable, chemical-free farming techniques. From composting to bio-pesticides.',
            members: 3800,
            posts: 890,
            lastActive: '12 min ago',
            color: '#10b981',
            badge: { text: 'Trending', type: 'trending' }
        },
        {
            id: 4,
            icon: 'droplets',
            title: 'Water Management & Irrigation',
            description: 'Discuss drip irrigation, rainwater harvesting, and efficient water use for higher yields.',
            members: 1900,
            posts: 620,
            lastActive: '30 min ago',
            color: '#3b82f6',
            badge: null
        },
        {
            id: 5,
            icon: 'bug',
            title: 'Pest & Disease Control',
            description: 'Identify and manage crop pests and diseases with community-driven solutions and expert guidance.',
            members: 4200,
            posts: 1500,
            lastActive: '1 hr ago',
            color: '#ef4444',
            badge: { text: 'Hot', type: 'active' }
        },
        {
            id: 6,
            icon: 'trending-up',
            title: 'Market Prices & Selling',
            description: 'Stay updated on crop prices, find buyers, negotiate better deals, and discuss market trends.',
            members: 6700,
            posts: 2100,
            lastActive: '15 min ago',
            color: '#8b5cf6',
            badge: null
        }
    ],
    discussions: [
        {
            id: 1,
            title: 'Best fertilizer for cotton in black soil?',
            preview: "I'm growing cotton in Vidarbha region with black soil. Looking for organic fertilizer recommendations that won't damage the soil structure...",
            author: 'Ramesh Kumar',
            authorInitials: 'RK',
            replies: 12,
            views: 234,
            likes: 18,
            timeAgo: 2,
            category: 'Soil & Fertilizer',
            hasExpertReply: false,
            isTrending: true
        },
        {
            id: 2,
            title: 'Drip irrigation setup cost for 5 acres',
            preview: 'Can anyone share their experience with drip irrigation costs and government subsidies available in Maharashtra? Looking for reliable vendors.',
            author: 'Suresh Patil',
            authorInitials: 'SP',
            replies: 8,
            views: 156,
            likes: 24,
            timeAgo: 5,
            category: 'Irrigation',
            hasExpertReply: true,
            isTrending: false
        },
        {
            id: 3,
            title: 'Yellow leaves on wheat crop - help needed!',
            preview: 'My wheat crop is showing yellow leaves at 45 days stage. Soil test shows pH 7.8. Could this be nitrogen deficiency or a fungal disease?',
            author: 'Vijay Singh',
            authorInitials: 'VS',
            replies: 15,
            views: 412,
            likes: 31,
            timeAgo: 8,
            category: 'Pest & Disease',
            hasExpertReply: true,
            isTrending: true
        },
        {
            id: 4,
            title: 'PM-KISAN installment delayed - anyone else?',
            preview: 'My PM-KISAN 16th installment has not been credited yet. It was supposed to arrive on Feb 10. Has anyone faced this issue?',
            author: 'Deepak Yadav',
            authorInitials: 'DY',
            replies: 22,
            views: 567,
            likes: 45,
            timeAgo: 12,
            category: 'Government Schemes',
            hasExpertReply: false,
            isTrending: true
        },
        {
            id: 5,
            title: 'Neem oil spray preparation for tomato plants',
            preview: 'What is the correct dilution ratio for neem oil spray on tomato plants? My plants are 3 weeks old and showing small white fly infestation.',
            author: 'Meena Devi',
            authorInitials: 'MD',
            replies: 9,
            views: 189,
            likes: 14,
            timeAgo: 18,
            category: 'Organic Farming',
            hasExpertReply: true,
            isTrending: false
        }
    ],
    experts: [
        {
            id: 1,
            name: 'Dr. Kavita Sharma',
            initials: 'KS',
            specialty: 'Soil Scientist',
            description: '15+ years experience in soil health management and sustainable agriculture practices.',
            answers: 450,
            rating: 4.9,
            available: true,
            tags: ['Soil Health', 'Composting', 'NPK']
        },
        {
            id: 2,
            name: 'Rajesh Patel',
            initials: 'RP',
            specialty: 'Irrigation Expert',
            description: 'Specialist in modern irrigation systems and water conservation techniques for small farms.',
            answers: 320,
            rating: 4.8,
            available: true,
            tags: ['Drip Irrigation', 'Water Saving', 'Micro-Irrigation']
        },
        {
            id: 3,
            name: 'Dr. Anita Mehta',
            initials: 'AM',
            specialty: 'Crop Protection',
            description: 'Expert in integrated pest management and organic farming solutions across India.',
            answers: 280,
            rating: 4.7,
            available: false,
            tags: ['IPM', 'Bio-Pesticides', 'Disease ID']
        },
        {
            id: 4,
            name: 'Sunil Aggarwal',
            initials: 'SA',
            specialty: 'Market Analyst',
            description: 'Agricultural market researcher with deep knowledge in MSP, commodity trading, and market access.',
            answers: 195,
            rating: 4.6,
            available: true,
            tags: ['Mandi Prices', 'MSP', 'Export']
        }
    ]
};

function renderCommunityStats() {
    const statsContainer = document.getElementById('community-stats');
    if (!statsContainer) return;

    const { farmers, experts, discussions, solutions } = communityData.stats;

    statsContainer.innerHTML = `
        <div class="comm-stat-card">
            <div class="comm-stat-icon" style="background: rgba(16, 185, 129, 0.12); color: #059669;">
                <i data-lucide="users"></i>
            </div>
            <div class="comm-stat-value">${farmers.toLocaleString()}+</div>
            <div class="comm-stat-label">Active Farmers</div>
        </div>
        <div class="comm-stat-card">
            <div class="comm-stat-icon" style="background: rgba(99, 102, 241, 0.12); color: #6366f1;">
                <i data-lucide="shield-check"></i>
            </div>
            <div class="comm-stat-value">${experts}+</div>
            <div class="comm-stat-label">Verified Experts</div>
        </div>
        <div class="comm-stat-card">
            <div class="comm-stat-icon" style="background: rgba(245, 158, 11, 0.12); color: #f59e0b;">
                <i data-lucide="message-circle"></i>
            </div>
            <div class="comm-stat-value">${(discussions / 1000).toFixed(0)}K+</div>
            <div class="comm-stat-label">Discussions</div>
        </div>
        <div class="comm-stat-card">
            <div class="comm-stat-icon" style="background: rgba(16, 185, 129, 0.12); color: #10b981;">
                <i data-lucide="check-circle-2"></i>
            </div>
            <div class="comm-stat-value">${(solutions / 1000).toFixed(0)}K+</div>
            <div class="comm-stat-label">Problems Solved</div>
        </div>
    `;
}

function renderForums() {
    const forumsContainer = document.getElementById('forums-grid');
    if (!forumsContainer) return;

    const forumsHTML = communityData.forums.map(forum => {
        const badgeClass = forum.badge ? `comm-badge-${forum.badge.type}` : '';
        return `
        <div class="comm-forum-card" style="--forum-accent: ${forum.color};">
            <div class="comm-forum-header">
                <div class="comm-forum-icon" style="background: ${forum.color}15; color: ${forum.color};">
                    <i data-lucide="${forum.icon}"></i>
                </div>
                ${forum.badge ? `<span class="comm-badge ${badgeClass}">${forum.badge.text}</span>` : ''}
            </div>
            <h3 class="comm-forum-title">${forum.title}</h3>
            <p class="comm-forum-desc">${forum.description}</p>
            <div class="comm-forum-meta">
                <span><i data-lucide="users" style="width: 14px; height: 14px;"></i> ${(forum.members / 1000).toFixed(1)}K</span>
                <span><i data-lucide="message-circle" style="width: 14px; height: 14px;"></i> ${forum.posts}</span>
                <span class="comm-forum-active"><i data-lucide="clock" style="width: 14px; height: 14px;"></i> ${forum.lastActive}</span>
            </div>
            <a href="#" class="comm-forum-join">Join Discussion <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i></a>
        </div>`;
    }).join('');

    forumsContainer.innerHTML = forumsHTML;
}

function renderRecentDiscussions(filter) {
    const discussionsContainer = document.getElementById('recent-discussions');
    if (!discussionsContainer) return;

    let filtered = communityData.discussions;
    if (filter === 'expert') {
        filtered = filtered.filter(d => d.hasExpertReply);
    } else if (filter === 'trending') {
        filtered = filtered.filter(d => d.isTrending);
    }

    if (filtered.length === 0) {
        discussionsContainer.innerHTML = `
            <div class="comm-empty-state">
                <i data-lucide="search-x" style="width: 48px; height: 48px; color: var(--text-dim); opacity: 0.5;"></i>
                <p>No discussions found for this filter.</p>
            </div>`;
        return;
    }

    const discussionsHTML = filtered.map((d, idx) => {
        const timeText = d.timeAgo < 24
            ? `${d.timeAgo}h ago`
            : `${Math.floor(d.timeAgo / 24)}d ago`;

        return `
        <div class="comm-discussion-card" style="animation-delay: ${idx * 0.08}s;">
            <div class="comm-discussion-avatar" style="background: ${d.hasExpertReply ? 'linear-gradient(135deg, #059669, #10b981)' : 'linear-gradient(135deg, #3b82f6, #6366f1)'};">
                ${d.authorInitials}
            </div>
            <div class="comm-discussion-body">
                <div class="comm-discussion-top">
                    <h3 class="comm-discussion-title">${d.title}</h3>
                    <span class="comm-discussion-time"><i data-lucide="clock" style="width: 12px; height: 12px;"></i> ${timeText}</span>
                </div>
                <p class="comm-discussion-preview">${d.preview}</p>
                <div class="comm-discussion-footer">
                    <span class="comm-discussion-author"><i data-lucide="user" style="width: 13px; height: 13px;"></i> ${d.author}</span>
                    <span class="comm-discussion-cat">${d.category}</span>
                    ${d.hasExpertReply ? '<span class="comm-badge comm-badge-expert" style="font-size: 0.65rem;">✓ Expert Reply</span>' : ''}
                    <div class="comm-discussion-stats">
                        <span><i data-lucide="message-square" style="width: 13px; height: 13px;"></i> ${d.replies}</span>
                        <span><i data-lucide="eye" style="width: 13px; height: 13px;"></i> ${d.views}</span>
                        <span><i data-lucide="heart" style="width: 13px; height: 13px;"></i> ${d.likes}</span>
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');

    discussionsContainer.innerHTML = discussionsHTML;
}

function renderFeaturedExperts() {
    const expertsContainer = document.getElementById('featured-experts');
    if (!expertsContainer) return;

    const expertsHTML = communityData.experts.map(expert => `
        <div class="comm-expert-card">
            <div class="comm-expert-avatar">
                ${expert.initials}
                ${expert.available ? '<span class="comm-expert-online"></span>' : ''}
            </div>
            <h3 class="comm-expert-name">${expert.name}</h3>
            <p class="comm-expert-specialty">${expert.specialty}</p>
            <div class="comm-expert-rating">
                <i data-lucide="star" style="width: 14px; height: 14px; fill: #facc15; color: #facc15;"></i>
                <span>${expert.rating}</span>
            </div>
            <p class="comm-expert-desc">${expert.description}</p>
            <div class="comm-expert-tags">
                ${expert.tags.map(t => `<span class="comm-expert-tag">${t}</span>`).join('')}
            </div>
            <div class="comm-expert-footer">
                <span class="comm-expert-answers"><i data-lucide="check-circle-2" style="width: 14px; height: 14px;"></i> ${expert.answers} answers</span>
                <button class="comm-expert-ask-btn ${expert.available ? '' : 'disabled'}">
                    ${expert.available ? '<i data-lucide="message-circle" style="width: 14px; height: 14px;"></i> Ask' : 'Unavailable'}
                </button>
            </div>
        </div>
    `).join('');

    expertsContainer.innerHTML = expertsHTML;
}

function setupCommunityModal() {
    const askBtn = document.getElementById('ask-question-btn');
    const overlay = document.getElementById('ask-modal-overlay');
    const closeBtn = document.getElementById('close-modal-btn');
    const form = document.getElementById('ask-question-form');

    if (!askBtn || !overlay) return;

    askBtn.addEventListener('click', () => {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    const closeModal = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('question-title').value;
            const category = document.getElementById('question-category');
            const catText = category.options[category.selectedIndex].text;

            // Add to discussions
            communityData.discussions.unshift({
                id: Date.now(),
                title: title,
                preview: document.getElementById('question-detail').value || title,
                author: 'You',
                authorInitials: 'YO',
                replies: 0,
                views: 1,
                likes: 0,
                timeAgo: 0,
                category: catText,
                hasExpertReply: false,
                isTrending: false
            });

            renderRecentDiscussions('all');
            if (typeof lucide !== 'undefined') lucide.createIcons();

            form.reset();
            closeModal();
        });
    }
}

function setupDiscussionFilters() {
    const filterContainer = document.getElementById('discussion-filters');
    if (!filterContainer) return;

    filterContainer.addEventListener('click', (e) => {
        const tab = e.target.closest('.filter-tab');
        if (!tab) return;

        filterContainer.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.dataset.filter;
        renderRecentDiscussions(filter);
        if (typeof lucide !== 'undefined') lucide.createIcons();
    });
}

function updateCommunityStats() {
    communityData.stats.farmers += Math.floor(Math.random() * 5);
    communityData.stats.discussions += Math.floor(Math.random() * 10);
    communityData.stats.solutions += Math.floor(Math.random() * 8);

    renderCommunityStats();
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // Update CTA counts
    const ctaFarmers = document.getElementById('cta-farmer-count');
    const ctaExperts = document.getElementById('cta-expert-count');
    if (ctaFarmers) ctaFarmers.textContent = communityData.stats.farmers.toLocaleString();
    if (ctaExperts) ctaExperts.textContent = communityData.stats.experts.toLocaleString();
}

function updateDiscussionTimes() {
    communityData.discussions.forEach(d => { d.timeAgo += 1; });
    renderRecentDiscussions('all');
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function initCommunity() {
    if (!document.getElementById('community-stats')) return;

    renderCommunityStats();
    renderForums();
    renderRecentDiscussions('all');
    renderFeaturedExperts();
    setupCommunityModal();
    setupDiscussionFilters();

    if (typeof lucide !== 'undefined') lucide.createIcons();

    setInterval(updateCommunityStats, 15000);
    setInterval(updateDiscussionTimes, 3600000);
}

// ═══════════════════════════════════════════════════════════════
//  AUTH MODULE  –  Login / Sign-Up / Logout
// ═══════════════════════════════════════════════════════════════

const AUTH_API = 'http://localhost:5000/api/auth';

/* ── helpers ─────────────────────────────────────────────────── */
function getToken() { return localStorage.getItem('ks_token'); }
function getUser() { try { return JSON.parse(localStorage.getItem('ks_user')); } catch { return null; } }
function saveAuth(t, u) { localStorage.setItem('ks_token', t); localStorage.setItem('ks_user', JSON.stringify(u)); }
function clearAuth() { localStorage.removeItem('ks_token'); localStorage.removeItem('ks_user'); }

function showAuthToast(msg, type = 'success') {
    const t = document.getElementById('auth-toast');
    if (!t) return;
    t.textContent = msg;
    t.className = 'auth-toast show ' + (type === 'error' ? 'auth-toast-error' : 'auth-toast-success');
    clearTimeout(t._tid);
    t._tid = setTimeout(() => { t.className = 'auth-toast'; }, 3500);
}

function setAuthMessage(panelId, msg, type = 'error') {
    const el = document.getElementById(panelId + '-message');
    if (!el) return;
    el.textContent = msg;
    el.className = 'auth-message ' + (type === 'error' ? 'auth-msg-error' : 'auth-msg-success');
    el.style.display = msg ? 'block' : 'none';
}

function setBtnLoading(btnId, loading) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.disabled = loading;
    const spinner = btn.querySelector('.auth-spinner');
    if (spinner) spinner.style.display = loading ? 'inline-block' : 'none';
}

/* ── modal open / close ─────────────────────────────────────── */
function openAuthModal(tab = 'login') {
    const overlay = document.getElementById('auth-overlay');
    if (!overlay) return;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    switchAuthTab(tab);
    // Clear old messages
    setAuthMessage('login', '', '');
    setAuthMessage('signup', '', '');
}

function closeAuthModal() {
    const overlay = document.getElementById('auth-overlay');
    if (!overlay) return;
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.auth-form-panel').forEach(p => p.classList.remove('active'));
    const tabBtn = document.getElementById('tab-' + tab);
    const tabPanel = document.getElementById('panel-' + tab);
    if (tabBtn) tabBtn.classList.add('active');
    if (tabPanel) tabPanel.classList.add('active');
}

/* ── navbar: show logged-in user or Sign Up button ─────────── */
function updateNavbarAuth() {
    const user = getUser();
    const signupBtn = document.getElementById('open-auth-modal');
    if (!signupBtn) return;

    if (user) {
        // Replace the Sign Up button with user greeting + logout
        signupBtn.outerHTML = `
            <div class="nav-user-info" id="nav-user-info">
                <span class="nav-user-name">
                    <i data-lucide="user-check" style="width:16px;height:16px;"></i>
                    ${user.name}
                </span>
                <button class="btn-logout" id="logout-btn" onclick="handleLogout()">
                    <i data-lucide="log-out" style="width:14px;height:14px;"></i> Logout
                </button>
            </div>`;
        if (typeof lucide !== 'undefined') lucide.createIcons();
    } else {
        // Ensure Sign Up button is present (reload safety)
        const navUserInfo = document.getElementById('nav-user-info');
        if (navUserInfo) {
            navUserInfo.outerHTML = `<button class="btn-signup" id="open-auth-modal" onclick="openAuthModal('signup')">Sign Up</button>`;
        }
    }
}

/* ── login ──────────────────────────────────────────────────── */
async function handleLogin() {
    const email = (document.getElementById('login-email')?.value || '').trim();
    const password = (document.getElementById('login-password')?.value || '').trim();

    setAuthMessage('login', '');
    if (!email || !password) { setAuthMessage('login', 'Please enter your email and password.'); return; }

    setBtnLoading('login-submit-btn', true);
    try {
        const res = await fetch(AUTH_API + '/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();

        if (!res.ok) {
            setAuthMessage('login', data.error || 'Login failed. Please try again.');
        } else {
            saveAuth(data.token, data.user);
            closeAuthModal();
            updateNavbarAuth();
            showAuthToast(`Welcome back, ${data.user.name}! 🎉`);
            // Clear inputs
            document.getElementById('login-email').value = '';
            document.getElementById('login-password').value = '';
        }
    } catch (err) {
        setAuthMessage('login', 'Cannot reach server. Is the backend running?');
        console.error('Login error:', err);
    } finally {
        setBtnLoading('login-submit-btn', false);
    }
}

/* ── register ───────────────────────────────────────────────── */
async function handleRegister() {
    const name = (document.getElementById('signup-name')?.value || '').trim();
    const email = (document.getElementById('signup-email')?.value || '').trim();
    const phone = (document.getElementById('signup-phone')?.value || '').trim();
    const password = (document.getElementById('signup-password')?.value || '').trim();

    setAuthMessage('signup', '');
    if (!name || !email || !password) { setAuthMessage('signup', 'Name, email and password are required.'); return; }
    if (password.length < 6) { setAuthMessage('signup', 'Password must be at least 6 characters.'); return; }

    setBtnLoading('signup-submit-btn', true);
    try {
        const res = await fetch(AUTH_API + '/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, phone, password })
        });
        const data = await res.json();

        if (!res.ok) {
            setAuthMessage('signup', data.error || 'Registration failed. Please try again.');
        } else {
            saveAuth(data.token, data.user);
            closeAuthModal();
            updateNavbarAuth();
            showAuthToast(`Account created! Welcome, ${data.user.name}! 🌱`);
            // Clear inputs
            ['signup-name', 'signup-email', 'signup-phone', 'signup-password'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.value = '';
            });
        }
    } catch (err) {
        setAuthMessage('signup', 'Cannot reach server. Is the backend running?');
        console.error('Register error:', err);
    } finally {
        setBtnLoading('signup-submit-btn', false);
    }
}

/* ── logout ─────────────────────────────────────────────────── */
function handleLogout() {
    clearAuth();
    // Restore Sign Up button
    const navUserInfo = document.getElementById('nav-user-info');
    if (navUserInfo) {
        navUserInfo.outerHTML = `<button class="btn-signup" id="open-auth-modal">Sign Up</button>`;
        // Re-attach listener
        const newBtn = document.getElementById('open-auth-modal');
        if (newBtn) newBtn.addEventListener('click', () => openAuthModal('signup'));
    }
    showAuthToast('You have been logged out.');
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

/* ── password visibility toggle ─────────────────────────────── */
function togglePwd(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const isText = input.type === 'text';
    input.type = isText ? 'password' : 'text';
    btn.innerHTML = isText
        ? '<i data-lucide="eye" style="width:16px;height:16px;"></i>'
        : '<i data-lucide="eye-off" style="width:16px;height:16px;"></i>';
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

/* ── wire up all auth events on DOMContentLoaded ────────────── */
(function setupAuth() {
    function attachAuthListeners() {
        // Open modal – Sign Up button in navbar
        const openBtn = document.getElementById('open-auth-modal');
        if (openBtn) openBtn.addEventListener('click', () => openAuthModal('signup'));

        // Open modal – Login button in hero section
        const heroLoginBtn = document.getElementById('hero-login-btn');
        if (heroLoginBtn) heroLoginBtn.addEventListener('click', () => openAuthModal('login'));

        // Open modal – "Get Started Now" CTA button
        document.querySelectorAll('.btn-signup').forEach(btn => {
            if (btn.id !== 'open-auth-modal') {
                btn.addEventListener('click', () => openAuthModal('signup'));
            }
        });

        // Close button inside modal
        const closeBtn = document.getElementById('auth-close-btn');
        if (closeBtn) closeBtn.addEventListener('click', closeAuthModal);

        // Click outside the card closes modal
        const overlay = document.getElementById('auth-overlay');
        if (overlay) {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) closeAuthModal();
            });
        }

        // Escape key closes modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeAuthModal();
        });

        // Tabs
        document.querySelectorAll('.auth-tab-btn').forEach(btn => {
            btn.addEventListener('click', () => switchAuthTab(btn.dataset.tab));
        });

        // Enter key submits forms
        const loginPwd = document.getElementById('login-password');
        if (loginPwd) loginPwd.addEventListener('keydown', e => { if (e.key === 'Enter') handleLogin(); });

        const signupPwd = document.getElementById('signup-password');
        if (signupPwd) signupPwd.addEventListener('keydown', e => { if (e.key === 'Enter') handleRegister(); });

        // Restore auth state on page load
        updateNavbarAuth();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', attachAuthListeners);
    } else {
        attachAuthListeners();
    }
})();

