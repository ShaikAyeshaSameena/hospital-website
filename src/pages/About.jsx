import React from "react";
import "../styles/about.css"; // adjust path if your styles live elsewhere
import Footer from "../components/Footer"; // make sure this path matches your project
// NOTE: images are referenced from public/images/* so no imports needed

export default function About() {
  return (
    <>
      {/* Vision (A) - full-width hero image with overlapping cream box */}
      {/* Vision (A) - Hero Image + Transparent Floating Box */}
<section className="vision-section">
  <div
    className="vision-hero"
    style={{ backgroundImage: "url('/images/vision.jpg')" }}
  >
    <div className="vision-transparent-box">
      <h3 className="vision-small-title">Our Vision</h3>
      <h1 className="hospital-title">PrimeCare</h1>
      <h2 className="vision-description">
        To become a leading healthcare institution recognized for excellence in 
        patient care, advanced medical innovation, and a compassionate healing 
        environment that prioritizes every individual’s well-being.
      </h2>
    </div>
  </div>
</section>

      {/* Founder (B) - 50/50 split: text left, image right */}
      <section className="founder-section">
        <div className="container founder-grid">
          <div className="founder-text">
            <h2>About the Founder</h2>
            <p className="founder-copy">
              Dr. A. Rahman, the visionary behind PrimeCare Hospital, established
              this institution with a strong belief that quality healthcare
              should be accessible, compassionate, and advanced. With over 20
              years of medical experience, Dr. Rahman is known for his
              patient-first approach, ethical medical practice, and dedication
              to adopting modern healthcare technologies.
            </p>
            <p className="founder-copy">
              Under his leadership, PrimeCare has grown into a trusted center
              where expert doctors, modern facilities, and genuine care come
              together to serve every patient with dignity.
            </p>
          </div>

          <div className="founder-image">
            <img src="/images/founder.jpg" alt="Dr. A. Rahman - Founder" />
          </div>
        </div>
      </section>

      {/* Mission (B) - 50/50 split but image left, text right (mirrors founder layout) */}
      <section className="mission-section">
        <div className="container mission-grid">
          <div className="mission-image">
            <img src="/images/mission.jpg" alt="Our Mission" />
          </div>
          <div className="mission-text">
            <h2>Our Mission</h2>

            <p>
              To provide affordable, high-quality medical services supported by
              advanced technology and skilled professionals.
            </p>
            <p>
              To create a safe, patient-centered environment where comfort,
              respect, and empathy are at the core of every treatment.
            </p>
            <p>
              To continuously upgrade our medical practices through innovation,
              research, and training.
            </p>
            <p>
              To ensure timely diagnosis, effective treatment, and a transparent
              approach in all healthcare processes.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form - two columns */}
      <section className="appointment-section about-appointment">
        <div className="container">
          <h2 className="form-title">Schedule Your Visit Online</h2>

          <form className="appointment-form" onSubmit={(e) => e.preventDefault()}>
            <select name="service" required>
              <option value="">Select a service</option>
              <option>General Physician</option>
              <option>Gynaecologist</option>
              <option>Dermatologist</option>
              <option>Paediatrician</option>
              <option>Neurologist</option>
              <option>Gastroenterologist</option>
            </select>

            <select name="doctor" required>
              <option value="">Select a doctor</option>
              <option>Dr. A. Rahman</option>
              <option>Dr. Anjali Rao</option>
              <option>Mr. Sameer Khan</option>
              <option>Ms. Priya Menon</option>
              <option>Dr. Ravi Patel</option>
            </select>

            <input type="text" name="name" placeholder="Enter your name" required />

            <input type="tel" name="phone" placeholder="Enter your phone" required />

            <input type="email" name="email" placeholder="Enter your email" required />

            <textarea name="message" placeholder="Enter your message" rows="4" />

            <button className="btn-primary book-btn" type="submit">
              Book Appointment
            </button>
          </form>
        </div>
      </section>

      {/* Footer (present on every page) */}
    
    </>
  );
}
