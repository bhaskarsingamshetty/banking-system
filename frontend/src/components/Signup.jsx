import React, { useState } from 'react';
import { callApi } from '../api';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate

const Signup = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate(); // ✅ Initialize navigate

  const getResponse = (res) => {
    alert(res); // ✅ Show response
    navigate('/'); // ✅ Redirect to Login page (adjust path if your login route is different)
  };

  const userRegistration = (e) => {
    e.preventDefault();

    // Password match validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Prepare JSON payload
    const data = JSON.stringify({
      name: userName,
      email: email,
      phone: phone,
      password: password
    });

    // API Call
    callApi("POST", "http://localhost:8081/api/users", data, getResponse);
  };

  return (
    <div className="loginbox">
      <h1 className="loginheading">Trust One Bank</h1>
      <form onSubmit={userRegistration} className="entryform">
        <h2 className="loginheading">Signup</h2>

        <input
          type="text"
          placeholder="User Name"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="entryuserinput"
        />

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="entryuserinput"
        />

        <input
          type="text"
          placeholder="Phone Number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="entryuserinput"
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="entrypasswordinput"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="entrypasswordinput"
        />

        <button className="entrybutton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
