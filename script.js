const colors = ["rgb(255, 255, 255)", "rgb(0, 0, 255)", "rgb(0, 128, 0)", "rgb(255, 255, 0)", "rgb(255, 215, 0)", "rgb(128, 128, 128)"];
const names = ["white", "blue", "green", "yellow", "gold", "grey"];
const but = document.querySelector("button");
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


but.addEventListener("click", change);