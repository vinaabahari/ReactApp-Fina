import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div id="footer" className="text-center py-4">
        <img className="img-foot"src="./src/assets/logo.png"></img>
        <nav className="nav-foot">
          <ul className="list-unstyled d-flex justify-content-center gap-4 nav-foot">
            <li><a href="#home" className="text-decoration-none text-dark">Home</a></li>
            <li><a href="#home" className="text-decoration-none text-dark">About Me</a></li>
            <li><a href="#services" className="text-decoration-none text-dark">Services</a></li>
            <li><a href="#project" className="text-decoration-none text-dark">Projects</a></li>
            <li><a href="#designs" className="text-decoration-none text-dark">Testimonials</a></li>
            <li><a href="#designs" className="text-decoration-none text-dark">Contact</a></li>
          </ul>
        </nav>
        <div className=" d-flex justify-content-center gap-3 i-container">
          <a href="#" className="text-dark"><FaTwitter size={24} /></a>
          <a href="#" className="text-dark"><FaFacebook size={24} /></a>
          <a href="#" className="text-dark"><FaInstagram size={24} /></a>
          <a href="#" className="text-dark"><FaLinkedin size={24} /></a>
        </div>
      </div>
      <div className="bg-dark text-center text-light py-3">
        <p className="mb-0">
          © 2023 <span className="fw-bold text-warning">FawziUiUx</span> All Rights Reserved, Inc
        </p>
      </div>
    </footer>
  );
}

export default Footer;
