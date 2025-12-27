import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PastMedicalHistory from './PastMedicalHistory';
import MiniEhrLandingPage from './MiniEhrLandingPage';
import LifestyleAndSocialHistory from './LifestyleAndSocialHistory';
import CareCoordination from './CareCoordination';
import './App.css';

function PatientRegistration() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:5000/patient', {
      name: name,
      age: age,
      gender: gender,
      contact: contact
    })
    .then(response => {
      setMessage('Patient added successfully!');
      setName('');
      setAge('');
      setGender('');
      setContact('');
    })
    .catch(error => {
      setMessage('Error adding patient. Please try again.');
    });
  };

  return (
    <div className="container">
      <h1 className="title">Add Patient Information</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input
            type="tel"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {message && <div className="message">{message}</div>}
      
      <div className="navigation">
        <Link to="/" className="nav-link">Back to Home</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MiniEhrLandingPage />} />
        <Route path="/patient-registration" element={<PatientRegistration />} />
        <Route path="/past-medical-history" element={<PastMedicalHistory />} />
        <Route path="/lifestyle-and-social-history" element={<LifestyleAndSocialHistory />} />
        <Route path="/care-coordination" element={<CareCoordination />} />
      </Routes>
    </Router>
  );
}

export default App;

