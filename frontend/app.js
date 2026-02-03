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
    setupSchemeFilters();
    setupPolicyFilters();
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
