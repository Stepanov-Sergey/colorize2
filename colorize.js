class Colorize {
static fgcolor = {
  black: 0,
  red: 9,
  grass: 64,
  orange: 202,
  green: 2,
  tomat: 1,
  pink: 210,
  blue: 33,
  sky:39, //небо
  indogo: 53, //индиго
  jade:34, //нефирит
  bone:187, //кость
  lime:109, //лайм
  ash:188, //пепел
  ecru: 144 //лён
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
  pink: 101
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
