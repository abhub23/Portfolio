export const Animation = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const Transition = (x: number) => {
  return {
    type: 'spring',
    stiffness: 120,
    damping: 12,
    delay: x,
  } as const;
};
