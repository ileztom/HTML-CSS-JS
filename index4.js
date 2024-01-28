/*let year=prompt('hhhhhhhhhh')
if(year<2020){
    alert('vse OK');
}
else if(year>2020){
    alert('OK')
}
else{
    alert('verno')
}*/

/*let accessAllowed;
let age=prompt('how old are you?');
if(age>=18){
    accessAllowed=true;
}
else{
    accessAllowed=false;
}
alert(accessAllowed)*/

/*let age=prompt('age')
let message=(age<3)? маленький:(age<18)?порои;*/

/*let company=prompt('какое кофе вы любите?');
(company=='latte')? alert('verno'): alert('neverno')*/

//ex1
let chislo=prompt('введите число');
if (chislo%2==0){
    alert('чётное')
}
else{
    alert('нечётное')
}
//ex2
let chislo1=prompt('введи первое число');
let chislo2=prompt('введи второе число');
if (chislo1>chislo2){
    alert('первое число больше, чем второе')
}
else{
    alert('второе число больше, чем первое')
}
//ex3
let chislo4=prompt('введи число');
(chislo4<0)? alert('число отрицательное'): (chislo4==0)? alert('число равно 0'): alert('число положительное')
//ex4
let age=prompt('введите ваш возвраст');
(age>=18)? alert('совершеннолетний'): alert('несовершеннолетний')
//ex5
let currentHour=prompt('введите время');
let timeOfDay =
  currentHour >= 6 && currentHour < 12 ? "утро" :
  currentHour >= 12 && currentHour < 18 ? "день" :
  currentHour >= 18 && currentHour < 24 ? "вечер" :
  "ночь";
alert(timeOfDay);
//ex6
let number = parseInt(prompt("Введите число:"));
let result = number % 5 === 0 ? "Число делится на 5 без остатка": "Число не делится на 5 без остатка";
alert(result);
//ex7
let word = prompt("Введите слово:");
let result1 = word.length < 5 ? "короткое" : "длинное";
alert("Это слово - " + result1);
//ex8
let a = parseFloat(prompt("Введите число a:"));
let b = parseFloat(prompt("Введите число b:"));
let result2 = a === b ? "равны" : "разные";
alert("Числа a и b " + result2);
//ex9
let number2 = parseInt(prompt("Введите число:"));
let isPrime = true;
if (number2 === 1) {
  isPrime = false;
} else if (number2 > 1) {
  for (let i = 2; i < number2; i++) {
    if (number2 % i === 0) {
      isPrime = false;
      break;
    }
  }
}
let result3 = isPrime ? "простое" : "составное";
alert("Число " + number2 + " - " + result3);
//ex10
let dayNumber = parseInt(prompt("Введите номер дня недели (1-7):"));
let day = dayNumber === 1 ? "Понедельник" : 
          dayNumber === 2 ? "Вторник" : 
          dayNumber === 3 ? "Среда" : 
          dayNumber === 4 ? "Четверг" : 
          dayNumber === 5 ? "Пятница" : 
          dayNumber === 6 ? "Суббота" : 
          dayNumber === 7 ? "Воскресенье" : "Некорректный номер дня";
alert(day);
//ex11
let totalAmount = parseFloat(prompt("Введите сумму покупки"));
let discountPercent = totalAmount >= 1000 
  ? 10 
  : totalAmount >= 500 
  ? 5 
  : totalAmount >= 100 
  ? 3 
  : 0;
alert(discountPercent + "%");