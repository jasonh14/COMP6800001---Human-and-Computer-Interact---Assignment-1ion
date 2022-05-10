const btn = document.getElementById("navbar-btn");
let click = false;
const navMenu = document.querySelector(".navbar-mobile");

btn.addEventListener("click", () => {
  if (click) {
    btn.classList.remove("clicked");
    navMenu.classList.add("d-none");
    click = false;
  } else {
    btn.classList.add("clicked");
    navMenu.classList.remove("d-none");
    click = true;
  }
});
