

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
#razorpay-payment-btn-mat,
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
#razorpay-payment-btn-mat:hover,
#downloadBtn:hover { 
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 255, 255, 0.6);
}

/* Popup Buttons: Secondary/Close Action (Gold Accent) */
#okayBtnMat,
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

#okayBtnMat:hover,
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
#priceListTableBodyMat tr:nth-child(even) {
    background-color: #22324C;
}
#priceListTableBodyMat td {
    font-family: 'Roboto', sans-serif;
}
#priceListTableBodyMat .font-semibold {
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
// --- UI Injection Function (BUILDING MATERIAL ONLY) ---
// =========================================================================

function injectBuildingMaterialServiceUI() {
    // Injection ID: 'book-building-material-supply-container'
    const INJECTION_CONTAINER_ID = 'book-building-material-supply-container';
    let container = document.getElementById(INJECTION_CONTAINER_ID);
    
    if (!container) {
        console.error(`Injection Error: Main container with ID "${INJECTION_CONTAINER_ID}" not found. Please ensure your HTML file has <div id="${INJECTION_CONTAINER_ID}"></div>`);
        return;
    }

    // Dynamic HTML content for the Building Material Service page
    container.innerHTML = `
        <style>${INLINE_CSS_STYLES}</style>
        
        <main class="container">
            
            <section class="product-section">
                <div class="product-header">
                    <h2 class="text-white">Professional Building Material Supply</h2>
                    <p class="text-sm text-gray-400 mt-2">Order Quality Bricks (Eet), Sand (Ret), and Dust (Bajri) for doorstep delivery.</p>
                </div>

                <div class="product-content">
                    
                    <div class="product-details">
                        <h3 class="text-3xl font-semibold text-text-light mb-4">Quality Bricks, Sand, and Dust Delivered</h3>
                        <p class="text-text-subtle mb-4 text-base">
                            Apna zaroori material aur quantity chunein. Rates transparent hain aur ismein doorstep delivery shamil hai.
                        </p>
                        
                        <div class="price-container">
                            <div class="original-price">Delivery Included (Doorstep)</div>
                            <div class="current-price" id="displayPriceMat">Material Chunein</div>
                        </div>
                        
                        <div class="action-buttons">
                            <button class="btn btn-primary" id="book-now-btn">
                                <i class="fas fa-truck-loading"></i> Abhi Order Karein
                            </button>
                            <button id="price-list-btn-mat" class="btn btn-secondary">
                                <i class="fas fa-tags"></i> Transparent Rate List
                            </button>
                             <button id="description-btn-mat" class="btn btn-secondary">
                                <i class="fas fa-info-circle"></i> Delivery & Qty Details
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
                    <h3>Total Orders Delivered</h3>
                    <p>7,500+</p>
                </div>
                <div class="stat-card">
                    <h3>Materials Available</h3>
                    <p>3+ Types</p>
                </div>
                <div class="stat-card">
                    <h3>Quality Rating</h3>
                    <p>4.8/5 Stars</p>
                </div>
                <div class="stat-card">
                    <h3>Fastest Delivery</h3>
                    <p>Same Day!</p>
                </div>
            </div>
        </main>

        <div id="popup-overlay"></div>
        
        <!-- 1. Booking Form Popup -->
        <div id="booking-popup" class="popup">
            <h2 class="text-2xl font-bold text-center">Material Order Booking Form</h2>
            <form id="booking-form-mat">
                <div class="quantity-selector-container my-4">
                    <label for="pack-selection">Material aur Rate Chunein:</label>
                    <select id="pack-selection" name="pack-selection" required class="bg-bg-dark border-primary">
                        <option value="" disabled selected>Material Chunein (Eet, Ret, ya Bajri)</option>
                    </select>
                </div>
                
                <label for="name">Poora Naam (kam se kam 10 characters)</label>
                <input type="text" id="name" name="name" placeholder="John Doe" autocomplete="name" minlength="10" required>

                <label for="phone">Phone Number (10 digits)</label>
                <input type="tel" id="phone" name="phone" placeholder="9876543210" autocomplete="tel" pattern="[0-9]{10}" required>
                
                <label for="location">Delivery Location (jaise Sonipat City)</label>
                <input type="text" id="location" name="location" placeholder="Sonipat" autocomplete="address-level2" required>
                
                <label for="address">Poora Delivery Address (kam se kam 30 characters)</label>
                <textarea id="address" name="address" placeholder="Makaan Number, Gali, Area, Landmark, City, State, PIN code" autocomplete="street-address" minlength="30" rows="4" required></textarea>
                
                <div class="quantity-selector my-4">
                    <label for="quantity">Order Quantity (Minimums Apply, Max 10 Orders):</label>
                    <select id="quantity" name="quantity" required class="bg-bg-dark border-primary">
                        <option value="1" selected>1 Order</option>
                        <option value="2">2 Orders</option>
                        <option value="3">3 Orders</option>
                        <option value="4">4 Orders</option>
                        <option value="5">5 Orders</option>
                        <option value="6">6 Orders</option>
                        <option value="7">7 Orders</option>
                        <option value="8">8 Orders</option>
                        <option value="9">9 Orders</option>
                        <option value="10">10 Orders</option>
                    </select>
                    <div class="flex justify-between items-center mt-3 text-text-subtle text-sm">
                        <span>Total Price (Quantity ke hisaab se)</span>
                        <span id="calculated-price-mat" class="total-price-quantity text-lg">Total: ₹0</span>
                    </div>
                </div>

                <button type="submit">Details Submit Karein & Payment Karein</button>
                <p id="submit-message-mat" class="text-center text-sm text-primary mt-2 hidden">Submit Ho Raha Hai... Kripya intezaar karein</p>
            </form>
        </div>

        <!-- 2. Payment Popup -->
        <div id="payment-popup" class="popup">
            <h2 class="text-2xl font-bold text-center">Apni Payment Poori Karein</h2>
            <p class="text-text-subtle text-center mb-6">Aapki total payment mein material aur doorstep delivery charges shamil hain.</p>
            <div id="payment-summary" class="bg-bg-dark p-5 rounded-lg mb-6 text-center border border-secondary"></div>
            <div id="timer-display-mat" class="text-xl font-bold text-primary text-center mb-4">Samay baaki: 05:00</div>
            <button id="razorpay-payment-btn-mat"><i class="fas fa-credit-card mr-2"></i> Razorpay Se Pay Karein</button>
            <p class="mt-4 text-xs text-text-subtle text-center">
                Note: Payment process ke dauraan is window ko band na karein.
            </p>
        </div>

        <!-- 3. Confirmation Popup -->
        <div id="confirmation-popup" class="popup">
            <h2 id="welcome-message-mat" class="text-2xl font-bold text-center text-primary"></h2>
            <p class="text-text-subtle text-center mb-4">Aapka material order confirm ho gaya hai! Hum jald hi delivery arrange karenge.</p>
            <div id="ticket-info" class="space-y-2 bg-bg-dark p-4 rounded-lg border border-primary">
                <!-- Details will be injected here -->
            </div>
            <button id="downloadBtn" class="mt-4"><i class="fas fa-download mr-2"></i> Order Details Download Karein</button>
            <p class="mt-4 text-sm text-text-subtle text-center">📸 Kripya proof aur reference ke liye screenshot le lein.</p>
            <button id="okayBtnMat" class="mt-4">Theek Hai, Samajh Gaya!</button>
        </div>

        <!-- 4. Price List Popup -->
        <div id="price-list-popup" class="popup">
            <h2 class="text-2xl font-bold text-center">Building Material Rate List</h2>
            <div class="overflow-x-auto mt-4">
                <table class="min-w-full bg-bg-dark rounded-lg border border-primary">
                    <thead>
                        <tr class="text-left text-secondary">
                            <th class="py-3 px-4 border-b border-text-subtle">Material | Details</th>
                            <th class="py-3 px-4 border-b border-text-subtle text-right">Price / Unit</th>
                            <th class="py-3 px-4 border-b border-text-subtle text-right">Market Price (Approx)</th>
                        </tr>
                    </thead>
                    <tbody id="priceListTableBodyMat">
                        <!-- Rows will be injected by JavaScript -->
                    </tbody>
                </table>
            </div>
            <button id="close-price-list-btn" class="close-btn-secondary mt-4">Rate List Band Karein</button>
        </div>

        <!-- 5. Description Popup -->
        <div id="description-popup" class="popup">
            <h2 class="text-2xl font-bold text-center">Delivery & Material Details</h2>
            <div class="text-text-subtle text-base space-y-4 max-h-[70vh] overflow-y-auto pr-3">
                <ul class="list-disc list-inside space-y-3">
                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-warehouse mr-2"></i> Bricks & Sand Quality</li>
                    <li>**Red Bricks (Eet):** Price 1000 pieces ke liye hai, aapki site par delivered.</li>
                    <li>**DUST (Bajri):** 1st Quality, price per foot hai. Minimum order 100 feet.</li>
                    <li>**Mota Ret (Sand):** High-quality Yamunanagar Sand, price per foot.</li>
                    <li>**Ret (Sand):** Local rate, price per foot.</li>

                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-route mr-2"></i> Delivery & Logistics</li>
                    <li>Sabhi quoted rates mein Sonipat City limits mein **doorstep delivery** shamil hai.</li>
                    <li>Hum **Same Day ya Next Day** delivery dene ki koshish karte hain.</li>
                    <li>Material aapke diye gaye address par sabse accessible point par offload kiya jaata hai.</li>
                </ul>
            </div>
            <button id="close-description-btn" class="close-btn-secondary mt-4">Band Karein</button>
        </div>
    `;

    // Initialize the Building Material application logic after UI injection
    setTimeout(() => {
        window.buildingMaterialServiceApp = new BuildingMaterialServiceApp();
    }, 0);
    
}


// =========================================================================
// --- Building Material Service Application Class (Poora Logic) ---
// =========================================================================

class BuildingMaterialServiceApp {
    constructor() {
        // Data copied from the original file
        this.allRates = [
            // Note: Quantity selection is 'Orders', but the price is based on the Unit Rate (Per 1000 Pcs / Per Ft)
            // The quantity selector '1 Order' corresponds to the listed price, but custom validation is needed for minimums.
            { "name": "Red Bricks (1000 Pcs) | Door Step Delivery", "rate": 8499, "unit": "Per 1000 Pcs", "min_qty": 1, "category": "Bricks" },
            { "name": "DUST - 1st Quality | Min 100 Ft Door Step Delivery", "rate": 55, "unit": "Per Ft", "min_qty": 100, "category": "Dust" },
            { "name": "Ret (Sand) - Mota Ret (Yamunanagar) | Door Step Delivery", "rate": 38, "unit": "Per Ft", "min_qty": 100, "category": "Ret (Sand)" },
            { "name": "Ret (Sand) - Local Rate | Door Step Delivery", "rate": 33, "unit": "Per Ft", "min_qty": 100, "category": "Ret (Sand)" }
        ];

        this.SERVICE_NAME = "Building Material Delivery";
        this.SERVICE_TAB_ID = "material-delivery-service";
        this.LOCAL_STORAGE_KEY = 'buildingMaterialFormData';
        this.RAZORPAY_IMAGE_TEXT = "MAT";
        this.PAYMENT_TIME_LIMIT = 5 * 60;
        this.GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwvO8RKxi2zxIZsilgYB74V_kO00EQIA_QIefdhsv9Dv0cEgh300B8kx6WsjHzpXnA1gg/exec"; 

        
        // --- DOM Element Selection (Sare IDs MAT specific hain) ---
        this.bookNowBtn = document.getElementById('book-now-btn');
        this.popupOverlay = document.getElementById('popup-overlay');
        this.allPopups = document.querySelectorAll('.popup');
        this.bookingPopup = document.getElementById('booking-popup');
        this.paymentPopup = document.getElementById('payment-popup');
        this.confirmationPopup = document.getElementById('confirmation-popup');
        this.bookingForm = document.getElementById('booking-form-mat');
        
        this.packSelection = document.getElementById('pack-selection');
        this.quantitySelect = document.getElementById('quantity');
        this.calculatedPriceDisplay = document.getElementById('calculated-price-mat');
        this.displayPrice = document.getElementById('displayPriceMat');
        this.submitMessage = document.getElementById('submit-message-mat');
        this.paymentSummary = document.getElementById('paymentSummary');
        this.timerDisplay = document.getElementById('timer-display-mat');
        this.razorpayBtn = document.getElementById('razorpay-payment-btn-mat');
        this.ticketInfo = document.getElementById('ticket-info');
        this.downloadBtn = document.getElementById('downloadBtn');
        this.okayBtn = document.getElementById('okayBtnMat');
        this.welcomeMessage = document.getElementById('welcome-message-mat');
        
        this.priceListBtn = document.getElementById('price-list-btn-mat');
        this.descriptionBtn = document.getElementById('description-btn-mat');
        this.priceListPopup = document.getElementById('price-list-popup');
        this.descriptionPopup = document.getElementById('description-popup');
        this.closePriceListBtn = document.getElementById('close-price-list-btn');
        this.closeDescriptionBtn = document.getElementById('close-description-btn');
        this.priceListTableBody = document.getElementById('priceListTableBodyMat');


        // --- State variables ---
        this.currentCalculatedPrice = 0;
        this.currentUnitRate = 0;
        this.currentUnitName = "";
        this.currentMinQty = 0;
        this.generatedTicket = '';
        this.countdownInterval = null;
        
        if (!this.bookNowBtn) {
             console.error("BuildingMaterialServiceApp shuru nahi ho paya. Kuch zaroori elements nahi mile.");
             return;
        }

        // Expose instance methods for external HTML calls
        window.buildingMaterialServiceApp = this;
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
        this.packSelection.innerHTML = '<option value="" disabled selected>Material Chunein (Eet, Ret, ya Bajri)</option>';
        this.allRates.forEach(rate => {
            const option = document.createElement('option');
            option.value = rate.name;
            option.textContent = `${rate.category}: ${rate.name} - ₹${rate.rate} ${rate.unit}`;
            option.dataset.rate = rate.rate;
            option.dataset.unit = rate.unit;
            option.dataset.minQty = rate.min_qty;
            this.packSelection.appendChild(option);
        });
    }
    
    updatePrices() {
        const selectedOption = this.packSelection.options[this.packSelection.selectedIndex];
        
        // Use 0 as default if no valid option is selected
        const basePrice = selectedOption && selectedOption.dataset.rate ? parseFloat(selectedOption.dataset.rate) : 0;
        this.currentUnitName = selectedOption && selectedOption.dataset.unit ? selectedOption.dataset.unit : "Unit";
        this.currentMinQty = selectedOption && selectedOption.dataset.minQty ? parseInt(selectedOption.dataset.minQty) : 1;
        
        const selectedQuantity = parseInt(this.quantitySelect.value) || 1;
        
        this.currentUnitRate = basePrice;
        
        // For Red Bricks (Per 1000 Pcs), Quantity is the multiplier for the order.
        // For Ret/Dust (Per Ft), Quantity is the number of 'orders' (e.g., truckloads)
        // Since we don't know the exact order size (in Ft) per 'order unit', we assume the base price covers '1 Order' defined by the rate sheet logic.
        
        let calculatedPrice;
        if (selectedOption && selectedOption.value.includes("Per Ft")) {
             // For Ret/Dust, assuming rate * 100 * Quantity (1 order = 100 ft minimum for pricing clarity)
             calculatedPrice = basePrice * this.currentMinQty * selectedQuantity;
        } else {
            // For Red Bricks (Per 1000 Pcs), 1 Order = 1 set of 1000 bricks
             calculatedPrice = basePrice * selectedQuantity;
        }

        this.currentCalculatedPrice = calculatedPrice;

        const selectedPackText = selectedOption && selectedOption.value ? selectedOption.textContent.split(' - ')[0] : "Material Chunein";

        this.calculatedPriceDisplay.textContent = `Total: ₹${this.currentCalculatedPrice.toLocaleString('en-IN')}`;

        if (this.currentUnitRate > 0) {
             this.displayPrice.textContent = `₹${this.currentUnitRate.toLocaleString('en-IN')} ${this.currentUnitName}`;
        } else {
             this.displayPrice.textContent = "Material Chunein";
        }
        
        // Update Quantity label based on selection
        const quantityLabel = document.querySelector('label[for="quantity"]');
        if (quantityLabel) {
            if (this.currentUnitName.includes("Pcs")) {
                 quantityLabel.textContent = `Order Quantity (1 Order = ${this.currentMinQty} Pcs, Max 10 Orders):`;
            } else if (this.currentUnitName.includes("Ft")) {
                 quantityLabel.textContent = `Order Quantity (1 Order = ${this.currentMinQty} Ft, Max 10 Orders):`;
            } else {
                 quantityLabel.textContent = `Order Quantity (Minimums Apply, Max 10 Orders):`;
            }
        }
    }

    generateTicketId() {
        return 'MAT-XXXXXX-XXXX'.replace(/X/g, () => (Math.random() * 36 | 0).toString(36).toUpperCase());
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
        this.quantitySelect.value = "1";
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

        const content = `${this.SERVICE_NAME} Order Details\n\n` +
                        `Order ID: ${this.generatedTicket}\n` +
                        `Name: ${name}\n` +
                        `Phone: ${phone}\n` +
                        `Address: ${location}, ${address}\n` +
                        `Material: ${selectedPack}\n` +
                        `Quantity: ${selectedQuantity} Order(s)\n` +
                        `Unit Rate: ₹${this.currentUnitRate} ${this.currentUnitName}\n` +
                        `Total Price Paid: ₹${totalPrice.toLocaleString('en-IN')}\n\n` +
                        `Dhanyawad! Hum jald hi delivery schedule confirm karenge.`;

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `material-order-${this.generatedTicket}.txt`;
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

        const selectedPack = this.packSelection.options[this.packSelection.selectedIndex].textContent.split(' - ')[0];
        const options = {
            "key": "rzp_live_RLjzp7VlXERwiG",
            "amount": this.currentCalculatedPrice * 100,
            "currency": "INR",
            "name": `SonipatHomeService - ${this.SERVICE_NAME}`,
            "description": `Material Order: ${selectedPack} x ${this.quantitySelect.value}`,
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
                "material_details": selectedPack,
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

        this.welcomeMessage.textContent = `🎉 Order Confirm Ho Gaya, ${name}! 🎉`;
        
        this.ticketInfo.innerHTML = `
            <p><strong>Order ID:</strong> <span class="font-bold text-text-light">${this.generatedTicket}</span></p>
            <p><strong>Material:</strong> <span class="font-bold text-text-light">${selectedPack}</span></p>
            <p><strong>Quantity:</strong> <span class="font-bold text-text-light">${selectedQuantity} Order(s)</span></p>
            <p class="text-secondary text-lg font-bold mt-3">Total Paid: ₹${totalPrice.toLocaleString('en-IN')}</p>
            <p class="text-text-subtle text-sm mt-3">Hum 1 ghante ke andar aapse contact karenge delivery schedule final karne ke liye.</p>
            <p class="text-text-subtle text-xs mt-1">Payment ID: ${paymentId}</p>
        `;
    }

    populatePriceList() {
        this.priceListTableBody.innerHTML = '';
        this.allRates.forEach(pack => {
            // Determine a realistic estimated RRP (15% higher)
            const marketPrice = Math.round(pack.rate * 1.15); 

            const row = `
                <tr class="text-text-light hover:bg-bg-dark">
                    <td class="py-3 px-4 border-b border-gray-700 font-semibold text-primary">${pack.category}: ${pack.name}</td>
                    <td class="py-3 px-4 border-b border-gray-700 text-right font-semibold text-secondary">₹${pack.rate} ${pack.unit}</td>
                    <td class="py-3 px-4 border-b border-gray-700 text-right text-text-subtle line-through">₹${marketPrice} ${pack.unit}</td>
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
            if (!this.packSelection.value) { this.showCustomAlert("Kripya material chunein."); return; }
            if (this.bookingForm.name.value.trim().length < 10) { this.showCustomAlert("Kripya poora naam daalein (kam se kam 10 characters)."); return; }
            if (!/^\d{10}$/.test(this.bookingForm.phone.value.trim())) { this.showCustomAlert("Kripya sahi 10-digit phone number daalein."); return; }
            if (this.bookingForm.location.value.trim().length < 3) { this.showCustomAlert("Kripya sahi location daalein."); return; }
            if (this.bookingForm.address.value.trim().length < 30) { this.showCustomAlert("Kripya poora address daalein (kam se kam 30 characters)."); return; }
            if (this.currentCalculatedPrice === 0) {
                this.showCustomAlert("Kripya material aur quantity chunein.");
                return;
            }
            
            // Custom Minimum Quantity Check
            const selectedQuantity = parseInt(this.quantitySelect.value) || 1;
            if (this.currentMinQty > 1 && selectedQuantity < this.currentMinQty) {
                this.showCustomAlert(`Is material ke liye minimum ${this.currentMinQty} Orders ka order karna zaroori hai.`);
                return;
            }


            this.submitMessage.classList.remove('hidden');
            this.bookingForm.querySelector('button[type="submit"]').disabled = true;
            this.generatedTicket = this.generateTicketId();

            const selectedPackText = this.packSelection.options[this.packSelection.selectedIndex].textContent.split(' - ')[0];
            const totalDue = this.currentCalculatedPrice;

            // --- Submission Mimic (Ideal place for Google Sheet POST) ---
            
            setTimeout(() => {
                this.submitMessage.classList.add('hidden');
                this.bookingForm.querySelector('button[type="submit"]').disabled = false;
                
                this.bookingPopup.style.display = 'none';

                this.paymentSummary.innerHTML = `
                    <p class="text-text-subtle text-lg mb-2 font-bold">Material: <span class="text-primary">${selectedPackText}</span></p>
                    <p class="text-text-light text-base mb-3">Quantity: <span class="font-bold text-primary">${this.quantitySelect.value} Orders</span></p>
                    <p class="total-price-quantity text-secondary text-3xl font-bold mt-3">Total Payable: ₹${totalDue.toLocaleString('en-IN')}</p>
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
    // Building Material service UI ko inject karein
    injectBuildingMaterialServiceUI();
});
