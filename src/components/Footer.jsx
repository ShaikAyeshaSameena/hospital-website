import React from "react";
import "../styles/footer.css"; // adjust path if you keep styles elsewhere

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main container">
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/doctors">Doctors</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-col">
          <h4>Our Services</h4>
          <a>General Physician</a>
          <a>Gynaecology</a>
          <a>Dermatology</a>
          <a>Paediatrics</a>
          <a>Neurology</a>
          <a>Gastroenterology</a>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <p className="footer-contact">123 PrimeCare Avenue, City, Country</p>
          <p className="footer-contact">Phone: +91 98765 43210</p>
          <p className="footer-contact">Email: contact@primecare.example</p>
          <p className="footer-contact">Mon - Sat: 8:00 AM - 6:00 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="left-small">
            © {new Date().getFullYear()} PrimeCare Hospital. All rights reserved.
          </div>
          <div className="right-small">Designed by PrimeCare Team</div>
        </div>
      </div>
    </footer>
  );
}
