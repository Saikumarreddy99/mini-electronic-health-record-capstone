import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CareCoordination = () => {
  const [formData, setFormData] = useState({
    patientId: '',
    patientName: '',
    referringProvider: '',
    specialistConsultations: '',
    careManagerAssigned: '',
    followUpPlans: '',
    externalVisits: '',
    communicationNotes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Care coordination details submitted successfully!');
  };

  return (
    <div style={pageStyle}>
      <div style={formContainerStyle}>
        <h1 style={headerStyle}>Care Coordination Form</h1>

        <form onSubmit={handleSubmit} style={formStyle}>
          {/* Patient ID */}
          <label style={labelStyle} htmlFor="patientId">Patient ID:</label>
          <input type="text" id="patientId" name="patientId" placeholder="Enter Patient ID" value={formData.patientId} onChange={handleChange} required style={inputStyle} />

          {/* Patient Name */}
          <label style={labelStyle} htmlFor="patientName">Patient Name:</label>
          <input type="text" id="patientName" name="patientName" placeholder="Enter Patient Name" value={formData.patientName} onChange={handleChange} required style={inputStyle} />

          {/* Referring Provider */}
          <label style={labelStyle} htmlFor="referringProvider">Referring Provider:</label>
          <input type="text" id="referringProvider" name="referringProvider" placeholder="Name of referring provider" value={formData.referringProvider} onChange={handleChange} style={inputStyle} />

          {/* Specialist Consultations */}
          <label style={labelStyle} htmlFor="specialistConsultations">Specialist Consultations:</label>
          <textarea id="specialistConsultations" name="specialistConsultations" rows="3" placeholder="List any specialists consulted" value={formData.specialistConsultations} onChange={handleChange} style={textareaStyle} />

          {/* Care Manager Assigned */}
          <label style={labelStyle} htmlFor="careManagerAssigned">Care Manager Assigned:</label>
          <input type="text" id="careManagerAssigned" name="careManagerAssigned" placeholder="Name of care coordinator" value={formData.careManagerAssigned} onChange={handleChange} style={inputStyle} />

          {/* Follow-Up Plans */}
          <label style={labelStyle} htmlFor="followUpPlans">Follow-Up Plans:</label>
          <textarea id="followUpPlans" name="followUpPlans" rows="3" placeholder="Scheduled follow-ups or referrals" value={formData.followUpPlans} onChange={handleChange} style={textareaStyle} />

          {/* External Visits */}
          <label style={labelStyle} htmlFor="externalVisits">External Visits:</label>
          <textarea id="externalVisits" name="externalVisits" rows="3" placeholder="Visits to other facilities or systems" value={formData.externalVisits} onChange={handleChange} style={textareaStyle} />

          {/* Communication Notes */}
          <label style={labelStyle} htmlFor="communicationNotes">Communication Notes:</label>
          <textarea id="communicationNotes" name="communicationNotes" rows="3" placeholder="Any interdisciplinary communications" value={formData.communicationNotes} onChange={handleChange} style={textareaStyle} />

          <div style={buttonContainerStyle}>
            <Link to="/" style={backButtonStyle}>Back to Home</Link>
            <button type="submit" style={submitButtonStyle}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const pageStyle = {
  fontFamily: 'Arial, sans-serif',
  margin: 0,
  padding: 0,
  backgroundColor: '#f7f7f7',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '20px',
  paddingBottom: '20px'
};

const formContainerStyle = {
  width: '100%',
  maxWidth: '800px',
  justifyContent: 'center',
  padding: '20px',
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
};

const headerStyle = {
  textAlign: 'center',
  color: '#333'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column'
};

const labelStyle = {
  marginTop: '10px',
  fontWeight: 'bold'
};

const inputStyle = {
  justifyContent: 'center',
  width: '80%',
  padding: '10px',
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginTop: '5px'
};

const textareaStyle = {
  ...inputStyle,
  resize: 'vertical'
};

const buttonContainerStyle = {
  textAlign: 'center',
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'space-between'
};

const backButtonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  color: 'white',
  backgroundColor: '#6c757d',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'inline-block'
};

const submitButtonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  color: 'white',
  backgroundColor: '#007BFF',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default CareCoordination;
