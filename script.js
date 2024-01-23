const colors = ["rgb(255, 255, 255)", "rgb(0, 0, 255)", "rgb(0, 128, 0)", "rgb(255, 255, 0)", "rgb(255, 215, 0)", "rgb(128, 128, 128)"];
const names = ["white", "blue", "green", "yellow", "gold", "grey"];
const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const but1 = document.querySelector(".button1");
const but2 = document.querySelector(".button2");
const body = document.body;

function change() {
    let num = Math.floor(Math.random() * colors.length);
    let rand = colors[num];
    let current = getComputedStyle(body).backgroundColor;
    if(rand === current) {
        change();
    } else{
        document.body.style.backgroundColor = rand;
        document.querySelector(".color").innerHTML = names[num].toUpperCase();
    }
};

function randomizer() {
    let emptyHex = "#";
    for (let i = 0; i < 6; i++) {
        emptyHex += hex[Math.floor(Math.random() * hex.length)]
    };
    document.body.style.backgroundColor = emptyHex;
    document.querySelector(".color").innerHTML = emptyHex;
}

but1.addEventListener("click", change);
but2.addEventListener("click", randomizer);