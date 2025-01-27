import React, { useState } from "react";
import "./Swimmingpool.css";

const SwimmingPoolBooking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: "",
    timeSlot: "",
    people: 1,
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step === 1 && formData.date && formData.timeSlot && formData.people) {
      setStep(2);
    } else if (step === 2 && formData.cardName && formData.cardNumber && formData.expiryDate && formData.cvv) {
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
      date: "",
      timeSlot: "",
      people: 1,
      cardName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    });
    setStep(1);
  };

  return (
    <div className="booking-container">
      <h2>Swimming Pool Booking</h2>

      {step === 1 && (
        <div className="booking-form">
          <h3>Select Booking Details</h3>
          <div className="form-group">
            <label>Select Date:</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Time Slot:</label>
            <select name="timeSlot" value={formData.timeSlot} onChange={handleChange} required>
              <option value="">Select a slot</option>
              <option value="6 AM - 8 AM">6 AM - 8 AM</option>
              <option value="10 AM - 12 PM">10 AM - 12 PM</option>
              <option value="4 PM - 6 PM">4 PM - 6 PM</option>
            </select>
          </div>

          <div className="form-group">
            <label>Number of People:</label>
            <input type="number" name="people" min="1" max="10" value={formData.people} onChange={handleChange} required />
          </div>

          <button onClick={handleNext} className="btn-next">Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="payment-form">
          <h3> Payment Details</h3>
          <div className="form-group">
            <label>Cardholder Name:</label>
            <input type="text" name="cardName" value={formData.cardName} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Card Number:</label>
            <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Expiry Date:</label>
            <input type="month" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>CVV:</label>
            <input type="password" name="cvv" value={formData.cvv} onChange={handleChange} required />
          </div>

          <button onClick={handleBack} className="btn-back">Back</button>
          <button onClick={handleNext} className="btn-next">Next</button>
        </div>
      )}

      {step === 3 && (
        <div className="confirmation">
          <h3>Confirm Booking</h3>
          <p><strong>Date:</strong> {formData.date}</p>
          <p><strong>Time Slot:</strong> {formData.timeSlot}</p>
          <p><strong>Number of People:</strong> {formData.people}</p>
          <p><strong>Cardholder:</strong> {formData.cardName}</p>

          <button onClick={handleBack} className="btn-back">Back</button>
          <button onClick={handleConfirm} className="btn-confirm">Confirm Booking</button>
        </div>
      )}
    </div>
  );
};

export default SwimmingPoolBooking;
