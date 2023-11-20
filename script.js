const colors = ["rgb(255, 255, 255)", "rgb(0, 0, 255)", "rgb(0, 128, 0)", "rgb(255, 255, 0)", "rgb(255, 215, 0)", "rgb(128, 128, 128)"];
const but = document.querySelector("button");
const body = document.body;

function change() {
    let rand = colors[Math.floor(Math.random() * colors.length)];
    let current = getComputedStyle(body).backgroundColor;
    if(rand === current) {
        change();
        console.log("HI");
    } else{
        console.log("NO", current);
        let changed = document.body.style.backgroundColor = rand;
        document.querySelector(".color").innerHTML = changed.toUpperCase();
    }
};


but.addEventListener("click", change);