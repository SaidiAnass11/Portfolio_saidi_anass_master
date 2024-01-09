// ContactForm.js

import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import Particle from "../Particle";

// ... (rest of the component)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission (e.g., sending data to a server)

    // For now, let's just log the form data to the console
    console.log('Form Data:', formData);

    // Optionally, you can reset the form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Container fluid className="Contact-section">
        <Particle />
        <div className="contact-container">
          <div className="center-viewport">
            <form onSubmit={handleSubmit} className="contact-form">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
