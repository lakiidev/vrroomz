import React, { useCallback, useEffect, useRef } from "react";

const Cursor = () => {
  const delay = 18;

  const cursor = useRef(null);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);
  const animatecursor = useCallback(() => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    cursor.current.style.top = _y.current + "px";
    cursor.current.style.left = _x.current + "px";

    requestRef.current = requestAnimationFrame(animatecursor);
  }, []);
  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveEvent);
    animatecursor();
    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent);
      cancelAnimationFrame(requestRef.current);
    };
  }, [animatecursor]);
  const mouseMoveEvent = (e) => {
    endX.current = e.pageX;
    endY.current = e.pageY;
  };

  return <div className="cursor" ref={cursor}></div>;
};

export default Cursor;
