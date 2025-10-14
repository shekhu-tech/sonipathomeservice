
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
#razorpay-payment-btn-auto,
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
#razorpay-payment-btn-auto:hover,
#downloadTicketsBtn:hover { 
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 255, 255, 0.6);
}

/* Popup Buttons: Secondary/Close Action (Gold Accent) */
#okayBtnAuto,
#closePriceListBtn,
#closeConditionsBtn,
.popup .close-btn-secondary { 
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

#okayBtnAuto:hover,
#closePriceListBtn:hover,
#closeConditionsBtn:hover,
.popup .close-btn-secondary:hover { 
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

/* Service Type Radio Buttons */
.service-type-radio {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
}

.service-type-radio label {
    flex-grow: 1;
    margin-top: 0;
    padding: 0.75rem 1rem;
    background: var(--bg-dark);
    border: 1px solid var(--text-subtle);
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.2s;
    color: var(--text-light);
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 150px; /* Ensures better layout on small screens */
}

.service-type-radio input[type="radio"] {
    width: auto;
    margin-right: 0.5rem;
    accent-color: var(--secondary); 
}

.service-type-radio input[type="radio"]:checked + span {
    color: var(--secondary);
    font-weight: 700;
}

.service-type-radio label:has(input[type="radio"]:checked) {
    border-color: var(--secondary);
    box-shadow: 0 0 0 2px rgba(255, 199, 44, 0.5);
    background: #22324C;
}

#selectedServiceCategoriesDisplay {
    background: var(--bg-dark);
    color: var(--text-light);
    border: 1px solid var(--primary);
    cursor: pointer;
    padding: 0.9rem 1.2rem;
    border-radius: 0.75rem;
    text-align: center;
}

/* Inner Popup for Model Selection */
#serviceCategorySelectionPopup {
    position: fixed; /* Fix position for overlay */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1001; /* Above main popup */
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
#priceListTableBodyAuto tr:nth-child(even) {
    background-color: #22324C;
}
#priceListTableBodyAuto td {
    font-family: 'Roboto', sans-serif;
}
#priceListTableBodyAuto .font-semibold {
    color: var(--secondary);
    font-weight: 700;
}

/* --- RESPONSIVENESS (Tailwind classes bhi use honge) --- */

@media (max-width: 600px) {
    .service-type-radio { flex-direction: column; }
    .service-type-radio label { min-width: 100%; }
    .product-header h2 { font-size: 2rem; }
    .current-price { font-size: 2.5rem; }
    .popup { padding: 1.5rem; }
    #serviceCategorySelectionPopup { width: 98%; }
}
`;

// =========================================================================
// --- UI Injection Function (AUTOMOBILE ONLY) ---
// =========================================================================

function injectAutomobileServiceUI() {
    // Injection ID: 'automobile-repairing-services-container'
    const INJECTION_CONTAINER_ID = 'automobile-repairing-services-container';
    let container = document.getElementById(INJECTION_CONTAINER_ID);
    
    if (!container) {
        console.error(`Injection Error: Main container with ID "${INJECTION_CONTAINER_ID}" not found. Please ensure your HTML file has <div id="${INJECTION_CONTAINER_ID}"></div>`);
        return;
    }

    // Dynamic HTML content for the Automobile Service page
    container.innerHTML = `
        <style>${INLINE_CSS_STYLES}</style>
        
        <main class="container">
            
            <section class="product-section">
                <div class="product-header">
                    <h2 class="text-white">Professional Automobile Repairing & Service</h2>
                    <p class="text-sm text-gray-400 mt-2">Sonipat mein sabse acchi car service book karein - Vishwasniya, Expert, aur Poori Transparency.</p>
                </div>

                <div class="product-content">
                    
                    <div class="product-details">
                        <h3 class="text-3xl font-semibold text-text-light mb-4">Certified & Guaranteed Vehicle Servicing</h3>
                        <p class="text-text-subtle mb-4 text-base">
                            Apna car model aur service type chunein. Hamare expert technicians genuine parts use karte hain aur behtar performance ke liye poora diagnosis dete hain.
                        </p>
                        
                        <div class="price-container">
                            <div class="original-price">Price Model ke hisaab se Badlega</div>
                            <div class="current-price" id="displayPriceAuto">Car & Service Chunein</div>
                        </div>
                        
                        <div class="action-buttons">
                            <button class="btn btn-primary" id="book-service-btn">
                                <i class="fas fa-car-wrench"></i> Abhi Service Book Karein
                            </button>
                            <button id="price-list-btn-auto" class="btn btn-secondary">
                                <i class="fas fa-tags"></i> Transparent Rate List
                            </button>
                             <button id="conditions-btn-auto" class="btn btn-secondary">
                                <i class="fas fa-file-contract"></i> Service Conditions
                            </button>
                            <button class="btn btn-secondary" onclick="window.location.href='index.html'">
                                <i class="fas fa-home"></i> Home Page Par Jaayen
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <div class="stat-grid">
                <div class="stat-card">
                    <h3>Hamein Trust Karne Wale Customers</h3>
                    <p>28,500+</p>
                </div>
                <div class="stat-card">
                    <h3>Mahine Mein Service Kiye Gaye Vehicles</h3>
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
        
        <!-- 1. Service Booking Form Popup (popupForm) -->
        <div class="popup" id="popupForm">
            <h2 class="text-2xl font-bold text-center">Automobile Service Booking Form</h2>
            <form id="booking-form-auto">
                <div class="quantity-selector-container my-4">
                    <label>Car Model(s) Chunein:</label>
                    <div id="selectedServiceCategoriesDisplay" class="p-3 rounded-lg cursor-pointer text-center text-lg" onclick="window.automobileServiceApp.openServiceCategorySelectionPopup()">Car Model(s) chunein</div>
                    
                    <label class="mt-4">Service Type Chunein:</label>
                    <div class="service-type-radio">
                        <label>
                            <input type="radio" name="serviceTypeOption" value="Half Rate" class="form-radio h-5 w-5" checked />
                            <span>Half Service (Basic Tune-up)</span>
                        </label>
                        <label>
                            <input type="radio" name="serviceTypeOption" value="Full Cost" class="form-radio h-5 w-5" />
                            <span>Full Service (Comprehensive Check)</span>
                        </label>
                    </div>

                    <label for="ticketQuantity" class="mt-4">Vehicles/Services Ki Sankhya (Max 5):</label>
                    <select id="ticketQuantity" name="ticketQuantity" required class="bg-bg-dark border-primary">
                        <!-- Options will be populated by JS -->
                    </select>

                    <div class="flex justify-between items-center mt-3 text-text-subtle text-sm">
                        <span>Quantity ke hisaab se total service price</span>
                        <span id="calculated-price-auto" class="total-price-quantity text-lg">Total: ₹0</span>
                    </div>
                </div>

                <label for="fullName">Poora Naam (kam se kam 10 characters)</label>
                <input type="text" id="fullName" name="fullName" required placeholder="John Doe" autocomplete="name" minlength="10" />
                
                <label for="phone">Phone Number (10 digits)</label>
                <input type="tel" id="phone" name="phone" required placeholder="9876543210" autocomplete="tel" pattern="[0-9]{10}" />
                
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required placeholder="john.doe@example.com" autocomplete="email" />
                
                <label for="location">Aapki Location (jaise Sonipat, Delhi)</label>
                <input type="text" id="location" name="location" required placeholder="Sonipat" autocomplete="address-level2" />
                
                <label for="address">Poora Address (kam se kam 30 characters)</label>
                <textarea id="address" name="address" required placeholder="Makaan Number, Gali, Area, Landmark, City, State, PIN code" autocomplete="street-address" minlength="30" rows="4"></textarea>

                <input type="hidden" name="finalPrice" id="finalPriceAuto" />
                
                <button type="submit">Details Submit Karein & Payment Karein</button>
                <p id="submit-message-auto" class="text-center mt-3 text-primary text-sm font-semibold" style="display: none;">Submit Ho Raha Hai... Kripya intezaar karein</p>
            </form>
        </div>
        
        <!-- Inner Popup for Model Selection (ServiceCategorySelectionPopup) -->
        <div id="serviceCategorySelectionPopup" class="popup" style="display: none;">
            <h3 class="text-xl font-bold text-center mb-4 text-primary">Car Model(s) Chunein</h3>
            <div id="serviceCategoryCheckboxes" class="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-80 overflow-y-auto p-2">
                <!-- Checkboxes will be populated here by JS -->
            </div>
            <button type="button" class="btn btn-primary mt-4 py-3" onclick="window.automobileServiceApp.applySelectedServiceCategories()">Selection Apply Karein</button>
            <button type="button" class="close-btn-secondary mt-2 py-3" onclick="window.automobileServiceApp.closeServiceCategorySelectionPopup()">Cancel</button>
        </div>


        <!-- 2. Payment Step (paymentStep) -->
        <div class="popup" id="paymentStep">
            <h2 class="text-2xl font-bold text-center">Final Payment Karein</h2>
            <p class="text-text-subtle text-center mb-6">Apni Automobile Service booking confirm karne ke liye payment poori karein.</p>
            <div id="paymentSummary" class="bg-bg-dark p-5 rounded-lg mb-6 text-center border border-secondary"></div>
            <div id="timer-display-auto" class="text-xl font-bold text-primary text-center mb-4">Samay baaki: 05:00</div>
            <button id="razorpay-payment-btn-auto"><i class="fas fa-credit-card mr-2"></i> Razorpay Se Payment Karein</button>
            <p class="mt-4 text-xs text-text-subtle text-center">
                Note: Payment process ke dauraan is window ko band na karein.
            </p>
        </div>

        <!-- 3. Ticket Confirmation (ticketStep) -->
        <div class="popup" id="ticketStep">
            <h2 id="welcomeMessage" class="text-2xl font-bold text-center text-primary"></h2>
            <p class="text-text-subtle text-center mb-4">Aapki booking confirm ho gayi hai. Details neeche hain:</p>
            <div id="ticketDisplay" class="space-y-2 bg-bg-dark p-4 rounded-lg border border-primary"></div>
            <button id="downloadTicketsBtn" class="mt-4">
                <i class="fas fa-download mr-2"></i> Service Details Download Karein
            </button>
            <p class="mt-4 text-sm text-text-subtle text-center">📸 Kripya proof aur reference ke liye screenshot le lein.</p>
            <button id="okayBtnAuto" class="close-btn-secondary mt-4">Theek Hai, Samajh Gaya!</button>
        </div>
        
        <!-- 4. Price List Popup (priceListPopup) -->
        <div class="popup" id="priceListPopup">
            <h2 class="text-2xl font-bold text-center">Automobile Service Transparent Rate List</h2>
            <div id="priceListContainer" class="overflow-x-auto mt-4">
                <table class="min-w-full bg-bg-dark rounded-lg border border-primary">
                    <thead>
                        <tr class="text-left text-secondary">
                            <th class="py-3 px-4 border-b border-text-subtle">Car Model (Brand)</th>
                            <th class="py-3 px-4 border-b border-text-subtle text-right">Half Service</th>
                            <th class="py-3 px-4 border-b border-text-subtle text-right">Full Service</th>
                        </tr>
                    </thead>
                    <tbody id="priceListTableBodyAuto">
                        <!-- Content populated by JS -->
                    </tbody>
                </table>
            </div>
            <button id="closePriceListBtn" class="close-btn-secondary mt-4">Rate List Band Karein</button>
        </div>

        <!-- 5. Conditions Popup (conditionsPopup) -->
        <div class="popup" id="conditionsPopup">
            <h2 class="text-2xl font-bold text-center">Service Features & Conditions</h2>
            <div id="conditionsContent" class="text-text-subtle text-base space-y-4 max-h-[70vh] overflow-y-auto pr-3">
                <h3 class="text-xl font-semibold text-primary mt-4"><i class="fas fa-check-circle mr-2"></i> Core Service Features</h3>
                <ul class="list-disc list-inside space-y-2 pl-4">
                    <li>Sab kaam **certified aur experienced technicians** dwara kiya jayega.</li>
                    <li>**On-site diagnosis** aur detailed assessment di jayegi.</li>
                    <li>Parts aur additional labor ke liye **transparent pricing** kaam shuru hone se **pehle** batayi jayegi.</li>
                    <li>Hum **behtar vehicle performance aur safety** ensure karte hain.</li>
                </ul>

                <h3 class="text-xl font-semibold text-primary mt-6"><i class="fas fa-tools mr-2"></i> Half Service (Basic Tune-up)</h3>
                <p class="text-sm text-secondary font-bold">Zaroori fluid aur filter replacements shamil hain:</p>
                <ul class="list-disc list-inside space-y-2 pl-4">
                    <li>Synthetic Engine Oil Change</li>
                    <li>Air Filter Change, Oil Filter Change</li>
                    <li>Brake Oil Check/Top-up</li>
                    <li>Wiper Fluid/Shampoo Refill</li>
                </ul>

                <h3 class="text-xl font-semibold text-primary mt-6"><i class="fas fa-cogs mr-2"></i> Full Service (Comprehensive Check)</h3>
                <p class="text-sm text-secondary font-bold">Half Service ke sabhi items aur comprehensive maintenance shamil hain:</p>
                <ul class="list-disc list-inside space-y-2 pl-4">
                    <li>**Sabhi Half Service items**</li>
                    <li>Gear Oil Change</li>
                    <li>Coolant Change</li>
                    <li>Brake Grease Change</li>
                    <li>Exterior Car Wash</li>
                    <li>AC Filter Change</li>
                </ul>
                
                <h3 class="text-xl font-semibold text-primary mt-6"><i class="fas fa-receipt mr-2"></i> Warranty & Pricing Terms</h3>
                <ul class="list-disc list-inside space-y-2 pl-4">
                    <li>Initial visiting/diagnosis charge: **₹299** (distance ke hisaab se badal sakta hai).</li>
                    <li>Repairs aur fluid changes par **1-mahine ki warranty** hai.</li>
                </ul>
            </div>
            <button id="closeConditionsBtn" class="close-btn-secondary mt-4">Maine Samajh Liya</button>
        </div>
    `;

    // Initialize the Automobile application logic after UI injection
    setTimeout(() => {
        // Isse App class global ho jayegi, jise HTML events (onclick) mein call kiya jaa sake.
        window.automobileServiceApp = new AutomobileServiceApp();
    }, 0);
    
}


// =========================================================================
// --- Automobile Service Application Class (Poora Logic) ---
// =========================================================================

class AutomobileServiceApp {
    constructor() {
        this.serviceData = [
            { "Name": "Alto (Alto 800, Alto K10)", "Brand": "Maruti", "Half Rate": 2499, "Full Cost": 4499 },
            { "Name": "WagonR", "Brand": "Maruti", "Half Rate": 2499, "Full Cost": 4499 },
            { "Name": "Swift", "Brand": "Maruti", "Half Rate": 2499, "Full Cost": 4499 },
            { "Name": "Dzire", "Brand": "Maruti", "Half Rate": 2499, "Full Cost": 4499 },
            { "Name": "Brezza (Vitara Brezza)", "Brand": "Maruti", "Half Rate": 2999, "Full Cost": 4999 },
            { "Name": "Creta", "Brand": "Hyundai", "Half Rate": 2999, "Full Cost": 4999 },
            { "Name": "Venue", "Brand": "Hyundai", "Half Rate": 2499, "Full Cost": 4499 },
            { "Name": "Bolero", "Brand": "Mahindra", "Half Rate": 3399, "Full Cost": 5499 },
            { "Name": "XUV700", "Brand": "Mahindra", "Half Rate": 3399, "Full Cost": 5499 },
            { "Name": "Etios", "Brand": "Toyota", "Half Rate": 2499, "Full Cost": 4499 },
            { "Name": "Glenza", "Brand": "Toyota", "Half Rate": 2499, "Full Cost": 4499 }
            // Assuming this is a representative subset of the data from the previous HTML file
        ];

        this.SERVICE_NAME = "Automobile Service";
        this.LOCAL_STORAGE_KEY = 'automobileServiceFormData';
        this.RAZORPAY_IMAGE_TEXT = "CAR";
        this.PAYMENT_TIME_LIMIT = 5 * 60;
        this.GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwvO8RKxi2zxIZsilgYB74V_kO00EQIA_QIefdhsv9Dv0cEgh300B8kx6WsjHzpXnA1gg/exec"; // Common URL

        
        // --- DOM Element Selection ---
        this.bookServiceBtn = document.getElementById('book-service-btn');
        this.popupOverlay = document.getElementById('popup-overlay');
        this.allPopups = document.querySelectorAll('.popup');
        this.popupForm = document.getElementById('popupForm');
        this.paymentStep = document.getElementById('paymentStep');
        this.ticketStep = document.getElementById('ticketStep');
        this.bookingForm = document.getElementById('booking-form-auto');
        
        this.ticketQuantitySelect = document.getElementById('ticketQuantity');
        this.calculatedPriceDisplay = document.getElementById('calculated-price-auto');
        this.displayPrice = document.getElementById('displayPriceAuto');
        this.submitMessage = document.getElementById('submit-message-auto');
        this.paymentSummary = document.getElementById('paymentSummary');
        this.timerDisplay = document.getElementById('timer-display-auto');
        this.razorpayBtn = document.getElementById('razorpay-payment-btn-auto');
        this.ticketDisplay = document.getElementById('ticketDisplay');
        this.downloadTicketsBtn = document.getElementById('downloadTicketsBtn');
        this.okayBtn = document.getElementById('okayBtnAuto');
        this.welcomeMessage = document.getElementById('welcomeMessage');
        this.finalPriceInput = document.getElementById('finalPriceAuto');
        
        this.priceListBtn = document.getElementById('price-list-btn-auto');
        this.conditionsBtn = document.getElementById('conditions-btn-auto');
        this.priceListPopup = document.getElementById('priceListPopup');
        this.conditionsPopup = document.getElementById('conditionsPopup');
        this.closePriceListBtn = document.getElementById('closePriceListBtn');
        this.closeConditionsBtn = document.getElementById('closeConditionsBtn');
        this.priceListTableBody = document.getElementById('priceListTableBodyAuto');
        
        this.serviceCategorySelectionPopup = document.getElementById('serviceCategorySelectionPopup');
        this.selectedServiceCategoriesDisplay = document.getElementById('selectedServiceCategoriesDisplay');
        this.serviceTypeOptions = document.querySelectorAll('input[name="serviceTypeOption"]');
        this.serviceCategoryCheckboxesContainer = document.getElementById('serviceCategoryCheckboxes');


        // --- State variables ---
        this.currentCalculatedPrice = 0;
        this.generatedTicket = '';
        this.countdownInterval = null;
        this.selectedQuantity = 1;
        this.currentServicePrice = 0;
        
        if (!this.bookServiceBtn) {
             console.error("AutomobileServiceApp shuru nahi ho paya. Kuch zaroori elements nahi mile.");
             return;
        }

        this.init();
    }
    
    init() {
        this.initQuantitySelector();
        this.populateServiceCategories(); // Initial population for Half Rate
        this.updatePrices();
        this.loadFormData();
        this.bindEvents();
    }

    // --- Local Storage Functions ---
    saveFormData() {
        const formData = {
            fullName: this.bookingForm.fullName.value,
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
                this.bookingForm.fullName.value = data.fullName || '';
                this.bookingForm.phone.value = data.phone || '';
                this.bookingForm.email.value = data.email || '';
                this.bookingForm.location.value = data.location || '';
                this.bookingForm.address.value = data.address || '';
            }
        } catch (e) {
            console.warn("Local storage se data load nahi ho paya:", e);
        }
    }

    // --- Utility Functions ---
    generateFormattedTicket() {
        return 'CAR-XXXX-XXXX-XXXX'.replace(/X/g, () => (Math.random() * 36 | 0).toString(36).toUpperCase());
    }

    showCustomAlert(message) {
        const alertBox = document.createElement('div');
        alertBox.className = 'custom-alert'; 
        alertBox.textContent = message;
        document.body.appendChild(alertBox);
        setTimeout(() => alertBox.remove(), 4000); 
    }

    clearTimers() {
        if (this.countdownInterval) clearInterval(this.countdownInterval);
    }

    closeAllPopups() {
        // Yeh function sirf 'Okay' button ya Confirmation/Timeout ke baad hi call hoga
        this.clearTimers();
        this.popupOverlay.style.display = 'none';
        this.allPopups.forEach(p => p.style.display = 'none');
        document.body.style.overflow = 'auto';
        this.bookingForm.reset();
        this.ticketQuantitySelect.value = "1";
        this.calculatedPriceDisplay.textContent = 'Total: ₹0';
        this.displayPrice.textContent = 'Car & Service Chunein';
        this.selectedServiceCategoriesDisplay.textContent = 'Car Model(s) chunein';
        // Reload form data for next time
        this.loadFormData();
    }

    openPopup(popupElement) {
        document.body.style.overflow = 'hidden';
        this.popupOverlay.style.display = 'block';
        
        this.allPopups.forEach(p => p.style.display = 'none');
        
        popupElement.style.display = 'block';
    }

    closeSpecificPopup(popupElement) {
        // Yeh sirf info popups (Price List, Conditions, Inner Model Selection) ko band karega
        popupElement.style.display = 'none';
        const isAnotherPopupOpen = Array.from(this.allPopups).some(p => p.style.display === 'block');
        if (!isAnotherPopupOpen) {
            this.popupOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // --- Service Specific Logic ---

    initQuantitySelector() {
        const maxServices = 5; 
        this.ticketQuantitySelect.innerHTML = '<option value="" disabled>Services ki sankhya</option>';
        for (let i = 1; i <= maxServices; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i + (i === 1 ? ' Vehicle/Service' : ' Vehicles/Services');
            this.ticketQuantitySelect.appendChild(option);
        }
        this.ticketQuantitySelect.value = 1;
    }

    populateServiceCategories() {
        this.serviceCategoryCheckboxesContainer.innerHTML = '';
        const selectedServiceType = document.querySelector('input[name="serviceTypeOption"]:checked')?.value || "Half Rate";
        const priceKey = selectedServiceType === "Half Rate" ? 'Half Rate' : 'Full Cost';

        this.serviceData.forEach(service => {
            const price = service[priceKey];
            const checkboxHtml = `
                <label class="inline-flex items-center text-text-light w-full p-2 bg-bg-dark rounded-md border border-primary hover:bg-bg-card transition duration-200 cursor-pointer">
                    <input type="checkbox" name="serviceCategory" value="${service.Name}" 
                           data-half-rate="${service['Half Rate']}" data-full-cost="${service['Full Cost']}"
                           class="form-checkbox h-5 w-5 text-secondary rounded focus:ring-secondary checked:bg-secondary">
                    <span class="ml-2 text-sm">${service.Name} (${service.Brand}) (<span class="text-secondary">₹${price}</span>)</span>
                </label>
            `;
            this.serviceCategoryCheckboxesContainer.insertAdjacentHTML('beforeend', checkboxHtml);
        });

        // Add event listeners to newly created checkboxes (for instantaneous price update in selection popup)
        this.serviceCategoryCheckboxesContainer.querySelectorAll('input[name="serviceCategory"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => this.updatePrices(true)); // Pass true to only update prices, not close popup
        });
    }

    updatePrices(isInnerPopupChange = false) {
        const selectedCategories = Array.from(this.serviceCategoryCheckboxesContainer.querySelectorAll('input[name="serviceCategory"]:checked'));
        const selectedServiceType = document.querySelector('input[name="serviceTypeOption"]:checked')?.value || "Half Rate";
        this.selectedQuantity = parseInt(this.ticketQuantitySelect.value) || 1;
        
        let totalCalculatedPrice = 0;
        const priceKey = selectedServiceType === "Half Rate" ? 'Half Rate' : 'Full Cost';

        if (selectedCategories.length > 0) {
            selectedCategories.forEach(checkbox => {
                totalCalculatedPrice += parseFloat(checkbox.dataset[priceKey.replace(' ', '').toLowerCase()]);
            });
        }
        
        this.currentServicePrice = totalCalculatedPrice;
        const totalFinalPrice = this.currentServicePrice * this.selectedQuantity;

        const serviceTypeName = selectedServiceType === "Half Rate" ? "Half Service" : "Full Service";

        if (selectedCategories.length > 0) {
            this.selectedServiceCategoriesDisplay.textContent = selectedCategories.map(cb => cb.value).join(', ');
            this.displayPrice.textContent = `₹${this.currentServicePrice} (${serviceTypeName})`;
        } else {
            this.selectedServiceCategoriesDisplay.textContent = 'Car Model(s) chunein';
            this.displayPrice.textContent = 'Car & Service Chunein';
        }
        
        this.calculatedPriceDisplay.textContent = `Total: ₹${totalFinalPrice}`;
        this.finalPriceInput.value = totalFinalPrice;
        
        // Agar Service Type radio badla hai aur inner popup band hai, toh categories ko update karein
        if (!isInnerPopupChange && this.serviceCategorySelectionPopup.style.display !== 'block') {
             // Pehle selection ko store karein
            const previouslySelected = Array.from(this.serviceCategoryCheckboxesContainer.querySelectorAll('input[name="serviceCategory"]:checked')).map(cb => cb.value);

            // Phir category list ko naye prices ke saath dobara load karein
            this.populateServiceCategories();
            
            // Phir purane selected items ko check karein
            this.serviceCategoryCheckboxesContainer.querySelectorAll('input[name="serviceCategory"]').forEach(cb => {
                cb.checked = previouslySelected.includes(cb.value);
            });
        }
    }

    openServiceCategorySelectionPopup() {
        // Repopulate to ensure correct Half/Full price is shown based on radio selection
        this.populateServiceCategories(); 
        
        // Re-check previously selected items
        const currentlySelected = this.selectedServiceCategoriesDisplay.textContent.split(', ').map(s => s.trim()).filter(s => s && s !== 'Car Model(s) chunein');
        this.serviceCategoryCheckboxesContainer.querySelectorAll('input[name="serviceCategory"]').forEach(cb => {
            cb.checked = currentlySelected.includes(cb.value);
        });
        
        this.serviceCategorySelectionPopup.style.display = 'block';
        this.popupOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    closeServiceCategorySelectionPopup() {
        this.serviceCategorySelectionPopup.style.display = 'none';
        
        // Jab inner popup band ho toh outer popup (popupForm) ko open rakhein
        if (this.popupForm.style.display === 'block' || this.paymentStep.style.display === 'block' || this.ticketStep.style.display === 'block') {
            // Do nothing, outer popup is open
        } else {
            // Agar koi main popup open nahi hai, toh overlay aur body scroll ko restore karein
            this.popupOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    applySelectedServiceCategories() {
        this.updatePrices();
        this.closeServiceCategorySelectionPopup();
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

    handleFormSubmit(e) {
        e.preventDefault();

        const selectedCategories = Array.from(this.serviceCategoryCheckboxesContainer.querySelectorAll('input[name="serviceCategory"]:checked'));
        if (selectedCategories.length === 0) { this.showCustomAlert("Kripya kam se kam ek Car Model chunein."); return; }
        if (this.bookingForm.fullName.value.trim().length < 10) { this.showCustomAlert("Kripya poora naam daalein (kam se kam 10 characters)."); return; }
        if (!/^\d{10}$/.test(this.bookingForm.phone.value.trim())) { this.showCustomAlert("Kripya sahi 10-digit phone number daalein."); return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.bookingForm.email.value.trim())) { this.showCustomAlert("Kripya sahi email address daalein."); return; }
        if (this.bookingForm.location.value.trim().length < 3) { this.showCustomAlert("Kripya sahi location daalein."); return; }
        if (this.bookingForm.address.value.trim().length < 30) { this.showCustomAlert("Kripya poora address daalein (kam se kam 30 characters)."); return; }
        if (!this.ticketQuantitySelect.value || parseInt(this.ticketQuantitySelect.value) <= 0) { this.showCustomAlert("Kripya services ki sankhya chunein."); return; }
        if (this.finalPriceInput.value == 0) { this.showCustomAlert("Kripya services chunein jinki kimat zero se zyada ho."); return; }


        this.submitMessage.style.display = 'block';
        this.bookingForm.querySelector('button[type="submit"]').disabled = true;

        this.generatedTicket = this.generateFormattedTicket(); 
        
        const selectedCategoryNames = selectedCategories.map(cb => cb.value).join(', ');
        const serviceTypeName = document.querySelector('input[name="serviceTypeOption"]:checked')?.value === "Half Rate" ? "Half Service" : "Full Service";

        // --- Submission Mimic (Sending to Google Sheet is the ideal step here) ---
        const formData = new FormData();
        formData.append('fullName', this.bookingForm.fullName.value); 
        formData.append('phone', this.bookingForm.phone.value);    
        formData.append('email', this.bookingForm.email.value);    
        formData.append('carModel', selectedCategoryNames); 
        formData.append('location', this.bookingForm.location.value); 
        formData.append('address', this.bookingForm.address.value);  
        formData.append('ticket', this.generatedTicket);     
        formData.append('serviceType', serviceTypeName);   
        formData.append('servicePrice', this.currentServicePrice); 
        formData.append('ticketQuantity', this.selectedQuantity); 
        formData.append('finalPrice', this.finalPriceInput.value);

        // Mimicking POST request to show next step quickly
        setTimeout(() => {
            this.submitMessage.style.display = 'none';
            this.bookingForm.querySelector('button[type="submit"]').disabled = false;
            
            this.popupForm.style.display = 'none';
            this.openPopup(this.paymentStep);
            
            this.paymentSummary.innerHTML = `
                <p class="text-text-subtle text-lg mb-2 font-bold">Booking Details:</p>
                <p class="text-text-light text-base mb-1">Car Model(s): <span class="font-bold text-primary">${selectedCategoryNames}</span></p>
                <p class="text-text-light text-base mb-1">Service Type: <span class="font-bold text-primary">${serviceTypeName}</span></p>
                <p class="text-text-light text-base mb-3">Quantity: <span class="font-bold text-primary">${this.selectedQuantity}</span></p>
                <p class="current-price text-secondary text-3xl font-bold">Total Payable: ₹${this.finalPriceInput.value}</p>
            `;
            this.startPaymentTimer();
        }, 1000);
    }


    handleRazorpayPayment() {
        const selectedCategoryNames = Array.from(this.serviceCategoryCheckboxesContainer.querySelectorAll('input[name="serviceCategory"]:checked')).map(cb => cb.value).join(', ');
        const serviceTypeName = document.querySelector('input[name="serviceTypeOption"]:checked')?.value === "Half Rate" ? "Half Service" : "Full Service";
        
        const options = {
            "key": "rzp_live_RLjzp7VlXERwiG",
            "amount": this.finalPriceInput.value * 100, 
            "currency": "INR",
            "name": `SonipatHomeService - ${this.SERVICE_NAME}`,
            "description": `${this.selectedQuantity} ${serviceTypeName}(s) for ${selectedCategoryNames}`,
            "image": `https://placehold.co/100x100/1C2738/FFC72C?text=${this.RAZORPAY_IMAGE_TEXT}`, 
            "handler": (response) => {
                this.paymentSuccess(response.razorpay_payment_id);
            },
            "prefill": {
                "name": this.bookingForm.fullName.value,
                "email": this.bookingForm.email.value,
                "contact": this.bookingForm.phone.value
            },
            "notes": {
                "address": `${this.bookingForm.location.value}, ${this.bookingForm.address.value}`,
                "service_details": selectedCategoryNames,
                "booking_ref": this.generatedTicket
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
        
        const userName = this.bookingForm.fullName.value.split(' ')[0];
        const selectedCategoryNames = Array.from(this.serviceCategoryCheckboxesContainer.querySelectorAll('input[name="serviceCategory"]:checked')).map(cb => cb.value).join(', ');
        const serviceTypeName = document.querySelector('input[name="serviceTypeOption"]:checked')?.value === "Half Rate" ? "Half Service" : "Full Service";

        this.welcomeMessage.textContent = `🎉 Shandaar, ${userName}! Booking Confirm Ho Gayi! 🎉`;
        
        this.ticketDisplay.innerHTML = `
            <p><strong>Order ID:</strong> <span class="font-bold text-text-light">${this.generatedTicket}</span></p>
            <p><strong>Service:</strong> <span class="font-bold text-text-light">${serviceTypeName} for ${selectedCategoryNames}</span></p>
            <p><strong>Quantity:</strong> <span class="font-bold text-text-light">${this.selectedQuantity}</span></p>
            <p class="text-secondary text-lg font-bold mt-3">Total Paid: ₹${this.finalPriceInput.value}</p>
            <p class="text-text-subtle text-sm mt-3">Hamara technician jald hi aapse service schedule karne ke liye contact karega.</p>
            <p class="text-text-subtle text-xs mt-1">Payment ID: ${paymentId}</p>
        `;
    }

    downloadTickets() {
        const selectedCategoryNames = Array.from(this.serviceCategoryCheckboxesContainer.querySelectorAll('input[name="serviceCategory"]:checked')).map(cb => cb.value).join(', ');
        const serviceTypeName = document.querySelector('input[name="serviceTypeOption"]:checked')?.value === "Half Rate" ? "Half Service" : "Full Service";
            
        const ticketContent = `${this.SERVICE_NAME} Booking Details\n\n` +
                             `Customer Name: ${this.bookingForm.fullName.value}\n` +
                             `Contact: ${this.bookingForm.phone.value}\n` +
                             `Location: ${this.bookingForm.location.value}\n` +
                             `Car Model(s): ${selectedCategoryNames}\n` +
                             `Service Type: ${serviceTypeName}\n` +
                             `Booking Reference Number: ${this.generatedTicket}\n\n` + 
                             `Total Services: ${this.selectedQuantity}\n` +
                             `Service Charge Paid: ₹${this.finalPriceInput.value}\n\n`;
            
        const blob = new Blob([ticketContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `auto-service-booking-${this.generatedTicket.substring(0, 8)}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    
    populatePriceList() {
        this.priceListTableBody.innerHTML = '';
        this.serviceData.forEach(service => {
            const row = `
                <tr class="text-text-light hover:bg-bg-dark">
                    <td class="py-3 px-4 border-b border-gray-700">${service.Name} (${service.Brand})</td>
                    <td class="py-3 px-4 border-b border-gray-700 text-right font-semibold text-secondary">₹${service['Half Rate']}</td>
                    <td class="py-3 px-4 border-b border-gray-700 text-right font-semibold text-primary">₹${service['Full Cost']}</td>
                </tr>
            `;
            this.priceListTableBody.insertAdjacentHTML('beforeend', row);
        });
    }

    // --- Event Listeners Initialization ---
    bindEvents() {
        this.ticketQuantitySelect.addEventListener('change', () => this.updatePrices()); 
        this.serviceTypeOptions.forEach(radio => radio.addEventListener('change', () => this.updatePrices()));
        this.serviceTypeOptions.forEach(radio => radio.addEventListener('change', () => this.populateServiceCategories())); // Force update on radio change

        this.bookServiceBtn.addEventListener('click', () => {
            this.updatePrices();
            this.loadFormData();
            this.openPopup(this.popupForm);
        });

        // =========================================================================
        // !!! IMPORTANT: Popup Overlay Click Listener (Non-Closing Critical Popups) !!!
        // =========================================================================
        this.popupOverlay.addEventListener('click', e => {
            if (e.target !== this.popupOverlay) {
                return; // Agar click overlay par nahi hua toh ignore karein
            }

            // Check karein kaunsa critical popup khula hai (jise band nahi karna hai)
            if (this.popupForm.style.display === 'block' || this.serviceCategorySelectionPopup.style.display === 'block') {
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
        
        this.okayBtn.addEventListener('click', () => this.closeAllPopups()); // Final close
        this.downloadTicketsBtn.addEventListener('click', () => this.downloadTickets());
        this.bookingForm.addEventListener('submit', (e) => this.handleFormSubmit(e));

        // Info popup listeners
        this.priceListBtn.addEventListener('click', () => {
            this.populatePriceList();
            this.openPopup(this.priceListPopup);
        });
        this.conditionsBtn.addEventListener('click', () => this.openPopup(this.conditionsPopup));
        
        // Info popup close buttons
        this.closePriceListBtn.addEventListener('click', () => this.closeSpecificPopup(this.priceListPopup));
        this.closeConditionsBtn.addEventListener('click', () => this.closeSpecificPopup(this.conditionsPopup));
        
        this.razorpayBtn.addEventListener('click', () => this.handleRazorpayPayment());
    }
}


// --- IV. Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    // Automobile service UI ko inject karein
    injectAutomobileServiceUI();
});
