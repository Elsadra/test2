let darkMoodBtn = document.querySelectorAll(".dark-mood");
let nav = document.querySelector("nav");
let body = document.querySelector("body");
let subMenu = document.querySelector(".sub-menu");
let linkMenuPage = document.querySelector(".link-menu-page");

darkMoodBtn.forEach(function (item) {
  item.addEventListener("click", lightDark);
});

let dark = false;

function lightDark() {
  if (!dark) {
    dark = true;
    document.documentElement.style.setProperty("--body-color", "#192830");
    document.documentElement.style.setProperty("--pair-body-color", "#f3f4f6");
    document.documentElement.style.setProperty("--purple-light", "#eceae2");
    linkMenuPage.setAttribute("style", "color: #5e63b1;");
  } else {
    dark = false;
    document.documentElement.style.setProperty("--body-color", "#f3f4f6");
    document.documentElement.style.setProperty("--pair-body-color", "#eceae2");
    document.documentElement.style.setProperty("--purple-light", "#5e63b1");
    nav.setAttribute(
      "style",
      "box-shadow: 0px 0px 12px var(--body-color), -0px -0px 12px #3c428c; background-color: var(--body-color);"
    );
  }
}
