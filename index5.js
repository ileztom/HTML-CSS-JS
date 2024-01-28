/*let n = prompt('введите число для вычесленния факториала');
answer = 1;
do {
    answer*=n;
    n -= 1;
}
while (n != 1);
alert(answer);*/

function getRandomColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16)
}

const setBg = () => {
    let randomColor = getRandomColor()
    document.body.style.backgroundColor = randomColor
    color.innerHTML = randomColor
}

//genNew.addEventListener("click", setBg)

setBg()