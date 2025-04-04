//Menu

const mobileMenu = document.getElementById("mobile-menu");
const openBtn = document.getElementById("open-menu-btn");
const closeBtn = document.getElementById("close-menu-btn");

openBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  openBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
});
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  openBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
});

//Scroll settings

let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000
});

