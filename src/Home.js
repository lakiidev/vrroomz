import React, { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import Dive from "./components/Dive";
import About from "./components/About";
import Try from "./components/Try";
import Footer from "./components/Footer";
import Cursor from "./Cursor";
import LocomotiveScroll from "locomotive-scroll";
const Home = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      getDirection: true,
      multiplier: 0.5,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
      offset: 100,
    });
    // wait for images to load
    window.addEventListener("load", () => {
      scroll.update();
    });
    return () => scroll.destroy();
  }, []);
  return (
    <>
      <div data-scroll-container ref={containerRef}>
        <Hero data-scroll-section />
        <Dive data-scroll-section />
        <About data-scroll-section />
        <Try data-scroll-section />
        <Footer data-scroll-section />
      </div>
      <Cursor />
    </>
  );
};
export default Home;
