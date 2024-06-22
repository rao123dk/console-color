const colors = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  reset: "\x1b[0m",
};

function addColorMethod(color) {
  console.log.__proto__[color] = function (...args) {
    console.log(colors[color], ...args, colors.reset);
  };
}

Object.keys(colors).forEach((color) => {
  if (color !== "reset") {
    addColorMethod(color);
  }
});

module.exports = console.log;
