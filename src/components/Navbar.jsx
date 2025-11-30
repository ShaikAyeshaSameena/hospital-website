import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner container">
        
        {/* LEFT: logo */}
        <div className="brand">
          <div className="logo">🩺</div>
          <div className="hospital-name">PrimeCare</div>
        </div>

        {/* CENTER: links */}
        <nav className={`nav-center ${open ? "open" : ""}`}>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>Services</NavLink>
        </nav>

        {/* RIGHT: appointment */}
        <div className="nav-right">
          {/* ONLY THIS LINE CHANGED */}
          <NavLink to="/appointment" className="btn btn-primary">
            Book Appointment
          </NavLink>

          <button
            className="menu-btn"
            aria-label="Toggle menu"
            onClick={() => setOpen(s => !s)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
