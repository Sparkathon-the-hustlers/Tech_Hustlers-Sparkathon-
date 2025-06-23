import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo,setPhoneNo] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('signup attempt with:', { firstName,lastName,email,phoneNo, password });
    alert('signup functionality to be implemented!');
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="input-name">
            <div className="form-group">
            <label htmlFor="first-name">First Name:</label>
            <input
                type="text"
                id="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
            </div>
            <div className="form-group">
            <label htmlFor="last-name">Last Name:</label>
            <input
                type="text"
                id="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
            />
        </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone-no">Phone No:</label>
          <input
            type="tel"
            id="phone-no"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
        <p className="create-account">Already have an account? <Link to="/signin">Sign In</Link></p>
      </form>
    </div>
  );
};

export default Signup;