import React, { useState } from "react";
import CustomerLoginModal from "../components/CustomerLoginModal";
import SalesLoginModal from "../components/SalesLoginModal";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  const [showCustomer, setShowCustomer] = useState(false);
  const [showSales, setShowSales] = useState(false);

  return (
    <div className="container text-center mt-5">
      <h2>Standard Chartered Login Portal</h2>
      <div className="mt-4">
        <button
          className="btn btn-primary me-3"
          onClick={() => setShowCustomer(true)}
        >
          Login as Customer
        </button>
        <button
          className="btn btn-success"
          onClick={() => setShowSales(true)}
        >
          Login as Sales User
        </button>
      </div>

      {/* Modals */}
      <CustomerLoginModal show={showCustomer} onHide={() => setShowCustomer(false)} />
      <SalesLoginModal show={showSales} onHide={() => setShowSales(false)} />
    </div>
  );
}

export default HomePage;
