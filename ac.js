
const INLINE_CSS_STYLES = `
/* * AC Service Booking System - Premium Dark Theme Styles */
/* --- Theme Variables --- */
:root {
    --bg-dark: #101827;
    --bg-card: #1C2738;
    --primary: #00FFFF;
    --secondary: #FFC72C;
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
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
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

.popup button[type="submit"],
#razorpay-payment-btn,
#downloadTicketsBtn,
.popup button.close-btn {
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
}

.popup button[type="submit"],
#razorpay-payment-btn,
#downloadTicketsBtn {
    background: linear-gradient(45deg, var(--primary), #00D5D5);
    color: var(--bg-dark);
}

.popup button[type="submit"]:hover,
#razorpay-payment-btn:hover,
#downloadTicketsBtn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 255, 255, 0.6);
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

#selectedCarModelsDisplay {
    background: var(--bg-dark);
    color: var(--text-light);
    border: 1px solid var(--primary);
    cursor: pointer;
}

#ticketDisplay {
    background: #22324C;
    border: 1px solid var(--primary);
    color: var(--text-light);
    padding: 1.5rem;
    border-radius: 0.75rem;
    word-break: break-word;
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
#priceListTableBody tr:nth-child(even) {
    background-color: #22324C;
}
#priceListTableBody td {
    font-family: 'Roboto', sans-serif;
}
#priceListTableBody .font-semibold {
    color: var(--secondary);
    font-weight: 700;
}

/* --- RESPONSIVENESS --- */

/* Tablet/Desktop Tweaks (1024px and below) */
@media (max-width: 1024px) {
    .product-content { padding: 2rem; flex-direction: column; }
    .product-details { text-align: center; }
    .price-container, .action-buttons { justify-content: center; }
    .btn { max-width: 400px; } 
    .stat-grid { grid-template-columns: 1fr 1fr; }
    main { padding: 3rem 1rem; }
}

/* Mobile Tweaks (600px and below) */
@media (max-width: 600px) {
    main { padding: 2rem 1rem; }
    .product-header h2 { font-size: 2rem; }
    .product-details h3 { font-size: 2rem; }
    .stat-grid { grid-template-columns: 1fr; gap: 1rem;} 
    .current-price { font-size: 2.5rem; }
    .popup { padding: 1.5rem; }
    .popup h2 { font-size: 1.5rem; }
    .action-buttons { flex-direction: column; }
    .btn { min-width: 100%; max-width: 100%; }
    
    #carModelSelectionPopup {
        width: 98%;
        padding: 1rem;
    }
    #carModelCheckboxes {
        grid-template-columns: 1fr; 
    }
    .popup input, .popup select, .popup textarea {
        padding: 0.7rem 1rem;
    }
}

/* Smallest Mobile Tweaks (400px and below) */
@media (max-width: 400px) {
    .current-price { font-size: 2rem; }
    .original-price { font-size: 1rem; }
    .stat-card p { font-size: 1.8rem; }
    .popup { padding: 1rem; }
}
`;

// --- II. UI Injection Function ---

function injectACServiceUI() {
    // We expect a container with ID 'app-container' in the HTML body to inject the content.
    const container = document.getElementById('app-container'); 
    if (!container) {
        console.error('Injection Error: Main container with ID "app-container" not found.');
        return;
    }

    // Dynamic HTML content for the AC Service page
    // NOTE: CSS is now injected via a <style> tag at the beginning of the content.
    container.innerHTML = `
        <style>${INLINE_CSS_STYLES}</style>
        
        <!-- Main AC Service Section -->
        <main class="container">
            
            <section class="product-section">
                <div class="product-header">
                    <h2 class="text-white">Professional AC Service & Repair</h2>
                    <p class="text-sm text-gray-400 mt-2">Book the best service in Sonipat - Quick, Reliable, and Transparent.</p>
                </div>

                <div class="product-content">
                    
                    <div class="product-details">
                        <h3 class="text-3xl font-semibold text-text-light mb-4">Certified & Guaranteed AC Service</h3>
                        <p class="text-text-subtle mb-4 text-base">
                            Get expert service from our certified technicians. Select your service category for instant, transparent pricing. We ensure peak performance for your AC unit.
                        </p>
                        
                        <div class="price-container">
                            <div class="original-price">Market Price Varies</div>
                            <div class="current-price" id="displayPrice">Select Service</div>
                        </div>
                        
                        <div class="action-buttons">
                            <button class="btn btn-primary" id="participate-btn">
                                <i class="fas fa-tools"></i> Book AC Service Now
                            </button>
                            <button id="price-list-btn" class="btn btn-secondary">
                                <i class="fas fa-tags"></i> Transparent Price List
                            </button>
                            <button id="conditions-btn" class="btn btn-secondary">
                                <i class="fas fa-file-contract"></i> Service Conditions
                            </button>
                            <button class="btn btn-secondary" onclick="window.location.href='index.html'">
                                <i class="fas fa-home"></i> Back To Home
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Statistics Grid -->
            <div class="stat-grid">
                <div class="stat-card">
                    <h3>Total Customers Trusting Us</h3>
                    <p>28,500+</p>
                </div>
                <div class="stat-card">
                    <h3>Monthly ACs Serviced</h3>
                    <p>1000+</p>
                </div>
                <div class="stat-card">
                    <h3>Customer Satisfaction Score</h3>
                    <p>4.9/5 Stars</p>
                </div>
                <div class="stat-card">
                    <h3>Quickest Slot Available</h3>
                    <p>Today!</p>
                </div>
            </div>
        </main>

        <!-- Popup Overlays -->
        <div id="popup-overlay"></div>
        
        <!-- 1. Booking Form Popup -->
        <div class="popup" id="popupForm">
            <h2 class="text-2xl font-bold text-center">AC Service Booking Form</h2>
            <form id="lotteryForm">
                <div class="quantity-selector-container my-4">
                    <label>Select AC Service Category:</label>
                    <div id="selectedCarModelsDisplay" class="p-3 rounded-lg cursor-pointer text-center text-lg" onclick="window.acServiceApp.openCarModelSelectionPopup()">Click to select service(s)</div>
                    
                    <!-- Inner Popup for Category Selection -->
                    <div id="carModelSelectionPopup" class="popup" style="display: none;">
                        <h3 class="text-xl font-bold text-center mb-4 text-primary">Select AC Service Category</h3>
                        <div id="carModelCheckboxes" class="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-80 overflow-y-auto p-2">
                            <!-- Checkboxes will be injected here by JavaScript -->
                        </div>
                        <button type="button" class="btn btn-primary mt-4 py-3" onclick="window.acServiceApp.applySelectedCarModels()">Apply Selection</button>
                        <button type="button" class="btn btn-secondary mt-2 py-3 close-btn" onclick="window.acServiceApp.closeCarModelSelectionPopup()">Cancel</button>
                    </div>

                    <label for="ticketQuantity" class="mt-4">Number of Services (Max 5):</label>
                    <select id="ticketQuantity" name="ticketQuantity" required class="bg-bg-dark border-primary">
                        <option value="" disabled selected>Select quantity</option>
                    </select>

                    <div class="flex justify-between items-center mt-3 text-text-subtle text-sm">
                        <span>Quantity based total service price</span>
                        <span class="total-price-quantity text-lg" style="color: var(--secondary) !important;">Total: ₹0</span>
                    </div>
                </div>

                <label for="fullName">Your Full Name (min 10 characters)</label>
                <input type="text" id="fullName" name="field1" required placeholder="John Doe" autocomplete="name" minlength="10" />
                
                <label for="phone">Phone Number (10 digits)</label>
                <input type="tel" id="phone" name="field2" required placeholder="9876543210" autocomplete="tel" pattern="[0-9]{10}" />
                
                <label for="email">Email Address</label>
                <input type="email" id="email" name="field3" required placeholder="john.doe@example.com" autocomplete="email" />
                
                <label for="location">Your Location (e.g. Sonipat, Delhi)</label>
                <input type="text" id="location" name="field5" required placeholder="Sonipat" autocomplete="address-level2" list="locations" />
                
                <label for="address">Complete Address (min 30 characters)</label>
                <textarea id="address" name="field6" required placeholder="House No, Street, Area, Landmark, City, State, PIN code" autocomplete="street-address" minlength="30" rows="4"></textarea>

                <input type="hidden" name="ticket" id="ticketCode" />
                <input type="hidden" name="finalPrice" id="finalPrice" />
                
                <button type="submit">Submit Details & Proceed to Payment</button>
                <p id="submitMessage" class="text-center mt-3 text-primary text-sm font-semibold" style="display: none;">Submitting... Please wait</p>
            </form>
        </div>

        <!-- 2. Payment Step Popup -->
        <div class="popup" id="paymentStep">
            <h2 class="text-2xl font-bold text-center">Finalize Payment</h2>
            <p class="text-text-subtle text-center mb-6">Complete the payment to confirm your AC Service booking.</p>
            <div id="paymentSummary" class="bg-bg-dark p-5 rounded-lg mb-6 text-center border border-secondary"></div>
            <div id="timerDisplay" class="text-xl font-bold text-primary text-center mb-4">Time remaining: 05:00</div>
            <button id="razorpay-payment-btn"><i class="fas fa-credit-card mr-2"></i> Pay with Razorpay</button>
            <p class="mt-4 text-xs text-text-subtle text-center">
                Note: Do not close this window during payment processing.
            </p>
        </div>

        <!-- 3. Ticket Confirmation Popup -->
        <div class="popup" id="ticketStep">
            <h2 id="welcomeMessage" class="text-2xl font-bold text-center text-primary"></h2>
            <p class="text-text-subtle text-center mb-4">Your booking is confirmed. Details below for <span id="ticketCountDisplay" class="font-bold text-secondary"></span>:</p>
            <div id="ticketDisplay" class="space-y-2"></div>
            <button id="downloadTicketsBtn" class="mt-4">
                <i class="fas fa-download mr-2"></i> Download Service Details
            </button>
            <p class="mt-4 text-sm text-text-subtle text-center">📸 Please take a screenshot for proof and reference.</p>
            <button id="okayBtn" class="w-full btn-secondary mt-4 close-btn">Okay, Got It!</button>
        </div>
        
        <!-- 4. Price List Popup -->
        <div class="popup" id="priceListPopup">
            <h2 class="text-2xl font-bold text-center">AC Service Transparent Price List</h2>
            <div class="overflow-x-auto mt-4">
                <table class="min-w-full bg-bg-dark rounded-lg border border-primary">
                    <thead>
                        <tr class="text-left text-secondary">
                            <th class="py-3 px-4 border-b border-text-subtle">Service</th>
                            <th class="py-3 px-4 border-b border-text-subtle text-right">Our Price</th>
                            <th class="py-3 px-4 border-b border-text-subtle text-right">Market Price</th>
                        </tr>
                    </thead>
                    <tbody id="priceListTableBody">
                        <!-- Price List rows will be injected here by JavaScript -->
                    </tbody>
                </table>
            </div>
            <button id="closePriceListBtn" class="btn btn-secondary close-btn mt-4">Close Price List</button>
        </div>

        <!-- 5. Service Conditions Popup -->
        <div class="popup" id="conditionsPopup">
            <h2 class="text-2xl font-bold text-center">Detailed Service Conditions & Guarantee</h2>
            <div id="conditionsContent" class="text-text-subtle text-base space-y-4 max-h-[70vh] overflow-y-auto pr-3">
                <ul class="list-disc list-inside space-y-3">
                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-user-shield mr-2"></i> Professional Technicians</li>
                    <li><i class="fas fa-circle-check text-secondary mr-2"></i>All work carried out by certified and experienced technicians</li>
                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-magnifying-glass mr-2"></i> Diagnosis & Inspection</li>
                    <li><i class="fas fa-circle-check text-secondary mr-2"></i>On-site diagnosis and detailed problem assessment</li>
                    <li><i class="fas fa-circle-check text-secondary mr-2"></i>Gas leak detection and minor repair included</li>
                    <li><i class="fas fa-circle-check text-secondary mr-2"></i>Electrical connections and wiring inspection</li>
                    <li><i class="fas fa-circle-check text-secondary mr-2"></i>Cleaning and inspection of drain tray and pipe</li>
                    <li><i class="fas fa-circle-check text-secondary mr-2"></i>Performance and cooling efficiency testing</li>
                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-cogs mr-2"></i> Installation & Uninstallation</li>
                    <li><i class="fas fa-circle-check text-secondary mr-2"></i>Proper electrical connections and safety checks</li>
                    <li><i class="fas fa-circle-check text-secondary mr-2"></i>Correct positioning and mounting for maximum efficiency</li>
                    <li><i class="fas fa-circle-check text-secondary mr-2"></i>Vacuuming of pipes for efficient cooling</li>
                    <li><i class="fas fa-circle-check text-secondary mr-2"></i>Standard mounting kit included (brackets, copper pipes, wiring, drain pipe, etc.)</li>
                    <li><i class="fas fa-circle-check text-secondary mr-2"></i>Proper gas recovery to prevent leakage</li>
                    <li><i class="fas fa-circle-check text-secondary mr-2"></i>Disconnection and sealing of copper pipes</li>
                    <li><i class="fas fa-circle-check text-secondary mr-2"></i>Basic cleanup of installation/uninstallation area</li>
                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-screwdriver-wrench mr-2"></i> Repair & Maintenance</li>
                    <li><i class="fas fa-circle-check text-secondary mr-2"></i>Thorough cleaning of indoor/outdoor unit filters and coils</li>
                    <li><i class="fas fa-circle-check text-secondary mr-2"></i>Diagnosis and minor repairs of PCB and inverter boards</li>
                    <li><i class="fas fa-circle-check text-secondary mr-2"></i>Testing of repaired PCB/inverter boards for functionality</li>
                    <li><i class="fas fa-circle-check text-secondary mr-2"></i>Refrigerant level check and top-up if required (extra charges apply)</li>
                    <li><i class="fas fa-circle-check text-secondary mr-2"></i>Water leakage diagnosis, drain pipe cleaning, and proper drainage setup</li>
                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-receipt mr-2"></i> Transparency & Pricing</li>
                    <li><i class="fas fa-circle-check text-secondary mr-2"></i>Initial visiting charge ₹299 (adjustable based on distance in Sonipat)</li>
                    <li><i class="fas fa-circle-check text-secondary mr-2"></i>Transparent pricing for parts and additional labor charges will be provided before work begins</li>
                    <li class="font-bold text-primary mt-4 text-lg"><i class="fas fa-headset mr-2"></i> Customer Support & Warranty</li>
                    <li><i class="fas fa-circle-check text-secondary mr-2"></i>1-year service warranty on installation work</li>
                    <li><i class="fas fa-circle-check text-secondary mr-2"></i>1-month warranty on repairs, gas refills, and leakage fixes</li>
                </ul>
            </div>
            <button id="closeConditionsBtn" class="btn btn-secondary close-btn mt-4">I Understand</button>
        </div>
    `;

    // Initialize the main application logic after UI injection
    // Delaying the initialization slightly ensures all DOM elements are available.
    setTimeout(() => {
        new ACServiceApp();
    }, 0);
    
}

// --- III. Application Class ---

class ACServiceApp {
    constructor() {
        this.serviceData = [
            { "Category": "Standard Diagnosis Charge", "Price": 299 },
            { "Category": "Emergency Diagnosis Charge", "Price": 299 },
            { "Category": "Window AC Service / Cleaning", "Price": 499 },
            { "Category": "Split AC Service / Cleaning", "Price": 699 },
            { "Category": "Window AC Installation (Upto 2 Ton)", "Price": 699 },
            { "Category": "Window AC Uninstallation (Upto 2 Ton)", "Price": 499 },
            { "Category": "Split AC Installation (Upto 2 Ton)", "Price": 1299 },
            { "Category": "Split AC Uninstallation (Upto 2 Ton)", "Price": 799 },
            { "Category": "Window AC Gas Refill (Upto 1.5 Ton)", "Price": 2999 },
            { "Category": "Split AC Gas Refill (Upto 1.5 Ton)", "Price": 3199 },
            { "Category": "Normal PCB Repair", "Price": 1499 },
            { "Category": "Inverter AC PCB Repair", "Price": 2999 },
            { "Category": "Window AC Leakage Checking/Fixing", "Price": 499 },
            { "Category": "Split AC Leakage Checking/Fixing", "Price": 499 }
        ];

        // --- DOM Element Selection ---
        // Ensuring all elements exist before proceeding
        this.participateBtn = document.getElementById('participate-btn');
        this.popupOverlay = document.getElementById('popup-overlay');
        this.allPopups = document.querySelectorAll('.popup');
        this.popupForm = document.getElementById('popupForm');
        this.paymentStep = document.getElementById('paymentStep');
        this.ticketStep = document.getElementById('ticketStep');
        this.timerDisplay = document.getElementById('timerDisplay');
        this.razorpayBtn = document.getElementById('razorpay-payment-btn');
        this.submitMessage = document.getElementById('submitMessage');
        this.carModelCheckboxesContainer = document.getElementById('carModelCheckboxes');
        this.selectedCarModelsDisplay = document.getElementById('selectedCarModelsDisplay');
        this.carModelSelectionPopup = document.getElementById('carModelSelectionPopup');
        this.ticketQuantitySelect = document.getElementById('ticketQuantity');
        this.totalPriceQuantityDisplay = document.querySelector('.total-price-quantity');
        this.paymentSummary = document.getElementById('paymentSummary');
        this.ticketCountDisplay = document.getElementById('ticketCountDisplay');
        this.downloadTicketsBtn = document.getElementById('downloadTicketsBtn');
        this.welcomeMessage = document.getElementById('welcomeMessage');
        this.displayPriceElement = document.getElementById('displayPrice');
        this.finalPriceInput = document.getElementById('finalPrice');
        this.form = document.getElementById('lotteryForm');
        this.okayBtn = document.getElementById('okayBtn');
        this.priceListBtn = document.getElementById('price-list-btn');
        this.conditionsBtn = document.getElementById('conditions-btn');
        this.priceListPopup = document.getElementById('priceListPopup');
        this.conditionsPopup = document.getElementById('conditionsPopup');
        this.priceListTableBody = document.getElementById('priceListTableBody');

        if (!this.participateBtn) {
             console.error("ACServiceApp failed to initialize. DOM elements missing.");
             return;
        }

        // Expose critical methods globally for inline HTML event handlers (onClick, etc.)
        window.acServiceApp = this; 
        
        this.loadFormData();
        this.bindEvents();
        this.updatePrices(); // Initial price calculation
    }
    
    // --- Local Storage Functions ---
    // (No Hindi in these functions, safe to keep as is)

    saveFormData() {
        const formData = {
            fullName: this.form.fullName.value,
            phone: this.form.phone.value,
            email: this.form.email.value,
            location: this.form.location.value,
            address: this.form.address.value
        };
        localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(formData));
    }

    loadFormData() {
        const savedData = localStorage.getItem(this.LOCAL_STORAGE_KEY);
        if (savedData && this.form) {
            const data = JSON.parse(savedData);
            this.form.fullName.value = data.fullName || '';
            this.form.phone.value = data.phone || '';
            this.form.email.value = data.email || '';
            this.form.location.value = data.location || '';
            this.form.address.value = data.address || '';
        }
    }
    
    // --- Core Functions ---

    populateCarModels() {
        this.carModelCheckboxesContainer.innerHTML = '';
        this.serviceData.forEach(service => {
            const checkboxHtml = `
                <label class="inline-flex items-center text-text-light w-full p-2 bg-bg-dark rounded-md border border-primary hover:bg-bg-card transition duration-200 cursor-pointer">
                    <input type="checkbox" name="acServiceCategory" value="${service.Category}" data-price="${service.Price}" 
                           class="form-checkbox h-5 w-5 text-secondary rounded focus:ring-secondary checked:bg-secondary">
                    <span class="ml-2 text-sm">${service.Category} (<span class="text-secondary">₹${service.Price}</span>)</span>
                </label>
            `;
            this.carModelCheckboxesContainer.insertAdjacentHTML('beforeend', checkboxHtml);
        });
        // Re-bind change events dynamically
        this.carModelCheckboxesContainer.querySelectorAll('input[name="acServiceCategory"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => this.updatePrices());
        });
    }

    initQuantitySelector() {
        const maxServices = 5; 
        // Changed Hindi placeholder to English
        this.ticketQuantitySelect.innerHTML = '<option value="" disabled selected>Select quantity</option>';
        for (let i = 1; i <= maxServices; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i + (i === 1 ? ' service' : ' services');
            this.ticketQuantitySelect.appendChild(option);
        }
        this.ticketQuantitySelect.value = this.selectedQuantity || 1;
    }

    updatePrices() {
        const selectedAcServiceCategories = Array.from(this.carModelCheckboxesContainer.querySelectorAll('input[name="acServiceCategory"]:checked')).map(checkbox => ({
            category: checkbox.value,
            price: parseFloat(checkbox.dataset.price)
        }));
        this.selectedQuantity = parseInt(this.ticketQuantitySelect.value) || 1;

        this.currentServicePrice = selectedAcServiceCategories.reduce((total, service) => total + service.price, 0);
        const totalFinalPrice = this.currentServicePrice * this.selectedQuantity;

        if (selectedAcServiceCategories.length > 0) {
            this.selectedCarModelsDisplay.textContent = selectedAcServiceCategories.map(s => s.category).join(', ');
            this.displayPriceElement.textContent = `₹${this.currentServicePrice}`;
        } else {
            // Changed Hindi fallback text to English
            this.selectedCarModelsDisplay.textContent = 'Click to select AC service category';
            this.displayPriceElement.textContent = 'Select Service';
        }
        
        this.totalPriceQuantityDisplay.textContent = `Total: ₹${totalFinalPrice}`;
        this.finalPriceInput.value = totalFinalPrice;
    }

    generateFormattedTicket() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }).toUpperCase();
    }

    downloadTickets() {
        const selectedAcServiceCategoryNames = Array.from(this.carModelCheckboxesContainer.querySelectorAll('input[name="acServiceCategory"]:checked')).map(checkbox => checkbox.value).join(', ');
        // Changed Hindi text in download content
        const ticketContent = `PREMIUM AC SERVICE BOOKING DETAILS\n\n` +
                             `Customer Name: ${this.form.field1.value}\n` +
                             `Contact: ${this.form.field2.value}\n` +
                             `Location: ${this.form.field5.value}\n` +
                             `AC Service Category(s): ${selectedAcServiceCategoryNames}\n` +
                             `Booking Reference Number: ${this.generatedTicket}\n\n` + 
                             `Total Services: ${this.selectedQuantity}\n` +
                             `Service Charge Paid: ₹${this.finalPriceInput.value}\n\n` +
                             `--- IMPORTANT NOTE ---\n` +
                             `Final charges for parts and additional labor (beyond the selected service) will be transparently communicated by the technician after a full on-site diagnosis.`;
        
        const blob = new Blob([ticketContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ac_service_booking_${this.generatedTicket.substring(0, 8)}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    
    showCustomAlert(message) {
        // No Hindi in this function, safe to keep as is
        const alertBox = document.createElement('div');
        alertBox.className = 'custom-alert'; 
        alertBox.textContent = message;
        document.body.appendChild(alertBox);
        setTimeout(() => alertBox.remove(), 4000); 
    }

    // --- Popup Control Functions ---
    closeAllPopups() {
        if (!this.allowClose) {
            // Changed Hindi alert message to English
            this.showCustomAlert("Please complete the booking process before closing.");
            return;
        }
        this.clearTimers();
        this.popupOverlay.style.display = 'none';
        this.allPopups.forEach(p => p.style.display = 'none');
        document.body.style.overflow = 'auto';
        this.allowClose = false; 
    }

    openPopup(popupElement) {
        // No Hindi in this function, safe to keep as is
        document.body.style.overflow = 'hidden';
        this.popupOverlay.style.display = 'block';
        this.allPopups.forEach(p => p.style.display = 'none');
        popupElement.style.display = 'block';
        this.allowClose = false;
    }
    
    closeSpecificPopup(popupElement) {
        // No Hindi in this function, safe to keep as is
        popupElement.style.display = 'none';
        const isAnotherPopupOpen = Array.from(this.allPopups).some(p => p.style.display === 'block');
        if (!isAnotherPopupOpen) {
            this.popupOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    openCarModelSelectionPopup() {
        // No Hindi in this function, safe to keep as is
        this.populateCarModels();
        const currentlySelectedCategories = this.selectedCarModelsDisplay.textContent.split(', ').map(s => s.trim()).filter(s => s && s !== 'Click to select service(s)' && s !== 'Click to select AC service category');
        this.carModelCheckboxesContainer.querySelectorAll('input[name="acServiceCategory"]').forEach(checkbox => {
            checkbox.checked = currentlySelectedCategories.includes(checkbox.value);
        });
        this.carModelSelectionPopup.style.display = 'block';
        this.popupOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    closeCarModelSelectionPopup() {
        // No Hindi in this function, safe to keep as is
        this.carModelSelectionPopup.style.display = 'none';
        if (this.popupForm.style.display !== 'block' && this.priceListPopup.style.display !== 'block' && this.conditionsPopup.style.display !== 'block') {
            this.popupOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    applySelectedCarModels() {
        // No Hindi in this function, safe to keep as is
        this.updatePrices();
        this.closeCarModelSelectionPopup();
    }
    
    // --- Timer Functions ---
    clearTimers() {
        // No Hindi in this function, safe to keep as is
        if (this.paymentTimeout) clearTimeout(this.paymentTimeout);
        if (this.countdownInterval) clearInterval(this.countdownInterval);
    }

    startPaymentTimer() {
        let timeLeft = this.PAYMENT_TIME_LIMIT;
        const updateDisplay = () => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            // Changed Hindi time remaining label to English
            this.timerDisplay.textContent = `Time remaining: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        };
        updateDisplay();

        this.countdownInterval = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if (timeLeft <= 0) {
                clearInterval(this.countdownInterval);
                // Changed Hindi alert message to English
                this.showCustomAlert("Payment time expired. Please try again.");
                this.allowClose = true; 
                this.closeAllPopups();
            }
        }, 1000);
    }

    // --- Price List Function ---
    populatePriceList() {
        // No Hindi in this function, safe to keep as is
        this.priceListTableBody.innerHTML = '';
        this.serviceData.forEach(service => {
            const marketPrice = Math.round(service.Price * 1.3); 
            const row = `
                <tr class="text-text-light hover:bg-bg-dark">
                    <td class="py-3 px-4 border-b border-gray-700">${service.Category}</td>
                    <td class="py-3 px-4 border-b border-gray-700 text-right font-semibold text-secondary">₹${service.Price}</td>
                    <td class="py-3 px-4 border-b border-gray-700 text-right text-text-subtle line-through">₹${marketPrice}</td>
                </tr>
            `;
            this.priceListTableBody.insertAdjacentHTML('beforeend', row);
        });
    }

    // --- Payment and Submission Logic ---
    
    handleFormSubmit(e) {
        e.preventDefault();
        
        const form = this.form;
        const selectedCategories = Array.from(this.carModelCheckboxesContainer.querySelectorAll('input[name="acServiceCategory"]:checked'));

        // Validation - Changed all Hindi alert messages to English
        if (selectedCategories.length === 0) { this.showCustomAlert("Please select at least one AC service category."); return; }
        if (form.fullName.value.trim().length < 10) { this.showCustomAlert("Please enter your full name (minimum 10 characters)."); return; }
        if (!/^\d{10}$/.test(form.phone.value.trim())) { this.showCustomAlert("Please enter a valid 10-digit phone number."); return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value.trim())) { this.showCustomAlert("Please enter a valid email address."); return; }
        if (form.location.value.trim().length < 3) { this.showCustomAlert("Please enter a valid location name."); return; }
        if (form.address.value.trim().length < 30) { this.showCustomAlert("Please enter a complete address with at least 30 characters."); return; }
        if (!this.ticketQuantitySelect.value || parseInt(this.ticketQuantitySelect.value) <= 0) { this.showCustomAlert("Please select the number of services."); return; }

        this.submitMessage.style.display = 'block';
        form.querySelector('button[type="submit"]').disabled = true;

        this.generatedTicket = this.generateFormattedTicket(); 
        
        const selectedCategoryNames = selectedCategories.map(cb => cb.value).join(', ');

        // --- Form Data for Google Sheet ---
        const formData = new FormData();
        formData.append('field1', form.fullName.value); 
        formData.append('field2', form.phone.value);    
        formData.append('field3', form.email.value);    
        formData.append('field4', selectedCategoryNames); 
        formData.append('field5', form.location.value); 
        formData.append('field6', form.address.value);  
        formData.append('ticket', this.generatedTicket);     
        formData.append('tab', 'ac-service');           
        formData.append('serviceType', 'AC Service');   
        formData.append('servicePrice', this.currentServicePrice); 
        formData.append('ticketQuantity', this.selectedQuantity); 
        formData.append('finalPrice', this.finalPriceInput.value);

        // --- Google Script URL ---
        fetch("https://script.google.com/macros/s/AKfycbwvO8RKxi2zxIZsilgYB74V_kO00EQIA_QIefdhsv9Dv0cEgh300B8kx6WsjHzpXnA1gg/exec", {
            method: "POST",
            body: formData
        })
        .then(res => res.text())
        .then(res => {
            if (res.includes("Success") || res.includes("success")) { 
                this.saveFormData(); 
                
                this.popupForm.style.display = 'none';
                this.openPopup(this.paymentStep);
                // Changed Hindi labels in payment summary to English
                this.paymentSummary.innerHTML = `
                    <p class="text-text-subtle text-lg mb-2 font-bold">Booking Details:</p>
                    <p class="text-text-light text-base mb-1">Service(s): <span class="font-bold text-primary">${selectedCategoryNames}</span></p>
                    <p class="text-text-light text-base mb-3">Quantity: <span class="font-bold text-primary">${this.selectedQuantity}</span></p>
                    <p class="current-price text-secondary text-3xl font-bold">Total Payable: ₹${this.finalPriceInput.value}</p>
                    <p class="text-gray-400 text-sm mt-2">The amount paid covers the services selected. Extra charges for parts/labor, if needed, will be discussed by the technician.</p>
                `;
                this.startPaymentTimer();
            } else {
                // Changed Hindi error message to English
                this.showCustomAlert("Booking Error: There was an issue submitting your details. Please try again.");
            }
        })
        .catch(err => {
            console.error("Submission error:", err);
            // Changed Hindi error message to English
            this.showCustomAlert("Network Error: An unexpected error occurred. Please check your connection and try again.");
        })
        .finally(() => {
            this.submitMessage.style.display = 'none';
            form.querySelector('button[type="submit"]').disabled = false;
        });
    }

    handleRazorpayPayment() {
        // No Hindi in this function, safe to keep as is
        const selectedCategoryNames = Array.from(this.carModelCheckboxesContainer.querySelectorAll('input[name="acServiceCategory"]:checked')).map(cb => cb.value).join(', ');
        const options = {
            "key": "rzp_live_RLjzp7VlXERwiG", // Use your actual key
            "amount": this.finalPriceInput.value * 100, // Amount in paise
            "currency": "INR",
            "name": `SonipatHomeService - AC Service`,
            "description": `Payment for ${this.selectedQuantity} AC Service(s) for ${selectedCategoryNames}`,
            "image": `https://placehold.co/100x100/1C2738/00FFFF?text=AC`, 
            "handler": (response) => {
                console.log("Payment successful:", response.razorpay_payment_id);
                this.paymentSuccess(response.razorpay_payment_id);
            },
            "prefill": {
                "name": this.form.fullName.value,
                "email": this.form.email.value,
                "contact": this.form.phone.value
            },
            "notes": {
                "address": `${this.form.location.value}, ${this.form.address.value}`,
                "service_details": selectedCategoryNames,
                "booking_ref": this.generatedTicket
            },
            "theme": { "color": "#00FFFF" },
            "modal": { "ondismiss": () => console.log('Razorpay checkout modal closed.') }
        };

        const rzp = new Razorpay(options);
        rzp.on('payment.failed', response => {
            console.error("Payment Failed:", response.error);
            this.showCustomAlert(`Payment Failed: ${response.error.description} (Code: ${response.error.code})`);
        });
        rzp.open();
    }

    paymentSuccess(paymentId) {
        this.clearTimers();
        this.paymentStep.style.display = 'none';
        this.openPopup(this.ticketStep);
        
        const userName = this.form.fullName.value.split(' ')[0];
        const selectedCategoryNames = Array.from(this.carModelCheckboxesContainer.querySelectorAll('input[name="acServiceCategory"]:checked')).map(cb => cb.value).join(', ');

        // Changed Hindi confirmation message to English
        this.welcomeMessage.textContent = `🎉 Bravo, ${userName}! Booking Confirmed! 🎉`;
        
        // Changed Hindi labels in ticket display to English
        document.getElementById('ticketDisplay').innerHTML = `
            <p>Booking ID: <span class="font-bold text-text-light">${this.generatedTicket}</span></p>
            <p>Service: <span class="font-bold text-text-light">${selectedCategoryNames}</span></p>
            <p>Quantity: <span class="font-bold text-text-light">${this.selectedQuantity}</span></p>
            <p class="text-secondary text-lg font-bold mt-3">Amount Paid: ₹${this.finalPriceInput.value}</p>
            <p class="text-text-subtle text-sm mt-3">Our technician will contact you shortly to schedule the service at your location: ${this.form.location.value}.</p>
            <p class="text-text-subtle text-xs mt-1">Payment ID: ${paymentId}</p>
        `;
        
        this.ticketCountDisplay.textContent = `${this.selectedQuantity} AC Service(s)`;
        this.allowClose = true;
    }
    
    // --- Event Listeners Initialization ---
    bindEvents() {
        // No Hindi in this function, safe to keep as is
        this.participateBtn.addEventListener('click', () => {
            this.initQuantitySelector();
            this.updatePrices();
            this.openPopup(this.popupForm);
        });
        
        this.ticketQuantitySelect.addEventListener('change', () => this.updatePrices()); 

        this.popupOverlay.addEventListener('click', e => {
            if (e.target === this.popupOverlay) {
                if (this.carModelSelectionPopup.style.display === 'block') this.closeCarModelSelectionPopup();
                else if (this.priceListPopup.style.display === 'block') this.closeSpecificPopup(this.priceListPopup);
                else if (this.conditionsPopup.style.display === 'block') this.closeSpecificPopup(this.conditionsPopup);
                // Changed Hindi alert message to English
                else if (this.ticketStep.style.display === 'block' && this.allowClose) this.closeAllPopups();
                else if (this.popupForm.style.display === 'block' || this.paymentStep.style.display === 'block') this.showCustomAlert("Please complete the booking process before closing.");
                else this.closeAllPopups();
            }
        });
        
        // Popup Close buttons handler
        document.querySelectorAll('.close-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const parentPopup = e.target.closest('.popup');
                // Special logic for the final ticket step - Redirect to home
                if (parentPopup.id === 'ticketStep') {
                    window.location.href = 'index.html'; 
                } else {
                    this.closeSpecificPopup(parentPopup);
                }
            });
        });

        // Specific action listeners
        this.okayBtn.addEventListener('click', () => window.location.href = 'index.html');
        this.razorpayBtn.addEventListener('click', () => this.handleRazorpayPayment());
        this.downloadTicketsBtn.addEventListener('click', () => this.downloadTickets());
        this.form.addEventListener('submit', (e) => this.handleFormSubmit(e));

        // Listeners for info popups
        this.priceListBtn.addEventListener('click', () => {
            this.populatePriceList();
            this.openPopup(this.priceListPopup);
        });
        this.conditionsBtn.addEventListener('click', () => this.openPopup(this.conditionsPopup));
    }
}

// --- IV. Initialization ---

// This ensures the UI is injected and the App class is instantiated once the DOM is ready.
document.addEventListener('DOMContentLoaded', () => {
    injectACServiceUI();
});
