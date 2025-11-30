import React from "react";
import "../../styles/serviceDetails.css";
import Footer from "../../components/Footer";

export default function GeneralPhysician() {
  return (
    <>
      <section className="service-detail-section">
        <div className="container service-detail-grid">

          <div className="service-detail-image">
            <img src="/images/general.jpg" alt="General Physician" />
          </div>

          <div className="service-detail-content">
            <h1>General Physician</h1>
            <h3>Complete Family Healthcare</h3>
            <p>
              Our General Physicians provide expert treatment for common illnesses 
              and complete health checkups for all age groups.
            </p>

            <ul className="service-points">
              <li>✓ Routine checkups</li>
              <li>✓ Fever, infections, cough & cold</li>
              <li>✓ Lifestyle disorder management</li>
              <li>✓ Preventive healthcare guidance</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="treatments-section">
        <div className="container">
          <h2>Conditions We Treat</h2>
          <ul className="treatment-list">
            <li>• Viral and bacterial infections</li>
            <li>• Diabetes & Blood Pressure</li>
            <li>• Thyroid issues</li>
            <li>• Acute illness management</li>
            <li>• Fatigue & weakness evaluation</li>
          </ul>
        </div>
      </section>

      <AppointmentForm />
     
    </>
  );
}

function AppointmentForm() {
  return (
    <section className="appointment-section">
      <div className="container">
        <h2 className="form-title">Schedule Your Visit Online</h2>
        <form className="appointment-form" onSubmit={(e) => e.preventDefault()}>
          <select required><option>Select a service</option><option>General Physician</option></select>
          <select required><option>Select a doctor</option></select>
          <input type="text" placeholder="Enter your name" required />
          <input type="tel" placeholder="Enter your phone" required />
          <input type="email" placeholder="Enter your email" required />
          <textarea placeholder="Enter your message"></textarea>
          <button className="book-btn">Book Appointment</button>
        </form>
      </div>
    </section>
  );
}
