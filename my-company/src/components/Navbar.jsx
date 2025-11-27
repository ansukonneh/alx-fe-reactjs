import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between", 
        alignItems: "center",
        padding: "15px",
        backgroundColor: "#222",
        color: "white"
      }}
    >
      <h2 style={{ margin: 0 }}>My Company</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center", 
          gap: "20px"
        }}
      >
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          Home
        </Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/about">
          About
        </Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/services">
          Services
        </Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
