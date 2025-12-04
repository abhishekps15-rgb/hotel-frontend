import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HeaderBar() {
  const navigate = useNavigate();
  const [hotelOpen, setHotelOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setHotelOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFindToggle = (e) => {
    e.preventDefault();
    setHotelOpen((prev) => !prev);
  };

  const handleViewAll = () => {
    setHotelOpen(false);
    navigate("/hotels");
  };

  return (
    <div className="header-bar">
      <div className="header-inner">
        <div className="brand-wrapper">
          <img
            src="/assets/hotel-logo.jpeg"
            alt="Pride logo"
            className="brand-logo"
          />
        </div>

        <nav className="main-nav" aria-label="Main navigation" ref={dropdownRef}>
          <ul>
            {/* FIND YOUR HOTEL WITH DROPDOWN */}
            <li className={`nav-item has-dropdown ${hotelOpen ? "open" : ""}`}>
              <button
                className="nav-link dropdown-toggle"
                onClick={handleFindToggle}
                aria-haspopup="true"
                aria-expanded={hotelOpen}
              >
                Find Your Hotel ▾
              </button>

              {hotelOpen && (
                <div className="hotel-dropdown" role="menu">
                  <div className="hotel-dropdown-header">
                    Popular Destinations
                  </div>
                  <div className="hotel-dropdown-list">
                    <Link to="/hotels/mumbai" onClick={() => setHotelOpen(false)}>
                      Mumbai
                    </Link>
                    <Link to="/hotels/delhi" onClick={() => setHotelOpen(false)}>
                      Delhi
                    </Link>
                    <Link to="/hotels/bangalore" onClick={() => setHotelOpen(false)}>
                      Bengaluru
                    </Link>
                    <Link to="/hotels/hyderabad" onClick={() => setHotelOpen(false)}>
                      Hyderabad
                    </Link>
                    <Link to="/hotels/goa" onClick={() => setHotelOpen(false)}>
                      Goa
                    </Link>
                    <Link to="/hotels/jaipur" onClick={() => setHotelOpen(false)}>
                      Jaipur
                    </Link>
                  </div>
                  <button className="hotel-dropdown-all" onClick={handleViewAll}>
                    View all hotels →
                  </button>
                </div>
              )}
            </li>

            <li>
              <Link to="/hotels">Our Hotels</Link>
            </li>
            <li>
              <Link to="/offers">Offers</Link>
            </li>
            <li>
              <Link to="/weddings">Weddings</Link>
            </li>
            <li>
              <Link to="/events">Plan Your Events</Link>
            </li>
            <li>
              <Link to="/dining">Dining</Link>
            </li>
            <li>
              <Link to="/news">Media & News</Link>
            </li>
            <li>
              <Link to="/partners">Partner With Us</Link>
            </li>
          </ul>
        </nav>

        <div className="header-cta">
          <button className="book-now">BOOK NOW</button>
        </div>
      </div>
    </div>
  );
}
