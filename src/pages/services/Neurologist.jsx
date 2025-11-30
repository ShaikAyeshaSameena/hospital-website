import React from "react";
import "../../styles/serviceDetails.css";
import Footer from "../../components/Footer";
import AppointmentForm from "../../components/AppointmentForm";


export default function Neurologist() {
  return (
    <>
      <section className="service-detail-section">
        <div className="container service-detail-grid">

          <div className="service-detail-image">
            <img src="/images/neuro.jpg" alt="Neurology" />
          </div>

          <div className="service-detail-content">
            <h1>Neurologist</h1>
            <h3>Nervous System & Brain Care</h3>
            <p>
              Our neurology department offers advanced diagnosis and treatment 
              for brain, nerve, and spine disorders.
            </p>

            <ul className="service-points">
              <li>✓ Headache & migraine care</li>
              <li>✓ Seizure & epilepsy treatment</li>
              <li>✓ Peripheral nerve issues</li>
              <li>✓ Stroke evaluation</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="treatments-section">
        <div className="container">
          <h2>Treatments We Offer</h2>
          <ul className="treatment-list">
            <li>• Neurological diagnostics</li>
            <li>• Memory disorder evaluation</li>
            <li>• Balance & coordination treatment</li>
            <li>• Parkinson’s management</li>
          </ul>
        </div>
      </section>

      <AppointmentForm />
      
    </>
  );
}
