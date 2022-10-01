const navItems = document.querySelectorAll(".nav__menuItem");
const navItemLinks = document.querySelectorAll(".nav__menuItemLink");
const navHamburger = document.querySelector(".nav__hamburger");
const navMenu = document.querySelector(".nav__menu");

function showHideElement(element) {
  element.classList.toggle(`${element.classList[0]}--active`);
}

navHamburger.addEventListener("click", () => showHideElement(navMenu));
navItemLinks.forEach((link) =>
  link.addEventListener("click", (e) => {
    showHideElement(e.target.nextElementSibling);
  })
);
