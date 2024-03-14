// active navbar
let nav = document.querySelector(".navigation-wrap");
let navBrand = document.getElementById("navbar-brand");
let navLink = document.querySelectorAll(".nav-link");
window.onscroll = () => {
  if (document.documentElement.scrollTop > 20) {
    navBrand.classList.add("active-logo");
    nav.classList.add("scroll-on");
    navLink.classList.add("nav-active");
  } else {
    nav.classList.remove("scroll-on");
    navBrand.classList.remove("active-logo");
    navLink.classList.add("nav-active");
  }
};
// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach((a) => {
  a.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});
// counter design

document.addEventListener("DOMContentLoaded", () => {
  const counter = (id, start, end, duration) => {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  };
  counter("count1", 0, 1287, 3000);
  counter("count2", 124, 3000, 2500);
  counter("count3", 0, 1440, 3000);
  counter("count4", 0, 7110, 3000);
});
