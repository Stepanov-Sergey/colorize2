class Colorize {
  static color = {
1: ['tomat'],
2: ['green'],
4: ['sapphire'],
9: ['red','scarlet'],
19: ['navy'],
33: ['blue'],
35: ['emerald'],
39: ['aquamarine'],
43: ['jade'],
53: ['indogo'],
54: ['plum'],
64: ['grass'],
68: ['denim'],
80: ['tiquoise'],
87: ['cyan'],
88: ['blood'],
92: ['ametist'],
108: ['moss'],
113: ['peridot'],
117: ['sky'],
124: ['ruby'],
135: ['lilac'],
144: ['ecru'],
153: ['ice'],
172: ['ochre'],
179: ['bronze', 'mustard'],
187: ['bone'],
188: ['ash'],
190: ['lime'],
202: ['orange'],
203: ['salmon'],
204: ['coral'],
210: ['pink'],
215: ['citrine'],
220: ['yellow'],
222: ['gold'],
244: ['gray'],
247: ['lead'],
250: ['silver'],
253: ['platinum']
    // Добавьте другие цвета и их коды
  };
  // Проверка на уникальность ключей объекта color
  static validateColorKeys() {
    const colorNames = Object.values(Colorize.color).flat();
    const uniqueColorNames = new Set(colorNames);
    if (colorNames.length !== uniqueColorNames.size) {
      console.error('Error: Duplicate colors found in object color');
      process.exit(1);
    }
  }

  static fg = new Proxy({}, {
    get: function(target, colorName) {
      Colorize.validateColorKeys();
      const colorCode = Object.keys(Colorize.color).find(key => Colorize.color[key].includes(colorName));
      return (text) => `\x1b[38;5;${colorCode}m${text}\x1b[0m`;
    }
  });

  static bg = new Proxy({}, {
    get: function(target, colorName) {
      Colorize.validateColorKeys();
      const colorCode = Object.keys(Colorize.color).find(key => Colorize.color[key].includes(colorName));
      return (text) => `\x1b[48;5;${colorCode}m${text}\x1b[0m`;
    }
  });
}

module.exports = Colorize;
