export const slidein = {
  hidden: {
    y: 150,
  },
  show: {
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
export const shoosh = {
  hidden: {
    x: "100%",
  },
  show: {
    x: "0",
    transition: {
      duration: 1.5,
    },
  },
};
export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
export const zoomOut = {
  hidden: {
    scale: 1.5,
  },
  show: {
    scale: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};
export const expandAnim = {
  hidden: {
    width: 0,
  },
  show: {
    height: "100%",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
