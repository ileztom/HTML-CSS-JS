alert('Hello');

let nameUser = prompt('Как вас зовут?', );
alert('Здравствуйте, ' + nameUser);

let ageUser = prompt('Сколько вам лет?', );
alert('Вам ' + ageUser + ' лет, ' + nameUser);

let n1 = prompt('введите первое число', );
let n2 = prompt('введите второе число', );
alert(parseFloat(n1) + parseFloat(n2));

let x = 3;
let y = 5;
alert('x=' + x + ' y=' + y)
alert('x=' + y + ' y=' + x)

alert(parseFloat(x) * parseFloat(y))

let h1 = prompt('Введите первое число', )
let h2 = prompt('Введите второе число', )
alert("сумма = " + (parseFloat(h1)+parseFloat(h2)))
alert("разницу = " + (parseFloat(h1)-parseFloat(h2)))
alert("произведение = " + (parseFloat(h1)*parseFloat(h2)))
alert("частное = " + (parseFloat(h1)/parseFloat(h2)))

let t1 = prompt('Введите число', )
if (t1%2==0) alert('число ' + t1 + ' четное')
if (t1%2==1) alert('число ' + t1 + ' нечетное')

let yer = prompt('Введите ваш возвраст', )
if (yer>=18) alert('вы приняты')
if (yer<18) alert('отказ')