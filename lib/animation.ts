export const Animation = {
  initial: {
    opacity: 0,
    y: 30,
    filter: 'blur(2px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
};

export const Transition = (x: number) => {
  return {
    duration: 0.3,
    easing: 'easeInOut',
    delay: x,
  };
};
