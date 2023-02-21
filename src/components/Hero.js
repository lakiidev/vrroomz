import React from "react";
import Nav from "./Nav";
import heroVideo from "../assets/hero.mp4";
import arrow from "../assets/arrow.svg";
import { motion } from "framer-motion";
import { slidein, shoosh, fade } from "../Animations";
const Hero = () => {
  return (
    <section className="hero">
      <Nav />
      <hr />

      <motion.div
        className="hero-grid"
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.75, delayChildren: 0.5 }}
      >
        <motion.div
          className="hero-title"
          transition={{ staggerChildren: 0.75 }}
        >
          <div>
            <motion.h1 variants={slidein}>Virtual</motion.h1>
          </div>
          <div>
            <motion.h1 variants={slidein}>means</motion.h1>
          </div>
          <div>
            <motion.h1 variants={slidein}>real</motion.h1>
          </div>
        </motion.div>

        <motion.div
          className="video"
          variants={shoosh}
          transition={{ delay: 2 }}
        >
          <video muted autoPlay loop>
            <source src={heroVideo} type="video/mp4" />
          </video>
        </motion.div>
        <motion.div className="learn-more" variants={fade}>
          <p>Welcome to he diversity of awesome virtual worlds</p>
          <div className="show">
            <a href="#/">Show me how</a>
            <img src={arrow} alt="" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
