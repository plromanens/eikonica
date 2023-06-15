const burgerIcon = document.getElementById("burger-icon");
const menu = document.querySelector(".links");

burgerIcon.addEventListener("click", () => {
  menu.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", function () {
  var imageContainer = document.querySelector(".image-container");
  var hoverImage = document.querySelector(".hover-image");

  imageContainer.addEventListener("click", function () {
    if (hoverImage.style.display === "none") {
      hoverImage.style.display = "block";
    } else {
      hoverImage.style.display = "none";
    }
  });
});
