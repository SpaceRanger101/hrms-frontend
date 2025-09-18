import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import "../index.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "Chrispin" && password === "gondwe") {
      onLogin(username);
      navigate("/dashboard", { replace: true });
    } else {
      alert("Invalid credentials — try Chrispin / gondwe");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className={`login-card ${animate ? "login-card-animate" : ""}`}>
        <FaUserShield className="text-indigo-900 text-6xl mx-auto mb-4" />
        <h2>Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p className="note">Use Username: Chrispin | Password: gondwe</p>
      </form>
    </div>
  );
};

export default Login;
