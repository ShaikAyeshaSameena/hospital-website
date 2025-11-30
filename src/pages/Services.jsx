import React from "react";
import "../styles/services.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="services-hero-split">
        <div
          className="services-hero-image"
          style={{ backgroundImage: "url('/images/services.jpg')" }}
        ></div>

        <div className="services-hero-text">
          <h1>Our Services</h1>
          <h3>
            Explore our wide range of medical specialities designed to provide the best
            healthcare experience with expert doctors and modern technology.
          </h3>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-section container">
  <h2 className="section-heading">Our Specialities</h2>

  <div className="services-grid">

  <Link to="/services/generalphysician" className="service-card">
    <img src="/images/general.jpg" alt="General" />
    <h3>General Physician</h3>
  </Link>

  <Link to="/services/gynaecologist" className="service-card">
    <img src="/images/gyno.jpg" alt="Gynaecology" />
    <h3>Gynaecologist</h3>
  </Link>

  <Link to="/services/dermatologist" className="service-card">
    <img src="/images/derma.jpg" alt="Dermatologist" />
    <h3>Dermatologist</h3>
  </Link>

  <Link to="/services/paediatrician" className="service-card">
    <img src="/images/paedia.jpg" alt="Paediatrician" />
    <h3>Paediatrician</h3>
  </Link>

  <Link to="/services/neurologist" className="service-card">
    <img src="/images/neuro.jpg" alt="Neurologist" />
    <h3>Neurologist</h3>
  </Link>

  <Link to="/services/gastroenterologist" className="service-card">
    <img src="/images/gastro.jpg" alt="Gastroenterologist" />
    <h3>Gastroenterologist</h3>
  </Link>

  <Link to="/services/cardiologist" className="service-card">
    <img src="/images/cardio.jpg" alt="Cardiologist" />
    <h3>Cardiologist</h3>
  </Link>

  <Link to="/services/nephrologist" className="service-card">
    <img src="/images/nephro.jpg" alt="Nephrologist" />
    <h3>Nephrologist</h3>
  </Link>

</div>

</section>


      {/* CERTIFIED EXPERTS */}
      <section className="experts-section">
        <div className="container">
          <h2 className="section-heading">Our Certified Experts</h2>

          <div className="experts-grid">

            <div className="expert-card">
              <img src="/images/doctor1.jpg" alt="" />
              <p>Expert – General Physician</p>
            </div>

            <div className="expert-card">
              <img src="/images/doctor2.jpg" alt="" />
              <p>Expert – Gynaecologist</p>
            </div>

            <div className="expert-card">
              <img src="/images/doctor3.jpg" alt="" />
              <p>Expert – Dermatologist</p>
            </div>

            <div className="expert-card">
              <img src="/images/doctor4.jpg" alt="" />
              <p>Expert – Paediatrician</p>
            </div>

            <div className="expert-card">
              <img src="/images/doctor5.jpg" alt="" />
              <p>Expert – Neurologist</p>
            </div>

            <div className="expert-card">
              <img src="/images/doctor6.jpg" alt="" />
              <p>Expert – Gastroenterologist</p>
            </div>

            <div className="expert-card">
              <img src="/images/doctor7.jpg" alt="" />
              <p>Expert – Cardiologist</p>
            </div>

            <div className="expert-card">
              <img src="/images/doctor8.jpg" alt="" />
              <p>Expert – Nephrologist</p>
            </div>

          </div>
        </div>
      </section>

      {/* APPOINTMENT FORM */}
      <section className="appointment-section">
        <div className="container">
          <h2 className="form-title">Schedule Your Visit Online</h2>

          <form className="appointment-form" onSubmit={(e) => e.preventDefault()}>
            <select><option>Select a service</option></select>
            <select><option>Select a doctor</option></select>
            <input type="text" placeholder="Enter your name" />
            <input type="tel" placeholder="Enter your phone" />
            <input type="email" placeholder="Enter your email" />
            <textarea placeholder="Enter your message"></textarea>

            <button className="btn-primary book-btn">Book Appointment</button>
          </form>
        </div>
      </section>

      
    </>
  );
}
