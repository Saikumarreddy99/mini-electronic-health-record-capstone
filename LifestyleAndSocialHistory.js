import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LifestyleAndSocialHistory = () => {
  const [formData, setFormData] = useState({
    patientId: '',
    patientName: '',
    smokingStatus: '',
    alcoholConsumption: '',
    drugUse: '',
    physicalActivity: '',
    dietNutrition: '',
    occupation: '',
    livingSituation: '',
    stressLevels: '',
    travelHistory: ''
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
    alert('Lifestyle and social history submitted successfully!');
  };

  return (
    <div style={pageStyle}>
      <div style={formContainerStyle}>
        <h1 style={headerStyle}>Lifestyle and Social History Form</h1>

        <form onSubmit={handleSubmit} style={formStyle}>
          {/* Patient ID */}
          <label style={labelStyle} htmlFor="patientId">Patient ID:</label>
          <input type="text" id="patientId" name="patientId" placeholder="Enter Patient ID" value={formData.patientId} onChange={handleChange} required style={inputStyle} />

          {/* Patient Name */}
          <label style={labelStyle} htmlFor="patientName">Patient Name:</label>
          <input type="text" id="patientName" name="patientName" placeholder="Enter Patient Name" value={formData.patientName} onChange={handleChange} required style={inputStyle} />

          {/* Smoking Status */}
          <label style={labelStyle} htmlFor="smokingStatus">Smoking Status:</label>
          <input type="text" id="smokingStatus" name="smokingStatus" placeholder="E.g., Never, Former, Current smoker" value={formData.smokingStatus} onChange={handleChange} style={inputStyle} />

          {/* Alcohol Consumption */}
          <label style={labelStyle} htmlFor="alcoholConsumption">Alcohol Consumption:</label>
          <input type="text" id="alcoholConsumption" name="alcoholConsumption" placeholder="Frequency and amount" value={formData.alcoholConsumption} onChange={handleChange} style={inputStyle} />

          {/* Drug Use */}
          <label style={labelStyle} htmlFor="drugUse">Recreational Drug Use:</label>
          <input type="text" id="drugUse" name="drugUse" placeholder="Specify any substance use" value={formData.drugUse} onChange={handleChange} style={inputStyle} />

          {/* Physical Activity */}
          <label style={labelStyle} htmlFor="physicalActivity">Physical Activity Level:</label>
          <input type="text" id="physicalActivity" name="physicalActivity" placeholder="E.g., Active, Sedentary" value={formData.physicalActivity} onChange={handleChange} style={inputStyle} />

          {/* Diet and Nutrition */}
          <label style={labelStyle} htmlFor="dietNutrition">Diet and Nutrition:</label>
          <textarea id="dietNutrition" name="dietNutrition" rows="3" placeholder="Describe dietary habits" value={formData.dietNutrition} onChange={handleChange} style={textareaStyle} />

          {/* Occupation */}
          <label style={labelStyle} htmlFor="occupation">Occupation:</label>
          <input type="text" id="occupation" name="occupation" placeholder="Enter occupation" value={formData.occupation} onChange={handleChange} style={inputStyle} />

          {/* Living Situation */}
          <label style={labelStyle} htmlFor="livingSituation">Living Situation:</label>
          <input type="text" id="livingSituation" name="livingSituation" placeholder="Living alone, with family, assisted living, etc." value={formData.livingSituation} onChange={handleChange} style={inputStyle} />

          {/* Stress Levels */}
          <label style={labelStyle} htmlFor="stressLevels">Stress Levels:</label>
          <textarea id="stressLevels" name="stressLevels" rows="3" placeholder="Describe stress sources and levels" value={formData.stressLevels} onChange={handleChange} style={textareaStyle} />

          {/* Travel History */}
          <label style={labelStyle} htmlFor="travelHistory">Recent Travel History:</label>
          <textarea id="travelHistory" name="travelHistory" rows="3" placeholder="Recent international or domestic travel" value={formData.travelHistory} onChange={handleChange} style={textareaStyle} />

          <div style={buttonContainerStyle}>
            <Link to="/" style={backButtonStyle}>Back to Home</Link>
            <button type="submit" style={submitButtonStyle}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Same style constants from above
const pageStyle = { /* ... */ };
const formContainerStyle = { /* ... */ };
const headerStyle = { /* ... */ };
const formStyle = { /* ... */ };
const labelStyle = { /* ... */ };
const inputStyle = { /* ... */ };
const textareaStyle = { /* ... */ };
const buttonContainerStyle = { /* ... */ };
const backButtonStyle = { /* ... */ };
const submitButtonStyle = { /* ... */ };

export default LifestyleAndSocialHistory;
