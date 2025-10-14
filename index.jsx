import React from 'react';
// We use Link from React Router for navigation instead of <a> tags
import { Link } from 'react-router-dom'; 
import './index.css'; // Import the CSS file

const Home = () => {
    return (
        <>
            {/* Header/Navigation Component */}
            <header className="header">
                {/* Use Link component for logo (often links to home) */}
                <Link to="/" className="logo">ITBrainBooster</Link>
                
                <nav>
                    <ul className="nav-list">
                        {/* The 'active' class is hardcoded here, 
                           but in a real app, you'd use logic 
                           like 'useLocation()' to set it dynamically. */}
                        <li className="nav-item">
                            <Link to="/" className="active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/courses">Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
                <button className="get-started-nav">Get Started</button>
            </header>

            {/* Main Hero Section */}
            <main className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to ITBrainBooster</h1>
                    <p>Your path to advancing technical knowledge and skills!</p>
                    {/* The main call-to-action button, often links to the courses page */}
                    <button className="get-started-main">Get Started</button>
                </div>
            </main>
        
            {/* Footer Component */}
            <footer className="footer">
                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} ITBrainBooster Group Project. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Home;