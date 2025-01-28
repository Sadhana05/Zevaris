import React, { useState } from "react";
import "./Gymsport.css";

const GymSport = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    membershipType: "",
    date: "",
    timeSlot: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (
      step === 1 &&
      formData.name &&
      formData.membershipType &&
      formData.date &&
      formData.timeSlot
    ) {
      setStep(2);
    } else if (
      step === 2 &&
      formData.cardName &&
      formData.cardNumber &&
      formData.expiryDate &&
      formData.cvv
    ) {
      setStep(3);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleConfirm = () => {
    alert("Booking Confirmed!");
    setFormData({
      name: "",
      membershipType: "",
      date: "",
      timeSlot: "",
      cardName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    });
    setStep(1);
  };

  return (
    <div className="booking-container">
      <h2>Gym & Sports Booking</h2>

      {step === 1 && (
        <div className="booking-form">
          <h3>Booking Details</h3>
          <div className="form-group">
            <label>Your Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Membership Type:</label>
            <select
              name="membershipType"
              value={formData.membershipType}
              onChange={handleChange}
              required
            >
              <option value="">Select Membership</option>
              <option value="Gym Only">Gym Only</option>
              <option value="Sports Only">Sports Only</option>
              <option value="Gym & Sports Combo">Gym & Sports Combo</option>
            </select>
          </div>

          <div className="form-group">
            <label>Select Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Time Slot:</label>
            <select
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleChange}
              required
            >
              <option value="">Select a Time Slot</option>
              <option value="Morning (6 AM - 9 AM)">Morning (6 AM - 9 AM)</option>
              <option value="Afternoon (12 PM - 3 PM)">Afternoon (12 PM - 3 PM)</option>
              <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
            </select>
          </div>

          <button onClick={handleNext} className="btn-next">Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="payment-form">
          <h3>Payment Details</h3>
          <div className="form-group">
            <label>Cardholder Name:</label>
            <input
              type="text"
              name="cardName"
              value={formData.cardName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Card Number:</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Expiry Date:</label>
            <input
              type="month"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>CVV:</label>
            <input
              type="password"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </div>

          <button onClick={handleBack} className="btn-back">Back</button>
          <button onClick={handleNext} className="btn-next">Next</button>
        </div>
      )}

      {step === 3 && (
        <div className="confirmation">
          <h3>Confirm Booking</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Membership Type:</strong> {formData.membershipType}</p>
          <p><strong>Date:</strong> {formData.date}</p>
          <p><strong>Time Slot:</strong> {formData.timeSlot}</p>
          <p><strong>Cardholder:</strong> {formData.cardName}</p>

          <button onClick={handleBack} className="btn-back">Back</button>
          <button onClick={handleConfirm} className="btn-confirm">Confirm Booking</button>
        </div>
      )}
    </div>
  );
};

export default GymSport;
