const space = document.getElementsByClassName("space")[0];
const obj = document.getElementsByClassName("object")[0];

let Drag = false;
let startX;
let startY;


function startDrag(e) {
    Drag = true;

    startX = e.clientX;
    startY = e.clientY;
}

function stopDrag(e) {
    Drag = false;
}

function mouseMove(e) {
    moveX = e.clientX;
    moveY = e.clientY;

    rotateX = startY - moveY;
    rotateY = startX + moveX;

    if (Drag) {
        obj.style.transform = "translateZ(-259.8076211px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
    }
}




window.addEventListener("mousedown", startDrag);
window.addEventListener("mouseup", stopDrag);
window.addEventListener("mousemove", mouseMove);