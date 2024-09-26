import React, { useState } from 'react';
import './Hero.css'

const ContactForm = () => {
  
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cellNumber: '',
    dateOfBirth: '',
    email: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Dynamically update state
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="contact-form-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="cellNumber">Cell Number:</label>
          <input
            type="tel"
            name="cellNumber"
            id="cellNumber"
            value={formData.cellNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
