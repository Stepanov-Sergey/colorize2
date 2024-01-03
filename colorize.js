class Colorize {
  static fg = {
    black: (text) => `\x1b[30m${text}\x1b[0m`,
    red: (text) => `\x1b[31m${text}\x1b[0m`,
    green: (text) => `\x1b[32m${text}\x1b[0m`,
    yellow: (text) => `\x1b[33m${text}\x1b[0m`,
    blue: (text) => `\x1b[34m${text}\x1b[0m`,
    magenta: (text) => `\x1b[35m${text}\x1b[0m`,
    cyan: (text) => `\x1b[36m${text}\x1b[0m`,
    white: (text) => `\x1b[37m${text}\x1b[0m`,
    // Add more colors here as needed
  };
  static bg = {
    black: (text) => `\x1b[40m${text}\x1b[0m`,
    red: (text) => `\x1b[41m${text}\x1b[0m`,
    green: (text) => `\x1b[42m${text}\x1b[0m`,
    yellow: (text) => `\x1b[43m${text}\x1b[0m`,
    blue: (text) => `\x1b[44m${text}\x1b[0m`,
    magenta: (text) => `\x1b[45m${text}\x1b[0m`,
    cyan: (text) => `\x1b[46m${text}\x1b[0m`,
    white: (text) => `\x1b[47m${text}\x1b[0m`,
    // Add more background colors here as needed
  };

  static checkColor(color, type) {
    if (type === 'fg' && !this.fg[color]) {
      console.log(`Foreground color '${color}' is not defined.`);
    } else if (type === 'bg' && !this.bg[color]) {
      console.log(`Background color '${color}' is not defined.`);
    }
  }
}

module.exports = Colorize;
