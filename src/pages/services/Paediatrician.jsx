import React from "react";
import "../../styles/serviceDetails.css";
import Footer from "../../components/Footer";

export default function Paediatrician() {
  return (
    <>
      <section className="service-detail-section">
        <div className="container service-detail-grid">
          
          <div className="service-detail-image">
            <img src="/images/paedia.jpg" alt="Paediatrician" />
          </div>

          <div className="service-detail-content">
            <h1>Paediatrician</h1>
            <h3>Child Health & Growth Care</h3>
            <p>
              Our paediatric department provides complete medical care for infants, 
              children, and adolescents with a focus on healthy growth.
            </p>

            <ul className="service-points">
              <li>✓ Newborn care</li>
              <li>✓ Vaccinations</li>
              <li>✓ Growth monitoring</li>
              <li>✓ Infection treatment</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="treatments-section">
        <div className="container">
          <h2>Paediatric Care Includes</h2>
          <ul className="treatment-list">
            <li>• Routine child checkups</li>
            <li>• Nutrition planning</li>
            <li>• Fever, cold & cough treatment</li>
            <li>• Childhood allergies</li>
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
          <select><option>Paediatric Care</option></select>
          <select><option>Select doctor</option></select>
          <input type="text" placeholder="Name" required />
          <input type="tel" placeholder="Phone" required />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Your message"></textarea>
          <button className="book-btn">Book Appointment</button>
        </form>
      </div>
    </section>
  );
}
