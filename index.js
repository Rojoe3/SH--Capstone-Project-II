const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
     hamburger.active.toggle("active");
     navMenu.active.toggle("active");
})