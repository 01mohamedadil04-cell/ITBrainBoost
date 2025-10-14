import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 


export default function Register() {
   
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate(); 

    
    function handleSubmit(e) {
        e.preventDefault();

        
        if (!name.trim() || !email.trim()) {
            return alert('Please fill both name and email');
        }

        const user = { name: name.trim(), email: email.trim() };
        localStorage.setItem('quizUser', JSON.stringify(user));
        
        
        navigate('/subjects'); 
    }

    const handleClear = () => {
        setName('');
        setEmail('');
        localStorage.removeItem('quizUser');
    };

    return (
       
        <div 
            className="container"
            style={{
                display: 'flex',
                justifyContent: 'center', 
                alignItems: 'center',     
                minHeight: '80vh',       
                
                backgroundColor: '#9b9bcdff', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                fontFamily: 'Arial, sans-serif'
            }}
        >
            <div 
                className="register-card" 
                style={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    maxWidth: '400px', 
                    width: '90%',     
                    padding: '35px',
                    borderRadius: '18px',
                    backgroundColor: 'white', 
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)', 
                }}
            >
                <h1 
                    className="title" 
                    style={{
                        color: '#333333', 
                        marginBottom: '30px', 
                        fontSize: '32px',
                        fontWeight: 'bold'
                    }}
                >
                    Register
                </h1>

                {/* === 3. Form Structure === */}
                <form 
                    onSubmit={handleSubmit} 
                    style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '18px', // Space between inputs
                        width: '100%',
                    }}
                >
                    {/* Input - Name */}
                    <input 
                        className="input" 
                        placeholder="Your name" 
                        name="name" 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                        style={{
                            padding: '14px 18px',
                            borderRadius: '15px',
                            border: '1px solid #cccccc', // Light border
                            backgroundColor: '#ffffff',
                            color: '#333333',
                            fontSize: '16px'
                        }}
                    />
                    {/* Input - Email */}
                    <input 
                        className="input" 
                        placeholder="Your email" 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        style={{
                            padding: '14px 18px',
                            borderRadius: '15px',
                            border: '1px solid #cccccc',
                            backgroundColor: '#ffffff',
                            color: '#333333',
                            fontSize: '16px'
                        }}
                    />
                    
                    {/* Button Group (Next and Clear) */}
                    <div 
                        style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            gap: '15px', 
                            marginTop: '25px' 
                        }}
                    >
                        {/* Next Button (Primary/Submit) */}
                        <button 
                            className="btn primary" 
                            type="submit"
                            style={{
                                flex: 1, 
                                padding: '12px 20px',
                                borderRadius: '15px',
                                border: 'none',
                                backgroundColor: '#dc3545', // Red color (your desired look)
                                color: 'white',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s'
                            }}
                            onMouseOver={e => e.currentTarget.style.backgroundColor = '#c82333'}
                            onMouseOut={e => e.currentTarget.style.backgroundColor = '#dc3545'}
                        >
                            Next
                        </button>
                        {/* Clear Button (Secondary/Type="button") */}
                        <button 
                            className="btn secondary" 
                            type="button" 
                            onClick={handleClear} // handleClear function eka use kala
                            style={{
                                flex: 1, 
                                padding: '12px 20px',
                                borderRadius: '15px',
                                border: '1px solid #cccccc',
                                backgroundColor: 'transparent',
                                color: '#6c757d',
                                fontSize: '16px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s'
                            }}
                            onMouseOver={e => { e.currentTarget.style.backgroundColor = '#e9ecef'; e.currentTarget.style.color = '#333333'; }}
                            onMouseOut={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#6c757d'; }}
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
