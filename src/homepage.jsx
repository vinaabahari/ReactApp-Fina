import React from 'react'
import "font-awesome/css/font-awesome.min.css";

function Homepage() {
  return (
    <div id='home' className="cont">
    <div className="hero-text">
      <p className='hi'>Hi I am <br/><span>Fawzi Sayed</span></p>
      <h1>Website<br/> Developer</h1>
      <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.</p>
      <button className="btn">Hire Me</button>
    </div>
    <div className="hero-image">
      <img src="./src/assets/profile.png" alt="Profile" />
    <div className="social-icons">
      <a href="#"><i className="fa fa-facebook"></i></a>
      <a href="#"><i className="fa fa-twitter"></i></a>
      <a href="#"><i className="fa fa-instagram"></i></a>
      <a href="#"><i className="fa fa-linkedin"></i></a>
    </div>
    </div>
    </div>
  )
}

export default Homepage;