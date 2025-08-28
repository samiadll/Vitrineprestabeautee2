import React, { useState, useEffect } from "react";
import "./style.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // applique le mode sombre sur le body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="App">
      {/* ===== HEADER ===== */}
      <header className="header">
        <div className="logo">
          <img src="/banniere.png" alt="Logo" />
          <h1>Mon Institut</h1>
        </div>
        <nav>
          <a href="#services">Services</a>
          <a href="#booking">Réservation</a>
          <a href="#reviews">Avis</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero">
        <h2>Bienvenue chez [Votre Nom]</h2>
        <p>
          Découvrez une expérience unique et élégante, pensée pour mettre en
          valeur votre beauté et votre bien-être.
        </p>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="services">
        <h2>Nos Services</h2>
        <div className="cards">
          <div className="card">
            <img src="/3.png" alt="Service 1" />
            <h3>Soin Visage</h3>
            <p>Un soin complet pour sublimer votre peau.</p>
          </div>
          <div className="card">
            <img src="/2.png" alt="Service 2" />
            <h3>Manucure</h3>
            <p>Des mains élégantes et soignées.</p>
          </div>
          <div className="card">
            <img src="/4.png" alt="Service 3" />
            <h3>BrowLift</h3>
            <p>Des sourcils parfait pour habiller votre regard</p>
          </div>
        </div>
      </section>

      {/* ===== BOOKING ===== */}
      <section id="booking" className="booking">
        <h2>Réservez votre rendez-vous</h2>
        <form>
          <input type="text" placeholder="Votre Nom" required />
          <input type="email" placeholder="Votre Email" required />
          <select required>
            <option value="">Choisir un service</option>
            <option value="visage">Soin Visage</option>
            <option value="manucure">Manucure</option>
            <option value="massage">BrowLift</option>
          </select>
          <textarea placeholder="Vos préférences..." />
          <button type="submit">Envoyer</button>
        </form>
      </section>

      {/* ===== REVIEWS ===== */}
      <section id="reviews" className="reviews">
        <h2>Ils nous recommandent</h2>
        <div className="review-gallery">
          <img src="/cliente2.png" alt="Review 1" />
          <img src="/cliente3.png" alt="Review 2" />
          <img src="/banniere.png" alt="Review 3" />
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Email : contact@institut.com</p>
        <p>Téléphone : 01 23 45 67 89</p>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <p>© 2024 Mon Institut - Tous droits réservés</p>
      </footer>
    </div>
  );
}

export default App;
