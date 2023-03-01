import React from "react";
import about from "../assets/aboutvrman.jpg";
import about1 from "../assets/aboutvrwoman.jpg";
import { motion } from "framer-motion";
import { textVariants, charVariants } from "../Animations";
const About = () => {
  const text =
    "Step into a world of unlimited possibilities at VR Rooms. Our cutting-edge equipment and friendly staff will guide you through immersive virtual reality experiences that you won't forget. Come and join us for the adventure of a lifetime!";
  return (
    <section className="about">
      <div className="circle">
        <h2>
          About <br /> vrroomz
        </h2>
        <div className="about-gallery">
          <img src={about} alt="" />
          <img src={about1} alt="" />
          <motion.p
            variants={textVariants}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
          >
            {text.split("").map((char, index) => {
              return (
                <motion.span key={index} variants={charVariants}>
                  {char}
                </motion.span>
              );
            })}
          </motion.p>
        </div>

        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
      </div>
    </section>
  );
};

export default About;
