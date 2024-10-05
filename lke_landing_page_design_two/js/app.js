document.addEventListener("DOMContentLoaded", function () {
  const menuList = document.querySelectorAll(".menu-list");
  const subMenu = document.querySelectorAll(".sub-menu");

  const arrow_open = "./assets/images/arrow-open.png";
  const arrow_close = "./assets/images/arrow-close.png";

  for (let i = 0; i < menuList.length; i++) {
    const arrow = document.querySelectorAll(".arrow");
    menuList[i].addEventListener("click", function () {
      subMenu[i].classList.toggle("visible");
      arrow[i].classList.toggle("rotate");
    });
  }
});
