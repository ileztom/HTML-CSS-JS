function num1(a, b) {
    return a+b
}

function num2(a) {
    return a.length
}

function num3(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

function num4(a) {
    return a % 2 === 0;
}

function num5(a) {
    if(a <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
          return false;
        }
      }
    return true;
}

function num6(arr) {
    let lengths = [];
    for (let str of arr) {
        lengths.push(str.length);
    }
    return lengths;
}

function num7(num) {
    let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
    return sum;
}

function num8(arr) {
    return arr.filter(num => num > 0);
}

function num9(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

function num10(a) {
    return a.replace(/\b\w/g, char => char.toUpperCase());
}

function num11(a) {
    return a.replace(/[aeiou]/ig, '*');
}

function num12(arr) {
    return arr.filter(str => str.length > 5);
}

function num13(array1, array2) {
    let combinedArr = array1.concat(array2);
    return Array.from(new Set(combinedArr));
}