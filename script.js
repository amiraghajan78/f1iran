const $ = document;

let hamburgerBtn = $.querySelector("#hamburger-btn");
let waterfallMenu = $.querySelector(".waterfall-menu-container");

function toggleMenu() {
    waterfallMenu.classList.toggle("toggle");
};

hamburgerBtn.addEventListener("click", toggleMenu);
