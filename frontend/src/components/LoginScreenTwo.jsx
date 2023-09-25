import React from 'react';
import './LoginScreen.css';

const LoginScreen = ({ onLogin, onBack }) => {
    
    return (
        <div className="login-container">
            <span onClick={onBack} className="back-arrow">{'>'}</span>
            <img src="/logo.svg" alt="Application Logo" className="logo" />
            <p className="text">Application is under construction. Please try in few more days.</p>
        </div>
    );
};

export default LoginScreen;