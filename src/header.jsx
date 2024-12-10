import React from "react";
import "./App.css";

function Header() {
  return (
    <header className="header">
    <div className="logo">
      <img
        src="./src/assets/logo.png"
        style={{ width: "150px", height: "70px" }}
      />
    </div>
    <nav className="nav">
      <a href="#home">Home</a>
      <a href="#home">About Me</a>
      <a href="#services">Services</a>
      <a href="#project">Projects</a>
      <a href="#designs">Testimonials</a>
      <a href="#designs">Contacts</a>
      <button className="btn-nav">
      <a href="#">Download CV</a>
      </button>
    </nav>
  </header>
  );
}

export default Header;
