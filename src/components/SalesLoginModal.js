import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // For routing
import logo from "../assets/logo.png";

function SalesLoginModal({ show, onHide }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (!username || !password) {
      setError("Both username and password are required.");
      return;
    }
    setError("");
    setSuccess(true);

    // After 1.5 seconds, close modal and redirect
    setTimeout(() => {
      setSuccess(false);
      onHide();
      navigate("/after-login"); // Dummy page route
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
          <h5 style={{ marginBottom: "20px" }}>Login</h5>
        </div>

        {/* Error Alert */}
        {error && <Alert variant="danger">{error}</Alert>}

        {/* Success Alert */}
        {success && <Alert variant="success">Login Successful!</Alert>}

        {/* Form */}
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ borderRadius: "8px", height: "45px" }}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderRadius: "8px", height: "45px" }}
            />
          </Form.Group>

          {/* Forgot password */}
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

          {/* Single button full width */}
          <Button
            style={{
              width: "100%",
              backgroundColor: "#0d6efd",
              border: "none",
              height: "45px",
              borderRadius: "8px",
            }}
            onClick={handleLoginClick}
          >
            Login
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default SalesLoginModal;
