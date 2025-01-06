//Finder elementer//
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active"); // vises //
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  // lukker //
  burger.classList.remove("active"); // Skjules //
  nav.classList.remove("active");
}
