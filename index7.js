//ex1
let price = prompt('введите сумму')
let range = prompt('введите день/неделю/месяц');
let rangeInRussian;

switch (range) {
  case "month":
    rangeInRussian = "месяц";
    break;
  case "day":
    rangeInRussian = "день";
    break;
  case "week":
    rangeInRussian = "неделю";
    break;
  default:
    rangeInRussian = "неизвестный период";
}

alert(`${price} Р в ${rangeInRussian}`);
//ex2
let temp = prompt('введите температуру погоды');
let weather = prompt('введите состояние погоды');
let activity;

if (temp >= 25 && weather == "clear") {
  activity = "golf";
} else if ((temp >= 10 && temp <= 24) || weather == "cloudy") {
  activity = "bowling";
} else {
  activity = "hiking";
}

alert(activity);
//ex3
let a = prompt('введите значение a');
let b = prompt('введите значение b');
let sign = prompt('введите действие');
let result;

if (sign == '+'){
    alert(a + b)
} else if (sign == '-') {
    alert(a - b)
} else if (sign == '*') {
    alert(a * b)
} else if (sign == '/') {
    alert(a / b)
}
else{
    alert('недопустимые данные')
}
//ex4
let word = prompt('введите слово');
let result = Math.sqrt(word.length) % 1 === 0 ? 1 : 0;
alert(result)