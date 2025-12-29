import { useState } from "react";
import { registerUser } from "../api/auth";
import { useNavigate } from "react-router-dom";


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleRegister = async () => {
    const data = await registerUser({ name, email, password });
    alert(data.message);
    navigate("/");

  };

  return (
    <div className="auth-container">
      <h2>Register</h2>

      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

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

      <button onClick={handleRegister}>Register</button>

      <p>
        Already have an account? <span onClick={() => navigate("/")}>Login</span>

      </p>
    </div>
  );
}

export default Register;
