//ex1
let word = prompt('введите слово');
let nWord = '';
for (let i = 0; i < word.length; i++) {
    let char = word[i].toLowerCase();
    if (char != 'а' && char != 'о' && char != 'А' && char != 'О') {
        nWord += word[i];
    }
}
alert(nWord);
// Задача №2
let num = prompt('введите число');
for (let i = 1; i <= num; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
// Задача №3
let num = prompt('ввежите число');
let iteration = '';
for (let i = 1; i <= num; i++) {
    iteration += i;
    console.log(iteration);
}
// Задача №4
let num = prompt('введите число');
let factorialSum = 0;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
    factorialSum += factorial;
}
console.log(factorialSum);
// Задача №5
let word = prompt('ведите слово');
let isPalindrome = true;
for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
if (isPalindrome) {
    console.log('YES');
} else {
    console.log('NO');
}