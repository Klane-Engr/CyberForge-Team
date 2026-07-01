// Theme

const themeButton = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    themeButton.textContent = "☀️";

}

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    themeButton.textContent = isLight ? "☀️" : "🌙";

    localStorage.setItem(

        "theme",

        isLight ? "light" : "dark"

    );

});
