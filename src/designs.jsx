import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Design() {
  return (
    <div id="designs" className="services-section text-center py-5" style={{ backgroundColor: "#fdf2e9" }}>
      <h2 className="fw-bold design-title ">Lets Design Together</h2>
      <p className="text-muted mx-auto text-d" style={{ maxWidth: "600px" }}>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
        Aliquet donec morbi convallis pretium.
      </p>
      <div className="d-flex justify-content-center align-items-center mt-4 input-container">
        <input
          type="email"
          className="form-control me-3 form-design"
          placeholder="Enter Your Email"
          style={{ maxWidth: "400px" }}
        />
        <button className="btn-c">Contact Me</button>
      </div>
    </div>
  );
}

export default Design;
