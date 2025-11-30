import React from "react";
import "../../styles/serviceDetails.css";
import Footer from "../../components/Footer";
import AppointmentForm from "../../components/AppointmentForm";


export default function Nephrologist() {
  return (
    <>
      <section className="service-detail-section">
        <div className="container service-detail-grid">

          <div className="service-detail-image">
            <img src="/images/nephro.jpg" alt="Nephrology" />
          </div>

          <div className="service-detail-content">
            <h1>Nephrologist</h1>
            <h3>Kidney & Urinary System Care</h3>
            <p>
              Advanced diagnosis and treatment for kidney disorders, urinary 
              infections, and lifestyle-related kidney issues.
            </p>

            <ul className="service-points">
              <li>✓ Kidney stone care</li>
              <li>✓ UTI treatment</li>
              <li>✓ Kidney function evaluation</li>
              <li>✓ Hypertension-related kidney issues</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="treatments-section">
        <div className="container">
          <h2>Conditions We Manage</h2>
          <ul className="treatment-list">
            <li>• Chronic kidney disease (CKD)</li>
            <li>• Dehydration-related kidney issues</li>
            <li>• Electrolyte imbalance</li>
            <li>• Kidney infection</li>
          </ul>
        </div>
      </section>

      <AppointmentForm />
      
    </>
  );
}
