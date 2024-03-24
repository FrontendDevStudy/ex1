(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menuLink: document.querySelectorAll(".mobile-menu a"),
    menu: document.querySelector("[data-menu]"),
    body: document.querySelector("body"),
  };

  refs.menuLink.forEach(function (el) {
    el.onclick = toggleMenu;
  });

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();
