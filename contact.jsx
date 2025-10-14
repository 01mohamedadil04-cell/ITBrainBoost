import React from 'react';
import { Link } from 'react-router-dom'; 

const Contact = () => {
    // --- Styles that were previously in the <style> block are converted to JS objects ---

    const contactSectionStyle = {
        padding: '120px 50px 80px 50px',
        maxWidth: '1200px',
        margin: '0 auto',
    };

    const h2Style = {
        fontSize: '48px',
        color: '#ff3333', 
        borderBottom: '2px solid #333',
        paddingBottom: '10px',
        marginBottom: '30px',
    };

    const contactContentStyle = {
        display: 'flex',
        gap: '50px',
        marginTop: '30px',
    };

    const contactFormStyle = {
        flex: 2, 
        backgroundColor: '#222',
        padding: '30px',
        borderRadius: '8px',
    };

    const formGroupStyle = {
        marginBottom: '20px',
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '8px',
        fontWeight: 'bold',
        color: '#fff',
    };

    const inputAreaStyle = {
        width: '100%',
        padding: '12px',
        border: '1px solid #444',
        borderRadius: '5px',
        backgroundColor: '#333',
        color: '#fff',
        boxSizing: 'border-box',
        fontSize: '16px',
    };
    
    const textareaStyle = {
        ...inputAreaStyle, // Inherit base input styles
        resize: 'vertical',
        minHeight: '150px',
    };

    const submitButtonStyle = {
        backgroundColor: '#ff3366', 
        color: 'white',
        padding: '15px 30px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '18px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s',
        // Note: The hover effect (.submit-button:hover) would need a CSS class or useState for true React implementation
    };

    const contactInfoStyle = {
        flex: 1, 
        padding: '30px 0',
    };

    const infoBoxStyle = {
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: '#2c2c2c',
        borderLeft: '4px solid #ff3333',
        borderRadius: '4px',
    };

    const infoBoxH4Style = {
        color: '#ff3333',
        fontSize: '20px',
        marginTop: '0',
        marginBottom: '10px',
    };
    
    // --- JSX Component Structure ---

    return (
        <>
            {/* 1. Header/Navigation Component */}
            <header className="header">
                <Link to="/" className="logo">ITBrainBooster</Link>
                <nav>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/courses">Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            {/* Set 'Contact Us' as the active link */}
                            <Link to="/contact" className="active">Contact Us</Link> 
                        </li>
                    </ul>
                </nav>
                <button className="get-started-nav">Get Started</button>
            </header>

            {/* 2. Main Content - Contact Us Section */}
            <main style={contactSectionStyle}>
                <h2 style={h2Style}>Get in Touch</h2>
                <p style={{ fontSize: '18px', color: '#ff8888' }}>
                    We're here to answer your questions about courses, enrollment, and technical knowledge. Send us a message!
                </p>
                
                <div style={contactContentStyle}>
                    {/* Contact Form */}
                    <div style={contactFormStyle}>
                        {/* Note: In a real React app, you would use state management for form inputs */}
                        <form action="#" method="POST">
                            <div style={formGroupStyle}>
                                <label htmlFor="name" style={labelStyle}>Your Name</label>
                                <input type="text" id="name" name="name" style={inputAreaStyle} required />
                            </div>
                            <div style={formGroupStyle}>
                                <label htmlFor="email" style={labelStyle}>Your Email</label>
                                <input type="email" id="email" name="email" style={inputAreaStyle} required />
                            </div>
                            <div style={formGroupStyle}>
                                <label htmlFor="subject" style={labelStyle}>Subject</label>
                                <input type="text" id="subject" name="subject" style={inputAreaStyle} required />
                            </div>
                            <div style={formGroupStyle}>
                                <label htmlFor="message" style={labelStyle}>Message</label>
                                <textarea id="message" name="message" style={textareaStyle} required></textarea>
                            </div>
                            <button type="submit" style={submitButtonStyle} className="submit-button">
                                Send Message
                            </button>
                        </form>
                    </div>
                    
                    {/* Contact Information */}
                    <div style={contactInfoStyle}>
                        <div style={infoBoxStyle}>
                            <h4 style={infoBoxH4Style}>Email Us</h4>
                            <p style={{ margin: '5px 0', color: '#cccccc' }}>For general inquiries:</p>
                            <p>
                                <a href="mailto:info@itbrainbooster.com" style={{ color: '#ff8888', textDecoration: 'none' }}>info@itbrainbooster.com</a>
                            </p>
                            <p style={{ margin: '5px 0', color: '#cccccc' }}>For course support:</p>
                            <p>
                                <a href="mailto:support@itbrainbooster.com" style={{ color: '#ff8888', textDecoration: 'none' }}>support@itbrainbooster.com</a>
                            </p>
                        </div>

                        <div style={infoBoxStyle}>
                            <h4 style={infoBoxH4Style}>Call Us</h4>
                            <p style={{ margin: '5px 0', color: '#cccccc' }}>Phone (General): **+94 11 234 5678**</p>
                            <p style={{ margin: '5px 0', color: '#cccccc' }}>Mobile (Support): **+94 77 123 4567**</p>
                        </div>

                        <div style={infoBoxStyle}>
                            <h4 style={infoBoxH4Style}>Our Location</h4>
                            <p style={{ margin: '5px 0', color: '#cccccc' }}>ITBrainBooster Headquarters,</p>
                            <p style={{ margin: '5px 0', color: '#cccccc' }}>123 Baththaramulla,</p>
                            <p style={{ margin: '5px 0', color: '#cccccc' }}>Colombo 05, Sri Lanka</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Contact;