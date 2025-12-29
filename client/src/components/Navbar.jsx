import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const getUserFromStorage = () => {
  try {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  } catch {
    return null;
  }
};


const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(getUserFromStorage());

  useEffect(() => {
    const syncUser = () => {
      setUser(getUserFromStorage());
    };

    window.addEventListener("storage", syncUser);
    syncUser();

    return () => window.removeEventListener("storage", syncUser);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>MindConnect</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {user ? (
          <>
            <span style={{ marginLeft: "15px", fontWeight: "bold" }}>
              Hi, {user.name}
            </span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
