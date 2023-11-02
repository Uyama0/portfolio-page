export const topRevealAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  onceVisible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const bottomRevealAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  onceVisible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const leftRevealAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  onceVisible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const rightRevealAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  onceVisible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const fadeInAnimation = {
  hidden: {
    opacity: 0,
  },
  onceVisible: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};
