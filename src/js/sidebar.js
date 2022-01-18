import { addClickListener, addSpaceEnterListener } from "./main";

var hamburgerBtn = document.querySelector(".btn--hamburger-icon");
var navbarCloseBtn = document.querySelector(".site__navbar .btn--close-icon");
var sidebarMenuItems = document.querySelectorAll(".vertical-menu__item");

// var bluredScreenHandler = function () {
//     navbarCloseBtnHandler();
// }

var sidebarMenuItemHandler = function (event) {
  console.log(event);
  if (!event.children[0].classList.contains("right-rounded-border--visible")) {
    sidebarMenuItems.forEach(function (value) {
      value.children[0].classList.remove("right-rounded-border--visible");
      value.children[1].classList.remove("vertical-menu__link--choosed");
    });
    event.children[0].classList.add("right-rounded-border--visible");
    event.children[1].classList.add("vertical-menu__link--choosed");
  }
};

var hamburgerBtnHandler = function () {
  var siteNavbar = document.querySelector(".site__navbar");
  var blurryWindow = document.querySelector(".blurry-window");
  if (siteNavbar) {
    siteNavbar.style.setProperty(
      "box-shadow",
      "-2px 0px 4px rgb(69 79 126 / 2%), 16px 0px 52px rgb(14 24 80 / 20%)"
    );
    siteNavbar.style.setProperty("transform", "translateX(0)");
    siteNavbar.style.setProperty("overflow", "scroll");
    document.querySelector("body").style.setProperty("overflow", "hidden");
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
    siteNavbar.style.removeProperty("overflow");
  }
  if (blurryWindow) {
    blurryWindow.style.removeProperty("z-index");
    blurryWindow.style.removeProperty("background-color");
  }
  document.querySelector("body").style.removeProperty("overflow");
};

if (hamburgerBtn) {
  addClickListener(hamburgerBtn, hamburgerBtnHandler);
  addSpaceEnterListener(hamburgerBtn, hamburgerBtnHandler);
}

if (navbarCloseBtn) {
  addClickListener(navbarCloseBtn, navbarCloseBtnHandler);
  addSpaceEnterListener(navbarCloseBtn, navbarCloseBtnHandler);
}

for (var i = 0; i < sidebarMenuItems.length; i++) {
  addClickListener(sidebarMenuItems[i], sidebarMenuItemHandler);
  addSpaceEnterListener(sidebarMenuItems[i], sidebarMenuItemHandler);
}
