import { useState } from "react";
import { loginUser } from "../api/auth";
import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const data = await loginUser({ email, password });

    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login successful");
      navigate("/feed");

    } else {
      alert(data.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p>
        Don’t have an account? <span onClick={() => navigate("/register")}>Register</span>

      </p>
    </div>
  );
}

export default Login;
