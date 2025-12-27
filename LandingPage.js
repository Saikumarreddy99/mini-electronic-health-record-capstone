import React from 'react';
import { Link } from 'react-router-dom';

const MiniEhrLandingPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for patient ID:", e.target.searchPatientId.value);
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#f7f7f7',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        width: '80%',
        maxWidth: '800px',
        margin: '50px auto',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{
          textAlign: 'center',
          color: '#333'
        }}>Welcome to Mini Electronic Health Record System</h1>
        
        <p style={{ textAlign: 'center' }}>Please select the section you want to visit:</p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '15px',
          marginTop: '20px'
        }}>
          <Link to="/patient-registration" style={linkStyle}>Patient Registration</Link>
          <Link to="/past-medical-history" style={linkStyle}>Past Medical History</Link>
          <Link to="/laboratory-findings" style={linkStyle}>Laboratory Findings</Link>
          <Link to="/diagnosis" style={linkStyle}>Diagnosis</Link>
          <Link to="/treatment" style={linkStyle}>Treatment</Link>
          {/* New links added below */}
          <Link to="/lifestyle-and-social-history" style={linkStyle}>Lifestyle & Social History</Link>
          <Link to="/care-coordination" style={linkStyle}>Care Coordination</Link>
        </div>
       
        <div style={{
          marginTop: '30px',
          padding: '20px',
          backgroundColor: '#f1f1f1',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h2>Search Patient Records</h2>
          <form onSubmit={handleSubmit}>
            <label style={{
              fontWeight: 'bold',
              display: 'block',
              marginTop: '10px'
            }} htmlFor="searchPatientId">Enter Patient ID:</label>
            
            <input 
              type="text" 
              id="searchPatientId" 
              name="searchPatientId" 
              placeholder="Enter Patient ID" 
              required
              style={{
                width: '100%',
                maxWidth: '300px',
                margin: '10px auto',
                padding: '10px',
                fontSize: '14px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                display: 'block'
              }}
            />
            
            <button 
              type="submit"
              style={{
                width: '100%',
                maxWidth: '300px',
                margin: '10px auto',
                padding: '10px',
                fontSize: '14px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                display: 'block'
              }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Extracted common link styling
const linkStyle = {
  padding: '10px 20px',
  backgroundColor: '#007BFF',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px',
  textAlign: 'center'
};

export default MiniEhrLandingPage;
