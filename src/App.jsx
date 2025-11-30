import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gynaecologist from "./pages/services/Gynaecologist";
import Dermatologist from "./pages/services/Dermatologist";
import Paediatrician from "./pages/services/Paediatrician";
import Neurologist from "./pages/services/Neurologist";
import Gastroenterologist from "./pages/services/Gastroenterologist";
import Cardiologist from "./pages/services/Cardiologist";
import Nephrologist from "./pages/services/Nephrologist";
import GeneralPhysician from './pages/services/GeneralPhysician'
import AppointmentPage from "./pages/AppointmentPage";


export default function App(){
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path="/services/gynaecologist" element={<Gynaecologist />} />
          <Route path="/services/generalphysician" element={<GeneralPhysician />} />
          <Route path="/services/dermatologist" element={<Dermatologist />} />
          <Route path="/services/paediatrician" element={<Paediatrician />} />
          <Route path="/services/neurologist" element={<Neurologist />} />
          <Route path="/services/gastroenterologist" element={<Gastroenterologist />} />
          <Route path="/services/cardiologist" element={<Cardiologist />} />
          <Route path="/services/nephrologist" element={<Nephrologist />} />
          <Route path="/appointment" element={<AppointmentPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
