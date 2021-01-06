
/**
 * Samples an element from an array.
 * @param xs An array to sample an element from
 */
const sample = <T>(xs: T[]): T => xs[Math.floor(Math.random() * xs.length)]

const isStrEmpty = (x: string | null | undefined): boolean =>
  x === undefined || x === null || x === ''

export { sample, isStrEmpty }
