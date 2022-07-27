const text = document.querySelector(".fancy")
// console.log(text);
const strText = text.textContent
// console.log(strText);
const splitText = strText.split("")
// console.log(splitText);
text.textContent = ""

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML +="<span>"+ splitText[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick , 50);

function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade")
    char++
    if (char == splitText.length) {
        complete()
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null
}