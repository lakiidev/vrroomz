import React from "react";
import diveInMan from "../assets/diveinman.jpg";
import diveTogether from "../assets/divetogether.jpg";
import { motion } from "framer-motion";
import { slidein, zoomOut, fade, expandAnim } from "../Animations";
const Dive = () => {
  return (
    <section
      className="dive"
      transition={{ staggerChildren: 0.75, delayChildren: 5 }}
      whileInView={"show"}
      viewport={{ once: true, amount: 0.5 }}
      initial={"hidden"}
    >
      <div className="dive-selection">
        <div className="dive-info">
          <motion.div
            className="container"
            initial={"hidden"}
            transition={{ staggerChildren: 0.75, delayChildren: 2.25 }}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              className="dive-title"
              initial={"hidden"}
              transition={{ staggerChildren: 0.75, delayChildren: 1 }}
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div>
                <motion.h2 variants={slidein}>Dive in virtual</motion.h2>
              </div>
              <div>
                <motion.h2 variants={slidein}>reality</motion.h2>
              </div>
            </motion.div>
            <motion.p variants={fade}>
              Enjoy the new-age adventure mode cinematically realistic and
              pushing the limits of what you could ever imagine
            </motion.p>
          </motion.div>
        </div>
        <div className="dive-img">
          <motion.img
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 2.5 }}
            variants={zoomOut}
            initial="hidden"
            src={diveInMan}
            alt=""
          />
        </div>
      </div>
      <motion.div className="img" variants={expandAnim}>
        <img src={diveTogether} alt="" />
      </motion.div>
    </section>
  );
};

export default Dive;
