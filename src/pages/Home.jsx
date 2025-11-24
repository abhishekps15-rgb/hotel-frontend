import React from "react";
import TopBar from "../components/TopBar";
import HeaderBar from "../components/HeaderBar";

const HERO_IMG = "/assets/hero2.png";

export default function Home() {
  return (
    <div className="page-home">
      {/* MAROON TOP CONTACT STRIP */}
      <TopBar />

      {/* WHITE NAVBAR BELOW TOP BAR */}
      <HeaderBar />

      {/* HERO */}
      <section className="hero-full">
        <img src={HERO_IMG} className="hero-bg" />

        <div className="hero-overlay">

          {/* LEFT CONTENT */}
          <div className="hero-left">
            <h1 className="hero-title">Experience Luxury Stays Across India</h1>
            <p className="hero-sub">Book directly for best prices, instant confirmation & premium offers.</p>

            <div className="search-row">
              <input placeholder="City or Landmark" />
              <input type="date" />
              <input type="date" />
              <button>BOOK NOW</button>
            </div>

            <small>Need help? Call us: <strong>1800 209 1400</strong></small>
          </div>

          {/* RIGHT PROMO CARD */}
          <div className="promo-card">
            <h3>Promocode: WWP</h3>
            <p>Save up to 20% on selected stays</p>
            <a className="promo-btn" href="/hotels">Explore Hotels</a>
          </div>

        </div>
      </section>

    </div>
  );
}
