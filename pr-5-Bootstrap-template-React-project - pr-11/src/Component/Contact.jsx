import React, { useState } from "react";

import { getDatabase,ref,set } from "firebase/database";
import "./Contact.css";
import { app } from "../../Firebase";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const database = getDatabase(app); // Ensure database initialization
    // const contactRef = ref(database, "contacts");

    // set(contactRef, formData)
    //   .then(() => {
    //     setSubmittedData(formData); // Show data in modal
    //     setFormData({ name: "", company: "", email: "", phone: "", message: "" }); // Reset form
    //   })
    //   .catch((error) => {
    //     console.error("Error saving data:", error);
    //   });

    const id = Date.now();
    set(ref(database,`contact/${id}`),{
        name : formData.name,
        company : formData.company, 
        email : formData.email,
        phone : formData.phone,
        message : formData.message
    })
    alert("record done");

  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Title</h1>
      <div className="contact-wrapper">
        {/* Left Sidebar */}
        <div className="contact-sidebar">
          <h2>Sample Company</h2>
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Email Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label>Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Modal to display submitted data */}
      {submittedData && (
        <div className="modal">
          <div className="modal-content">
            <h3>Submitted Data</h3>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Company:</strong> {submittedData.company}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Phone:</strong> {submittedData.phone}</p>
            <p><strong>Message:</strong> {submittedData.message}</p>
            <button onClick={() => setSubmittedData(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
