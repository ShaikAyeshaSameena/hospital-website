import React from "react";
import "../../styles/serviceDetails.css";
import Footer from "../../components/Footer";
import AppointmentForm from "../../components/AppointmentForm";


export default function Cardiologist() {
  return (
    <>
      <section className="service-detail-section">
        <div className="container service-detail-grid">

          <div className="service-detail-image">
            <img src="/images/cardio.jpg" alt="Cardiology" />
          </div>

          <div className="service-detail-content">
            <h1>Cardiologist</h1>
            <h3>Heart & Cardiac Care</h3>
            <p>
              Expert care for heart-related conditions with accurate diagnosis 
              and preventive cardiology services.
            </p>

            <ul className="service-points">
              <li>✓ Chest pain evaluation</li>
              <li>✓ BP & cholesterol control</li>
              <li>✓ ECG interpretation</li>
              <li>✓ Heart health screening</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="treatments-section">
        <div className="container">
          <h2>Cardiology Services</h2>
          <ul className="treatment-list">
            <li>• Echocardiogram review</li>
            <li>• Heart disease risk assessment</li>
            <li>• Lifestyle & diet counselling</li>
            <li>• Cardiac follow-ups</li>
          </ul>
        </div>
      </section>

      <AppointmentForm />
     
    </>
  );
}
