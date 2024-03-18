const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");
const menu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  menu.classList.toggle("active");
});

closeButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  menu.classList.toggle("active");
});
