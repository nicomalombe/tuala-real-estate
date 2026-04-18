import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Company Info */}
        <div className="footer-section">
          <h3>Tuala Real Estate</h3>
          <p>
            Helping you find the perfect home across Kenya with trust,
            transparency, and quality service.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/properties">Properties</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Buy Property</li>
            <li>Sell Property</li>
            <li>Rent Property</li>
            <li>Property Management</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>📍 Nairobi, Kenya</p>
          <p>📞 +254 700 000 000</p>
          <p>📧 info@tualarealestate.com</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Tuala Real Estate. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;