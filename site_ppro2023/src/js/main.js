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

var bouton = document.getElementById("bouton");
var maDiv = document.getElementById("maDiv");

bouton.addEventListener("click", function () {
  bouton.classList.toggle("image1");
  bouton.classList.toggle("image2");

  if (bouton.classList.contains("image1")) {
    maDiv.classList.add("hidden");
  } else {
    maDiv.classList.remove("hidden");
  }
});

var bouton = document.getElementById("bouton");
var maDiv = document.getElementById("maDiv");

bouton.addEventListener("click", function () {
  bouton.classList.toggle("image11");
  bouton.classList.toggle("image22");

  if (bouton.classList.contains("image11")) {
    maDiv.classList.add("hidden");
  } else {
    maDiv.classList.remove("hidden");
  }
});
