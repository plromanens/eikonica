const burgerIcon = document.getElementById("burger-icon");
const menu = document.querySelector(".links");

burgerIcon.addEventListener("click", () => {
  menu.classList.toggle("show");
});
