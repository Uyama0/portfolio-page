export function round(num: number, fix: number = 2): number {
  return parseFloat(num.toFixed(fix));
}

export function distance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
