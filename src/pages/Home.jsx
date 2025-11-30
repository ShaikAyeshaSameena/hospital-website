import React from "react";


export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero-banner">
        <div className="hero-overlay">
          <div className="container hero-content">
            <h1>Compassionate Care for Mind & Body</h1>
            <p className="hero-sub">
              PrimeCare delivers evidence-based behavioral health care with empathy and
              a patient-first approach — for individuals and families.
            </p>

            <div className="hero-ctas">
              <button className="btn btn-primary">Book Appointment</button>
              <button className="btn btn-ghost">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section">
        <div className="container about-grid">
          <div className="about-image">
            <img
              src="images/about-image.jpg"
              alt="about-image"
              loading="lazy"
            />
          </div>

          <div className="about-text">
            <h2>About PrimeCare</h2>
            <p>
              PrimeCare Hospital is a trusted healthcare institution dedicated to delivering high-quality, patient-centered medical services. Our aim is to make advanced healthcare accessible, affordable, and compassionate for every individual who walks through our doors.
              </p>
        <p>
With a team of skilled doctors, experienced nurses, and supportive medical staff, PrimeCare Hospital offers comprehensive care across multiple specialties. We combine modern medical technology with a warm and healing environment, ensuring patients feel safe, respected, and well-cared for at every step.
       </p>
       <p>
At PrimeCare, we believe in treating not just illnesses but people. Our commitment is to provide accurate diagnosis, effective treatment, continuous support, and personalized care for patients of all age groups.

Whether it’s emergency care, routine checkups, specialized treatment, or long-term health management, we strive to be your most trusted partner in health.
       </p>
       <p>

PrimeCare Hospital — Your Health. Our Priority.
            </p>

          </div>
        </div>
      </section>

      <section className="our-specialities container">
  <h2>Our Specialities</h2>

  <div className="speciality-grid">

    <div className="speciality-card">
      <img src="/images/general.jpg" alt="general" />
      <div className="speciality-text">
        <h3>General Physician</h3>
        <p>Expert in overall health, common illnesses, and routine medical care.</p>
      </div>
    </div>

    <div className="speciality-card">
      <img src="/images/gyno.jpg" alt="gyno" />
      <div className="speciality-text">
        <h3>Gynaecologist</h3>
        <p>Specialist in women’s reproductive health, pregnancy, and wellness.</p>
      </div>
    </div>

    <div className="speciality-card">
      <img src="/images/derma.jpg" alt="derma" />
      <div className="speciality-text">
        <h3>Dermatologist</h3>
        <p>Provides care for skin, hair, and nail conditions and treatments.</p>
      </div>
    </div>

    <div className="speciality-card">
      <img src="/images/paedia.jpg" alt="paedia" />
      <div className="speciality-text">
        <h3>Paediatrician</h3>
        <p>Dedicated to the health and well-being of infants, children, and teens.</p>
      </div>
    </div>

    <div className="speciality-card">
      <img src="/images/neuro.jpg" alt="neuro" />
      <div className="speciality-text">
        <h3>Neurologist</h3>
        <p>Diagnoses and treats brain, nerve, and spinal cord disorders.</p>
      </div>
    </div>

    <div className="speciality-card">
      <img src="/images/gastro.jpg" alt="gastro" />
      <div className="speciality-text">
        <h3>Gastroenterologist</h3>
        <p>Specialist in stomach, liver, and digestive system care.</p>
      </div>
    </div>

  </div>
</section>




      {/* CERTIFIED EXPERTS */}
      <section className="experts-section">
        <div className="container">
          <h2 className="section-title">Our Certified Experts</h2>

          <div className="experts-grid">
            <article className="expert-card">
              <div className="expert-photo">
                <img src="/images/doctor1.jpg" alt="Dr. Anjali Rao" />
              </div>
              <div className="expert-body">
                <strong>Dr. Anjali Rao</strong>
                <span>Consultant Psychiatrist</span>
              </div>
            </article>

            <article className="expert-card">
              <div className="expert-photo">
                <img src="/images/doctor2.jpg" alt="Mr. Sameer Khan" />
              </div>
              <div className="expert-body">
                <strong>Mr. Sameer Khan</strong>
                <span>Clinical Psychologist</span>
              </div>
            </article>

            <article className="expert-card">
              <div className="expert-photo">
                <img src="/images/doctor3.jpg" alt="Ms. Priya Menon" />
              </div>
              <div className="expert-body">
                <strong>Ms. Priya Menon</strong>
                <span>Senior Counselor</span>
              </div>
            </article>

            <article className="expert-card">
              <div className="expert-photo">
                <img src="/images/doctor4.jpg" alt="Dr. Ravi Patel" />
              </div>
              <div className="expert-body">
                <strong>Dr. Ravi Patel</strong>
                <span>Neuropsychiatrist</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title">Why Choose PrimeCare</h2>

          <div className="why-grid">
            <div className="why-card">
              <h4>Experienced Team</h4>
              <p>Decades of combined clinical experience across specialties.</p>
            </div>
            <div className="why-card">
              <h4>Patient-Centered Care</h4>
              <p>Individualized plans focused on recovery and quality of life.</p>
            </div>
            <div className="why-card">
              <h4>Safe & Confidential</h4>
              <p>Privacy-first approach and compassionate, non-judgmental care.</p>
            </div>
            <div className="why-card">
              <h4>Modern Facilities</h4>
              <p>Evidence-based treatments supported by up-to-date diagnostics.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
