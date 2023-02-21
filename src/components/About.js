import React from "react";
import about from "../assets/aboutvrman.jpg";
import about1 from "../assets/aboutvrwoman.jpg";
const About = () => {
  return (
    <section className="about">
      <div className="circle">
        <h2>
          About <br /> vrroomz
        </h2>
        <div className="about-gallery">
          <img src={about} alt="" />
          <img src={about1} alt="" />
          <p>
            Step into a world of unlimited possibilities at VR Rooms. Our
            cutting-edge equipment and friendly staff will guide you through
            immersive virtual reality experiences that you won't forget. Come
            and join us for the adventure of a lifetime!
          </p>
        </div>

        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
      </div>
    </section>
  );
};

export default About;
