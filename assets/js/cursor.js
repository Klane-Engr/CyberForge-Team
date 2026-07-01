// Cursor

const cursorDot = document.querySelector(".cursor-dot");

const cursorOutline = document.querySelector(".cursor-outline");

let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", event => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top = mouseY + "px";

});

function animateCursor() {

    const outlineX = parseFloat(cursorOutline.style.left || 0);
    const outlineY = parseFloat(cursorOutline.style.top || 0);

    cursorOutline.style.left = outlineX + (mouseX - outlineX) * 0.15 + "px";
    cursorOutline.style.top = outlineY + (mouseY - outlineY) * 0.15 + "px";

    requestAnimationFrame(animateCursor);

}

animateCursor();

document.querySelectorAll("a, button").forEach(element => {

    element.addEventListener("mouseenter", () => {

        cursorOutline.style.transform = "translate(-50%, -50%) scale(1.8)";

    });

    element.addEventListener("mouseleave", () => {

        cursorOutline.style.transform = "translate(-50%, -50%) scale(1)";

    });

});
