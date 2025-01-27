import React, { useState } from "react";
import "./Juniorsuitebook.css";

const Juniorsuitebook = () => {
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");

  const rooms = [
    { id: 1, name: "Junior Suite", price: "$120/night" },
  ];

  const paymentMethods = ["Credit Card", "Debit Card", "PayPal", "UPI"];

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setStep(2);
  };

  const handleInputChange = (e) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentSelect = (method) => {
    setPaymentMethod(method);
  };

  const handleConfirmBooking = () => {
    if (!bookingDetails.name || !bookingDetails.email || !bookingDetails.checkInDate || !bookingDetails.checkOutDate) {
      alert("Please fill in all booking details.");
      return;
    }
    alert(`Booking confirmed!\nRoom: ${selectedRoom.name}\nName: ${bookingDetails.name}\nEmail: ${bookingDetails.email}\nPayment: ${paymentMethod}`);
  };

  return (
    <div className="booking-container">
      <h2>Hotel Room Booking</h2>

      {/* Step 1: Select Room */}
      {step === 1 && (
        <div className="room-selection">
          <h3>Select a Room</h3>
          <div className="room-list">
            {rooms.map((room) => (
              <div
                key={room.id}
                className={`room-card ${selectedRoom?.id === room.id ? "selected" : ""}`}
                onClick={() => handleRoomSelect(room)}
              >
                <h4>{room.name}</h4>
                <p>{room.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Enter Booking Details */}
      {step === 2 && (
        <div className="booking-form">
          <h3>Enter Booking Details</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={bookingDetails.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={bookingDetails.email}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="checkInDate"
            value={bookingDetails.checkInDate}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="checkOutDate"
            value={bookingDetails.checkOutDate}
            onChange={handleInputChange}
          />
          <button onClick={() => setStep(3)}>Proceed</button>
        </div>
      )}

      {/* Step 3: Select Payment Method */}
      {step === 3 && (
        <div className="payment-selection">
          <h3>Select a Payment Method</h3>
          <div className="payment-options">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className={`payment-card ${paymentMethod === method ? "selected" : ""}`}
                onClick={() => handlePaymentSelect(method)}
              >
                {method}
              </div>
            ))}
          </div>
          <button className="confirm-btn" onClick={handleConfirmBooking} disabled={!paymentMethod}>
            Confirm
          </button>
        </div>
      )}

      {selectedRoom && step >= 2 && (
        <div className="selected-info">
          <h3>Selected Room:</h3>
          <p><strong>{selectedRoom.name}</strong> - {selectedRoom.price}</p>
        </div>
      )}
    </div>
  );
};

export default Juniorsuitebook;
