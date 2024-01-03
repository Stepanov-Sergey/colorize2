class Colorize {
static fgcolor = {
  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37
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
  white: 47
  // Добавьте больше цветов здесь при необходимости
};

  static fg = new Proxy({}, {
    get: function(target, fgcolor) {
      return (text) => `\x1b[${Colorize.fgcolor[fgcolor]}m${text}\x1b[0m`;
    }
  });

  static bg = new Proxy({}, {
    get: function(target, bgcolor) {
      return (text) => `\x1b[${Colorize.bgcolor[bgcolor]}m${text}\x1b[0m`;
    }
  });
}

module.exports = Colorize;
