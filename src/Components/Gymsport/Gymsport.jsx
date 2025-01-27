import React, { useState } from "react";
import "./Gymsport.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    activity: "",
    date: "",
    timeSlot: "",
    participants: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed: ${formData.activity} on ${formData.date} for ${formData.participants} participant(s) at ${formData.timeSlot}.`);
    setFormData({ activity: "", date: "", timeSlot: "", participants: 1 });
  };

  return (
    <div className="booking-container">
      <h2>Gym & Sports Booking</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        
        <div className="form-group">
          <label>Select Activity:</label>
          <select name="activity" value={formData.activity} onChange={handleChange} required>
            <option value="">Choose an option</option>
            <option value="Gym">Gym</option>
            <option value="Basketball">Basketball</option>
            <option value="Tennis">Tennis</option>
            <option value="Football">Football</option>
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
            <option value="6 AM - 7 AM">6 AM - 7 AM</option>
            <option value="7 AM - 8 AM">7 AM - 8 AM</option>
            <option value="5 PM - 6 PM">5 PM - 6 PM</option>
            <option value="6 PM - 7 PM">6 PM - 7 PM</option>
          </select>
        </div>

        <div className="form-group">
          <label>Number of Participants:</label>
          <input
            type="number"
            name="participants"
            min="1"
            max="20"
            value={formData.participants}
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
