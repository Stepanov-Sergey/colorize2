class Colorize {
static fgcolor = {
  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37,
  gray: 90,
  bright_red: 91,
  bright_green: 92,
  bright_yellow: 93,
  bright_blue: 94,
  bright_magenta: 95,
  bright_cyan: 96,
  bright_white: 97
  // Добавьте больше цветов здесь при необходимости
};

static bgcolor = {
  black: 40,
  red: 41,
  green: 42,
  yellow: 43,
  blue: 44,
  magenta: 45,
  cyan: 46,
  white: 47,
  gray: 100,
  pink: 101,
  bright_green: 102,
  bright_yellow: 103,
  bright_blue: 104,
  bright_magenta: 105,
  bright_cyan: 106,
  bright_white: 107
  // Добавьте больше цветов здесь при необходимости
};

  static fg = new Proxy({}, {
    get: function(target, fgcolor) {
      return (text) => `\x1b[38;5;${Colorize.fgcolor[fgcolor]}m${text}\x1b[0m`;
    }
  });

  static bg = new Proxy({}, {
    get: function(target, bgcolor) {
      return (text) => `\x1b[48;5;${Colorize.bgcolor[bgcolor]}m${text}\x1b[0m`;
    }
  });
}

module.exports = Colorize;
