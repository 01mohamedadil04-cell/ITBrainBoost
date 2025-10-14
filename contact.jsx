import React from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div className="contact-page">
      {/* Header */}
      <header className="header">
        <div className="logo">ITBrainBooster</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/subjects">Courses</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact" className="active">Contact Us</Link></li>
          </ul>
        </nav>
        <Link to="/register">
          <button className="get-started-nav">Get Started</button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="contact-section">
        <h2>Get in Touch</h2>
        <p style={{ fontSize: "18px", color: "#ff8888" }}>
          We're here to answer your questions about courses, enrollment, and technical knowledge.
        </p>

        <div className="contact-content">
          <div className="contact-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-box">
              <h4>Email Us</h4>
              <p>General: <a href="mailto:info@itbrainbooster.com">info@itbrainbooster.com</a></p>
              <p>Support: <a href="mailto:support@itbrainbooster.com">support@itbrainbooster.com</a></p>
            </div>
            <div className="info-box">
              <h4>Call Us</h4>
              <p>Phone: +94 11 234 5678</p>
              <p>Mobile: +94 77 123 4567</p>
            </div>
            <div className="info-box">
              <h4>Location</h4>
              <p>ITBrainBooster HQ</p>
              <p>123 Baththaramulla, Colombo 05, Sri Lanka</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
