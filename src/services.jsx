import React, { useState } from "react";


function Services() {
  
  const [services] = useState([
    {
      id: 1,
      img: "./src/assets/V1.png",
      title: "UI/UX",
      description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
    },
    {
      id: 2,
      img: "./src/assets/V2.png",
      title: "Web Design",
      description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      id: 3,
      img: "./src/assets/V3.png",
      title: "App Design",
      description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      id: 4,
      img: "./src/assets/V4.png",
      title: "Graphic Design",
      description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
  ]);

  return (
    <div id="services" className="services-section">
      <h2>Services</h2>
      <p className="pp">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
        Aliquet donec morbi convallis pretium.
      </p>
      <div className="services-container">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <img src={service.img}/>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services;
