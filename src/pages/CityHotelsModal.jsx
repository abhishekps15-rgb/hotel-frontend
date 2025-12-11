import "./CityModal.css";
import { FaTimes } from "react-icons/fa";

export default function CityHotelsModal({ open, onClose, city, hotels }) {
  const BASE_URL = "http://localhost:8080";
  if (!open) return null;

  return (
    <div className="city-modal-overlay">
      <div className="city-modal-box">
        <button onClick={onClose} className="close-btn">
          <FaTimes />
        </button>

        <h2 className="modal-title">{city}</h2>

        <div className="city-hotels-grid">
          {hotels.map((hotel, i) => (
            <div key={i} className="hotel-card">
              <img
                src={`${BASE_URL}${hotel.imageUrl}`}
                alt={hotel.name}
                className="modal-image"
              />
              <h3>{hotel.name}</h3>
              <p>From {hotel.price} INR/Night</p>

              <div className="hotel-card-btns">
                <button className="visit-btn">Visit Hotel</button>
                <button className="book-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
