import { useState } from "react";
import Logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="Navbar">
      <NavLink to="/">
        <img className="nav-logo" src={Logo} alt="logo"></img>
      </NavLink>
      <div className={`nav-items ${isOpen && "open"}`}>
        <NavLink to="/projects">Portfolio</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Nav;
