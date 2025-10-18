

const INLINE_CSS_STYLES = `
/* * Service Booking System - Premium Dark Theme Styles (AC Theme Base) */
/* --- Theme Variables --- */
:root {
    --bg-dark: #101827;         /* Deep Space Black */
    --bg-card: #1C2738;         /* Dark Navy Card */
    --primary: #00FFFF;         /* Electric Teal (Main Accent - Achhi Coloring) */
    --secondary: #FFC72C;       /* Sunset Gold (Highlight Accent - Achhi Coloring) */
    --text-light: #E0E7FF;
    --text-subtle: #A0AEC0;
    --shadow-depth: 0 10px 30px rgba(0, 0, 0, 0.5);
    --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* --- Global & Typography --- */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Roboto:wght@300;400;500;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-light);
    line-height: 1.6;
    overflow-x: hidden;
    min-height: 100vh;
}

main {
    max-width: 1400px;
    margin: 0 auto;
    padding: 4rem 1.5rem;
}

/* --- Stats Grid --- */

.stat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.stat-card {
    background: var(--bg-card);
    border-radius: 1rem;
    padding: 1.5rem;
    text-align: center;
    box-shadow: var(--shadow-depth);
    transition: var(--transition);
    border: 1px solid rgba(0, 255, 255, 0.1); 
}

.stat-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: 0 15px 40px rgba(0, 255, 255, 0.2);
}

.stat-card h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: var(--secondary);
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
}

.stat-card p {
    font-size: 2.2rem;
    font-weight: 800;
    color: var(--primary);
    font-family: 'Montserrat', sans-serif;
}

/* --- Product Section Layout --- */

.product-section {
    background: linear-gradient(135deg, var(--bg-card), #22324C);
    border-radius: 1.5rem;
    box-shadow: var(--shadow-depth);
    margin-bottom: 3rem;
    overflow: hidden;
    border: 2px solid var(--secondary); 
}

.product-header {
    background: linear-gradient(90deg, #101827, #22324C);
    padding: 2rem;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.product-header h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--primary);
}

.product-content {
    display: flex;
    flex-wrap: wrap;
    padding: 3rem;
    gap: 3rem;
    align-items: center; 
    justify-content: center;
}

.product-details {
    flex: 1; 
    min-width: 300px;
    text-align: center; 
}

/* --- Price Display & Buttons --- */

.price-container {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 1.5rem;
    margin: 1.5rem 0;
    padding: 1rem 0;
    border-top: 1px dashed var(--text-subtle);
    border-bottom: 1px dashed var(--text-subtle);
    justify-content: center; 
}

.original-price {
    font-size: 1.2rem;
    text-decoration: line-through;
    color: var(--text-subtle);
    font-weight: 400;
}

.current-price {
    font-size: 3rem;
    font-weight: 800;
    color: var(--secondary);
    font-family: 'Montserrat', sans-serif;
}

.action-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 2rem;
    justify-content: center;
}

.btn {
    padding: 0.8rem 1.8rem;
    border-radius: 50px;
    font-weight: 700;
    cursor: pointer;
    transition: var(--transition);
    border: 2px solid transparent;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    justify-content: center;
    flex-grow: 1;
    max-width: 300px;
    min-width: 150px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
}

.btn-primary {
    background: var(--primary);
    color: var(--bg-dark);
    border-color: var(--primary);
    font-family: 'Montserrat', sans-serif;
}

.btn-primary:hover {
    background: #00D5D5;
    transform: scale(1.03);
    box-shadow: 0 8px 20px rgba(0, 255, 255, 0.5);
}

.btn-secondary {
    background: transparent;
    color: var(--secondary);
    border-color: var(--secondary);
}

.btn-secondary:hover {
    background: rgba(255, 199, 44, 0.1);
    transform: scale(1.03);
}

/* --- Popup Structure --- */
#popup-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(8px); 
    -webkit-backdrop-filter: blur(8px);
    z-index: 999;
}

.popup {
    display: none;
    background: var(--bg-card);
    color: var(--text-light);
    padding: 2.5rem;
    border-radius: 1.5rem;
    box-shadow: var(--shadow-depth);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    width: 95%;
    max-width: 650px;
    max-height: 95vh;
    overflow-y: auto;
    animation: fadeIn 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
    border: 1px solid var(--primary);
}

@keyframes fadeIn {
    from { opacity: 0; transform: translate(-50%, -60%); }
    to { opacity: 1; transform: translate(-50%, -50%); }
}

.popup h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: var(--secondary);
    border-bottom: 2px solid var(--primary);
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
}

/* --- Form Elements --- */

.popup label {
    display: block;
    margin-top: 1rem;
    margin-bottom: 0.4rem;
    color: var(--primary);
    font-size: 0.95rem;
    font-weight: 500;
}

.popup input,
.popup select,
.popup textarea {
    width: 100%;
    padding: 0.9rem 1.2rem;
    border-radius: 0.75rem;
    border: 1px solid var(--text-subtle);
    font-size: 1rem;
    background: #22324C;
    color: var(--text-light);
    transition: border-color 0.3s ease;
}

.popup input:focus,
.popup select:focus,
.popup textarea:focus {
    border-color: var(--primary);
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 255, 255, 0.2);
}

.popup textarea {
    min-height: 8rem;
    resize: vertical;
}

/* Popup Buttons: Primary Action (Teal Gradient) */
.popup button[type="submit"],
#razorpay-payment-btn-cctv,
#downloadTicketsBtn { 
    width: 100%;
    padding: 1rem;
    margin-top: 1.5rem;
    border-radius: 0.75rem;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: var(--transition);
    border: none;
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(45deg, var(--primary), #00D5D5);
    color: var(--bg-dark);
}

.popup button[type="submit"]:hover,
#razorpay-payment-btn-cctv:hover,
#downloadTicketsBtn:hover { 
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 255, 255, 0.6);
}

/* Popup Buttons: Secondary/Close Action (Gold Accent) */
#okayBtnCCTV,
#close-price-list-btn,
#close-conditions-btn { 
    width: 100%;
    padding: 1rem;
    margin-top: 1.5rem;
    border-radius: 0.75rem;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: var(--transition);
    background: transparent !important;
    color: var(--secondary) !important;
    border: 2px solid var(--secondary) !important;
    font-family: 'Montserrat', sans-serif;
}

#okayBtnCCTV:hover,
#close-price-list-btn:hover,
#close-conditions-btn:hover { 
    background: rgba(255, 199, 44, 0.1) !important;
    transform: scale(1.01) !important;
}


.quantity-selector-container {
    background: #22324C;
    padding: 1.2rem;
    border-radius: 0.75rem;
    border: 1px solid var(--text-subtle);
}

.total-price-quantity {
    font-size: 1.8rem !important;
    font-family: 'Montserrat', sans-serif;
    color: var(--secondary) !important;
}

/* Service Selection Styling */
#selectedServiceCategoriesDisplay {
    background: var(--bg-dark);
    color: var(--text-light);
    border: 1px solid var(--primary);
    cursor: pointer;
    padding: 0.9rem 1.2rem;
    border-radius: 0.75rem;
    text-align: center;
}

/* Inner Popup (Service Checkboxes) Styling */
#serviceCategorySelectionPopup {
    position: fixed; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1001; 
    max-width: 800px;
}
#serviceCategoryCheckboxes label {
    padding: 0.75rem;
    margin-top: 0;
    background: var(--bg-dark);
    border: 1px solid var(--text-subtle);
}
#serviceCategoryCheckboxes label:hover {
    background: #22324C;
    border-color: var(--primary);
}


/* --- Custom Alert Styling --- */
.custom-alert {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--primary);
    color: var(--bg-dark);
    padding: 1.25rem 1.875rem;
    border-radius: 0.625rem;
    z-index: 1002;
    box-shadow: 0 0.3125rem 0.9375rem rgba(0,0,0,0.4);
    font-size: 1rem;
    text-align: center;
    max-width: 90%;
    animation: fadeInOut 4s forwards;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
}

@keyframes fadeInOut {
    0% { opacity: 0; transform: translate(-50%, -40%); }
    10% { opacity: 1; transform: translate(-50%, -50%); }
    90% { opacity: 1; transform: translate(-50%, -50%); }
    100% { opacity: 0; transform: translate(-50%, -60%); display: none; }
}

/* --- Price List Table Styling --- */
#priceListTableBodyCCTV tr:nth-child(even) {
    background-color: #22324C;
}
#priceListTableBodyCCTV td {
    font-family: 'Roboto', sans-serif;
}
#priceListTableBodyCCTV .font-semibold {
    color: var(--secondary);
    font-weight: 700;
}

/* --- RESPONSIVENESS (Tailwind classes bhi use honge) --- */

@media (max-width: 600px) {
    main { padding: 2rem 1rem; }
    .product-header h2 { font-size: 2rem; }
    .current-price { font-size: 2.5rem; }
    .popup { padding: 1.5rem; }
}
`;

// =========================================================================
// --- UI Injection Function (CCTV ONLY) ---
// =========================================================================

function injectCCTVServiceUI() {
    // Injection ID: 'book-cctv-service-container'
    const INJECTION_CONTAINER_ID = 'book-cctv-service-container';
    let container = document.getElementById(INJECTION_CONTAINER_ID);
    
    if (!container) {
        console.error(`Injection Error: Main container with ID "${INJECTION_CONTAINER_ID}" not found. Please ensure your HTML file has <div id="${INJECTION_CONTAINER_ID}"></div>`);
        return;
    }

    // Dynamic HTML content for the CCTV Service page
    container.innerHTML = `
        <style>${INLINE_CSS_STYLES}</style>
        
        <main class="container">
            
            <section class="product-section">
                <div class="product-header">
                    <h2 class="text-white">Professional CCTV Service</h2>
                    <p class="text-sm text-gray-400 mt-2">Ensure the Security of Your Property- Installation aur Repair services.</p>
                </div>

                <div class="product-content">
                    
                    <div class="product-details">
                        <h3 class="text-3xl font-semibold text-text-light mb-4">CCTV Camera Installation & Servicing Packages</h3>
                        <p class="text-text-subtle mb-4 text-base"> AHD/IP Camera </p>
                        <p class="text-text-subtle mb-4 text-base"> Set 4/8 </p>
                        <p class="text-text-subtle mb-4 text-base"> Harddisk </p>
                        <p class="text-text-subtle mb-4 text-base"> Wire & Installation </p>
                        <p class="text-text-subtle mb-4 text-base"> 1 Year Warranty </p>
                        <p class="text-text-subtle mb-4 text-base"> 2 Service Free </p>
                        <div class="price-container">
                            <div class="original-price">Avoid Local Product</div>
                            <div class="current-price" id="displayPriceCCTV">Choose Services</div>
                        </div>
                        
                        <div class="action-buttons">
                            <button class="btn btn-primary" id="book-now-btn">
                                <i class="fas fa-video"></i> Book Now 
                            </button>
                            <button id="price-list-btn-cctv" class="btn btn-secondary">
                                <i class="fas fa-tags"></i> Transparent Rates 
                            </button>
                             <button id="conditions-btn-cctv" class="btn btn-secondary">
                                <i class="fas fa-file-contract"></i> Warranty & Services
                            </button>
                            <button id="go-back-btn" class="btn btn-secondary" onclick="window.location.href='index.html'">
                                <i class="fas fa-home"></i> Go to Home
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <div class="stat-grid">
                <div class="stat-card">
                    <h3>Total Installations</h3>
                    <p>15,000+</p>
                </div>
                <div class="stat-card">
                    <h3>Satisfied Clients</h3>
                    <p>9,500+</p>
                </div>
                <div class="stat-card">
                    <h3>Customer Satisfaction Score</h3>
                    <p>4.8/5 Stars</p>
                </div>
                <div class="stat-card">
                    <h3>Quickest Slot Available</h3>
                    <p>Aaj Hi!</p>
                </div>
            </div>
        </main>

        <div id="popup-overlay"></div>
        
        <!-- 1. Booking Form Popup -->
        <div class="popup" id="booking-popup">
            <h2 class="text-2xl font-bold text-center">CCTV Service Booking Form</h2>
            <form id="booking-form-cctv">
                <div class="quantity-selector-container my-4">
                    <label>Choose CCTV Package:</label>
                    <div id="selectedServiceCategoriesDisplay" class="p-3 rounded-lg cursor-pointer text-center text-lg" onclick="window.cctvServiceApp.openServiceCategorySelectionPopup()">Package(s) chunein</div>
                    
                    <label for="quantity">Choose Package (Max 5):</label>
                    <select id="quantity" name="quantity" required class="bg-bg-dark border-primary">
                        <!-- Options will be populated by JS -->
                    </select>

                    <div class="flex justify-between items-center mt-3 text-text-subtle text-sm">
                        <span>total price As per Package</span>
                        <span id="calculated-price-cctv" class="total-price-quantity text-lg">Total: ₹0</span>
                    </div>
                </div>
                
                <label for="name">Full Name (Minimum 10 characters)</label>
                <input type="text" id="name" name="name" required placeholder="John Doe" autocomplete="name" minlength="10" />
                
                <label for="phone">Phone Number (10 digits)</label>
                <input type="tel" id="phone" name="phone" required placeholder="9876543210" autocomplete="tel" pattern="[0-9]{10}" />
                
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required placeholder="john.doe@example.com" autocomplete="email" />
                
                <label for="location">Landmark (Eg.Bus Stand, Baba Dham Mandir)</label>
                <input type="text" id="location" name="location" required placeholder="Sonipat" autocomplete="address-level2" />
                
                <label for="address">Full Address (Minimum 30 characters)</label>
                <textarea id="address" name="address" required placeholder="House No, Gali, Area, Landmark, City, State, PIN code" autocomplete="street-address" minlength="30" rows="4"></textarea>

                <input type="hidden" name="finalPrice" id="finalPriceCCTV" />
                
                <button type="submit">Submit & Make Payment </button>
                <p id="submit-message-cctv" class="text-center mt-3 text-primary text-sm font-semibold" style="display: none;">Submit Ho Raha Hai... Kripya intezaar karein</p>
            </form>
        </div>
        
        <!-- Inner Popup for Service Selection -->
        <div id="serviceCategorySelectionPopup" class="popup" style="display: none;">
            <h3 class="text-xl font-bold text-center mb-4 text-primary">Choose CCTV Package</h3>
            <div id="serviceCategoryCheckboxes" class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto p-2">
                <!-- Checkboxes will be populated here by JS -->
            </div>
            <button type="button" class="btn btn-primary mt-4 py-3" onclick="window.cctvServiceApp.applySelectedServiceCategories()">Selection Apply Karein</button>
            <button type="button" class="close-btn-secondary mt-2 py-3" onclick="window.cctvServiceApp.closeServiceCategorySelectionPopup()">Cancel</button>
        </div>


        <!-- 2. Payment Popup -->
        <div class="popup" id="paymentStep">
            <h2 class="text-2xl font-bold text-center">Final Payment Karein</h2>
            <p class="text-text-subtle text-center mb-6">Apni CCTV Service booking confirm karne ke liye payment poori karein.</p>
            <div id="paymentSummary" class="bg-bg-dark p-5 rounded-lg mb-6 text-center border border-secondary"></div>
            <div id="timer-display-cctv" class="text-xl font-bold text-primary text-center mb-4">Samay baaki: 05:00</div>
            <button id="razorpay-payment-btn-cctv"><i class="fas fa-credit-card mr-2"></i> Razorpay Se Payment Karein</button>
            <p class="mt-4 text-xs text-text-subtle text-center">
                Note: Payment process ke dauraan is window ko band na karein.
            </p>
        </div>

        <!-- 3. Ticket Confirmation -->
        <div class="popup" id="ticketStep">
            <h2 id="welcomeMessage" class="text-2xl font-bold text-center text-primary"></h2>
            <p class="text-text-subtle text-center mb-4">Aapki booking confirm ho gayi hai. Details neeche hain:</p>
            <div id="ticketDisplay" class="space-y-2 bg-bg-dark p-4 rounded-lg border border-primary">
                <!-- Details will be injected here -->
            </div>
            <button id="downloadTicketsBtn" class="mt-4">
                <i class="fas fa-download mr-2"></i> Service Details Download Karein
            </button>
            <p class="mt-4 text-sm text-text-subtle text-center">📸 Kripya proof aur reference ke liye screenshot le lein.</p>
            <button id="okayBtnCCTV" class="mt-4 close-btn">Theek Hai, Samajh Gaya!</button>
        </div>
        
        <!-- 4. Price List Popup -->
        <div class="popup" id="priceListPopup">
            <h2 class="text-2xl font-bold text-center">CCTV Service Transparent Rate List</h2>
            <div class="overflow-x-auto mt-4">
                <table class="min-w-full bg-bg-dark rounded-lg border border-primary">
                    <thead>
                        <tr class="text-left text-secondary">
                            <th class="py-3 px-4 border-b border-text-subtle">Package Name</th>
                            <th class="py-3 px-4 border-b border-text-subtle text-right">Hamara Price</th>
                            <th class="py-3 px-4 border-b border-text-subtle text-right">Market Price (Approx)</th>
                        </tr>
                    </thead>
                    <tbody id="priceListTableBodyCCTV">
                        <!-- Content populated by JS -->
                    </tbody>
                </table>
            </div>
            <button id="close-price-list-btn" class="close-btn-secondary mt-4">Rate List Band Karein</button>
        </div>

        <!-- 5. Conditions Popup -->
        <div class="popup" id="conditionsPopup">
            <h2 class="text-2xl font-bold text-center">Warranty & Service Conditions</h2>
            <div id="conditionsContent" class="text-text-subtle text-base space-y-4 max-h-[70vh] overflow-y-auto pr-3">
                <ul class="list-disc list-inside space-y-3">
                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-user-shield mr-2"></i> Professional Technicians</li>
                    <li>Certified Product.</li>
                    <li>Expert Engineer.</li>
                    
                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-video-camera mr-2"></i> Installation Packages</li>
                    <li>4 Camera / 8 Camera pack</li>
                    <li>Installation</li>
                    <li>Wiring & Setup with DVR/NVR</li>                    
                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-receipt mr-2"></i> Transparency & Pricing</li>
                    <li> Complete installation Set with all Additional Component</li>
                    <li> After over Warranty ,Dignosis & Repair Charge Rs.299 appliable P</li>

                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-headset mr-2"></i> Warranty & Service Guarantee</li>
                    <li> One Year Full Warranty on DVR/NVR </li>
                    <li> One Year Full Warranty on Camera </li>
                    <li> One Year Full Warranty on Harddisk </li>
                    <li> 2 Service Free </li>
                                    </ul>
            </div>
            <button id="close-conditions-btn" class="close-btn-secondary mt-4"> I Understood</button>
        </div>
    `;

    // Initialize the CCTV application logic after UI injection
    setTimeout(() => {
        window.cctvServiceApp = new CCTVServiceApp();
    }, 0);
    
}


// =========================================================================
// --- CCTV Service Application Class (Poora Logic) ---
// =========================================================================

class CCTVServiceApp {
    constructor() {
        // Data copied from the original file
        this.serviceData = [
            {"Category": "AHD 4 Camera Set", "Price": 16000},
            {"Category": "AHD 8 Camera Set", "Price": 24000},
            {"Category": "IP Camera 4 Camera Set", "Price": 24000},
            {"Category": "IP Camera 8 Camera Set", "Price": 34000},
            {"Category": "CCTV Diagnosis & Repair Visit", "Price": 299} 
        ];

        this.SERVICE_NAME = "CCTV Service";
        this.SERVICE_TAB_ID = "cctv-service";
        this.LOCAL_STORAGE_KEY = 'cctvServiceFormData';
        this.RAZORPAY_IMAGE_TEXT = "CCTV";
        this.PAYMENT_TIME_LIMIT = 5 * 60;
        this.GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwvO8RKxi2zxIZsilgYB74V_kO00EQIA_QIefdhsv9Dv0cEgh300B8kx6WsjHzpXnA1gg/exec"; 

        
        // --- DOM Element Selection (Sare IDs CCTV specific hain) ---
        this.bookNowBtn = document.getElementById('book-now-btn');
        this.popupOverlay = document.getElementById('popup-overlay');
        this.allPopups = document.querySelectorAll('.popup');
        this.bookingPopup = document.getElementById('booking-popup');
        this.paymentStep = document.getElementById('paymentStep');
        this.ticketStep = document.getElementById('ticketStep');
        this.bookingForm = document.getElementById('booking-form-cctv');
        
        this.serviceCategorySelectionPopup = document.getElementById('serviceCategorySelectionPopup');
        this.serviceCategoryCheckboxesContainer = document.getElementById('serviceCategoryCheckboxes');
        this.selectedServiceCategoriesDisplay = document.getElementById('selectedServiceCategoriesDisplay');

        this.quantitySelect = document.getElementById('quantity');
        this.calculatedPriceDisplay = document.getElementById('calculated-price-cctv');
        this.displayPrice = document.getElementById('displayPriceCCTV');
        this.submitMessage = document.getElementById('submit-message-cctv');
        this.paymentSummary = document.getElementById('paymentSummary');
        this.timerDisplay = document.getElementById('timer-display-cctv');
        this.razorpayBtn = document.getElementById('razorpay-payment-btn-cctv');
        this.ticketDisplay = document.getElementById('ticketDisplay');
        this.downloadTicketsBtn = document.getElementById('downloadTicketsBtn');
        this.okayBtn = document.getElementById('okayBtnCCTV');
        this.welcomeMessage = document.getElementById('welcomeMessage');
        this.finalPriceInput = document.getElementById('finalPriceCCTV');
        
        this.priceListBtn = document.getElementById('price-list-btn-cctv');
        this.conditionsBtn = document.getElementById('conditions-btn-cctv');
        this.priceListPopup = document.getElementById('priceListPopup');
        this.conditionsPopup = document.getElementById('conditionsPopup');
        this.closePriceListBtn = document.getElementById('close-price-list-btn');
        this.closeConditionsBtn = document.getElementById('close-conditions-btn');
        this.priceListTableBody = document.getElementById('priceListTableBodyCCTV');


        // --- State variables ---
        this.currentServicePrice = 0; // Base price for selected services (for 1 unit/package)
        this.selectedQuantity = 1; // Number of units/packages
        this.currentCalculatedPrice = 0; // currentServicePrice * selectedQuantity
        this.generatedTicket = '';
        this.countdownInterval = null;
        
        if (!this.bookNowBtn) {
             console.error("CCTVServiceApp shuru nahi ho paya. Kuch zaroori elements nahi mile.");
             return;
        }

        // Expose instance methods for external HTML calls
        window.cctvServiceApp = this;
        this.init();
    }
    
    init() {
        this.initQuantitySelector();
        this.populateServiceCategories();
        this.updatePrices();
        this.loadFormData();
        this.bindEvents();
    }

    // --- Local Storage Functions ---
    saveFormData() {
        const formData = {
            fullName: this.bookingForm.name.value,
            phone: this.bookingForm.phone.value,
            email: this.bookingForm.email.value,
            location: this.bookingForm.location.value,
            address: this.bookingForm.address.value
        };
        try {
            localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(formData));
        } catch (e) {
            console.warn("Local storage mein data save nahi ho paya:", e);
        }
    }

    loadFormData() {
        try {
            const savedData = localStorage.getItem(this.LOCAL_STORAGE_KEY);
            if (savedData) {
                const data = JSON.parse(savedData);
                this.bookingForm.name.value = data.fullName || '';
                this.bookingForm.phone.value = data.phone || '';
                this.bookingForm.email.value = data.email || '';
                this.bookingForm.location.value = data.location || '';
                this.bookingForm.address.value = data.address || '';
            }
        } catch (e) {
            console.warn("Local storage se data load nahi ho paya:", e);
        }
    }

    // --- Core Functions ---
    initQuantitySelector() {
        const maxServices = 5; 
        this.quantitySelect.innerHTML = '<option value="" disabled selected>Packages ki sankhya chunein</option>';
        for (let i = 1; i <= maxServices; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i + (i === 1 ? ' Package' : ' Packages');
            this.quantitySelect.appendChild(option);
        }
        this.quantitySelect.value = 1;
    }

    populateServiceCategories() {
        this.serviceCategoryCheckboxesContainer.innerHTML = '';
        this.serviceData.forEach(service => {
            const checkboxHtml = `
                <label class="inline-flex items-center text-text-light w-full p-2 bg-bg-dark rounded-md border border-primary hover:bg-bg-card transition duration-200 cursor-pointer">
                    <input type="checkbox" name="serviceCategory" value="${service.Category}" data-price="${service.Price}" 
                           class="form-checkbox h-5 w-5 text-secondary rounded focus:ring-secondary checked:bg-secondary">
                    <span class="ml-2 text-sm">${service.Category} (<span class="text-secondary">₹${service.Price}</span>)</span>
                </label>
            `;
            this.serviceCategoryCheckboxesContainer.insertAdjacentHTML('beforeend', checkboxHtml);
        });
        this.serviceCategoryCheckboxesContainer.querySelectorAll('input[name="serviceCategory"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => this.updatePrices());
        });
    }
    
    updatePrices() {
        const selectedCategories = Array.from(this.serviceCategoryCheckboxesContainer.querySelectorAll('input[name="serviceCategory"]:checked'));
        
        this.selectedQuantity = parseInt(this.quantitySelect.value) || 1;
        
        this.currentServicePrice = selectedCategories.reduce((total, service) => total + parseFloat(service.dataset.price), 0);
        this.currentCalculatedPrice = this.currentServicePrice * this.selectedQuantity;

        if (selectedCategories.length > 0) {
            this.selectedServiceCategoriesDisplay.textContent = selectedCategories.map(cb => cb.value).join(', ');
            this.displayPrice.textContent = `₹${this.currentServicePrice}`;
        } else {
            this.selectedServiceCategoriesDisplay.textContent = 'Package(s) chunein';
            this.displayPrice.textContent = 'Service Chunein';
        }
        
        this.calculatedPriceDisplay.textContent = `Total: ₹${this.currentCalculatedPrice}`;
        this.finalPriceInput.value = this.currentCalculatedPrice;
    }

    generateTicketId() {
        return 'CCTV-XXXXXX-XXXX'.replace(/X/g, () => (Math.random() * 36 | 0).toString(36).toUpperCase());
    }

    showCustomAlert(message) {
        const alertBox = document.createElement('div');
        alertBox.className = 'custom-alert'; 
        alertBox.textContent = message;
        document.body.appendChild(alertBox);
        setTimeout(() => alertBox.remove(), 4000); 
    }

    closeAllPopups() {
        this.clearTimers();
        this.popupOverlay.style.display = 'none';
        this.allPopups.forEach(p => p.style.display = 'none');
        document.body.style.overflow = 'auto';
        
        // Reset form and state
        this.bookingForm.reset();
        this.initQuantitySelector();
        this.updatePrices();
        this.loadFormData();
    }

    openPopup(popupElement) {
        document.body.style.overflow = 'hidden';
        this.popupOverlay.style.display = 'block';
        
        this.allPopups.forEach(p => p.style.display = 'none');
        
        popupElement.style.display = 'block';
    }

    closeSpecificPopup(popupElement) {
        popupElement.style.display = 'none';
        
        // Ensure overlay is closed only if no other main popup or inner popup is visible
        const isMainPopupOpen = this.bookingPopup.style.display === 'block' || 
                                 this.paymentStep.style.display === 'block' || 
                                 this.ticketStep.style.display === 'block';

        if (!isMainPopupOpen && this.serviceCategorySelectionPopup.style.display !== 'block') {
            this.popupOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    openServiceCategorySelectionPopup() {
        this.populateServiceCategories(); 
        
        // Re-check previously selected items
        const currentlySelected = this.selectedServiceCategoriesDisplay.textContent.split(', ').map(s => s.trim()).filter(s => s && s !== 'Package(s) chunein');
        this.serviceCategoryCheckboxesContainer.querySelectorAll('input[name="serviceCategory"]').forEach(cb => {
            cb.checked = currentlySelected.includes(cb.value);
        });
        
        this.serviceCategorySelectionPopup.style.display = 'block';
        this.popupOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    closeServiceCategorySelectionPopup() {
        this.serviceCategorySelectionPopup.style.display = 'none';
        this.closeSpecificPopup(this.serviceCategorySelectionPopup);
    }

    applySelectedServiceCategories() {
        this.updatePrices();
        this.closeServiceCategorySelectionPopup();
    }

    downloadTicketDetails() {
        const name = this.bookingForm.name.value;
        const phone = this.bookingForm.phone.value;
        const location = this.bookingForm.location.value;
        const address = this.bookingForm.address.value;
        const selectedServices = this.selectedServiceCategoriesDisplay.textContent;
        const selectedQuantity = this.quantitySelect.value;
        const totalPrice = this.currentCalculatedPrice;

        const content = `${this.SERVICE_NAME} Booking Details\n\n` +
                        `Order ID: ${this.generatedTicket}\n` +
                        `Name: ${name}\n` +
                        `Phone: ${phone}\n` +
                        `Address: ${location}, ${address}\n` +
                        `Packages: ${selectedServices}\n` +
                        `Quantity: ${selectedQuantity} Package(s)\n` +
                        `Total Price Paid: ₹${totalPrice.toLocaleString('en-IN')}\n\n` +
                        `Dhanyawad! Hum jald hi aapse service schedule karne ke liye contact karenge.`;

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cctv-service-booking-${this.generatedTicket}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    startPaymentTimer() {
        let timeLeft = this.PAYMENT_TIME_LIMIT;
        const updateDisplay = () => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            this.timerDisplay.textContent = `Samay baaki: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        };
        updateDisplay();

        this.countdownInterval = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if (timeLeft <= 0) {
                clearInterval(this.countdownInterval);
                this.showCustomAlert("Payment ka samay khatam ho gaya hai. Kripya dobara try karein.");
                this.closeAllPopups();
            }
        }, 1000);
    }

    handleRazorpayPayment() {
        if (this.currentCalculatedPrice <= 0) {
            this.showCustomAlert("Payment karne ke liye koi rashi nahi hai.");
            return;
        }

        const selectedServices = this.selectedServiceCategoriesDisplay.textContent;
        const options = {
            "key": "rzp_live_RLjzp7VlXERwiG",
            "amount": this.currentCalculatedPrice * 100,
            "currency": "INR",
            "name": `SonipatHomeService - ${this.SERVICE_NAME}`,
            "description": `Booking for: ${selectedServices} x ${this.selectedQuantity} Packages (ID: ${this.generatedTicket})`,
            "image": `https://placehold.co/100x100/1C2738/00FFFF?text=${this.RAZORPAY_IMAGE_TEXT}`,
            "handler": (response) => {
                this.paymentSuccess(response.razorpay_payment_id);
            },
            "prefill": {
                "name": this.bookingForm.name.value,
                "phone": this.bookingForm.phone.value,
                "email": this.bookingForm.email.value
            },
            "notes": {
                "address": `${this.bookingForm.location.value}, ${this.bookingForm.address.value}`,
                "services": selectedServices,
                "quantity": this.quantitySelect.value
            },
            "theme": { "color": "#00FFFF" }, // Teal color
        };

        if (typeof Razorpay !== 'undefined') {
            const rzp = new Razorpay(options);
            rzp.on('payment.failed', response => {
                this.showCustomAlert(`Payment Fail ho gaya: ${response.error.description}`);
            });
            rzp.open();
        } else {
            this.showCustomAlert("Payment library load nahi ho payi.");
        }
    }

    paymentSuccess(paymentId) {
        this.clearTimers();
        this.paymentStep.style.display = 'none';
        this.openPopup(this.ticketStep);

        this.saveFormData();
        
        const name = this.bookingForm.name.value.split(' ')[0];
        const selectedServices = this.selectedServiceCategoriesDisplay.textContent;
        const selectedQuantity = this.quantitySelect.value;
        const totalPrice = this.currentCalculatedPrice;

        this.welcomeMessage.textContent = `🎉 Booking Confirm Ho Gayi, ${name}! 🎉`;
        
        this.ticketDisplay.innerHTML = `
            <p><strong>Order ID:</strong> <span class="font-bold text-text-light">${this.generatedTicket}</span></p>
            <p><strong>Package(s):</strong> <span class="font-bold text-text-light">${selectedServices}</span></p>
            <p><strong>Quantity:</strong> <span class="font-bold text-text-light">${selectedQuantity} Package(s)</span></p>
            <p class="text-secondary text-lg font-bold mt-3">Total Paid: ₹${totalPrice.toLocaleString('en-IN')}</p>
            <p class="text-text-subtle text-sm mt-3">Humara technician jald hi aapse contact karke installation schedule karega.</p>
            <p class="text-text-subtle text-xs mt-1">Payment ID: ${paymentId}</p>
        `;
    }

    populatePriceList() {
        this.priceListTableBody.innerHTML = '';
        this.serviceData.forEach(service => {
            // Assuming a generic market price calculation (e.g., 20% higher than our price)
            const marketPrice = Math.round(service.Price * 1.20); 
            const row = `
                <tr class="text-text-light hover:bg-bg-dark">
                    <td class="py-3 px-4 border-b border-gray-700 font-semibold text-primary">${service.Category}</td>
                    <td class="py-3 px-4 border-b border-gray-700 text-right font-semibold text-secondary">₹${service.Price}</td>
                    <td class="py-3 px-4 border-b border-gray-700 text-right text-text-subtle line-through">₹${marketPrice}</td>
                </tr>
            `;
            this.priceListTableBody.insertAdjacentHTML('beforeend', row);
        });
    }

    // New method to populate the Conditions popup content
    populateConditionsDetails() {
        const content = this.conditionsPopup.querySelector('#conditionsContent');
        if (content) {
            content.innerHTML = `
                <ul class="list-disc list-inside space-y-3">
                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-user-shield mr-2"></i> Professional Technicians</li>
                    <li>Sabhi installation aur servicing certified aur experienced technicians dwara ki jaayegi.</li>
                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-video-camera mr-2"></i> Installation Packages</li>
                    <li>Packages mein AHD aur IP Camera sets shamil hain (4 ya 8 cameras).</li>
                    <li>Standard installation charges price mein shamil hain.</li>
                    <li>On-site setup aur monitor/network storage (DVR/NVR) se connection.</li>
                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-receipt mr-2"></i> Transparency & Pricing</li>
                    <li>Dikhaye gaye prices <strong>complete hardware set aur standard installation</strong> ke liye hain.</li>
                    <li>Koi bhi <strong>additional components</strong> (jaise extra cabling, special brackets) ka price on-site transparently quote kiya jaayega.</li>
                    <li>Diagnosis/repair-only bookings ke liye initial visiting charge <strong>₹299</strong> hai (Sonipat mein distance ke hisaab se adjust ho sakta hai).</li>
                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-headset mr-2"></i> Warranty & Service Guarantee</li>
                    <li>Hamare dwara khareede gaye sabhi CCTV equipment (Cameras, DVR/NVR, HDD, etc.) par <strong>ek saal ki Full Warranty</strong> hai.</li>
                    <li>Ismein <strong>ek saal ki Muft Service</strong> (maintenance aur troubleshooting) bhi shamil hai.</li>
                </ul>
            `;
        }
    }
    
    // --- Event Listeners Initialization ---
    bindEvents() {
        this.quantitySelect.addEventListener('change', () => this.updatePrices());

        this.bookNowBtn.addEventListener('click', () => {
            this.updatePrices();
            this.loadFormData();
            this.openPopup(this.bookingPopup);
        });

        // =========================================================================
        // !!! IMPORTANT: Popup Overlay Click Listener (Non-Closing Critical Popups) !!!
        // =========================================================================
        this.popupOverlay.addEventListener('click', e => {
            if (e.target !== this.popupOverlay) {
                return; // Agar click overlay par nahi hua toh ignore karein
            }

            // Check karein kaunsa critical popup khula hai (jise band nahi karna hai)
            if (this.bookingPopup.style.display === 'block' || this.serviceCategorySelectionPopup.style.display === 'block') {
                this.showCustomAlert("Kripya pahle jaankari poori karein ya form submit karein.");
            } else if (this.paymentStep.style.display === 'block') {
                this.showCustomAlert("Kripya band karne se pehle payment process poora karein.");
            } else if (this.ticketStep.style.display === 'block') {
                // Confirmation popup ke baad band karne ki anumati
                this.closeAllPopups();
            } else if (this.priceListPopup.style.display === 'block') {
                 // Info popups ko closeSpecificPopup se band karein
                this.closeSpecificPopup(this.priceListPopup);
            } else if (this.conditionsPopup.style.display === 'block') {
                 // Info popups ko closeSpecificPopup se band karein
                this.closeSpecificPopup(this.conditionsPopup);
            }
        });
        // =========================================================================
        
        this.okayBtn.addEventListener('click', () => this.closeAllPopups());
        this.downloadTicketsBtn.addEventListener('click', () => this.downloadTicketDetails());

        this.bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validation checks
            const selectedCategories = Array.from(this.serviceCategoryCheckboxesContainer.querySelectorAll('input[name="serviceCategory"]:checked'));
            if (selectedCategories.length === 0) { this.showCustomAlert("Kripya kam se kam ek package chunein."); return; }
            if (this.bookingForm.name.value.trim().length < 10) { this.showCustomAlert("Kripya poora naam daalein (kam se kam 10 characters)."); return; }
            if (!/^\d{10}$/.test(this.bookingForm.phone.value.trim())) { this.showCustomAlert("Kripya sahi 10-digit phone number daalein."); return; }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.bookingForm.email.value.trim())) { this.showCustomAlert("Kripya sahi email address daalein."); return; }
            if (this.bookingForm.location.value.trim().length < 3) { this.showCustomAlert("Kripya sahi location daalein."); return; }
            if (this.bookingForm.address.value.trim().length < 30) { this.showCustomAlert("Kripya poora address daalein (kam se kam 30 characters)."); return; }
            if (this.currentCalculatedPrice === 0) {
                this.showCustomAlert("Kripya package aur quantity chunein.");
                return;
            }

            this.submitMessage.classList.remove('hidden');
            this.bookingForm.querySelector('button[type="submit"]').disabled = true;
            this.generatedTicket = this.generateTicketId();

            const selectedServiceNames = selectedCategories.map(cb => cb.value).join(', ');
            const totalDue = this.currentCalculatedPrice;

            // --- Submission Mimic (Ideal place for Google Sheet POST) ---
            
            setTimeout(() => {
                this.submitMessage.classList.add('hidden');
                this.bookingForm.querySelector('button[type="submit"]').disabled = false;
                
                this.bookingPopup.style.display = 'none';

                this.paymentSummary.innerHTML = `
                    <p class="text-text-subtle text-lg mb-2 font-bold">Booking Details:</p>
                    <p class="text-text-light text-base mb-1">Package(s): <span class="font-bold text-primary">${selectedServiceNames}</span></p>
                    <p class="text-text-light text-base mb-3">Quantity: <span class="font-bold text-primary">${this.quantitySelect.value}</span></p>
                    <p class="total-price-quantity text-secondary text-3xl font-bold mt-3">Total Payable: ₹${totalDue.toLocaleString('en-IN')}</p>
                `;
                this.openPopup(this.paymentStep);
                this.startPaymentTimer();
                this.saveFormData();
            }, 1000);
            
            // --- End Submission Mimic ---
        });

        this.razorpayBtn.addEventListener('click', () => this.handleRazorpayPayment());
        this.priceListBtn.addEventListener('click', () => {
            this.populatePriceList();
            this.openPopup(this.priceListPopup);
        });
        this.conditionsBtn.addEventListener('click', () => {
            // Populate data before opening
            this.populateConditionsDetails(); 
            this.openPopup(this.conditionsPopup);
        });
        this.closePriceListBtn.addEventListener('click', () => this.closeSpecificPopup(this.priceListPopup));
        this.closeConditionsBtn.addEventListener('click', () => this.closeSpecificPopup(this.conditionsPopup));
    }
}


// --- IV. Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    // CCTV service UI ko inject karein
    injectCCTVServiceUI();
});
