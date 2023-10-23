export function round(num, fix = 2) {
  return parseFloat(num.toFixed(fix));
}

export function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

const handleMouseMove = (event) => {
  setAnimating(true);

  const rect = event.currentTarget.getBoundingClientRect();

  const absolute = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };

  const percent = {
    x: round((100 / rect.width) * absolute.x),
    y: round((100 / rect.height) * absolute.y),
  };

  const center = {
    x: percent.x - 50,
    y: percent.y - 50,
  };

  setRotations({
    x: round(((center.x > 50 ? 1 : -1) * center.x) / 12),
    y: round(center.y / 16),
    z: round(distance(percent.x, percent.y, 50, 50) / 20),
  });
};
