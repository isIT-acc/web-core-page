import { addClickListener, addSpaceEnterListener } from "./main";
import { navbarCloseBtnHandler } from "./sidebar";

var phoneBtns = document.querySelectorAll(".btn--phone-icon");
var messageBtns = document.querySelectorAll(".btn--message-icon");
var requestCallCloseBtn = document.querySelector(
  ".modal-screen--request-a-call .btn--close-icon"
);
var sendFeedbackCloseBtn = document.querySelector(
  ".modal-screen--send-feedback .btn--close-icon"
);
var modalScreens = document.querySelectorAll(".modal-screen");

var modalScreenCloseBtnHandler = function (event) {
  var blurryWindow = document.querySelector(".blurry-window");
  event.parentElement.parentElement.parentElement.style.removeProperty("transform");
  event.parentElement.parentElement.parentElement.style.removeProperty("z-index");
  event.parentElement.parentElement.parentElement.style.removeProperty("opacity");
  blurryWindow.style.removeProperty("z-index");
  document.querySelector("body").style.removeProperty("overflow");
};

export var hideModalScreens = function () {
  for (var j = 0; j < modalScreens.length; j++) {
    modalScreens[j].style.removeProperty("transform");
    modalScreens[j].style.removeProperty("z-index");
    modalScreens[j].style.removeProperty("opacity");
    document.querySelector("body").style.removeProperty("overflow");
  }
};
var phoneBtnHandler = function () {
  var blurryWindow = document.querySelector(".blurry-window");
  for (var j = 0; j < modalScreens.length; j++) {
    if (modalScreens[j].classList.contains("modal-screen--request-a-call")) {
      modalScreens[j].style.setProperty("transform", "translateX(0)");
      modalScreens[j].style.setProperty("z-index", "13");
      modalScreens[j].style.setProperty("opacity", "1");
      navbarCloseBtnHandler();
      blurryWindow.style.setProperty("z-index", "11");
      window.scroll(0,0);
      document.querySelector("body").style.setProperty("overflow", "hidden");
    } else {
      modalScreens[j].style.removeProperty("transform");
      modalScreens[j].style.removeProperty("opacity");      
    }
  }
};

var messageBtnHandler = function () {
  var blurryWindow = document.querySelector(".blurry-window");
  for (var j = 0; j < modalScreens.length; j++) {
    if (modalScreens[j].classList.contains("modal-screen--send-feedback")) {
      modalScreens[j].style.setProperty("transform", "translateX(0)");
      modalScreens[j].style.setProperty("z-index", "13");
      modalScreens[j].style.setProperty("opacity", "1");
      navbarCloseBtnHandler();
      blurryWindow.style.setProperty("z-index", "11");
      window.scroll(0,0);
      document.querySelector("body").style.setProperty("overflow", "hidden");
    } else {
      modalScreens[j].style.removeProperty("transform");
      modalScreens[j].style.removeProperty("opacity");
    }
  }
};

for (var i = 0; i < phoneBtns.length; i++) {
  addClickListener(phoneBtns[i], phoneBtnHandler);
  addSpaceEnterListener(phoneBtns[i], phoneBtnHandler);
}

for (var i = 0; i < messageBtns.length; i++) {
  addClickListener(messageBtns[i], messageBtnHandler);
  addSpaceEnterListener(messageBtns[i], messageBtnHandler);
}

addClickListener(requestCallCloseBtn, modalScreenCloseBtnHandler);
addClickListener(sendFeedbackCloseBtn, modalScreenCloseBtnHandler);
