import React, { useEffect, useState } from "react";
import "../styles/Login.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const validUsername = "2314067";
    const validPassword = "1234567";

    if (username === validUsername && password === validPassword) {
      setMessage("Login successful!");
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      setTimeout(() => {
        window.location.href = "/"; // Change this to your home page URL
      }, 1000);
    } else {
      setMessage("Invalid username or password.");
    }
  };
  
  return (
    <>
      <div class="login">
        <div class="login-container">
          <h1>GNDEC: Login Portal</h1>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button className="login_btn" type="submit">
            Sign in
            </button>
          </form>
          <p style={{ color: isLoggedIn ? "green" : "red" }}>{message}</p>
        </div>
      </div>
      <div class="footer_container">
        <a href="#">
          <span>Forgot / Lost College login ID password :</span>Click here to
          recover your password.
        </a>
        <a href="#">
          <span>
            Discrepancy Correction Proforma for Student record updation :
          </span>
          Click here to download
        </a>
        <div class="contact-info">
          <h3>
            In case you do not have Username / Password, Kindly Contact the
            following:
          </h3>
          <p>
            1. For B.Tech./ MBA / MCA / BBA / BCA - Contact their Respective
            Departments.
          </p>
          <p>2. For M.Tech. - Contact to Academic Branch (M.Tech. Clerk).</p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
