import React, { useState } from "react";
import "./RestroCafe.css";

const RestroCafe = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    timeSlot: "",
    guests: 1,
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step === 1 && formData.name && formData.date && formData.timeSlot && formData.guests) {
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
      date: "",
      timeSlot: "",
      guests: 1,
      cardName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    });
    setStep(1);
  };

  return (
    <div className="booking-container">
      <h2>Restro & Cafe Booking</h2>

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
              <option value="">Select a slot</option>
              <option value="Breakfast (8 AM - 10 AM)">Breakfast (8 AM - 10 AM)</option>
              <option value="Lunch (12 PM - 2 PM)">Lunch (12 PM - 2 PM)</option>
              <option value="Dinner (7 PM - 9 PM)">Dinner (7 PM - 9 PM)</option>
            </select>
          </div>

          <div className="form-group">
            <label>Number of Guests:</label>
            <input
              type="number"
              name="guests"
              min="1"
              max="10"
              value={formData.guests}
              onChange={handleChange}
              required
            />
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
          <p><strong>Date:</strong> {formData.date}</p>
          <p><strong>Time Slot:</strong> {formData.timeSlot}</p>
          <p><strong>Number of Guests:</strong> {formData.guests}</p>
          <p><strong>Cardholder:</strong> {formData.cardName}</p>

          <button onClick={handleBack} className="btn-back">Back</button>
          <button onClick={handleConfirm} className="btn-confirm">Confirm Booking</button>
        </div>
      )}
    </div>
  );
};

export default RestroCafe;

