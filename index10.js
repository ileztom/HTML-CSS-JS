//1
function checkElem(num) {
    if (num % 7 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
let num = prompt('введите число')
checkElem(num);
//2
function changeElem(array, n) {
    let newArray = array.map(elem => elem * n);
    return newArray;
}
let array = [1, 2, 3, 4];
let result = changeElem(array, 3);
console.log(result);
//3
function sumElems(array) {
    let sum = 0; 
    for(let i = 0;  i < array.length; i++) 
    { 
        if (!isNaN(array[i])) 
        { 
            sum += parseFloat(array[i]) 
        } 
    } 
    return sum 
}
let array = ['10', 'sdc', '5g', '15', '05'];
let result = sumElems(array);
console.log(result);
//4
function reversedWord(word) 
{ 
    let newWord = []; 
    for (let i = word.length, j = 0; i >= 0; i--, j++) 
    { 
        newWord[j] = word[i]; 
    } 
    return newWord; 
} 
let numbers = [1, 2, 3, 4, 5] 
alert(reversedWord(numbers)) 
//5
function checkElem1(array, callback) 
{ 
    for(let i = 0; i < array.length; i++) 
    { 
        if (callback(array[i])) 
        { 
            return true; 
        } 
        return false 
    } 
} 
let array3 = [1, 4, 7, 19] 
let result = checkElem1(array3, (elem) => elem == 3) 
alert(result)