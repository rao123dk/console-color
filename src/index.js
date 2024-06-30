// SGR (Select Graphic Rendition) 
const colors = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  faint: "\x1b[2m",
  italic: "\x1b[3m",
  underline: "\x1b[4m",
  blinkSlow: "\x1b[5m",
  blinkRapid: "\x1b[6m",
  reverse: "\x1b[7m",
  //hide: "\x1b[8m",
  strike: "\x1b[9m",
  normalIntensity: "\x1b[22m",
  notItalic: "\x1b[23m",
  notUnderlined: "\x1b[24m",
  notBlinking: "\x1b[25m",
  notReversed: "\x1b[27m",
  reveal: "\x1b[28m",
  notStriked: "\x1b[29m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m",
};

function addColorMethod(color) {
  console.log.__proto__[color] = function (...args) {
    console.log(colors[color], ...args, colors.reset);
  };

  const styles = {
    bold: colors.bold,
    faint: colors.faint,
    italic: colors.italic,
    underline: colors.underline,
    blinkSlow: colors.blinkSlow,
    blinkRapid: colors.blinkRapid,
    reverse: colors.reverse,
    // hide: colors.hide,
    strike: colors.strike,
    normalIntensity: colors.normalIntensity,
    notItalic: colors.notItalic,
    notUnderlined: colors.notUnderlined,
    notBlinking: colors.notBlinking,
    notReversed: colors.notReversed,
    reveal: colors.reveal,
    notStriked: colors.notStriked,
  };

  for (let style in styles) {
    console.log.__proto__[color][style] = function (...args) {
      console.log(styles[style], colors[color], ...args, colors.reset);
    };
  }

  console.log.__proto__[color].background = function (...args) {
    console.log(colors[`bg${color.charAt(0).toUpperCase() + color.slice(1)}`], ...args, colors.reset);
  };
}

Object.keys(colors).forEach((color) => {
  if (!color.startsWith('bg') && color !== 'reset') {
    addColorMethod(color);
  }
});

//module.exports = console.log;


console.log.red('Error: Something went wrong!');
console.log.green('Success: Operation completed successfully.');
console.log.green.bold('Success: Operation completed successfully.');
console.log.blue.italic('Info: Please check the details below.');
console.log.yellow.underline('Warning: Please be cautious.');
console.log.cyan.blinkSlow('Debug: Variable value is undefined.');
console.log.magenta.reverse('Notice: This is an important notice.');
console.log.red.background('General: This is a general message.');

// setInterval(()=>{
//   console.log.blinkRapid("helooooo---")
// },2000)
