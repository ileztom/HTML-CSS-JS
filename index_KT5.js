//1
let phones = [
  '590.423.4568',
  '650.124.7234',
  '650.507.9879',
  '011.44.1343.529268',
  '011.44.1344.478968',
  '011.44.1644.429267',
  '11.44.1343.52',
  '11.44.1643.52'
];

let result = phones.map(phone => {
  let parts = phone.split('.');
  parts[parts.length - 2] = parts[parts.length - 2].slice(0, 1) + '****';
  return parts.join('.');
});

console.log(result);

//2
let cards = [ 
    '4000 0012 0056 9499', 
    '4000 0013 5456 7379', 
    '4000 0014 1456 9869', 
    '4000 0015 3466 7859', 
    '4000 0016 3556 6899', 
    '4000 0017 4456 4699'
];

let encryptedCards = cards.map(card => {
    let firstFour = card.substr(0, 4);
    let lastFour = card.substr(card.length - 4);
    return firstFour + '*****' + lastFour;
});

console.log(encryptedCards);

//3
function getInfo(prices) {
    let countStartsWithЦена = 0;
    let countEndsWith$ = 0;

    for (let price of prices) {
        if (price.startsWith('Цена')) {
            countStartsWithЦена++;
        }
        if (price.endsWith('$')) {
            countEndsWith$++;
        }
    }
    return [countStartsWithЦена, countEndsWith$];
}
let prices = [ 
    'Цена товара - 1200$', 
    'Стоимость - 500$', 
    'Цена не определена', 
    '9999',
    'Ценовая категория - больше 300$',
    'Цена за услугу 500 EUR',
    '150$'
];
console.log(getInfo(prices));

//4
function kingSayd(string) {
    if (string.startsWith("Король сказал:")) {
        console.log(string);
    } else {
        console.log("Король сказал: " + string);
    }
}
kingSayd("сегодня хорошая погода");

//5
function isFridayToday() {
    const today = new Date().getDay();
    if (today === 5) {
        console.log("Сегодня пятница!");
    } else if (today === 4) {
        console.log("Пятница была вчера");
    } else if (today === 6) {
        console.log("Завтра пятница!");
    } else {
        const daysUntilFriday = (5 + 7 - today) % 7;
        console.log(`Пятница будет через ${daysUntilFriday} дней`);
    }
}
isFridayToday();
