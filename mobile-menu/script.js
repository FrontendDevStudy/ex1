const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");
const menu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");

document.querySelectorAll(".mobile-menu a").forEach(function (el) {
  el.onclick = toggleMenu;
});

menuButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuButton.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("no-scroll");
}
