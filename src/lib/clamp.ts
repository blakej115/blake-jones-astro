const clamp = (min: number, max: number): string =>
  `clamp(${min}px,${(max / 1064) * 100}vw,${max}px)`;

export default clamp;
