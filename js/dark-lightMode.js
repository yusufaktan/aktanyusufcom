document.body.style = "background-color: var(--bs-dark);transition: 0.5s;";
const sun =
  "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon =
  "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";

var theme = "dark";
const root = document.querySelector(":root");
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");
const title = document.querySelector(".title");
const desc = document.querySelector(".desc");
const subTitle = document.querySelector(".subTitle");
const button = document.querySelectorAll(".btn");

container.addEventListener("click", setTheme);
function setTheme() {
  switch (theme) {
    case "dark":
      setLight();
      theme = "light";
      break;
    case "light":
      setDark();
      theme = "dark";
      break;
  }
}
function setLight() {
  title.classList.add("titleCh");
  subTitle.classList.add("h2Ch");
  desc.classList.add("descCh");
  for (i = 0; i < button.length; i++) {
    button[i].classList.add("btnCh");
  }
  root.style.setProperty("--bs-dark", "#e6e6e6");
  themeIcon.src = sun;
}
function setDark() {
  title.classList.remove("titleCh");
  desc.classList.remove("descCh");
  subTitle.classList.remove("h2Ch");
  for (i = 0; i < button.length; i++) {
    button[i].classList.remove("btnCh");
  }
  root.style.setProperty("--bs-dark", "#222426");
  themeIcon.src = moon;
}
