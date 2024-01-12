interface postPonedProps {
  animationProps?: object;
  durationTime?: number;
  delayFactor?: number;
}

export const setPostponedAnimation = ({
  animationProps = {},
  durationTime = 0.6,
  delayFactor = 0,
}: postPonedProps) => {
  return {
    ...animationProps,
    onceVisible: (custom: number) => ({
      ...((animationProps as any).visible || {}),
      transition: { delay: custom * delayFactor, duration: durationTime },
    }),
  };
};
