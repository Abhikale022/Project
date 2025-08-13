import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function CustomerLoginModal({ show, onHide }) {
  const [isSignUp, setIsSignUp] = useState(false); 
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [registeredUser, setRegisteredUser] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (isSignUp) {
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        setError("All fields are required.");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      setRegisteredUser({
        username: formData.email,
        password: formData.password
      });
      setSuccess("Account created successfully! Please login.");
      setIsSignUp(false);
      setFormData({
        username: "",
        password: "",
        name: "",
        email: "",
        confirmPassword: ""
      });
      return;
    } 

    // Login check
    if (!formData.username || !formData.password) {
      setError("Both username and password are required.");
      return;
    }
    if (
      !registeredUser ||
      formData.username !== registeredUser.username ||
      formData.password !== registeredUser.password
    ) {
      setError("Invalid username or password.");
      return;
    }

    // Login success
    setSuccess("Login successful!");
    setTimeout(() => {
      onHide();
      navigate("/customer-dashboard");
    }, 1500);
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Body style={{ width: "100%", maxWidth: "400px", margin: "auto" }}>
        {/* Logo + Title */}
        <div className="text-center">
          <img
            src={logo}
            alt="Standard Chartered"
            style={{
              width: "200px",
              display: "block",
              margin: "0 auto 20px 0",
            }}
          />
          <h5 style={{ marginBottom: "20px" }}>{isSignUp ? "Sign Up" : "Login"}</h5>
        </div>

        {/* Alerts */}
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        {/* Form */}
        <Form onSubmit={handleSubmit}>
          {isSignUp ? (
            <>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ borderRadius: "8px", height: "45px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ borderRadius: "8px", height: "45px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  value={formData.password}
                  onChange={handleChange}
                  style={{ borderRadius: "8px", height: "45px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  style={{ borderRadius: "8px", height: "45px" }}
                />
              </Form.Group>
            </>
          ) : (
            <>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Username (Email)"
                  value={formData.username}
                  onChange={handleChange}
                  style={{ borderRadius: "8px", height: "45px" }}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  style={{ borderRadius: "8px", height: "45px" }}
                />
              </Form.Group>
              <div className="text-end mb-4">
                <a
                  href="#"
                  style={{
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    color: "#0d6efd",
                  }}
                >
                  → Forgot Username / Password
                </a>
              </div>
            </>
          )}

          {/* Buttons */}
          <div className="d-flex gap-3">
            <Button
              type="submit"
              style={{
                flex: 1,
                backgroundColor: isSignUp ? "#28a745" : "#0d6efd",
                border: "none",
                height: "45px",
                borderRadius: "8px",
              }}
            >
              {isSignUp ? "Sign Up" : "Login"}
            </Button>
            <Button
              type="button"
              onClick={() => {
                setError("");
                setSuccess("");
                setIsSignUp(!isSignUp);
              }}
              style={{
                flex: 1,
                backgroundColor: isSignUp ? "#0d6efd" : "#28a745",
                border: "none",
                height: "45px",
                borderRadius: "8px",
              }}
            >
              {isSignUp ? "Login" : "Sign Up"}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CustomerLoginModal;
