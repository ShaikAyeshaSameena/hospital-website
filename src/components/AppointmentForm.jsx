import React from "react";
import "../styles/AppointmentForm.css";

export default function AppointmentForm() {
  return (
    <section className="appointment-section">
      <div className="container form-container">
        <h2 className="form-title">Schedule Your Visit Online</h2>

        <form className="Appointment-Form" onSubmit={(e) => e.preventDefault()}>

          <select>
            <option>Select a Service</option>
            <option>General Physician</option>
            <option>Gynaecologist</option>
            <option>Dermatologist</option>
            <option>Paediatrician</option>
            <option>Neurologist</option>
            <option>Gastroenterologist</option>
            <option>Cardiologist</option>
            <option>Nephrologist</option>
          </select>

          <select>
            <option>Select a Doctor</option>
            <option>Dr. Ayesha Khan</option>
            <option>Dr. Rohan Sharma</option>
            <option>Dr. Sneha Patel</option>
            <option>Dr. Vikram Desai</option>
          </select>

          <input type="text" placeholder="Your Name" />
          <input type="tel" placeholder="Phone Number" />

          <input type="email" placeholder="Email Address" />

          <textarea placeholder="Your Message"></textarea>

          <button className="btn-appoint">Book Appointment</button>
        </form>
      </div>
    </section>
  );
}
