
// Particles

const particleContainer = document.getElementById("particles");

const particleCount = 60;

for (let i = 0; i < particleCount; i++) {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    const size = Math.random() * 4 + 2;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (10 + Math.random() * 20) + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particleContainer.appendChild(particle);

}
