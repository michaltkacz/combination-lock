export const clampDigit = (d) => {
  return (d + 10) % 10;
};

export const generateRandomArray = (length, min, max) =>
  Array.from({ length }, () => min + Math.round(Math.random() * max));
