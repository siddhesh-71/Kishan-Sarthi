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
        'nav-market': 'Market'
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
        'nav-market': 'बाजार'
    }
};

// --- Core Initialization ---
function init() {
    console.log("Initializing KishanSarthi App...");
    loadSettings();
    setupToggles();
    setupPrediction();
    setupNavigation();
    checkStatus();
    // updateTranslations will handle renderContent/renderLaws/renderSchemes
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
    } catch (e) {
        console.error("Error rendering dynamic content:", e);
    }

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// --- Content Rendering ---
function renderLaws() {
    const lawsList = document.getElementById('laws-list');
    if (!lawsList) return;

    const lawsData = [
        {
            tag: currentLang === 'en' ? 'Land Rights' : 'भूमि अधिकार',
            title: currentLang === 'en' ? 'Land Ownership (Bhoo-Swamitva)' : 'भूमि स्वामित्व (भू-स्वामित्व)',
            desc: currentLang === 'en' ? 'Know your rights regarding ancestral property and mutation (7/12 extract).' : 'अपनी पैतृक संपत्ति और फेरफार (7/12 एक्सट्रैक्ट) के संबंध में अपने अधिकार जानें।',
            link: 'https://dolr.gov.in/'
        },
        {
            tag: currentLang === 'en' ? 'Trade' : 'व्यापार',
            title: currentLang === 'en' ? "Farmer's Right to Sell (APMC)" : 'किसान का बेचने का अधिकार (APMC)',
            desc: currentLang === 'en' ? 'Understand rules of APMC market yards and direct marketing laws.' : 'APMC मार्केट यार्ड और प्रत्यक्ष विपणन कानूनों के नियमों को समझें।',
            link: 'https://enam.gov.in/'
        }
    ];

    lawsList.innerHTML = lawsData.map(law => `
        <div class="card" style="padding: 2.5rem; border-left: 6px solid var(--primary);">
            <div class="hero-tag" style="margin-bottom: 1rem; background: var(--bg-main);">${law.tag}</div>
            <h3 style="margin-bottom: 1rem;">${law.title}</h3>
            <p style="color: var(--text-dim); margin-bottom: 1.5rem;">${law.desc}</p>
            <a href="${law.link}" target="_blank" class="text-btn" style="text-decoration: none; display: flex; align-items: center; gap: 0.5rem; color: var(--primary); font-weight: 700;">
                ${currentLang === 'en' ? 'Official Portal' : 'आधिकारिक पोर्टल'} <i data-lucide="external-link"></i>
            </a>
        </div>
    `).join('');
}

function renderSchemes() {
    const schemesList = document.getElementById('schemes-list');
    if (!schemesList) return;

    const schemesData = [
        {
            tag: currentLang === 'en' ? 'Financial Support' : 'वित्तीय सहायता',
            title: 'PM-KISAN',
            desc: currentLang === 'en' ? 'Direct income support of ₹6,000 per year to farmers.' : 'किसानों को प्रति वर्ष ₹6,000 की प्रत्यक्ष आय सहायता।',
            icon: 'banknote'
        },
        {
            tag: currentLang === 'en' ? 'Crop Insurance' : 'फसल बीमा',
            title: 'PMFBY',
            desc: currentLang === 'en' ? 'Insurance cover against natural crop failure.' : 'प्राकृतिक फसल खराबी के खिलाफ बीमा संरक्षण।',
            icon: 'cloud-rain'
        },
        {
            tag: currentLang === 'en' ? 'Credit & Loans' : 'क्रेडिट और ऋण',
            title: 'Kisan Credit Card (KCC)',
            desc: currentLang === 'en' ? 'Low interest credit for farm needs.' : 'कृषि जरूरतों के लिए कम ब्याज वाला क्रेडिट।',
            icon: 'credit-card'
        }
    ];

    schemesList.innerHTML = schemesData.map(scheme => `
        <div class="card" style="padding: 2.5rem;">
             <span class="hero-tag" style="margin-bottom: 1.5rem; font-size: 0.75rem;">${scheme.tag}</span>
            <div style="width: 50px; height: 50px; background: var(--primary-light); color: var(--primary-dark); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                <i data-lucide="${scheme.icon}"></i>
            </div>
            <h3 style="margin-bottom: 0.75rem;">${scheme.title}</h3>
            <p style="color: var(--text-dim); margin-bottom: 1.5rem; font-size: 0.95rem;">${scheme.desc}</p>
            <a href="#" class="learn-more">${currentLang === 'en' ? 'View Details' : 'विवरण देखें'} <i data-lucide="arrow-right"></i></a>
        </div>
    `).join('');
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
