inputer.onchange=function(){
    text_block.innerHTML = ""

    let text = inputer.value
    let words = text.split(' ')

    //console.log(words)

    words.forEach(element => {
        if(element != ""){
            text_block.innerHTML += `<span class="text_element" style="color: ${getRandomColor()};">${element} <span>`
        }
    });
}

function getRandomColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16)
}