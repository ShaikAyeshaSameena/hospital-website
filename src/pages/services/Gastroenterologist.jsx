import React from "react";
import "../../styles/serviceDetails.css";
import Footer from "../../components/Footer";
import AppointmentForm from "../../components/AppointmentForm";


export default function Gastroenterologist() {
  return (
    <>
      <section className="service-detail-section">
        <div className="container service-detail-grid">

          <div className="service-detail-image">
            <img src="/images/gastro.jpg" alt="Gastroenterology" />
          </div>

          <div className="service-detail-content">
            <h1>Gastroenterologist</h1>
            <h3>Digestive & Liver Care</h3>
            <p>
              Specialist care for stomach, liver, intestine, and digestion-related 
              disorders with advanced treatments.
            </p>

            <ul className="service-points">
              <li>✓ Acidity & gas treatment</li>
              <li>✓ Liver disorder management</li>
              <li>✓ IBS & gastric issues</li>
              <li>✓ Endoscopy guidance</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="treatments-section">
        <div className="container">
          <h2>Common Conditions We Treat</h2>
          <ul className="treatment-list">
            <li>• Acid reflux & GERD</li>
            <li>• Fatty liver</li>
            <li>• Constipation & diarrhea</li>
            <li>• Abdominal pain</li>
          </ul>
        </div>
      </section>

      <AppointmentForm />
    
    </>
  );
}
