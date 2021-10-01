const colors = [
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  '#00ffff',
  '#ff8800',
  '#e60ac1',
  '#5e0ae6',
  '#a52a2a',
];

function randomColor() {
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  let indexOfColor = randomIntegerFromInterval(0, colors.length - 1);
  let randomColor = colors[indexOfColor];
  return randomColor;
}

export default randomColor;
