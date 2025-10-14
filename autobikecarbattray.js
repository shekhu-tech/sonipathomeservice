

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
#razorpay-payment-btn-auto-batt,
#downloadBtn { 
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
#razorpay-payment-btn-auto-batt:hover,
#downloadBtn:hover { 
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 255, 255, 0.6);
}

/* Popup Buttons: Secondary/Close Action (Gold Accent) */
#okayBtnBatt,
#close-price-list-btn,
#close-description-btn { 
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

#okayBtnBatt:hover,
#close-price-list-btn:hover,
#close-description-btn:hover { 
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
#priceListTableBodyBatt tr:nth-child(even) {
    background-color: #22324C;
}
#priceListTableBodyBatt td {
    font-family: 'Roboto', sans-serif;
}
#priceListTableBodyBatt .font-semibold {
    color: var(--primary);
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
// --- UI Injection Function (AUTO BATTERY ONLY) ---
// =========================================================================

function injectAutoBatteryServiceUI() {
    // Requested injection ID: 'book-auto-bike-car-battary-container'
    const INJECTION_CONTAINER_ID = 'book-auto-bike-car-battary-container';
    let container = document.getElementById(INJECTION_CONTAINER_ID);
    
    if (!container) {
        console.error(`Injection Error: Main container with ID "${INJECTION_CONTAINER_ID}" not found. Please ensure your HTML file has <div id="${INJECTION_CONTAINER_ID}"></div>`);
        return;
    }

    // Dynamic HTML content for the Auto Battery Service page
    container.innerHTML = `
        <style>${INLINE_CSS_STYLES}</style>
        
        <main class="container">
            
            <section class="product-section">
                <div class="product-header">
                    <h2 class="text-white">Battery Bike & Car Quick Installation</h2>
                    <p class="text-sm text-gray-400 mt-2">Bike, EV Scooty, aur Car Batteries **Exchange Offers** ke saath abhi available hain!</p>
                </div>

                <div class="product-content">
                    
                    <div class="product-details">
                        <h3 class="text-3xl font-semibold text-text-light mb-4">Branded Power for Your Vehicle</h3>
                        <p class="text-text-subtle mb-4 text-base">
                            Apni location par hi top-brand batteries ki instant delivery aur professional installation paayen. Battery type aur warranty chunein.
                        </p>
                        
                        <div class="price-container">
                            <div class="original-price">Flexible Pricing & Exchange Options</div>
                            <div class="current-price" id="displayPriceBatt">Battery Chunein</div>
                        </div>
                        
                        <div class="action-buttons">
                            <button class="btn btn-primary" id="book-now-btn">
                                <i class="fas fa-motorcycle"></i> Abhi Battery Order Karein
                            </button>
                            <button id="price-list-btn-batt" class="btn btn-secondary">
                                <i class="fas fa-tags"></i> Transparent Rate List
                            </button>
                             <button id="description-btn-batt" class="btn btn-secondary">
                                <i class="fas fa-file-contract"></i> Exchange & Warranty Details
                            </button>
                            <button id="go-back-btn" class="btn btn-secondary" onclick="window.location.href='index.html'">
                                <i class="fas fa-home"></i> Home Page Par Jaayen
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <div class="stat-grid">
                <div class="stat-card">
                    <h3>Total Auto Batteries Biki</h3>
                    <p>7,000+</p>
                </div>
                <div class="stat-card">
                    <h3>Delivery Time (Avg)</h3>
                    <p>1 Ghanta</p>
                </div>
                <div class="stat-card">
                    <h3>Exchange Value (Max)</h3>
                    <p>₹500+</p>
                </div>
                <div class="stat-card">
                    <h3>Brands Supported</h3>
                    <p>3+ Brands</p>
                </div>
            </div>
        </main>

        <div id="popup-overlay"></div>
        
        <!-- 1. Booking Form Popup -->
        <div id="booking-popup" class="popup">
            <h2 class="text-2xl font-bold text-center">Auto Battery Order Form</h2>
            <form id="booking-form-batt">
                <div class="quantity-selector-container my-4">
                    <label for="pack-selection">Battery Product Chunein:</label>
                    <select id="pack-selection" name="pack-selection" required class="bg-bg-dark border-primary">
                        <option value="" disabled selected>Bike, EV, ya Car Battery chunein</option>
                    </select>
                </div>
                
                <label for="name">Poora Naam (kam se kam 10 characters)</label>
                <input type="text" id="name" name="name" placeholder="John Doe" autocomplete="name" minlength="10" required>

                <label for="phone">Phone Number (10 digits)</label>
                <input type="tel" id="phone" name="phone" placeholder="9876543210" autocomplete="tel" pattern="[0-9]{10}" required>
                
                <label for="location">Location (jaise Sonipat, Delhi)</label>
                <input type="text" id="location" name="location" placeholder="Sonipat" autocomplete="address-level2" required>
                
                <label for="address">Poora Address (kam se kam 30 characters)</label>
                <textarea id="address" name="address" placeholder="Makaan Number, Gali, Area, Landmark, City, State, PIN code" autocomplete="street-address" minlength="30" rows="4" required></textarea>
                
                <div class="quantity-selector my-4">
                    <label for="quantity">Units Ki Sankhya (Max 3):</label>
                    <select id="quantity" name="quantity" required class="bg-bg-dark border-primary">
                        <option value="1" selected>1 Unit</option>
                        <option value="2">2 Units</option>
                        <option value="3">3 Units</option>
                    </select>
                    <div class="flex justify-between items-center mt-3 text-text-subtle text-sm">
                        <span>Quantity ke hisaab se price</span>
                        <span id="calculated-price-batt" class="total-price-quantity text-lg">Total: ₹0</span>
                    </div>
                </div>

                <button type="submit">Details Submit Karein & Payment Karein</button>
                <p id="submit-message-batt" class="text-center text-sm text-primary mt-2 hidden">Submit Ho Raha Hai... Kripya intezaar karein</p>
            </form>
        </div>

        <!-- 2. Payment Popup -->
        <div id="payment-popup" class="popup">
            <h2 class="text-2xl font-bold text-center">Apni Payment Poori Karein</h2>
            <p class="text-text-subtle text-center mb-6">Kripya apni khareed aur installation ko final karne ke liye payment poori karein.</p>
            <div id="payment-summary" class="bg-bg-dark p-5 rounded-lg mb-6 text-center border border-secondary"></div>
            <div id="timer-display-batt" class="text-xl font-bold text-primary text-center mb-4">Samay baaki: 05:00</div>
            <button id="razorpay-payment-btn-auto-batt"><i class="fas fa-credit-card mr-2"></i> Razorpay Se Payment Karein</button>
            <p class="mt-4 text-xs text-text-subtle text-center">
                Note: Payment process ke dauraan is window ko band na karein.
            </p>
        </div>

        <!-- 3. Confirmation Popup -->
        <div id="confirmation-popup" class="popup">
            <h2 id="welcome-message-batt" class="text-2xl font-bold text-center text-primary"></h2>
            <p class="text-text-subtle text-center mb-4">Aapki khareed confirm ho gayi hai. Hamari team installation ke liye aapse contact karegi.</p>
            <div id="ticket-info" class="space-y-2 bg-bg-dark p-4 rounded-lg border border-primary">
                <!-- Details will be injected here -->
            </div>
            <button id="downloadBtn" class="mt-4"><i class="fas fa-download mr-2"></i> Details Download Karein</button>
            <p class="mt-4 text-sm text-text-subtle text-center">📸 Kripya proof aur reference ke liye screenshot le lein.</p>
            <button id="okayBtnBatt" class="mt-4">Theek Hai, Samajh Gaya!</button>
        </div>

        <!-- 4. Price List Popup -->
        <div id="price-list-popup" class="popup">
            <h2 class="text-2xl font-bold text-center">Auto Battery Rate List</h2>
            <div class="overflow-x-auto mt-4">
                <table class="min-w-full bg-bg-dark rounded-lg border border-primary">
                    <thead>
                        <tr class="text-left text-secondary">
                            <th class="py-3 px-4 border-b border-text-subtle">Product | Type | Warranty</th>
                            <th class="py-3 px-4 border-b border-text-subtle text-right">Price</th>
                            <th class="py-3 px-4 border-b border-text-subtle text-right">M.R.P.</th>
                        </tr>
                    </thead>
                    <tbody id="priceListTableBodyBatt">
                        <!-- Rows will be injected by JavaScript -->
                    </tbody>
                </table>
            </div>
            <button id="close-price-list-btn" class="close-btn mt-4">Rate List Band Karein</button>
        </div>

        <!-- 5. Description Popup (Terms & Exchange) -->
        <div id="description-popup" class="popup">
            <h2 class="text-2xl font-bold text-center">Exchange & Warranty Details</h2>
            <div class="text-text-subtle text-base space-y-4 max-h-[70vh] overflow-y-auto pr-3">
                <ul class="list-disc list-inside space-y-3">
                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-exchange-alt mr-2"></i> Exchange Offer Details</li>
                    <li>Jin prices par "**Exchange Offer**" likha hai, unke liye aapko technician ko apni purani battery (usi category ki) deni hogi.</li>
                    <li>Listed **"Exchange Offer" price final price hai** jismein exchange value pehle se hi shamil hai.</li>
                    <li>"**Without Exchange**" prices un customers ke liye hain jo purani battery nahi de rahe hain.</li>

                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-certificate mr-2"></i> Manufacturer Warranty</li>
                    <li>Sabhi batteries par product name mein specify ki gayi **Manufacturer Warranty** (jaise 1 Saal, 2 Saal) milegi.</li>
                    <li>Installation har khareed ke saath **muft** hai.</li>
                    <li>Battery delivery aur installation aam taur par booking confirmation ke **1-2 ghante** ke andar poori ho jaati hai (Sonipat city limits mein).</li>
                </ul>
            </div>
            <button id="close-description-btn" class="close-btn mt-4">Band Karein</button>
        </div>
    `;

    // Initialize the Auto Battery application logic after UI injection
    setTimeout(() => {
        window.autoBatteryServiceApp = new AutoBatteryServiceApp();
    }, 0);
    
}


// =========================================================================
// --- Auto Battery Service Application Class (Poora Logic) ---
// =========================================================================

class AutoBatteryServiceApp {
    constructor() {
        // Data copied from the original file
        this.allRates = [
            { "name": "Bike Battery | 2 Years W. | Exchange Offer", "rate": 699, "category": "Bike" },
            { "name": "Bike Battery | 2 Years W. | Without Exchange", "rate": 849, "category": "Bike" },
            { "name": "EV Scooty Battery (33 AH) | 1 Year W.", "rate": 2999, "category": "EV" },
            { "name": "Car Battery | 1 Year W. (TATA) | Exchange Offer", "rate": 1699, "category": "Car" },
            { "name": "Car Battery | 1 Year W. (TATA) | Without Exchange", "rate": 2699, "category": "Car" },
            { "name": "Car Battery | 3 Years W. (Amaron) | Exchange Offer", "rate": 3399, "category": "Car" },
            { "name": "Car Battery | 3 Years W. (Amaron) | Without Exchange", "rate": 4399, "category": "Car" },
        ];

        this.SERVICE_NAME = "Auto Battery Supply";
        this.LOCAL_STORAGE_KEY = 'autoBatteryFormData';
        this.RAZORPAY_IMAGE_TEXT = "BATT"; // Changed to BATT for clarity
        this.PAYMENT_TIME_LIMIT = 5 * 60;
        this.GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwvO8RKxi2zxIZsilgYB74V_kO00EQIA_QIefdhsv9Dv0cEgh300B8kx6WsjHzpXnA1gg/exec"; // Common URL

        
        // --- DOM Element Selection (Sare IDs BATT specific hain) ---
        this.bookNowBtn = document.getElementById('book-now-btn');
        this.popupOverlay = document.getElementById('popup-overlay');
        this.allPopups = document.querySelectorAll('.popup');
        this.bookingPopup = document.getElementById('booking-popup');
        this.paymentPopup = document.getElementById('payment-popup');
        this.confirmationPopup = document.getElementById('confirmation-popup');
        this.bookingForm = document.getElementById('booking-form-batt');
        
        this.packSelection = document.getElementById('pack-selection');
        this.quantitySelect = document.getElementById('quantity');
        this.calculatedPriceDisplay = document.getElementById('calculated-price-batt');
        this.displayPrice = document.getElementById('displayPriceBatt');
        this.submitMessage = document.getElementById('submit-message-batt');
        this.paymentSummary = document.getElementById('payment-summary');
        this.timerDisplay = document.getElementById('timer-display-batt');
        this.razorpayBtn = document.getElementById('razorpay-payment-btn-auto-batt');
        this.ticketInfo = document.getElementById('ticket-info');
        this.downloadBtn = document.getElementById('downloadBtn');
        this.okayBtn = document.getElementById('okayBtnBatt');
        this.welcomeMessage = document.getElementById('welcome-message-batt');
        
        this.priceListBtn = document.getElementById('price-list-btn-batt');
        this.descriptionBtn = document.getElementById('description-btn-batt');
        this.priceListPopup = document.getElementById('price-list-popup');
        this.descriptionPopup = document.getElementById('description-popup');
        this.closePriceListBtn = document.getElementById('close-price-list-btn');
        this.closeDescriptionBtn = document.getElementById('close-description-btn');
        this.priceListTableBody = document.getElementById('priceListTableBodyBatt');


        // --- State variables ---
        this.currentCalculatedPrice = 0;
        this.generatedTicket = '';
        this.countdownInterval = null;
        
        if (!this.bookNowBtn) {
             console.error("AutoBatteryServiceApp shuru nahi ho paya. Kuch zaroori elements nahi mile.");
             return;
        }

        this.init();
    }
    
    init() {
        this.populatePackOptions();
        this.updatePrices();
        this.loadFormData();
        this.bindEvents();
    }

    // --- Local Storage Functions ---
    saveFormData() {
        const formData = {
            fullName: this.bookingForm.name.value,
            phone: this.bookingForm.phone.value,
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
                this.bookingForm.location.value = data.location || '';
                this.bookingForm.address.value = data.address || '';
            }
        } catch (e) {
            console.warn("Local storage se data load nahi ho paya:", e);
        }
    }

    // --- Core Functions ---
    populatePackOptions() {
        this.packSelection.innerHTML = '<option value="" disabled selected>Bike, EV, ya Car Battery chunein</option>';
        this.allRates.forEach(rate => {
            const option = document.createElement('option');
            option.value = rate.name;
            option.textContent = `${rate.category}: ${rate.name} - ₹${rate.rate}`;
            option.dataset.rate = rate.rate;
            this.packSelection.appendChild(option);
        });
    }
    
    updatePrices() {
        const selectedOption = this.packSelection.options[this.packSelection.selectedIndex];
        const basePrice = selectedOption && selectedOption.dataset.rate ? parseFloat(selectedOption.dataset.rate) : 0;
        const selectedQuantity = parseInt(this.quantitySelect.value) || 1;
        
        this.currentCalculatedPrice = basePrice * selectedQuantity;
        
        this.calculatedPriceDisplay.textContent = `Total: ₹${this.currentCalculatedPrice}`;

        if (basePrice > 0) {
             this.displayPrice.textContent = `₹${basePrice} / Unit`;
        } else {
             this.displayPrice.textContent = "Battery Chunein";
        }
    }

    generateTicketId() {
        return 'BAT-XXXXXX-XXXX'.replace(/X/g, () => (Math.random() * 36 | 0).toString(36).toUpperCase());
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
        this.bookingForm.reset();
        this.quantitySelect.value = "1";
        this.calculatedPriceDisplay.textContent = 'Total: ₹0';
        this.displayPrice.textContent = 'Battery Chunein';
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
        const isAnotherPopupOpen = Array.from(this.allPopups).some(p => p.style.display === 'block');
        if (!isAnotherPopupOpen) {
            this.popupOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    downloadTicketDetails() {
        const name = this.bookingForm.name.value;
        const phone = this.bookingForm.phone.value;
        const location = this.bookingForm.location.value;
        const address = this.bookingForm.address.value;
        const selectedPack = this.packSelection.options[this.packSelection.selectedIndex].textContent.split(' - ')[0];
        const selectedQuantity = this.quantitySelect.value;
        const totalPrice = this.currentCalculatedPrice;

        const content = `${this.SERVICE_NAME} Booking Details\n\n` +
                        `Order ID: ${this.generatedTicket}\n` +
                        `Name: ${name}\n` +
                        `Phone: ${phone}\n` +
                        `Address: ${location}, ${address}\n` +
                        `Product: ${selectedPack}\n` +
                        `Quantity: ${selectedQuantity} Unit(s)\n` +
                        `Total Price Paid: ₹${totalPrice}\n\n` +
                        `Dhanyawad! Hum jald hi aapse contact karenge installation ke liye.`;

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `auto-battery-booking-${this.generatedTicket}.txt`;
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
        const selectedPack = this.packSelection.options[this.packSelection.selectedIndex].textContent.split(' - ')[0];
        const options = {
            "key": "rzp_live_RLjzp7VlXERwiG",
            "amount": this.currentCalculatedPrice * 100,
            "currency": "INR",
            "name": `SonipatHomeService - ${this.SERVICE_NAME}`,
            "description": `Purchase for: ${selectedPack} x ${this.quantitySelect.value} (ID: ${this.generatedTicket})`,
            "image": `https://placehold.co/100x100/1C2738/00FFFF?text=${this.RAZORPAY_IMAGE_TEXT}`,
            "handler": (response) => {
                this.paymentSuccess(response.razorpay_payment_id);
            },
            "prefill": {
                "name": this.bookingForm.name.value,
                "phone": this.bookingForm.phone.value
            },
            "notes": {
                "address": `${this.bookingForm.location.value}, ${this.bookingForm.address.value}`,
                "product_details": selectedPack,
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
        this.paymentPopup.style.display = 'none';
        this.openPopup(this.confirmationPopup);

        this.saveFormData();
        
        const name = this.bookingForm.name.value.split(' ')[0];
        const selectedPack = this.packSelection.options[this.packSelection.selectedIndex].textContent.split(' - ')[0];
        const selectedQuantity = this.quantitySelect.value;
        const totalPrice = this.currentCalculatedPrice;

        this.welcomeMessage.textContent = `🎉 Khareed Confirm Ho Gayi, ${name}! 🎉`;
        
        this.ticketInfo.innerHTML = `
            <p><strong>Order ID:</strong> <span class="font-bold text-text-light">${this.generatedTicket}</span></p>
            <p><strong>Product:</strong> <span class="font-bold text-text-light">${selectedPack}</span></p>
            <p><strong>Quantity:</strong> <span class="font-bold text-text-light">${selectedQuantity} Unit(s)</span></p>
            <p class="text-secondary text-lg font-bold mt-3">Total Paid: ₹${totalPrice}</p>
            <p class="text-text-subtle text-sm mt-3">Hum 2 ghante ke andar aapse contact karenge delivery & installation confirm karne ke liye.</p>
            <p class="text-text-subtle text-xs mt-1">Payment ID: ${paymentId}</p>
        `;
    }

    populatePriceList() {
        this.priceListTableBody.innerHTML = '';
        this.allRates.forEach(pack => {
            let marketPrice;
            if (pack.rate < 1000) { 
                marketPrice = pack.rate + 250; 
            } else { 
                marketPrice = Math.round(pack.rate * 1.15); 
            }

            const row = `
                <tr class="text-text-light hover:bg-bg-dark">
                    <td class="py-3 px-4 border-b border-gray-700 font-semibold text-primary">${pack.category}: ${pack.name}</td>
                    <td class="py-3 px-4 border-b border-gray-700 text-right font-semibold text-primary">₹${pack.rate}</td>
                    <td class="py-3 px-4 border-b border-gray-700 text-right text-text-subtle line-through">₹${marketPrice}</td>
                </tr>
            `;
            this.priceListTableBody.insertAdjacentHTML('beforeend', row);
        });
    }
    
    // --- Event Listeners Initialization ---
    bindEvents() {
        this.packSelection.addEventListener('change', () => this.updatePrices());
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
            if (this.bookingPopup.style.display === 'block') {
                this.showCustomAlert("Kripya pahle jaankari poori karein ya form submit karein.");
            } else if (this.paymentPopup.style.display === 'block') {
                this.showCustomAlert("Kripya band karne se pehle payment process poora karein.");
            } else if (this.confirmationPopup.style.display === 'block') {
                // Confirmation popup ke baad band karne ki anumati
                this.closeAllPopups();
            } else if (this.priceListPopup.style.display === 'block') {
                 // Info popups ko closeSpecificPopup se band karein
                this.closeSpecificPopup(this.priceListPopup);
            } else if (this.descriptionPopup.style.display === 'block') {
                 // Info popups ko closeSpecificPopup se band karein
                this.closeSpecificPopup(this.descriptionPopup);
            }
        });
        // =========================================================================
        
        this.okayBtn.addEventListener('click', () => this.closeAllPopups());
        this.downloadBtn.addEventListener('click', () => this.downloadTicketDetails());

        this.bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validation checks
            if (!this.packSelection.value) { this.showCustomAlert("Kripya product chunein."); return; }
            if (this.bookingForm.name.value.trim().length < 10) { this.showCustomAlert("Kripya poora naam daalein (kam se kam 10 characters)."); return; }
            if (!/^\d{10}$/.test(this.bookingForm.phone.value.trim())) { this.showCustomAlert("Kripya sahi 10-digit phone number daalein."); return; }
            if (this.bookingForm.location.value.trim().length < 3) { this.showCustomAlert("Kripya sahi location daalein."); return; }
            if (this.bookingForm.address.value.trim().length < 30) { this.showCustomAlert("Kripya poora address daalein (kam se kam 30 characters)."); return; }
            if (this.currentCalculatedPrice === 0) {
                this.showCustomAlert("Kripya product aur quantity chunein.");
                return;
            }

            this.submitMessage.classList.remove('hidden');
            this.bookingForm.querySelector('button[type="submit"]').disabled = true;
            this.generatedTicket = this.generateTicketId();

            const selectedPackText = this.packSelection.options[this.packSelection.selectedIndex].textContent.split(' - ')[0];
            const basePrice = parseFloat(this.packSelection.options[this.packSelection.selectedIndex].dataset.rate);
            const totalDue = this.currentCalculatedPrice;

            // --- Submission Mimic (Ideal place for Google Sheet POST) ---
            
            setTimeout(() => {
                this.submitMessage.classList.add('hidden');
                this.bookingForm.querySelector('button[type="submit"]').disabled = false;
                
                this.bookingPopup.style.display = 'none';

                this.paymentSummary.innerHTML = `
                    <p class="text-text-subtle text-lg mb-2 font-bold">Purchase Details:</p>
                    <p class="text-text-light text-base mb-1">Product: <span class="font-bold text-primary">${selectedPackText}</span></p>
                    <p class="text-text-light text-base mb-3">Quantity: <span class="font-bold text-primary">${this.quantitySelect.value}</span></p>
                    <p class="total-price-quantity text-secondary text-3xl font-bold mt-3">Total Payable: ₹${totalDue}</p>
                `;
                this.openPopup(this.paymentPopup);
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
        this.descriptionBtn.addEventListener('click', () => {
            this.openPopup(this.descriptionPopup);
        });
        this.closePriceListBtn.addEventListener('click', () => this.closeSpecificPopup(this.priceListPopup));
        this.closeDescriptionBtn.addEventListener('click', () => this.closeSpecificPopup(this.descriptionPopup));
    }
}


// --- IV. Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    // Auto Battery service UI ko inject karein
    injectAutoBatteryServiceUI();
});
