
/**
 * Samples an element from an array.
 * @param xs An array to sample an element from
 */
const sample = <T>(xs: T[]): T => xs[Math.floor(Math.random() * xs.length)]

const isEmpty = <T>(x: T | null | undefined): boolean =>
  x === undefined || x === null || !!x === false


export { sample, isEmpty }
