import React from "react";
import "./App.css";

function Projects() {
  const projects = [
    { id: 1, title: "AirCalling Landing Page Design", category: "Web Design", image: "./src/assets/W1.png" },
    { id: 2, title: "Business Landing Page Design", category: "Web Design", image: "./src/assets/W2.png" },
    { id: 3, title: "Ecom Web Page Design", category: "Web Design", image: "./src/assets/W3.png" }
  ];

  return (
    <div id="project" className="projects-section">
      <h2>My Projects</h2>
      <p>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus.</p>

      <div className="filter-buttons">
        <button className="f-btn">All</button>
        <button className="f-btn">UI/UX</button>
        <button className="ff-btn">Web Design</button>
        <button className="f-btn">App Design</button>
        <button className="f-btn">Graphic Design</button>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
            <p>{project.category}</p>
              <h5 className="p-title">{project.title}</h5>
              <button className="detail-button">Detail</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
