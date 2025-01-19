import React, { useState } from "react";

function FormValidation() {
  const [formData, setFromData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData({ ...formData, [name]: value });
  };
  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name cannot be empty.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Form submitted successfully");
      setFromData({ name: "", email: "" });
      setErrors({});
    }
  };
  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "2rem" }}>
      <h1>Form Validation</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ display: "block", width: "100%", marginTop: "0.5rem" }}
          />
          {errors.name && <p style={{color:"red", fontSize:"0.9rem"}}>{errors.name}</p>}
        </div>
        <div style={{ marginTop: "1rem" }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ display: "block", width: "100%", marginTop: "0.5rem" }}
          />
          {errors.email && <p style={{color:"red", fontSize:"0.9rem"}}>{errors.email}</p>}
        </div>
        <button
          type="submit"
          style={{ marginTop: "1rem", padding: "0.5rem", fontSize: "1rem" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormValidation;
