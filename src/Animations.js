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
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};
export const expandAnim = {
  hidden: {
    height: 0,
  },
  show: {
    height: "auto",

    transition: {
      duration: 10,
      ease: "easeOut",
      height: { duration: 2, ease: "easeOut" },
    },
  },
};
export const textVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.02,
      ease: "easeOut",
    },
  },
};

export const charVariants = {
  hidden: {
    y: -20,
    opacity: 0,
    scale: 2,
    filter: "blur(1px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },
};
