import React, { useState } from 'react';
import './LoginScreen.css';

const LoginScreen = ({ onLogin, onBack }) => {
    const initialPhoneNumber = Array(10).fill("");
    
    const [phonenumber, setPhoneNumber] = useState(initialPhoneNumber);
    
    const handleChange = (index, value) => {
        if (/[^0-9]/.test(value)) return; // only allow digits
        const newPhoneNumber = [...phonenumber];
        newPhoneNumber[index] = value;
        setPhoneNumber(newPhoneNumber);
    };
    
    // possible function for saving and sending a phonenumber to the next login page for complete login
    // const handleLogin = () => {
    //     onLogin();
    // };
    
    return (
        <div className="login-container">
            <span onClick={onBack} className="back-arrow">{'>'}</span>
            <img src="/logo.svg" alt="Application Logo" className="logo" />
            <p className="instruction">Enter your phone number</p>
            <div className="input-group">
                {phonenumber.map((digit, index) => (
                    <React.Fragment key={index}>
                        {index === 3 && <span className="dash">-</span>}
                        <input
                            type="text"
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            maxLength="1"
                            className="input-field phone-digit-input"
                        />
                    </React.Fragment>
                ))}
            </div>
            <button onClick={onLogin} className="next-button">Next</button>
        </div>
    );
};

export default LoginScreen;