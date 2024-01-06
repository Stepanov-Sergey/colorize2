
English:
The script defines a Colorize class with methods for applying foreground and background colors to text in the terminal. It includes a set of predefined colors for both foreground and background. Additionally, it provides a checkColor method to verify if a specified color is defined.

Русский:
Скрипт определяет класс Colorize с методами для применения цветов переднего и заднего плана к тексту в терминале. Он содержит набор предопределенных цветов как для переднего, так и для заднего плана. Кроме того, скрипт предоставляет метод checkColor для проверки, определен ли указанный цвет.


node app.js

```js
const Colorize  = require('./colorize.js');
console.log(Colorize.bg.red('Этот текст имеет красный цвет фона.'));
console.log(Colorize.fg.green('Этот текст имеет зеленый цвет текста.'));
console.log(Colorize.bg.blue('Этот текст имеет синий цвет фона.'));
```


Вывод всех вариантов цветов 
```js
console.log('Foreground colors:');
for (const color in Colorize.fgcolor) {
  console.log(`${color}:`, Colorize.fg[color](`${color}`));
}

console.log('Background colors:');
for (const color in Colorize.bgcolor) {
  console.log(`${color}:`, Colorize.bg[color](`${color}`));
}
```

TODO:
http://www.falsefriends.ru/english-colors.htm?ysclid=lqyynp8bax543792894


colorize2.js
you write a name that is associated with the desired color. your colleague can add his own name for each color number.
