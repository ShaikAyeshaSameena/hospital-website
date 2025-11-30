import "../styles/AppointmentPage.css";


export default function AppointmentPage() {
  return (
    <div className="appointment-page">
      <div className="appointment-box">

        <h2 className="appointment-title">Book Appointment</h2>

        <form className="appointment-grid">

          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />

          <input type="email" placeholder="Email" className="full-width" />

          <input type="tel" placeholder="Phone" />
          <select>
            <option>Select Doctor</option>
            <option>Dr. John Doe – Cardiologist</option>
            <option>Dr. Priya Sharma – Gynecologist</option>
            <option>Dr. Raghav – Pediatrician</option>
          </select>

          <textarea placeholder="Message" className="full-width"></textarea>

          <button type="submit" className="appointment-submit full-width">
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}
