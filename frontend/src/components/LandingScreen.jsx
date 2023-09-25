import React from 'react';
import './LandingScreen.css';

const LandingScreen = ({ onRegister, onLogin }) => {
  return (
    <div className="landing-container">
      <img src="/logo.svg" alt="Application Logo" className="logo"/>
      <h1 className="title">Rמניש</h1>
      <br /><br />
      <button className="register-button" onClick={onRegister}>
        Registration
      </button>
      <button className="login-button" onClick={onLogin}>
        I already have an account
      </button>
    </div>
  );
};

export default LandingScreen;