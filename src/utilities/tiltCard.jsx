export function round(num, fix = 2) {
  return parseFloat(num.toFixed(fix));
}

export function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
