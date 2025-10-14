
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
#razorpay-payment-btn-borewell,
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
#razorpay-payment-btn-borewell:hover,
#downloadBtn:hover { 
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 255, 255, 0.6);
}

/* Popup Buttons: Secondary/Close Action (Gold Accent) */
#okayBtnBorewell,
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

#okayBtnBorewell:hover,
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

.price-calculation-summary {
    background: var(--bg-dark);
    padding: 1rem;
    border-radius: 0.75rem;
    border: 1px solid var(--primary);
    margin-top: 1rem;
    font-size: 0.9rem;
    text-align: left;
    color: var(--text-light);
}
.price-calculation-summary strong {
    color: var(--primary);
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
#packageDetailTableBodyBorewell td {
    font-family: 'Roboto', sans-serif;
}
#packageDetailTableBodyBorewell .font-semibold {
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
// --- UI Injection Function (BOREWELL ONLY) ---
// =========================================================================

function injectBorewellServiceUI() {
    // Injection ID: 'book-borewell-service-container'
    const INJECTION_CONTAINER_ID = 'book-borewell-service-container';
    let container = document.getElementById(INJECTION_CONTAINER_ID);
    
    if (!container) {
        console.error(`Injection Error: Main container with ID "${INJECTION_CONTAINER_ID}" not found. Please ensure your HTML file has <div id="${INJECTION_CONTAINER_ID}"></div>`);
        return;
    }

    // Dynamic HTML content for the Borewell Service page
    container.innerHTML = `
        <style>${INLINE_CSS_STYLES}</style>
        
        <main class="container">
            
            <section class="product-section">
                <div class="product-header">
                    <h2 class="text-white">बोरवेल इंस्टॉलेशन (Borewell Installation)</h2>
                    <p class="text-sm text-gray-400 mt-2">गहन पानी की आवश्यकता के लिए विश्वसनीय बोरवेल इंस्टॉलेशन सेवाएं।</p>
                </div>

                <div class="product-content">
                    
                    <div class="product-details">
                        <h3 class="text-3xl font-semibold text-text-light mb-4">फिक्स्ड रेट पैकेज (Fixed Rate Packages)</h3>
                        <p class="text-text-subtle mb-4 text-base">
                            अपने क्षेत्र की पानी की गहराई के अनुसार **230 फीट** या **290 फीट** का फिक्स्ड रेट पैकेज चुनें। कीमत में सब कुछ शामिल है।
                        </p>
                        
                        <div class="price-container">
                            <div class="original-price">सभी मटेरियल और लेबर चार्ज शामिल</div>
                            <div class="current-price" id="displayPriceBorewell">Option Chunein</div>
                        </div>
                        
                        <div class="action-buttons">
                            <button class="btn btn-primary" id="book-now-btn">
                                <i class="fas fa-water"></i> Abhi Book Karein
                            </button>
                            <button id="price-list-btn-borewell" class="btn btn-secondary">
                                <i class="fas fa-list-check"></i> Package Details
                            </button>
                             <button id="description-btn-borewell" class="btn btn-secondary">
                                <i class="fas fa-file-alt"></i> T&C (Niyam aur Shartein)
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
                    <h3>पैक 1: गहराई</h3>
                    <p>230 फीट</p>
                </div>
                <div class="stat-card">
                    <h3>पैक 2: गहराई</h3>
                    <p>290 फीट</p>
                </div>
                <div class="stat-card">
                    <h3>मोटर वारंटी</h3>
                    <p>1 साल</p>
                </div>
                <div class="stat-card">
                    <h3>सामग्री गुणवत्ता</h3>
                    <p>ISI Certified</p>
                </div>
            </div>
        </main>

        <div id="popup-overlay"></div>
        
        <!-- 1. Booking Form Popup -->
        <div id="booking-popup" class="popup">
            <h2 class="text-2xl font-bold text-center">बोरवेल इंस्टॉलेशन बुकिंग</h2>
            <form id="booking-form-borewell">
                <div class="quantity-selector-container my-4">
                    <label for="packSelection">1. पैकेज चुनें:</label>
                    <select id="packSelection" name="packSelection" required class="bg-bg-dark border-primary">
                        <option value="" disabled selected>बोरवेल पैकेज (गहराई) चुनें</option>
                        <!-- Options populated by JS -->
                    </select>
                    
                    <label for="quantity" class="mt-4">2. यूनिट की संख्या:</label>
                    <select id="quantity" name="quantity" required class="bg-bg-dark border-primary">
                        <option value="1" selected>1 यूनिट</option>
                        <option value="2">2 यूनिट्स</option>
                    </select>
                    
                    <div id="priceCalculationSummary" class="price-calculation-summary">
                        <!-- Summary injected by JS -->
                    </div>
                </div>
                
                <label for="name">Poora Naam (kam se kam 10 characters)</label>
                <input type="text" id="name" name="name" placeholder="John Doe" autocomplete="name" minlength="10" required>

                <label for="phone">Phone Number (10 digits)</label>
                <input type="tel" id="phone" name="phone" placeholder="9876543210" autocomplete="tel" pattern="[0-9]{10}" required>
                
                <label for="email">Email ID</label>
                <input type="email" id="email" name="email" placeholder="email@example.com" autocomplete="email" required>

                <label for="location">Location (jaise Sonipat, Delhi)</label>
                <input type="text" id="location" name="location" placeholder="Sonipat" autocomplete="address-level2" required>
                
                <label for="address">Poora Site Address (kam se kam 30 characters)</label>
                <textarea id="address" name="address" placeholder="House No, Street, Area, Landmark, City, State, PIN code" autocomplete="street-address" minlength="30" rows="4" required></textarea>
                
                <div class="quantity-selector my-4">
                    <div class="flex justify-between items-center mt-3 text-text-subtle text-sm">
                        <span>Advance Payable Abhi (₹5,000 Fixed)</span>
                        <span id="calculated-price-borewell" class="total-price-quantity text-lg">Total: ₹5,000</span>
                    </div>
                </div>
                
                <button type="submit">Details Submit Karein & Advance Pay Karein</button>
                <p id="submit-message-borewell" class="text-center text-sm text-primary mt-2 hidden">Submit Ho Raha Hai... Kripya intezaar karein</p>
            </form>
        </div>

        <!-- 2. Payment Popup -->
        <div id="payment-popup" class="popup">
            <h2 class="text-2xl font-bold text-center">Advance Payment Poora Karein</h2>
            <p class="text-text-subtle text-center mb-6">कृपया इंस्टॉलेशन की पुष्टि के लिए **₹5,000** का एडवांस भुगतान करें।</p>
            <div id="payment-summary" class="bg-bg-dark p-5 rounded-lg mb-6 text-center border border-secondary"></div>
            <div id="timer-display-borewell" class="text-xl font-bold text-primary text-center mb-4">Samay baaki: 05:00</div>
            <button id="razorpay-payment-btn-borewell"><i class="fas fa-credit-card mr-2"></i> Pay ₹5,000 Advance with Razorpay</button>
            <p class="mt-4 text-xs text-text-subtle text-center">
                Note: Baaki ki rashi installation poora hone par di jaayegi. Payment ke dauraan is window ko band na karein.
            </p>
        </div>

        <!-- 3. Confirmation Popup -->
        <div id="confirmation-popup" class="popup">
            <h2 id="welcome-message-borewell" class="text-2xl font-bold text-center text-primary"></h2>
            <p class="text-text-subtle text-center mb-4">Aapka Borewell installation book ho gaya hai! Hamari team jald hi aapse contact karegi.</p>
            <div id="ticket-info" class="space-y-2 bg-bg-dark p-4 rounded-lg border border-primary">
                <!-- Details will be injected here -->
            </div>
            <button id="downloadBtn" class="mt-4"><i class="fas fa-download mr-2"></i> Booking Details Download Karein</button>
            <p class="mt-4 text-sm text-text-subtle text-center">📸 Kripya record ke liye screenshot le lein.</p>
            <button id="okayBtnBorewell" class="mt-4">Theek Hai, Samajh Gaya!</button>
        </div>

        <!-- 4. Package Details Popup -->
        <div id="price-list-popup" class="popup">
            <h2 class="text-2xl font-bold text-center">बोरवेल पैकेज विवरण (Borewell Package Details)</h2>
            <div class="overflow-x-auto mt-4">
                <table class="min-w-full bg-bg-dark rounded-lg border border-primary">
                    <thead>
                        <tr class="text-left text-secondary">
                            <th class="py-3 px-4 border-b border-text-subtle">विवरण (Specifications)</th>
                            <th class="py-3 px-4 border-b border-text-subtle text-right">Option 1 (230 ft)</th>
                            <th class="py-3 px-4 border-b border-text-subtle text-right">Option 2 (290 ft)</th>
                        </tr>
                    </thead>
                    <tbody id="packageDetailTableBodyBorewell">
                        <!-- Details injected by JS -->
                    </tbody>
                </table>
            </div>
            <button id="close-price-list-btn" class="close-btn-secondary mt-4">Details Band Karein</button>
        </div>

        <!-- 5. Terms & Conditions Popup -->
        <div id="description-popup" class="popup">
            <h2 class="text-2xl font-bold text-center">नियम और शर्तें (Terms & Conditions)</h2>
            <div id="conditionsContent" class="text-text-subtle text-base space-y-4 max-h-[70vh] overflow-y-auto pr-3">
                <ul class="list-disc list-inside space-y-3">
                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-money-check-alt mr-2"></i> फिक्स्ड कीमत (Fixed Price)</li>
                    <li>Upar di gayi keematein **इंस्टालेशन aur sabhi samaan (Material)** sahit hain — koi atirikt shulk nahi liya jaayega.</li>

                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-wrench mr-2"></i> Motor Warranty aur Labor</li>
                    <li>Motor par **1 saal ki warranty** di jaayegi.</li>
                    <li>**Yadi motor kharab ho aur use nikalne ya lagane ki aavashyakta pade, toh sirf uska labor charge atirikt dena hoga.** (Motor ki warranty kewal motor ko cover karti hai, servicing ko nahi).</li>

                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-check-circle mr-2"></i> Gunvatta Ashvaasan (Quality Assurance)</li>
                    <li>Sabhi pipe **ISI certified** honge aur sabhi item behtareen gunvatta ke honge.</li>
                </ul>
            </div>
            <button id="close-description-btn" class="close-btn-secondary mt-4">Maine Samajh Liya</button>
        </div>
    `;

    // Initialize the Borewell application logic after UI injection
    setTimeout(() => {
        window.borewellServiceApp = new BorewellServiceApp();
    }, 0);
    
}


// =========================================================================
// --- Borewell Installation Service Application Class (Poora Logic) ---
// =========================================================================

class BorewellServiceApp {
    constructor() {
        // Data copied from the original file (Fixed packages)
        this.PACKAGES = [
            { name: "230 फीट Borewell Installation", rate: 41000, short_name: "230 ft Pack", details: "4.5 इंच बोर, 1 मोटर (1 साल वारंटी) सहित" },
            { name: "290 फीट Borewell Installation", rate: 48000, short_name: "290 ft Pack", details: "4.5 इंच बोर, 1 मोटर (1 साल वारंटी) सहित" }
        ];
        this.ADVANCE_AMOUNT = 5000; // Fixed advance amount
        
        this.SERVICE_NAME = "Borewell Installation";
        this.SERVICE_TAB_ID = "borewell-installation";
        this.LOCAL_STORAGE_KEY = 'borewellBookingFormData';
        this.RAZORPAY_IMAGE_TEXT = "BORE";
        this.PAYMENT_TIME_LIMIT = 5 * 60;
        this.GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwvO8RKxi2zxIZsilgYB74V_kO00EQIA_QIefdhsv9Dv0cEgh300B8kx6WsjHzpXnA1gg/exec"; // Common URL

        
        // --- DOM Element Selection (Sare IDs BOREWELL specific hain) ---
        this.bookNowBtn = document.getElementById('book-now-btn');
        this.popupOverlay = document.getElementById('popup-overlay');
        this.allPopups = document.querySelectorAll('.popup');
        this.bookingPopup = document.getElementById('booking-popup');
        this.paymentPopup = document.getElementById('payment-popup');
        this.confirmationPopup = document.getElementById('confirmation-popup');
        this.bookingForm = document.getElementById('booking-form-borewell');
        
        this.packSelection = document.getElementById('packSelection');
        this.quantitySelect = document.getElementById('quantity');
        this.calculatedPriceDisplay = document.getElementById('calculated-price-borewell');
        this.displayPrice = document.getElementById('displayPriceBorewell');
        this.submitMessage = document.getElementById('submit-message-borewell');
        this.paymentSummary = document.getElementById('payment-summary');
        this.timerDisplay = document.getElementById('timer-display-borewell');
        this.razorpayBtn = document.getElementById('razorpay-payment-btn-borewell');
        this.ticketInfo = document.getElementById('ticket-info');
        this.downloadBtn = document.getElementById('downloadBtn');
        this.okayBtn = document.getElementById('okayBtnBorewell');
        this.welcomeMessage = document.getElementById('welcome-message-borewell');
        
        this.priceListBtn = document.getElementById('price-list-btn-borewell');
        this.descriptionBtn = document.getElementById('description-btn-borewell');
        this.priceListPopup = document.getElementById('price-list-popup');
        this.descriptionPopup = document.getElementById('description-popup');
        this.closePriceListBtn = document.getElementById('close-price-list-btn');
        this.closeDescriptionBtn = document.getElementById('close-description-btn');
        this.packageDetailTableBody = document.getElementById('packageDetailTableBodyBorewell');
        this.priceCalculationSummary = document.getElementById('priceCalculationSummary');


        // --- State variables ---
        this.currentCalculatedPrice = 0; // Total cost (Rate * Quantity)
        this.currentUnitRate = 0; // Selected package rate
        this.generatedTicket = '';
        this.countdownInterval = null;
        
        if (!this.bookNowBtn) {
             console.error("BorewellServiceApp shuru nahi ho paya. Kuch zaroori elements nahi mile.");
             return;
        }

        // Expose instance methods for external HTML calls
        window.borewellServiceApp = this;
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
    populatePackOptions() {
        this.packSelection.innerHTML = '<option value="" disabled selected>बोरवेल पैकेज (गहराई) चुनें</option>';
        this.PACKAGES.forEach((pack, index) => {
            const option = document.createElement('option');
            option.value = pack.rate;
            option.textContent = `Option ${index + 1}: ${pack.name} (₹${pack.rate.toLocaleString('en-IN')})`;
            option.dataset.name = pack.short_name;
            this.packSelection.appendChild(option);
        });
        // Set quantity options
        this.quantitySelect.innerHTML = `<option value="1">1 यूनिट</option><option value="2">2 यूनिट्स</option>`;
        this.quantitySelect.value = 1;
    }
    
    updatePrices() {
        const selectedOption = this.packSelection.options[this.packSelection.selectedIndex];
        
        // Use 0 as default if no valid option is selected
        this.currentUnitRate = selectedOption && selectedOption.value ? parseFloat(selectedOption.value) : 0;
        this.selectedQuantity = parseInt(this.quantitySelect.value) || 1;
        
        this.currentCalculatedPrice = this.currentUnitRate * this.selectedQuantity;
        
        const selectedPackName = selectedOption && selectedOption.dataset.name ? selectedOption.dataset.name : "चुनें";
        const remainingBalance = this.currentCalculatedPrice > this.ADVANCE_AMOUNT ? this.currentCalculatedPrice - this.ADVANCE_AMOUNT : 0;

        const summaryHtml = `
            <strong>चयनित पैकेज:</strong> ${selectedPackName} <br>
            <strong>प्रति यूनिट चार्ज:</strong> ₹${this.currentUnitRate.toLocaleString('en-IN')} <br>
            <strong>कुल यूनिट चार्ज:</strong> ₹${this.currentCalculatedPrice.toLocaleString('en-IN')} <br>
            <strong>बाकी राशि (Installation पर):</strong> ₹${remainingBalance.toLocaleString('en-IN')}
        `;
        
        this.priceCalculationSummary.innerHTML = summaryHtml;

        if (this.currentUnitRate > 0) {
             this.displayPrice.textContent = `₹${this.currentUnitRate.toLocaleString('en-IN')} / Unit`;
        } else {
             this.displayPrice.textContent = "Option Chunein";
        }
        
        // Advance amount is fixed at 5000 in UI, regardless of selection
        this.calculatedPriceDisplay.textContent = `Total: ₹${this.ADVANCE_AMOUNT.toLocaleString('en-IN')}`;
    }

    generateTicketId() {
        return 'BORE-XXXXXX-XXXX'.replace(/X/g, () => (Math.random() * 36 | 0).toString(36).toUpperCase());
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
        this.packSelection.value = "";
        this.quantitySelect.value = 1;
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
        const selectedPack = this.packSelection.options[this.packSelection.selectedIndex].textContent.split(':')[1].trim();
        const quantity = this.quantitySelect.value;
        const totalPrice = this.currentCalculatedPrice;
        const remainingBalance = totalPrice - this.ADVANCE_AMOUNT;


        const content = `${this.SERVICE_NAME} Booking Details\n\n` +
                        `Booking ID: ${this.generatedTicket}\n` +
                        `Package: ${selectedPack} x ${quantity}\n` +
                        `Name: ${name}\n` +
                        `Phone: ${phone}\n` +
                        `Address: ${location}, ${address}\n` +
                        `Total Price: ₹${totalPrice.toLocaleString('en-IN')}\n` +
                        `Advance Paid: ₹${this.ADVANCE_AMOUNT.toLocaleString('en-IN')}\n` +
                        `Remaining Due: ₹${remainingBalance.toLocaleString('en-IN')}\n\n` +
                        `--- NOTE ---\n` +
                        `Baaki rashi (Remaining balance) installation poora hone par di jaayegi.`;

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `borewell-booking-${this.generatedTicket}.txt`;
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
        if (this.ADVANCE_AMOUNT <= 0) {
            this.showCustomAlert("भुगतान करने के लिए कोई राशि नहीं है।");
            return;
        }
        const selectedPack = this.packSelection.options[this.packSelection.selectedIndex].textContent.split(':')[1].trim();
        
        const options = {
            "key": "rzp_live_RLjzp7VlXERwiG",
            "amount": this.ADVANCE_AMOUNT * 100, // Pay only fixed advance
            "currency": "INR",
            "name": `SonipatHomeService - ${this.SERVICE_NAME} Advance`,
            "description": `Advance Token for: ${selectedPack} x ${this.quantitySelect.value} (ID: ${this.generatedTicket})`,
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
                "package_details": selectedPack,
                "quantity": this.quantitySelect.value,
                "total_cost": this.currentCalculatedPrice
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
        const selectedPack = this.packSelection.options[this.packSelection.selectedIndex].textContent.split(':')[1].trim();
        const quantity = this.quantitySelect.value;
        const totalPrice = this.currentCalculatedPrice;
        const remainingBalance = totalPrice - this.ADVANCE_AMOUNT;

        this.welcomeMessage.textContent = `🎉 Booking Confirm Ho Gayi, ${name}! 🎉`;
        
        this.ticketInfo.innerHTML = `
            <p><strong>Booking ID:</strong> <span class="font-bold text-text-light">${this.generatedTicket}</span></p>
            <p><strong>Package:</strong> <span class="font-bold text-text-light">${selectedPack} x ${quantity}</span></p>
            <p class="text-secondary text-lg font-bold mt-3">Advance Paid: ₹${this.ADVANCE_AMOUNT.toLocaleString('en-IN')}</p>
            <p class="text-primary text-xl font-bold mt-1">Baaki Rashi: ₹${remainingBalance.toLocaleString('en-IN')} (Installation Par)</p>
            <p class="text-text-subtle text-sm mt-3">Hamari team jald hi installation schedule karne ke liye aapse contact karegi.</p>
            <p class="text-text-subtle text-xs mt-1">Payment ID: ${paymentId}</p>
        `;
    }

    populatePackageDetails() {
        this.packageDetailTableBody.innerHTML = '';

        const option1 = this.PACKAGES[0];
        const option2 = this.PACKAGES[1];

        const rows = [
            { label: "कुल कीमत (Installation & Material Incl.)", key1: option1.rate, key2: option2.rate, is_price: true },
            { label: "बोर गहराई", key1: "230 फीट तक", key2: "290 फीट तक" },
            { label: "बोर का साइज़", key1: "4.5 इंच", key2: "4.5 इंच" },
            { label: "मोटर", key1: "1 मोटर (1 साल वारंटी)", key2: "1 मोटर (1 साल वारंटी)" },
            { label: "पाइप", key1: "ISI Certified", key2: "ISI Certified" },
            { label: "अन्य उपकरण", key1: "मोटर स्टार्टर, सुंडवा", key2: "मोटर स्टार्टर, सुंडवा" },
            { label: "लेबर चार्ज", key1: "शामिल", key2: "शामिल" }
        ];

        rows.forEach(row => {
            const rowClass = row.is_price ? 'font-semibold text-secondary' : 'text-text-light';
            const price1 = row.is_price ? `₹${row.key1.toLocaleString('en-IN')}` : row.key1;
            const price2 = row.is_price ? `₹${row.key2.toLocaleString('en-IN')}` : row.key2;
            
            const html = `
                <tr>
                    <td class="py-2 px-4 border-b border-gray-700 font-semibold text-primary">${row.label}</td>
                    <td class="py-2 px-4 border-b border-gray-700 text-right ${rowClass}">${price1}</td>
                    <td class="py-2 px-4 border-b border-gray-700 text-right ${rowClass}">${price2}</td>
                </tr>
            `;
            this.packageDetailTableBody.insertAdjacentHTML('beforeend', html);
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
            if (this.currentUnitRate <= 0) { this.showCustomAlert("Kripya Borewell package chunein."); return; }
            if (this.bookingForm.name.value.trim().length < 10) { this.showCustomAlert("Kripya poora naam daalein (kam se kam 10 characters)."); return; }
            if (!/^\d{10}$/.test(this.bookingForm.phone.value.trim())) { this.showCustomAlert("Kripya sahi 10-digit phone number daalein."); return; }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.bookingForm.email.value.trim())) { this.showCustomAlert("Kripya sahi email address daalein."); return; }
            if (this.bookingForm.location.value.trim().length < 3) { this.showCustomAlert("Kripya sahi location daalein."); return; }
            if (this.bookingForm.address.value.trim().length < 30) { this.showCustomAlert("Kripya poora address daalein (kam se kam 30 characters)."); return; }

            this.submitMessage.classList.remove('hidden');
            this.bookingForm.querySelector('button[type="submit"]').disabled = true;
            this.generatedTicket = this.generateTicketId();

            const selectedPackName = this.packSelection.options[this.packSelection.selectedIndex].textContent.split(':')[1].trim();
            const totalCost = this.currentCalculatedPrice;
            const advance = this.ADVANCE_AMOUNT;
            const remaining = totalCost - advance;

            // --- Submission Mimic (Ideal place for Google Sheet POST) ---
            
            setTimeout(() => {
                this.submitMessage.classList.add('hidden');
                this.bookingForm.querySelector('button[type="submit"]').disabled = false;
                
                this.bookingPopup.style.display = 'none';

                this.paymentSummary.innerHTML = `
                    <p class="text-text-subtle text-lg mb-2 font-bold">Package: <span class="text-primary">${selectedPackName}</span> x ${this.quantitySelect.value}</p>
                    <p class="text-text-light text-base mb-1">Total Cost: <span class="font-bold text-primary">₹${totalCost.toLocaleString('en-IN')}</span></p>
                    <p class="text-text-light text-base mb-3">Baaki Rashi: <span class="font-bold text-secondary">₹${remaining.toLocaleString('en-IN')}</span> (Installation Par)</p>
                    <p class="total-price-quantity text-secondary text-3xl font-bold mt-3">Advance Payable Abhi: ₹${advance.toLocaleString('en-IN')}</p>
                `;
                this.openPopup(this.paymentPopup);
                this.startPaymentTimer();
                this.saveFormData();
            }, 1000);
            
            // --- End Submission Mimic ---
        });

        this.razorpayBtn.addEventListener('click', () => this.handleRazorpayPayment());
        this.priceListBtn.addEventListener('click', () => {
            this.populatePackageDetails(); // Package Details Popup
            this.openPopup(this.priceListPopup); 
        });
        this.descriptionBtn.addEventListener('click', () => {
            this.openPopup(this.descriptionPopup); // T&C Popup
        });
        this.closePriceListBtn.addEventListener('click', () => this.closeSpecificPopup(this.priceListPopup));
        this.closeDescriptionBtn.addEventListener('click', () => this.closeSpecificPopup(this.descriptionPopup));
    }
}


// --- IV. Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    // Borewell service UI ko inject karein
    injectBorewellServiceUI();
});
