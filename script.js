const colors = ["white", "blue", "green", "yellow", "gold", "gray"];
const but = document.querySelector("button");

function change() {
    let changed = document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector(".color").innerHTML = changed.toUpperCase();
};

but.addEventListener("click", change);