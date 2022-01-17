import { addClickListener, addSpaceEnterListener } from "./main";

var hamburgerBtn = document.querySelector(".btn--hamburger-icon");
var closeBtn = document.querySelector(".btn--close-icon");

var hamburgerBtnHandler = function () {
  var siteNavbar = document.querySelector(".site__navbar");
  var siteContainer = document.querySelector(".site__container");
  if (siteNavbar) {
    siteNavbar.style.setProperty(
      "box-shadow",
      "-2px 0px 4px rgb(69 79 126 / 2%), 16px 0px 52px rgb(14 24 80 / 20%)"
    );
    siteNavbar.style.setProperty("transform", "translateX(0)");
  }
  if (siteContainer) {
    siteContainer.classList.add("site__container--blured");
  }
};

var closeBtnHandler = function () {
  var siteNavbar = document.querySelector(".site__navbar");
  var siteContainer = document.querySelector(".site__container");
  if (siteNavbar) {
    siteNavbar.style.removeProperty("box-shadow");
    siteNavbar.style.removeProperty("transform");
  }
  if (siteContainer) {
    siteContainer.classList.remove("site__container--blured");
  }
};
if(hamburgerBtn){
    addClickListener(hamburgerBtn, hamburgerBtnHandler);
    addSpaceEnterListener(hamburgerBtn, hamburgerBtnHandler);
}
if (closeBtn) {
  addClickListener(closeBtn, closeBtnHandler);
  addSpaceEnterListener(closeBtn, closeBtnHandler);
}
