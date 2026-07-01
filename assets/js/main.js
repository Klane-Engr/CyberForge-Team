// Navigation Scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

// Typing Animation

const typingElement = document.getElementById("typing-text");

const typingWords = [

    "Game Development",
    "Cybersecurity",
    "Operating Systems",
    "Artificial Intelligence",
    "Minecraft Technologies",
    "Desktop Applications",
    "Cloud Computing",
    "Open Source Software"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingAnimation() {

    const currentWord = typingWords[wordIndex];

    if (!deleting) {

        typingElement.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typingAnimation, 1800);

            return;

        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= typingWords.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typingAnimation, deleting ? 40 : 90);

}

typingAnimation();

// Smooth Anchor Scrolling

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
