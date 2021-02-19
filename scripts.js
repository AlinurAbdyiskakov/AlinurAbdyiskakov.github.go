let btn1 = document.querySelector('#btn1')
let name = document.querySelector('#name')
let massege = document.querySelector('#massage')
let color = document.querySelector('#color')
let chat = document.querySelector('#chat')

btn1.addEventListener("mousedown", function() {
    let div = document.createElement('div')
    let span1 = document.createElement('span')
    let span2 = document.createElement('span')
    div.append(span1)
    div.append(span2)
    chat.append(div)
    span1.innerText = name.value + ": "
    span2.innerText = massege.value
    span1.style.color = color.value
})

