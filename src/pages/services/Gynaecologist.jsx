import React from "react";
import "../../styles/serviceDetails.css";
import Footer from "../../components/Footer";
import AppointmentForm from "../../components/AppointmentForm";

export default function Gynaecologist() {
  return (
    <>
      <section className="service-detail-section">
        <div className="container service-detail-grid">

          <div className="service-detail-image">
            <img src="/images/gyno.jpg" alt="Gynaecology" />
          </div>

          <div className="service-detail-content">
            <h1>Gynaecologist</h1>
            <h3>Women's Health & Wellness</h3>
            <p>
              Comprehensive care for women at every life stage including pregnancy, 
              reproductive health, and wellness.
            </p>

            <ul className="service-points">
              <li>✓ Pregnancy care</li>
              <li>✓ Menstrual disorder treatment</li>
              <li>✓ PCOD / PCOS management</li>
              <li>✓ Fertility evaluation</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="treatments-section">
        <div className="container">
          <h2>Treatments We Provide</h2>
          <ul className="treatment-list">
            <li>• Ultrasound & scanning</li>
            <li>• Pregnancy counseling</li>
            <li>• Hormonal imbalance treatments</li>
            <li>• Gynecological screenings</li>
          </ul>
        </div>
      </section>
      <AppointmentForm />


      
     
    </>
  );
}
