import React, { useState } from "react";
import Header from "./header.jsx";
import Homepage from "./homepage.jsx";
import Services from "./services.jsx";
import Projects from "./myprojects.jsx";
import Design from "./designs.jsx";
import Footer from "./footer.jsx";


function Container() {
  return (
    <>
    <Header/>
    <Homepage/>
    <Services/>
    <Projects/>
    <Design/>
    <Footer/>
    </>
  )
}

export default Container