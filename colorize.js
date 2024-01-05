class Colorize {
static fgcolor = {
  black: 0, //черный
  red: 9, //красный
  grass: 64, //трава
  orange: 202, //оранжевый
  green: 2, //зеленый
  tomat: 1, //томат
  pink: 210, //розовый
  blue: 33, //голубой
  sky: 117, //небо
  indogo: 53, //индиго
  emerald:35, //эмеральд
  jade: 43, //нефирит
  aquamarine:39,
  bone: 187, //кость
  lime: 190, //лайм
  yellow: 220, //жёлтый
  ash: 188, //пепел
  ecru: 144, //лён
  gray: 244, //серый
  platinum: 253,
  silver:250,
  lead: 247,
  blood: 88,
  moss:108, //мох
  salmon:203, //лосось
  coral:204,
  navy:19,
  sapphire:4, //сапфир
  ametist:92, //аметист
  cyan:87,
  bronze:179, //бронза
  gold:222, //золото
  ice:153, //лёд
  lilac:135, //лиловый
  ruby:124, //рубин
  tiquoise:80, //изумруд
  peridot:113, //перидот
  citrine:215, //цитрин
  mustard:179, //горчица
  plum:54,// слива
  ochre:172 //охра
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
