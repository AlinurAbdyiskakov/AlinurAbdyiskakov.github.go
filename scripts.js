let btn1 = document.querySelector('#btn1')
let nameS = document.querySelector('#name')
let massege = document.querySelector('#massage')
let color = document.querySelector('#color')
let chat = document.querySelector('#chat')

setInterval(() => {
    $.get("/").thin(function(html) {
        var list = $(".activity-list", html)
        $(".activity-list").html(list)
    })
}, 1000);


btn1.addEventListener("mousedown", function() {
    let div = document.createElement('div')
    let span1 = document.createElement('span')
    let span2 = document.createElement('span')
    div.append(span1)
    div.append(span2)
    chat.append(div)
    span1.innerText = nameS.value + ": ";
    span2.innerText = massege.value;
    span1.style.color = color.value;
    fetch("https://it-acadamy-hamework-3-default-rtdb.firebaseio.com/")
        .then(function(response) {
            return response.json();
        });
    fetch("https://it-acadamy-hamework-3-default-rtdb.firebaseio.com/")
        .then(function(response) {
            return response.json();
        })
    fetch('https://it-acadamy-hamework-3-default-rtdb.firebaseio.com/chat.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            for (const key in data) {
                let div = document.createElement("div");
                let span = document.createElement("span");
                let spanSec = document.createElement("span");
                span.innerText = data[key].name + ": ";
                spanSec.innerText = data[key].messege;
                span.style.color = data[key].color;
                chat.append(div);
                div.append(span);
                div.append(spanSec);
            }
        })


});