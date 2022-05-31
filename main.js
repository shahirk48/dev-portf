// setTimeout(function () {
//   $(".loader-bg").fadeToggle();
// }, 1500);

const menuButton = document.getElementById("hamButton");
const navContainer = document.getElementById("navContainer");
const menuText = document.getElementById("menuText");
const hamIcon = document.getElementById("hamI");

menuButton.addEventListener("click", () => {
  console.log("clicked menu");
  if (navContainer.classList.contains("toggle-nav")) {
    navContainer.classList.remove("toggle-nav");
    navContainer.classList.add("hide-nav");
    menuText.classList.remove("display-none");
    hamIcon.classList.remove("fa-times");
    hamIcon.classList.add("fa-bars");
  } else if (navContainer.classList.contains("hide-nav")) {
    navContainer.classList.remove("hide-nav");
    navContainer.classList.add("toggle-nav");
    menuText.classList.add("display-none");
    hamIcon.classList.remove("fa-bars");
    hamIcon.classList.add("fa-times");
  }
});
menuButton.addEventListener("mouseover", () => {
  menuText.innerText = "open";
});
menuButton.addEventListener("mouseleave", () => {
  menuText.innerText = "menu";
});

document.querySelectorAll(".navA").forEach((item) => {
  item.addEventListener("click", () => {
    console.log("works click");
    navContainer.classList.remove("toggle-nav");
    navContainer.classList.add("hide-nav");
    menuText.classList.remove("display-none");
    hamIcon.classList.remove("fa-times");
    hamIcon.classList.add("fa-bars");
  });
});
