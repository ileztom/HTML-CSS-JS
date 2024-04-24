//ex1
let obj = {
    price1: 100,
    price2: 150,
    price3: 200,
    price4: 100,
    price5: 150,
};
let sum = 0;
for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        sum += obj[key];
    }
}
console.log(sum);

//ex2
/*let array = [ 
    {id: 1, name: 'apple'}, 
    {id: 2, name: 'watermelon'}, 
    {id: 3, name: 'qiwi'}, 
    {id: 4, name: 'lemon'} 
];
let newArray = array.map(obj => Object.values(obj));
console.log(newArray);*/

//ex3
function logString(...args) {
    let result = args.join(' ') + ' ';
    console.log('"' + result + '"');
}
logString("Hello", "my", "world!");

//ex4
function checkObj(obj) {
    return obj.hasOwnProperty('particle');
}
console.log(checkObj({id: 1, particle: 10}));
console.log(checkObj({id: 2, name: "tag"}));

//ex5
function generateArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == 'object' && !Array.isArray(array[i])) {
            array[i] = Object.values(array[i]);
        }
    }
    return array;
}
let array = [[1], {id: 40}, [100], [300], {part: 10}];
console.log(generateArray(array));

//ex6
let users = [
    {id: 1, name: 'Alex', lastname: 'Wilyam', age: 20},
    {id: 2, name: 'Steven', lastname: 'King', age: 34} 
];

function addUser(name, lastname, age) {
    let id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    users.push({id, name, lastname, age});
}

function updateUser(id, name, lastname, age) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            users[i] = {id, name, lastname, age};
            break;
        }
    }
}

function deleteUser(id) {
    users = users.filter(user => user.id != id);
}

addUser('John', 'Doe', 25);
console.log(users);

updateUser(2, 'Stephen', 'Smith', 30);
console.log(users);

deleteUser(1);
console.log(users);

//ex7

