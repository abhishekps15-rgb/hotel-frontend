import React from "react";

export default function ExitOfferModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="offer-overlay">
      <div className="offer-modal">

        {/* CLOSE BUTTON */}
        <button className="offer-close" onClick={onClose}>✕</button>

        {/* LEFT SIDE IMAGE */}
        <div className="offer-left">
          <img src="/assets/g1.png" alt="Exclusive Offer" />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="offer-right">
          <h3 className="offer-heading-small">LEAVING SO SOON?</h3>
          <h1 className="offer-heading-large">AVAIL EXCLUSIVE<br />OFFERS</h1>

          <div className="offer-divider"></div>

          <div className="offer-benefits">
            <div className="benefit">
              <span className="benefit-icon">💰</span>
              <p>Enjoy Savings on<br />Room Rates</p>
            </div>

            <div className="benefit">
              <span className="benefit-icon">🍽️</span>
              <p>Avail Offers across<br />Restaurants</p>
            </div>

            <div className="benefit">
              <span className="benefit-icon">💆</span>
              <p>Special Savings<br />on Spas</p>
            </div>
          </div>

          {/* GOLD CTA BUTTON */}
          <button className="offer-cta">VIEW OFFERS</button>

          <a className="offer-login" href="/login">
            LOGIN / JOIN →
          </a>
        </div>
      </div>
    </div>
  );
}
