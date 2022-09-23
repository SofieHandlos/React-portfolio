import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [active, setActive] = useState("nav-menu");

  const navToggle = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");
  };

  return (
    <nav>
      <div onClick={navToggle} className="hamburger">
        <div className="burger burger1"></div>
        <div className="burger burger2"></div>
        <div className="burger burger3"></div>
      </div>
      <div className={active}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About me</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}
