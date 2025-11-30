import React from "react";
import "../../styles/serviceDetails.css";
import Footer from "../../components/Footer";
import AppointmentForm from "../../components/AppointmentForm";


export default function Dermatologist() {
  return (
    <>
      <section className="service-detail-section">
        <div className="container service-detail-grid">

          <div className="service-detail-image">
            <img src="/images/derma.jpg" alt="Dermatology" />
          </div>

          <div className="service-detail-content">
            <h1>Dermatologist</h1>
            <h3>Skin, Hair & Nail Care</h3>
            <p>
              Our dermatology department treats all skin and hair concerns with 
              modern, effective solutions.
            </p>

            <ul className="service-points">
              <li>✓ Acne & pigmentation</li>
              <li>✓ Hair fall treatment</li>
              <li>✓ Skin allergies</li>
              <li>✓ Anti-aging treatments</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="treatments-section">
        <div className="container">
          <h2>Treatments We Provide</h2>
          <ul className="treatment-list">
            <li>• Chemical peels</li>
            <li>• Hydrafacial</li>
            <li>• Dandruff treatment</li>
            <li>• Laser treatments</li>
          </ul>
        </div>
      </section>

      <AppointmentForm />
      
    </>
  );
}
