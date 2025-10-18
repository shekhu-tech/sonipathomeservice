

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
#razorpay-payment-btn-barber,
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
#razorpay-payment-btn-barber:hover,
#downloadTicketsBtn:hover { 
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 255, 255, 0.6);
}

/* Popup Buttons: Secondary/Close Action (Gold Accent) */
#okayBtnBarber,
#closePriceListBtn,
#closeConditionsBtn { 
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

#okayBtnBarber:hover,
#closePriceListBtn:hover,
#closeConditionsBtn:hover { 
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
#priceListTableBodyBarber tr:nth-child(even) {
    background-color: #22324C;
}
#priceListTableBodyBarber td {
    font-family: 'Roboto', sans-serif;
}
#priceListTableBodyBarber .font-semibold {
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
// --- UI Injection Function (BARBER ONLY) ---
// =========================================================================

function injectBarberServiceUI() {
    // Injection ID: 'book-barber-service-container'
    const INJECTION_CONTAINER_ID = 'book-barber-service-container';
    let container = document.getElementById(INJECTION_CONTAINER_ID);
    
    if (!container) {
        console.error(`Injection Error: Main container with ID "${INJECTION_CONTAINER_ID}" not found. Please ensure your HTML file has <div id="${INJECTION_CONTAINER_ID}"></div>`);
        return;
    }

    // Dynamic HTML content for the Barber Service page
    container.innerHTML = `
        <style>${INLINE_CSS_STYLES}</style>
        
        <main class="container">
            
            <section class="product-section">
                <div class="product-header">
                    <h2 class="text-white">Professional Barber Service</h2>
                    <p class="text-sm text-gray-400 mt-2"> Tired of waiting in long salon queues or adjusting your busy schedule for a haircut? Sonipat Home Service brings the complete barbering experience to your living room. We offer professional, hygienic, and convenient grooming services for men and boys right at your home in Sonipat.</p>
                </div>

                <div class="product-content">
                    
                    <div class="product-details">
                        <h3 class="text-3xl font-semibold text-text-light mb-4">Certified & Guaranteed Grooming Services</h3>
                        <p class="text-text-subtle mb-4 text-base">
                            Certified Professionals: Skilled and experienced barbers. </p>
                           <p class="text-text-subtle mb-4 text-base"> 100% Hygiene: Sanitized tools, single-use kits, and masked professionals. </p>
                           <p class="text-text-subtle mb-4 text-base"> Easy Booking: Book online in less than a minute. </p>
                            <p class="text-text-subtle mb-4 text-base">Save Time & Effort: No travel, no parking, no waiting. </p>
                            <p class="text-text-subtle mb-4 text-base">Comfort & Privacy: Relax in your own space.


                        </p>
                        
                        <div class="price-container">
                            <div class="original-price">Market Price Change</div>
                            <div class="current-price" id="displayPriceBarber">Choose Service</div>
                        </div>
                        
                        <div class="action-buttons">
                            <button class="btn btn-primary" id="book-now-btn">
                                <i class="fas fa-cut"></i> Book Service
                            </button>
                            <button id="price-list-btn-barber" class="btn btn-secondary">
                                <i class="fas fa-tags"></i> Service Rate List
                            </button>
                             <button id="conditions-btn-barber" class="btn btn-secondary">
                                <i class="fas fa-file-contract"></i> Service Details
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
                    <h3>Total Customers Trusting Us</h3>
                    <p>28,500+</p>
                </div>
                <div class="stat-card">
                    <h3>Monthly Services Booked</h3>
                    <p>1000+</p>
                </div>
                <div class="stat-card">
                    <h3>Customer Satisfaction Score</h3>
                    <p>4.9/5 Stars</p>
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
            <h2 class="text-2xl font-bold text-center">Barber Service Booking Form</h2>
            <form id="booking-form-barber">
                <div class="quantity-selector-container my-4">
                    <label>Grooming Service(s) Chunein:</label>
                    <div id="selectedServiceCategoriesDisplay" class="p-3 rounded-lg cursor-pointer text-center text-lg" onclick="window.barberServiceApp.openServiceCategorySelectionPopup()">Service(s) chunein</div>
                    
                    <label for="quantity">Persons Ki Sankhya (Max 5):</label>
                    <select id="quantity" name="quantity" required class="bg-bg-dark border-primary">
                        <!-- Options will be populated by JS -->
                    </select>

                    <div class="flex justify-between items-center mt-3 text-text-subtle text-sm">
                        <span>Quantity ke hisaab se total service price</span>
                        <span id="calculated-price-barber" class="total-price-quantity text-lg">Total: ₹0</span>
                    </div>
                </div>
                
                <label for="name">Poora Naam (kam se kam 10 characters)</label>
                <input type="text" id="name" name="name" required placeholder="John Doe" autocomplete="name" minlength="10" />
                
                <label for="phone">Phone Number (10 digits)</label>
                <input type="tel" id="phone" name="phone" required placeholder="9876543210" autocomplete="tel" pattern="[0-9]{10}" />
                
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required placeholder="john.doe@example.com" autocomplete="email" />
                
                <label for="location">Aapki Location (jaise Sonipat, Delhi)</label>
                <input type="text" id="location" name="location" required placeholder="Sonipat" autocomplete="address-level2" />
                
                <label for="address">Poora Address (kam se kam 30 characters)</label>
                <textarea id="address" name="address" required placeholder="Makaan Number, Gali, Area, Landmark, City, State, PIN code" autocomplete="street-address" minlength="30" rows="4"></textarea>

                <input type="hidden" name="finalPrice" id="finalPriceBarber" />
                
                <button type="submit">Details Submit Karein & Payment Karein</button>
                <p id="submit-message-barber" class="text-center mt-3 text-primary text-sm font-semibold" style="display: none;">Submit Ho Raha Hai... Kripya intezaar karein</p>
            </form>
        </div>
        
        <!-- Inner Popup for Service Selection -->
        <div id="serviceCategorySelectionPopup" class="popup" style="display: none;">
            <h3 class="text-xl font-bold text-center mb-4 text-primary">Grooming Services Chunein</h3>
            <div id="serviceCategoryCheckboxes" class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto p-2">
                <!-- Checkboxes will be populated here by JS -->
            </div>
            <button type="button" class="btn btn-primary mt-4 py-3" onclick="window.barberServiceApp.applySelectedServiceCategories()">Selection Apply Karein</button>
            <button type="button" class="close-btn-secondary mt-2 py-3" onclick="window.barberServiceApp.closeServiceCategorySelectionPopup()">Cancel</button>
        </div>


        <!-- 2. Payment Popup -->
        <div class="popup" id="paymentStep">
            <h2 class="text-2xl font-bold text-center">Final Payment Karein</h2>
            <p class="text-text-subtle text-center mb-6">Apni Barber Service booking confirm karne ke liye payment poori karein.</p>
            <div id="paymentSummary" class="bg-bg-dark p-5 rounded-lg mb-6 text-center border border-secondary"></div>
            <div id="timer-display-barber" class="text-xl font-bold text-primary text-center mb-4">Samay baaki: 05:00</div>
            <button id="razorpay-payment-btn-barber"><i class="fas fa-credit-card mr-2"></i> Razorpay Se Payment Karein</button>
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
            <button id="okayBtnBarber" class="mt-4 close-btn">Theek Hai, Samajh Gaya!</button>
        </div>
        
        <!-- 4. Price List Popup -->
        <div class="popup" id="priceListPopup">
            <h2 class="text-2xl font-bold text-center">Barber Service Transparent Rate List</h2>
            <div class="overflow-x-auto mt-4">
                <table class="min-w-full bg-bg-dark rounded-lg border border-primary">
                    <thead>
                        <tr class="text-left text-secondary">
                            <th class="py-3 px-4 border-b border-text-subtle">Service</th>
                            <th class="py-3 px-4 border-b border-text-subtle text-right">Hamara Price</th>
                            <th class="py-3 px-4 border-b border-text-subtle text-right">Market Price (Approx)</th>
                        </tr>
                    </thead>
                    <tbody id="priceListTableBodyBarber">
                        <!-- Content populated by JS -->
                    </tbody>
                </table>
            </div>
            <button id="closePriceListBtn" class="close-btn-secondary mt-4">Rate List Band Karein</button>
        </div>

        <!-- 5. Conditions Popup -->
        <div class="popup" id="conditionsPopup">
            <h2 class="text-2xl font-bold text-center">Service Features & Conditions</h2>
            <div id="conditionsContent" class="text-text-subtle text-base space-y-4 max-h-[70vh] overflow-y-auto pr-3">
                <ul class="list-disc list-inside space-y-3">
                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-user-shield mr-2"></i> Professional Groomers</li>
                    <li>Sabhi grooming services skilled aur certified barbers/stylists dwara ki jaayengi.</li>
                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-cut mr-2"></i> Hair & Beard Services</li>
                    <li>Precision haircuts, trimming, aur styling.</li>
                    <li>Sanitized tools aur high-quality products ka upyog.</li>
                    <li>Hair colour service mein sirf application shamil hai (Color pack customer ko dena hoga).</li>
                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-spa mr-2"></i> Wellness & Massage</li>
                    <li>Relaxing head aur full body massage (Oil/products customer ko dena hoga).</li>
                    <li>Facial services mein face pack/kit items shamil nahi hain (customer ko dena hoga).</li>
                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-receipt mr-2"></i> Transparency & Pricing</li>
                    <li>Dikhaye gaye prices **sirf labor/service charges** ke liye hain, upar specify kiye gaye products shamil nahi hain.</li>
                    <li>Initial visiting charge **₹299** hai (Sonipat mein distance ke hisaab se adjust ho sakta hai).</li>
                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-headset mr-2"></i> Booking & Warranty</li>
                    <li>Ek booking slot mein **5 persons** tak service di jaa sakti hai.</li>
                    <li>Haircutting par satisfaction guarantee hai; final payment se pehle check kar lein.</li>
                </ul>
            </div>
            <button id="closeConditionsBtn" class="close-btn-secondary mt-4">Maine Samajh Liya</button>
        </div>
    `;

    // Initialize the Barber application logic after UI injection
    setTimeout(() => {
        window.barberServiceApp = new BarberServiceApp();
    }, 0);
    
}


// =========================================================================
// --- Barber Service Application Class (Poora Logic) ---
// =========================================================================

class BarberServiceApp {
    constructor() {
        // Data copied from the original file
        this.serviceData = [
            { "Category": "Hair Cutting (Men)", "Price": 249 },
            { "Category": "Hair Cutting (KIDS)", "Price": 249 },
            { "Category": "Saving Men / Beard Grooming", "Price": 199 },
            { "Category": "Hair Colouring (Exclude Color)", "Price": 299 },
            { "Category": "Head Massage (Exclude Oil)", "Price": 299 },
            { "Category": "Full Body Massage (Exclude Oil)", "Price": 999 },
            { "Category": "Combo Pack 1: Hair Cutting + Saving/Beard Grooming", "Price": 399 },
            { "Category": "Combo Pack 2: Combo 1 + Head Massage", "Price": 729 },
            { "Category": "Combo Pack 3: Combo 2 + Full Body Massage", "Price": 1429 },
            { "Category": "Facial 1 Step (Exclude Face pack & Items)", "Price": 299 },
            { "Category": "Facial Full Step (Exclude Face pack & Items)", "Price": 1199 }
        ];

        this.SERVICE_NAME = "Barber Service";
        this.SERVICE_TAB_ID = "barber-service";
        this.LOCAL_STORAGE_KEY = 'barberServiceFormData';
        this.RAZORPAY_IMAGE_TEXT = "BS";
        this.PAYMENT_TIME_LIMIT = 5 * 60;
        this.GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwvO8RKxi2zxIZsilgYB74V_kO00EQIA_QIefdhsv9Dv0cEgh300B8kx6WsjHzpXnA1gg/exec"; 

        
        // --- DOM Element Selection (Sare IDs BARBER specific hain) ---
        this.bookNowBtn = document.getElementById('book-now-btn');
        this.popupOverlay = document.getElementById('popup-overlay');
        this.allPopups = document.querySelectorAll('.popup');
        this.bookingPopup = document.getElementById('booking-popup');
        this.paymentStep = document.getElementById('paymentStep');
        this.ticketStep = document.getElementById('ticketStep');
        this.bookingForm = document.getElementById('booking-form-barber');
        
        this.serviceCategorySelectionPopup = document.getElementById('serviceCategorySelectionPopup');
        this.serviceCategoryCheckboxesContainer = document.getElementById('serviceCategoryCheckboxes');
        this.selectedServiceCategoriesDisplay = document.getElementById('selectedServiceCategoriesDisplay');

        this.quantitySelect = document.getElementById('quantity');
        this.calculatedPriceDisplay = document.getElementById('calculated-price-barber');
        this.displayPrice = document.getElementById('displayPriceBarber');
        this.submitMessage = document.getElementById('submit-message-barber');
        this.paymentSummary = document.getElementById('paymentSummary');
        this.timerDisplay = document.getElementById('timer-display-barber');
        this.razorpayBtn = document.getElementById('razorpay-payment-btn-barber');
        this.ticketDisplay = document.getElementById('ticketDisplay');
        this.downloadTicketsBtn = document.getElementById('downloadTicketsBtn');
        this.okayBtn = document.getElementById('okayBtnBarber');
        this.welcomeMessage = document.getElementById('welcomeMessage');
        this.finalPriceInput = document.getElementById('finalPriceBarber');
        
        this.priceListBtn = document.getElementById('price-list-btn-barber');
        this.conditionsBtn = document.getElementById('conditions-btn-barber');
        this.priceListPopup = document.getElementById('priceListPopup');
        this.conditionsPopup = document.getElementById('conditionsPopup');
        this.closePriceListBtn = document.getElementById('closePriceListBtn');
        this.closeConditionsBtn = document.getElementById('closeConditionsBtn');
        this.priceListTableBody = document.getElementById('priceListTableBodyBarber');


        // --- State variables ---
        this.currentServicePrice = 0; // Base price for selected services (for 1 person)
        this.selectedQuantity = 1; // Number of persons
        this.currentCalculatedPrice = 0; // currentServicePrice * selectedQuantity
        this.generatedTicket = '';
        this.countdownInterval = null;
        
        if (!this.bookNowBtn) {
             console.error("BarberServiceApp shuru nahi ho paya. Kuch zaroori elements nahi mile.");
             return;
        }

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
        this.quantitySelect.innerHTML = '<option value="" disabled selected>Persons ki sankhya chunein</option>';
        for (let i = 1; i <= maxServices; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i + (i === 1 ? ' Person' : ' Persons');
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
            this.displayPrice.textContent = `₹${this.currentServicePrice} / Person`;
        } else {
            this.selectedServiceCategoriesDisplay.textContent = 'Service(s) chunein';
            this.displayPrice.textContent = 'Service Chunein';
        }
        
        this.calculatedPriceDisplay.textContent = `Total: ₹${this.currentCalculatedPrice}`;
        this.finalPriceInput.value = this.currentCalculatedPrice;
    }

    generateTicketId() {
        return 'BBS-XXXXXX-XXXX'.replace(/X/g, () => (Math.random() * 36 | 0).toString(36).toUpperCase());
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
        
        // Ensure overlay is closed only if no other main popup is visible
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
        const currentlySelected = this.selectedServiceCategoriesDisplay.textContent.split(', ').map(s => s.trim()).filter(s => s && s !== 'Service(s) chunein');
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
                        `Services: ${selectedServices}\n` +
                        `Persons: ${selectedQuantity} Person(s)\n` +
                        `Total Price Paid: ₹${totalPrice}\n\n` +
                        `Dhanyawad! Hum jald hi aapse service schedule karne ke liye contact karenge.`;

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `barber-service-booking-${this.generatedTicket}.txt`;
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
        const selectedServices = this.selectedServiceCategoriesDisplay.textContent;
        const options = {
            "key": "rzp_live_RLjzp7VlXERwiG",
            "amount": this.currentCalculatedPrice * 100,
            "currency": "INR",
            "name": `SonipatHomeService - ${this.SERVICE_NAME}`,
            "description": `Booking for: ${selectedServices} x ${this.selectedQuantity} Persons (ID: ${this.generatedTicket})`,
            "image": `https://placehold.co/100x100/1C2738/FFC72C?text=${this.RAZORPAY_IMAGE_TEXT}`,
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
            <p><strong>Service(s):</strong> <span class="font-bold text-text-light">${selectedServices}</span></p>
            <p><strong>Persons:</strong> <span class="font-bold text-text-light">${selectedQuantity} Person(s)</span></p>
            <p class="text-secondary text-lg font-bold mt-3">Total Paid: ₹${totalPrice}</p>
            <p class="text-text-subtle text-sm mt-3">Humara groomer jald hi aapse contact karke service schedule karega.</p>
            <p class="text-text-subtle text-xs mt-1">Payment ID: ${paymentId}</p>
        `;
    }

    populatePriceList() {
        this.priceListTableBody.innerHTML = '';
        this.serviceData.forEach(service => {
            const marketPrice = Math.round(service.Price * 1.25); 
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
            if (selectedCategories.length === 0) { this.showCustomAlert("Kripya kam se kam ek service chunein."); return; }
            if (this.bookingForm.name.value.trim().length < 10) { this.showCustomAlert("Kripya poora naam daalein (kam se kam 10 characters)."); return; }
            if (!/^\d{10}$/.test(this.bookingForm.phone.value.trim())) { this.showCustomAlert("Kripya sahi 10-digit phone number daalein."); return; }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.bookingForm.email.value.trim())) { this.showCustomAlert("Kripya sahi email address daalein."); return; }
            if (this.bookingForm.location.value.trim().length < 3) { this.showCustomAlert("Kripya sahi location daalein."); return; }
            if (this.bookingForm.address.value.trim().length < 30) { this.showCustomAlert("Kripya poora address daalein (kam se kam 30 characters)."); return; }
            if (this.currentCalculatedPrice === 0) {
                this.showCustomAlert("Kripya service aur persons ki sankhya chunein.");
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
                    <p class="text-text-light text-base mb-1">Service(s): <span class="font-bold text-primary">${selectedServiceNames}</span></p>
                    <p class="text-text-light text-base mb-3">Persons: <span class="font-bold text-primary">${this.quantitySelect.value}</span></p>
                    <p class="total-price-quantity text-secondary text-3xl font-bold mt-3">Total Payable: ₹${totalDue}</p>
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
            this.openPopup(this.conditionsPopup);
        });
        this.closePriceListBtn.addEventListener('click', () => this.closeSpecificPopup(this.priceListPopup));
        this.closeConditionsBtn.addEventListener('click', () => this.closeSpecificPopup(this.conditionsPopup));
    }
}


// --- IV. Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    // Barber service UI ko inject karein
    injectBarberServiceUI();
});
