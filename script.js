const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
    navbar.classList.toggle('active');
})