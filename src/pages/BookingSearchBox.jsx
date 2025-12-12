import React from "react";
import { FaTimes } from "react-icons/fa";
import "./BookingSearchBox.css";

export default function BookingSearchBox() {
  return (
    <div className="booking-box-container">
      <div className="booking-box">
        <div className="booking-row">
          {/* Location */}
          <div className="field-group">
            <label>Location</label>
            <select className="input-select">
              <option>Select Your Destination</option>
              <option>Goa</option>
              <option>Delhi</option>
              <option>Mumbai</option>
            </select>
          </div>

          {/* Hotel */}
          <div className="field-group">
            <label>Hotel</label>
            <select className="input-select">
              <option>Select Your Pride Hotel</option>
              <option>BHR Plaza</option>
              <option>BHR Resort</option>
            </select>
          </div>

          {/* Why Book Direct + Button */}
          <div className="booking-actions">
            <div className="why-book">Why Book Direct?</div>
            <button className="booking-btn">BOOK NOW</button>
            <div className="price-text">
              From <strong>6,435</strong> INR/Night
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
