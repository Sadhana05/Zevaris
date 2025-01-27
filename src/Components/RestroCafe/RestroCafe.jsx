import React, { useState } from "react";
import "./RestroCafe.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    type: "",
    date: "",
    timeSlot: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed: ${formData.type} on ${formData.date} for ${formData.guests} guest(s) at ${formData.timeSlot}.`);
    setFormData({ type: "", date: "", timeSlot: "", guests: 1 });
  };

  return (
    <div className="booking-container">
      <h2>Restaurant & Cafe Booking</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        
        <div className="form-group">
          <label>Choose Type:</label>
          <select name="type" value={formData.type} onChange={handleChange} required>
            <option value="">Select an option</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Cafe">Cafe</option>
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
          <select name="timeSlot" value={formData.timeSlot} onChange={handleChange} required>
            <option value="">Select a slot</option>
            <option value="12 PM - 2 PM">12 PM - 2 PM</option>
            <option value="3 PM - 5 PM">3 PM - 5 PM</option>
            <option value="7 PM - 9 PM">7 PM - 9 PM</option>
            <option value="9 PM - 11 PM">9 PM - 11 PM</option>
          </select>
        </div>

        <div className="form-group">
          <label>Number of Guests:</label>
          <input
            type="number"
            name="guests"
            min="1"
            max="20"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
