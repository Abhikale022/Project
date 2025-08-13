import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NextPage from "./components/NextPage";
import CustomerDashboard from "./components/CustomerDashboard";
import ApplicationStatus from "./components/ApplicationStatus";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* Redirect root to HomePage */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/after-login" element={<NextPage />} /> {/* after sales user login */}
        <Route path="/customer-dashboard" element={<CustomerDashboard />} /> {/*after customer login */}
        <Route path="/application-status" element={<ApplicationStatus />} /> {/* application status page */}
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
