// Function to inject header
function injectHeader() {
  const headerContainer = document.getElementById('header-container');
  if (!headerContainer) return;

  headerContainer.innerHTML = `
    <div class="top-bar">
        <div class="top-bar-content">
            <a href="tel:+918816014071" class="phone-number-top">
                <i class="fas fa-phone-alt"></i>
                <span>+91-8816014071</span>
            </a>
            <a href="technician.html" class="partner-button-top">Become a Partner</a>
        </div>
    </div>

    <header id="main-header">
        <div class="logo">
            <a href="index.html">
                <img src="win.png" alt="SonipatACService" />
            </a>
        </div>

        <nav>
           
        </nav>

        <div class="menu-toggle" onclick="toggleSidebar()">
            <i class="fas fa-bars"></i>
        </div>

        <div class="sidebar" id="sidebar">
            <div class="close-btn" onclick="toggleSidebar()">
                <i class="fas fa-times"></i>
            </div>
            
            <ul>
                
            </ul>
        </div>
    </header>
  `;
}

// Function to inject footer
function injectFooter() {
  const footerContainer = document.getElementById('footer-container');
  if (!footerContainer) return;

  const style = `
    Here is the complete, updated code for your footer with the background color changed to #007bff (a bright, professional blue). This color is a great choice as it conveys reliability and trust, which is perfect for a home services business.

Updated CSS
CSS

<style>
/* General Styles */
#site-footer {
  background-color: #007bff; /* Bright, professional blue background */
  color: #fff; /* Changed text color to white for contrast */
  padding: 3rem 2rem;
  font-family: 'Segoe UI', sans-serif;
}

/* Header Section */
.footer-header {
  text-align: center;
  margin-bottom: 25px;
  padding: 0 15px;
}
.footer-heading {
  font-size: 2.2rem;
  background: linear-gradient(to right, #fff, #ddd); /* Adjusted gradient for light text */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  margin-bottom: 15px;
  text-transform: uppercase;
}
.footer-lines {
  color: #f0f0f0; /* Light grey text for readability */
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 100%; /* Paragraph width is now auto */
  margin: 0 auto;
  text-align: center;
  font-weight: 400;
}

/* Office Address Section */
.footer-contact {
  text-align: center;
  margin-bottom: 25px;
}

.footer-contact p {
  margin: 0;
  font-size: 1rem;
  color: #fff;
  font-weight: 500;
}

.footer-contact strong {
  color: #fff;
}

.location-link {
  color: #ffd700; /* Gold link for visibility */
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.location-link:hover {
  color: #ffc400;
}

/* New CSS for the Responsive Map */
.map-container {
  overflow: hidden;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  position: relative;
  height: 0;
  margin-top: 20px;
}
.map-container iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  border: none;
}

/* Buttons */
.footer-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin: 1.5rem 0;
}
.footer-btn {
  width: 40px;
  height: 40px;
  background-color: #0069d9; /* A slightly darker blue for buttons */
  border: 2px solid #fff;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.2rem;
  transition: 0.3s ease;
}
.footer-btn:hover {
  background-color: #fff;
  color: #007bff;
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Social Icons */
.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 2rem 0;
}
.social-links a {
  width: 45px;
  height: 45px;
  background-color: #0069d9;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}
.social-links a:hover {
  background-color: #fff;
  color: #007bff;
  transform: translateY(-5px);
}

/* Copyright */
.copyright {
  text-align: center;
  font-size: 0.95rem;
  opacity: 0.8;
  color: #fff;
}

/* Scroll To Top Button */
.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 45px;
  height: 45px;
  background: #fff;
  color: #007bff;
  border-radius: 50%;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
}
.scroll-to-top.active {
  opacity: 1;
  visibility: visible;
}
.scroll-to-top:hover {
  transform: translateY(-5px) scale(1.05);
}

/* Responsive */
@media (max-width: 768px) {
  .footer-heading {
    font-size: 1.8rem;
  }
  .footer-lines, .footer-contact p {
    font-size: 1rem;
  }
  .footer-btn {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
  .social-links a {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  .scroll-to-top {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
}
@media (max-width: 480px) {
  .footer-heading {
    font-size: 1.6rem;
  }
  .footer-lines, .footer-contact p {
    font-size: 0.95rem;
  }
  .footer-buttons {
    gap: 10px;
  }
}
.footer-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.footer-logo img {
  height: 50px;
  max-width: 100%;
  transition: transform 0.3s ease;
}
</style>
  `;

  const html = `
    <footer id="site-footer">
  <div class="footer-container">
    <div class="footer-header">
      <div class="footer-logo">
        <a href="index.html">
          <img src="win.png" alt="Sonipat AC Service Logo">
        </a>
      </div>
      <p class="footer-lines">
        Trusted appliance service in Sonipat<br>
        Fast doorstep repair for AC, fridge, cooler, geyser, washing machine, and more<br>
        Genuine parts • Affordable rates • Trained technicians
      </p>
    </div>

    <div class="footer-contact">
      <p><strong>Office Address:</strong> 128 , Sainipura , Sonipat 131001, India</p>
    </div>

    <div class="map-container">
      <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34720.67137834575!2d76.99427357497125!3d28.995055050854477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da652a9756b19%3A0x633454378f4a1389!2sSonipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                    allowfullscreen="" 
                    loading="lazy">
                </iframe>
    </div>

    <div class="footer-buttons">
      <a href="ac-service.html" class="footer-btn" title="AC"><i class="fas fa-fan"></i></a>
      <a href="fridge-repair.html" class="footer-btn" title="Fridge"><i class="fas fa-snowflake"></i></a>
      <a href="cooler-repair.html" class="footer-btn" title="Cooler"><i class="fas fa-water"></i></a>
      <a href="geyser-repair.html" class="footer-btn" title="Geyser"><i class="fas fa-burn"></i></a>
      <a href="washing-machine.html" class="footer-btn" title="Washing Machine"><i class="fas fa-soap"></i></a>
      <a href="chimney-cleaning.html" class="footer-btn" title="Chimney"><i class="fas fa-wind"></i></a>
      <a href="policy.html" class="footer-btn" title="Privacy Policy"><i class="fas fa-shield-alt"></i></a>
      <a href="terms.html" class="footer-btn" title="Terms & Conditions"><i class="fas fa-file-contract"></i></a>
      <a href="refund.html" class="footer-btn" title="Refund & Cancellation Policy"><i class="fas fa-undo-alt"></i></a>
    </div>

    <div class="social-links">
      <a href="#"><i class="fab fa-facebook-f"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-whatsapp"></i></a>
      <a href="#"><i class="fab fa-youtube"></i></a>
    </div>

    <div class="copyright">
      © <span id="year"></span> Sonipat AC Service. All rights reserved.
    </div>
  </div>

  <div class="scroll-to-top" id="scrollToTop">
    <i class="fas fa-arrow-up"></i>
  </div>
</footer>
  `;

  document.head.insertAdjacentHTML('beforeend', style);
  footerContainer.innerHTML = html;
}
// Function to inject Container1
function injectContainer1() {
  const container = document.getElementById('Container1');
  if (!container) return;

  const style = `
   <style>
  .container1 {
    text-align: center;
    background: #f7f9fc;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    color: #222;
  }

  .section-title {
    font-size: 1.6rem;
    margin-bottom: 30px;
    color: #005f99;
    font-weight: bold;
    letter-spacing: 1px;
    position: relative;
    display: inline-block;
    text-transform: uppercase;
  }

  .section-title:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: #005f99;
    border-radius: 2px;
  }

  .features-section {
    padding: 40px 0;
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 1100px;
    margin: 0 auto;
    justify-content: center;
  }

  .feature-card {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.07);
    transition: all 0.3s ease;
    height: 216px; /* Reduced from 360px */
    display: flex;
    flex-direction: column;
    border: 1px solid #e0e0e0;
    padding: 20px 15px;
    text-align: center;
  }

  .feature-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    border-color: #007bff;
  }

  .card-icon {
    font-size: 2.2rem;
    color: #007bff;
    margin-bottom: 12px;
    position: relative;
    display: inline-block;
    transition: all 0.3s ease;
  }

  .feature-card:hover .card-icon {
    transform: scale(1.05);
    color: #0056b3;
  }

  .card-icon:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background: #005f99;
    border-radius: 1px;
  }

  .card-content1 {
    padding: 10px 0;
    color: #333;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .card-content1 h3 {
    font-size: 0.95rem;
    margin-bottom: 10px;
    color: #005f99;
    font-weight: 600;
    text-transform: uppercase;
  }

  .card-content1 p {
    font-size: 0.85rem;
    line-height: 1.4;
    color: #555;
    max-width: 280px;
    margin: 0 auto;
  }

  /* Responsive */
  @media (max-width: 992px) {
    .cards-container {
      grid-template-columns: repeat(2, 1fr);
    }
    .section-title {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 768px) {
    .cards-container {
      grid-template-columns: 1fr;
      max-width: 90%;
    }

    .feature-card {
      height: auto;
      padding: 18px 15px;
    }

    .card-content1 h3 {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .section-title {
      font-size: 1.3rem;
    }

    .card-icon {
      font-size: 1.8rem;
    }

    .card-content1 h3 {
      font-size: 0.85rem;
    }

    .card-content1 p {
      font-size: 0.8rem;
    }
  }
</style>

  `;

  const html = `
  <div class="container1">
  <section class="features-section">
    <h2 class="section-title">Why Choose Us?</h2>
    <div class="cards-container">

      <div class="feature-card">
        <span class="jackpot-badge">Trusted</span>
        <div class="card-icon">
          <i class="fas fa-shield-alt"></i>
        </div>
        <div class="card-content1">
          <h3>Verified Technicians</h3>
          <p>All our professionals are background-verified, experienced, and trained to handle any appliance with care and accuracy.</p>
        </div>
      </div>

      <div class="feature-card">
        <span class="jackpot-badge">Top Rated</span>
        <div class="card-icon">
          <i class="fas fa-star"></i>
        </div>
        <div class="card-content1">
          <h3>100% Customer Satisfaction</h3>
          <p>With 10,000+ satisfied clients in Sonipat, we pride ourselves on delivering timely, professional, and affordable services.</p>
        </div>
      </div>

      <div class="feature-card">
        <span class="jackpot-badge">Fast Service</span>
        <div class="card-icon">
          <i class="fas fa-bolt"></i>
        </div>
        <div class="card-content1">
          <h3>Quick Response Time</h3>
          <p>We attend service requests within 30 minutes across all localities. Our field experts come fully equipped for same-day fixes.</p>
        </div>
      </div>

      <div class="feature-card">
        <span class="jackpot-badge">Affordable</span>
        <div class="card-icon">
          <i class="fas fa-rupee-sign"></i>
        </div>
        <div class="card-content1">
          <h3>Transparent Pricing</h3>
          <p>No hidden charges! Get reliable repair and installation services at standard market rates with proper invoicing.</p>
        </div>
      </div>

      <div class="feature-card">
        <span class="jackpot-badge">Reliable</span>
        <div class="card-icon">
          <i class="fas fa-tools"></i>
        </div>
        <div class="card-content1">
          <h3>All Appliance Brands</h3>
          <p>From LG to Samsung, Whirlpool to Voltas — we service all major appliance brands with genuine parts & guaranteed results.</p>
        </div>
      </div>

      <div class="feature-card">
        <span class="jackpot-badge">24/7 Help</span>
        <div class="card-icon">
          <i class="fas fa-headset"></i>
        </div>
        <div class="card-content1">
          <h3>24x7 Customer Support</h3>
          <p>Need help late night or on weekends? Our support team is always on standby — call, WhatsApp, or email us anytime.</p>
        </div>
      </div>

    </div>
  </section>
</div>

  `;

  document.head.insertAdjacentHTML('beforeend', style);
  container.innerHTML = html;
}

// Initialize site functionality
function initializeSite() {
  // Header scroll effect
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Toggle sidebar function
  window.toggleSidebar = function() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('active');
  };

  // Scroll to top button
  const scrollToTopBtn = document.getElementById('scrollToTop');
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
        const sidebar = document.getElementById('sidebar');
        if (sidebar && sidebar.classList.contains('active')) toggleSidebar();
      }
    });
  });

  document.head.appendChild(buttonStyle);

  const button = document.createElement('a');
  button.href = 'register.html';
  button.className = 'floating-register-button';

  const innerDiv = document.createElement('div');
  innerDiv.className = 'register-button-inner';
  innerDiv.textContent = 'Register';

  button.appendChild(innerDiv);
  document.body.appendChild(button);
}

// Single DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectFooter();
  injectProductSection();
  injectContainer1(); // This line was corrected/added
  initializeSite();
});












