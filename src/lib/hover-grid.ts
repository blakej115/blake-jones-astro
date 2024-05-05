export const gridDebug: boolean =
  import.meta.env.GRID_DEBUG === "true" ? true : false;

export const gridBase: number = 21;

const gridMultiplier: number = 2;

const gridSubtractor: number = Math.floor(gridBase / 2);

export const gridTotal: number[] = [
  ...(Array(gridBase * gridBase).keys() as IterableIterator<number>),
];

export function gridX(x: number): number {
  x = Math.floor(x / gridBase) - gridSubtractor;

  if (gridDebug) return x;

  return x * -gridMultiplier * (16 / 9);
}

export function gridY(y: number): number {
  y = (y % gridBase) - gridSubtractor;

  if (gridDebug) return y;

  return y * gridMultiplier;
}

export const rotateClasses: string[] = gridTotal.map(
  (i: number): string =>
    `group-has-[>:first-child>:nth-child(${i + 1}):hover]:[transform:rotateX(${gridX(i)}deg)_rotateY(${gridY(i)}deg)]`,
);

const gridSafelist: string[] = [
  ...rotateClasses,
  `grid-cols-[repeat(${gridBase},minmax(0,1fr))]`,
  `grid-rows-[repeat(${gridBase},minmax(0,1fr))]`,
];

export default gridSafelist;
