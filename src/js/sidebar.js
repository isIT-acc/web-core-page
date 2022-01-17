import { addClickListener, addSpaceEnterListener } from "./main";

var hamburgerBtn = document.querySelector(".btn--hamburger-icon");
var navbarCloseBtn = document.querySelector(".site__navbar .btn--close-icon");

// var bluredScreenHandler = function () {
//     navbarCloseBtnHandler();
// }

var hamburgerBtnHandler = function () {
  var siteNavbar = document.querySelector(".site__navbar");
  var blurryWindow = document.querySelector(".blurry-window");
  if (siteNavbar) {
    siteNavbar.style.setProperty(
      "box-shadow",
      "-2px 0px 4px rgb(69 79 126 / 2%), 16px 0px 52px rgb(14 24 80 / 20%)"
    );
    siteNavbar.style.setProperty("transform", "translateX(0)");
  }
  if (blurryWindow) {
    blurryWindow.style.setProperty(
      "background-color",
      "rgba(255,255,255,96.05%)"
    );
    blurryWindow.style.setProperty("z-index", "10");    
  }
};

export var navbarCloseBtnHandler = function () {
  var siteNavbar = document.querySelector(".site__navbar");
  var blurryWindow = document.querySelector(".blurry-window");
  if (siteNavbar) {
    siteNavbar.style.removeProperty("box-shadow");
    siteNavbar.style.removeProperty("transform");
  }
  if (blurryWindow) {
    blurryWindow.style.removeProperty("z-index");
    blurryWindow.style.removeProperty("background-color");
  }
};
if (hamburgerBtn) {
  addClickListener(hamburgerBtn, hamburgerBtnHandler);
  addSpaceEnterListener(hamburgerBtn, hamburgerBtnHandler);
}
if (navbarCloseBtn) {
  addClickListener(navbarCloseBtn, navbarCloseBtnHandler);
  addSpaceEnterListener(navbarCloseBtn, navbarCloseBtnHandler);
}