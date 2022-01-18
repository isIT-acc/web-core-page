import { addClickListener, addSpaceEnterListener } from "./main";

var readMoreHandler = function (event) {
  var hiddenPartOfText =
    event.parentElement.previousElementSibling.querySelector(".sec-paragraph");
  if (hiddenPartOfText) {
    hiddenPartOfText.classList.toggle("about-company-text__sec-paragraph--displayed");
    var secPartOfParagraph = hiddenPartOfText.querySelector(
      ".sec-paragraph__sec-part"
    );
    if (secPartOfParagraph) {
      secPartOfParagraph.classList.toggle("sec-paragraph__sec-part--displayed");
    }
  }
};

var aboutCompanyBtn = document.querySelector(".about-company__text .btn");
var hiddenPartOfText = document.querySelector(".sec-paragraph");
if (aboutCompanyBtn && hiddenPartOfText) {
  addClickListener(aboutCompanyBtn.children[0], readMoreHandler);
  addSpaceEnterListener(aboutCompanyBtn.children[0], readMoreHandler);
}
