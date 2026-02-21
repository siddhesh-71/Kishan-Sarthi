/* =====================================================
   KishanSarthi Chatbot – chatbot.js
   Rule-based farmer assistant. No backend required.
   ===================================================== */

(function () {
    'use strict';

    /* ─── Knowledge Base ─────────────────────────── */
    var KB = [
        {
            patterns: ['scheme', 'subsid', 'pm-kisan', 'pm kisan', 'kisan samman', 'fasal bima', 'crop insurance', 'loan', 'kcc', 'kisan credit', 'yojana', 'benefit', 'government benefit', 'sarkar'],
            reply: '🏛️ <b>Government Schemes</b><br>KishanSarthi covers 200+ schemes including:<br>• <b>PM-KISAN</b> – ₹6,000/year direct benefit<br>• <b>PM Fasal Bima Yojana</b> – Crop insurance<br>• <b>KCC</b> – Easy farm loans<br>• <b>PMKSY</b> – Irrigation subsidies<br><br>👉 <a href="schemes.html">Browse All Schemes →</a>',
            chips: ['Crop insurance', 'Farm loans', 'PM-KISAN eligibility', 'Main menu']
        },
        {
            patterns: ['soil', 'mitti', 'soil test', 'soil analysis', 'soil health', 'nutrient', 'fertility', 'crop recommend', 'upload photo', 'ph level'],
            reply: '🧪 <b>Smart Soil Analysis</b><br>Upload a photo of your soil and our AI will:<br>• Identify soil type & health<br>• Recommend suitable crops<br>• Suggest fertilizers & nutrients<br>• Detect deficiencies<br><br>👉 <a href="analysis.html">Start Soil Analysis →</a>',
            chips: ['Fertilizer tips', 'Crop recommendation', 'Main menu']
        },
        {
            patterns: ['guidance', 'farming tip', 'kheti', 'crop rotation', 'organic', 'sowing', 'harvest', 'seed', 'planting', 'season', 'calendar', 'grow', 'cultivation'],
            reply: '🌱 <b>Smart Farming Guidance</b><br>Our expert guides cover:<br>• Crop selection & rotation<br>• Organic farming methods<br>• Pest & disease management<br>• Drip irrigation setup<br>• Season-wise planting calendar<br><br>👉 <a href="guidance.html">View Farming Guides →</a>',
            chips: ['Pest control tips', 'Irrigation methods', 'Organic farming', 'Main menu']
        },
        {
            patterns: ['pest', 'insect', 'keedu', 'aphid', 'whitefly', 'caterpillar', 'fungus', 'blight', 'neem', 'pesticide', 'disease identifier'],
            reply: '🐛 <b>Pest & Disease Control</b><br>• <b>Neem oil spray</b> – Organic solution for most insects<br>• <b>Yellow sticky traps</b> – For whiteflies & aphids<br>• <b>Bordeaux mixture</b> – Controls fungal diseases<br>• Early detection is key – check plants daily!<br><br>📖 Detailed guides: <a href="guidance.html">Farming Guidance →</a>',
            chips: ['Organic farming', 'Soil analysis', 'Digital tools', 'Main menu']
        },
        {
            patterns: ['irrigat', 'sinchayee', 'drip', 'sprinkler', 'water manag', 'pump', 'canal', 'paani', 'water shortage'],
            reply: '💧 <b>Irrigation Tips</b><br>• <b>Drip Irrigation</b> – Saves 40-60% water; ideal for vegetables<br>• <b>Sprinkler</b> – Good for wheat, maize, pulses<br>• Water early morning to reduce evaporation<br><br>💰 Govt subsidy on drip irrigation:<br>👉 <a href="schemes.html">PMKSY Scheme →</a>',
            chips: ['Government schemes', 'Farming guidance', 'Main menu']
        },
        {
            patterns: ['fertilizer', 'urea', 'dap', 'npk', 'khad', 'compost', 'manure', 'bio fertilizer'],
            reply: '🌿 <b>Fertilizer Guidance</b><br>• <b>Urea (N)</b> – Promotes leaf growth; use sparingly<br>• <b>DAP (P)</b> – Ideal at sowing time<br>• <b>Potash (K)</b> – Improves fruit quality & drought resistance<br>• <b>Compost/FYM</b> – Boosts soil organic matter naturally<br><br>💡 Get a soil test first: <a href="analysis.html">Soil Analysis →</a>',
            chips: ['Soil analysis', 'Organic farming', 'Main menu']
        },
        {
            patterns: ['community', 'forum', 'expert', 'ask', 'discuss', 'talk', 'connect', 'group', 'samaj', 'q&a'],
            reply: '👥 <b>Farmer Community</b><br>Join 50,000+ farmers and agri-experts:<br>• Post questions, get expert answers<br>• Regional farming groups<br>• Share farming success stories<br>• Live Q&A with agri-experts<br><br>👉 <a href="community.html">Join the Community →</a>',
            chips: ['Farming guidance', 'Main menu']
        },
        {
            patterns: ['market', 'mandi', 'price', 'sell', 'buyer', 'demand', 'rate', 'bhav', 'produce', 'commodity', 'wholesale'],
            reply: '📊 <b>Market Intelligence</b><br>Get real-time market data:<br>• Live Mandi prices for your crops<br>• Demand forecasts & trends<br>• Best time to sell your produce<br>• Connect directly with buyers<br><br>👉 <a href="market.html">Check Market Prices →</a>',
            chips: ['Government schemes', 'Farming guidance', 'Main menu']
        },
        {
            patterns: ['policy', 'policies', 'law', 'act', 'regulation', 'kanoon', 'legal', 'right', 'adhikar', 'msp', 'minimum support price'],
            reply: '📜 <b>Agricultural Policies</b><br>Stay updated on laws that affect you:<br>• MSP (Minimum Support Price) updates<br>• Land rights & tenancy laws<br>• Water usage regulations<br>• Simplified legal explanations in Hindi & English<br><br>👉 <a href="policies.html">Read Policies →</a>',
            chips: ['Government schemes', 'Main menu']
        },
        {
            patterns: ['tool', 'calculator', 'yield', 'digital', 'weather', 'forecast', 'rain', 'mausam', 'temperature', 'barish', 'drought', 'climate'],
            reply: '🛠️ <b>Digital Farming Tools</b><br>Our smart tools include:<br>• 🌦️ Weather forecasting & rain alerts<br>• 🌾 Crop yield calculator<br>• 🔍 Crop disease identifier<br>• 📅 Farming activity planner<br><br>👉 <a href="tools.html">Open Digital Tools →</a>',
            chips: ['Soil analysis', 'Government schemes', 'Main menu']
        },
        {
            patterns: ['pm-kisan eligib', 'kisan samman eligib', 'who can apply', '6000'],
            reply: '✅ <b>PM-KISAN Eligibility</b><br>• Small & marginal farmers owning ≤ 2 hectares<br>• Must be an Indian citizen<br>• Aadhaar card is mandatory<br>• <b>Not eligible:</b> Govt employees, income taxpayers, pensioners<br><br>Apply via <a href="schemes.html">Schemes page →</a> or visit <b>pmkisan.gov.in</b>',
            chips: ['Other schemes', 'Farm loans', 'Main menu']
        },
        {
            patterns: ['login', 'sign up', 'signup', 'register', 'account', 'password', 'forgot', 'user'],
            reply: '🔐 <b>Login / Sign Up</b><br>Account creation is free & instant!<br><br><b>To Sign Up:</b><br>1. Click <b>"Sign Up"</b> in the top navbar<br>2. Enter your name, email & password<br>3. Click <b>"Create Account"</b><br><br><b>To Login:</b><br>Click "Login" in the navbar, enter your email & password.',
            chips: ['Government schemes', 'Farming guidance', 'Main menu']
        },
        {
            patterns: ['help', 'menu', 'option', 'what can you do', 'kya kar', 'start', 'guide me', 'navigate', 'website', 'main', 'home'],
            reply: '👋 <b>Here\'s what I can help you with:</b>',
            chips: ['Government Schemes', 'Soil Analysis', 'Farming Guidance', 'Market Prices', 'Farmer Community', 'Digital Tools', 'Policies & Laws', 'Login / Sign Up']
        },
        {
            patterns: ['hi', 'hello', 'helo', 'namaste', 'namaskar', 'jai kisan', 'good morning', 'good evening', 'hey', 'hii'],
            reply: '🙏 <b>Namaste, Kisan Mitra!</b><br>Welcome to KishanSarthi – your digital farming companion!<br><br>I can help you with government schemes, soil analysis, farming guidance, market prices, and more. What would you like to know?',
            chips: ['Government Schemes', 'Soil Analysis', 'Farming Guidance', 'Market Prices']
        },
        {
            patterns: ['thank', 'thanks', 'shukriya', 'dhanyavad', 'great', 'helpful', 'nice', 'good work', 'awesome'],
            reply: '😊 You\'re most welcome, Kisan Mitra! Wishing you a great harvest! 🌾<br><br>Feel free to ask anything else about farming or KishanSarthi.',
            chips: ['Government Schemes', 'Soil Analysis', 'Main menu']
        }
    ];

    /* ─── Chip label → search query mapping ─────── */
    var CHIP_MAP = {
        'main menu': 'help menu',
        'government schemes': 'scheme',
        'government scheme': 'scheme',
        'soil analysis': 'soil analysis',
        'farming guidance': 'guidance farming',
        'market prices': 'market price',
        'market price': 'market price',
        'farmer community': 'community',
        'digital tools': 'tool digital',
        'policies & laws': 'policy law',
        'login / sign up': 'login signup',
        'crop insurance': 'fasal bima insurance',
        'farm loans': 'kcc kisan credit loan',
        'pm-kisan eligibility': 'pm-kisan eligib',
        'other schemes': 'scheme subsidy benefit',
        'fertilizer tips': 'fertilizer khad',
        'crop recommendation': 'soil crop recommend',
        'pest control tips': 'pest control',
        'irrigation methods': 'irrigat methods',
        'organic farming': 'organic farming',
        'disease identifier': 'pest disease identifier'
    };

    var FALLBACK = {
        reply: '🤔 I\'m not sure about that. Try asking about <b>schemes, soil, market prices, guidance</b>, or click a button below!',
        chips: ['Government Schemes', 'Soil Analysis', 'Farming Guidance', 'Market Prices', 'Main menu']
    };

    /* ─── DOM helpers ───────────────────────────── */
    function $id(id) { return document.getElementById(id); }

    function escHTML(s) {
        return String(s)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;')
            .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function matchKB(text) {
        var q = text.toLowerCase();
        for (var i = 0; i < KB.length; i++) {
            var e = KB[i];
            for (var j = 0; j < e.patterns.length; j++) {
                if (q.indexOf(e.patterns[j]) !== -1) return e;
            }
        }
        return null;
    }

    /* ─── Rendering ──────────────────────────────── */
    function appendMsg(role, html) {
        var wrap = $id('ks-messages');
        var row = document.createElement('div');
        row.className = 'ks-msg ' + role;
        row.innerHTML = role === 'bot'
            ? '<div class="ks-msg-avatar">🌾</div><div class="ks-bubble">' + html + '</div>'
            : '<div class="ks-bubble">' + escHTML(html) + '</div>';
        wrap.appendChild(row);
        wrap.scrollTop = wrap.scrollHeight;
    }

    function showTyping() {
        var wrap = $id('ks-messages');
        var row = document.createElement('div');
        row.className = 'ks-msg bot';
        row.id = 'ks-typing-row';
        row.innerHTML = '<div class="ks-msg-avatar">🌾</div>' +
            '<div class="ks-typing"><span></span><span></span><span></span></div>';
        wrap.appendChild(row);
        wrap.scrollTop = wrap.scrollHeight;
    }

    function hideTyping() {
        var t = $id('ks-typing-row');
        if (t) t.remove();
    }

    function renderChips(chips) {
        var area = $id('ks-quick-replies');
        area.innerHTML = '';
        if (!chips || !chips.length) { area.style.display = 'none'; return; }
        area.style.display = 'flex';
        chips.forEach(function (label) {
            var btn = document.createElement('button');
            btn.className = 'ks-chip';
            btn.textContent = label;
            btn.addEventListener('click', function () { handleChip(label); });
            area.appendChild(btn);
        });
    }

    /* ─── Reply logic ────────────────────────────── */
    function botReply(displayText, queryText) {
        appendMsg('user', displayText);
        renderChips([]);
        showTyping();
        var lookup = queryText || displayText;
        setTimeout(function () {
            hideTyping();
            var result = matchKB(lookup) || FALLBACK;
            appendMsg('bot', result.reply);
            renderChips(result.chips || []);
        }, 600 + Math.floor(Math.random() * 400));
    }

    function handleChip(label) {
        var key = label.toLowerCase().trim();
        var query = CHIP_MAP[key] || label;
        botReply(label, query);
    }

    function sendInput() {
        var inp = $id('ks-input');
        var text = inp.value.trim();
        if (!text) return;
        inp.value = '';
        botReply(text);
    }

    /* ─── Toggle ─────────────────────────────────── */
    function openChat() {
        $id('ks-chat-window').classList.add('open');
        $id('ks-chat-toggle').classList.add('open');
        $id('ks-chat-badge').classList.remove('show');
        setTimeout(function () { $id('ks-input').focus(); }, 350);
    }

    function closeChat() {
        $id('ks-chat-window').classList.remove('open');
        $id('ks-chat-toggle').classList.remove('open');
    }

    /* ─── Inject widget HTML ─────────────────────── */
    function injectWidget() {
        var wrap = document.createElement('div');
        wrap.innerHTML =
            '<button id="ks-chat-toggle" aria-label="Open KishanSarthi Assistant" aria-expanded="false" title="Chat with KishanSarthi Assistant">' +
            '<span id="ks-chat-badge" aria-label="New message">1</span>' +
            '<svg class="ks-icon-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
            '<svg class="ks-icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
            '</button>' +
            '<div id="ks-chat-window" role="dialog" aria-label="KishanSarthi Chat Assistant">' +
            '<div id="ks-chat-header">' +
            '<div class="ks-header-avatar">🌾</div>' +
            '<div class="ks-header-info">' +
            '<h4>KishanSarthi Assistant</h4>' +
            '<p><span class="ks-online-dot"></span> Online &bull; Here to help farmers</p>' +
            '</div>' +
            '</div>' +
            '<div id="ks-messages" aria-live="polite"></div>' +
            '<div id="ks-quick-replies"></div>' +
            '<div id="ks-input-bar">' +
            '<input id="ks-input" type="text" placeholder="Ask me anything about farming…" autocomplete="off" maxlength="300" aria-label="Type your message"/>' +
            '<button id="ks-send-btn" aria-label="Send message">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>' +
            '</button>' +
            '</div>' +
            '</div>';

        while (wrap.firstChild) {
            document.body.appendChild(wrap.firstChild);
        }
    }

    /* ─── Boot ───────────────────────────────────── */
    function init() {
        injectWidget();

        /* Greeting message */
        appendMsg('bot',
            '🙏 <b>Namaste, Kisan Mitra!</b><br>' +
            'I\'m your <b>KishanSarthi Assistant</b>! I can guide you through the entire website and answer your farming questions.<br><br>' +
            'What would you like help with today?'
        );
        renderChips(['Government Schemes', 'Soil Analysis', 'Farming Guidance', 'Market Prices', 'Digital Tools', 'Main menu']);

        /* Show notification badge after delay */
        setTimeout(function () {
            if (!$id('ks-chat-window').classList.contains('open')) {
                $id('ks-chat-badge').classList.add('show');
            }
        }, 3000);

        /* Toggle button */
        $id('ks-chat-toggle').addEventListener('click', function (e) {
            e.stopPropagation();
            $id('ks-chat-window').classList.contains('open') ? closeChat() : openChat();
        });

        /* Send button */
        $id('ks-send-btn').addEventListener('click', sendInput);

        /* Enter key in input */
        $id('ks-input').addEventListener('keydown', function (e) {
            if (e.key === 'Enter') sendInput();
        });

        /* Close when clicking outside */
        document.addEventListener('click', function (e) {
            var win = $id('ks-chat-window');
            var toggle = $id('ks-chat-toggle');
            if (win && win.classList.contains('open')) {
                if (!win.contains(e.target) && toggle && !toggle.contains(e.target)) {
                    closeChat();
                }
            }
        });
    }

    /* Boot on DOM ready */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
