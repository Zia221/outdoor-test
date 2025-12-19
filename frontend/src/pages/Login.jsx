import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import snipperimg from "../assets/snipperimg.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const validEmail = "admin@gmail.com";
    const validPassword = "786";

    if (email === validEmail && password === validPassword) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    } else {
      alert("Invalid Email or Password");
      setPassword("");
    }
  };

  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${snipperimg})` }}
    >
      {/* Dark overlay */}
      <div className="login-overlay"></div>

      {/* Main content */}
      <div className="login-content">
        {/* Title */}
        <h1 className="app-title">Shooting Profiling System</h1>

        {/* Login Box */}
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
