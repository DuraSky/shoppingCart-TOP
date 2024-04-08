import React from "react";
import "./checkoutModalStyle.css";

export default function CheckoutModal({ isOpen, onClose, setCartArr }) {
  const handleClose = () => {
    onClose(); // Call the onClose function passed as a prop
    setCartArr([]);
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay" onClick={handleClose}>
          {/* Close modal when clicking outside the modal content */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Prevent closing modal when clicking inside the modal content */}
            <span className="close-button" onClick={handleClose}>
              &times;
            </span>
            <h2>Your order has been placed!</h2>
            <p>Thank you for your purchase</p>
          </div>
        </div>
      )}
    </div>
  );
}
