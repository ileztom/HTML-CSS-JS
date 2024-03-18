//1
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log(squares);
//2
const numbers1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers1.sort((a, b) => a - b);
console.log(numbers1);
//3
const numbers2 = [1, 2, 3, 4, 5];
numbers2.reverse();
console.log(numbers2);
//4
const sentence = "Рад всех видеть на паре";
const words = sentence.split(" ");
console.log(words);
//5
const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((acc, num) => acc + num, 0);
console.log(sum);
//6
function camelize(str) {
    return str.split("-")
        .map((word, index) => index == 0 ? word :
    word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
}
console.log(camelize("background-color"));
console.log(camelize("my-short-string"));
//7
function filterRange(arr, a, b) {
    return arr.filter(num => num >= a && num <= b);
}
const numbers4 = [1, 5, 10, 15, 20];
console.log(filterRange(numbers4, 5, 15));
//8
function filterRangeInPlace(arr1, a, b) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] <= a || arr1[i] <= b) {
            arr1.splice(i, 1);
            i--;
        }
    }
}
const numbers5 = [1, 5, 10, 15, 20, 30, 40];
filterRangeInPlace(numbers5, 5, 15);
console.log(numbers5);
//9
const arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
console.log(arr);