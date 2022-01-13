var hiddenTextLabels=document.querySelectorAll(".continuation__text");
var swiperWrapper=document.querySelector(".swiper-wrapper");
var brandItems=document.querySelectorAll(".brand-item");
var showAllBtn=document.querySelector(".swiper__continuation");

if(showAllBtn && brandItems){
  addOrRemoveTabindexAttr(brandItems,showAllBtn.getBoundingClientRect().top);
}
// add or remove tabindex attribute depends 
// on relative position of topBorder of showAllBlock element
function addOrRemoveTabindexAttr(elements,topBorder){
  for (var i=brandItems.length-1;i>=0;i--){
    if(brandItems[i].getBoundingClientRect().bottom > topBorder){
      brandItems[i].removeAttribute("tabindex");
      continue;
    }
    brandItems[i].setAttribute("tabindex","1");
  }
}



function showAllBtnHandler(showAllBtn){
  var classes=showAllBtn.classList;
  if(classes.toggle("continuation__text--displayed")){
    showAllBtn.style.transform="translateY(-50%) translateY(15px)";
    if(swiperWrapper) swiperWrapper.style.height="auto";
    showAllBtn.parentElement.style.position="relative";
  }
  else{
    showAllBtn.style.removeProperty("transform");
    if(swiperWrapper) swiperWrapper.style.removeProperty("height");
    showAllBtn.parentElement.style.removeProperty("position");
  }
  if(showAllBtn && brandItems){
    addOrRemoveTabindexAttr(brandItems,showAllBtn.getBoundingClientRect().top);
  }
}
function addShowAllBtnClickListener(showAllBtn){
  showAllBtn.addEventListener("click",function(){
    showAllBtnHandler(this);
  });
}
function addShowAllBtnKeyDownListener(showAllBtn){
  showAllBtn.addEventListener("keydown",function(event){
    if(event.code === "Space" || event.code === "Enter" ){
      showAllBtnHandler(this);
    }
  });
}

if(hiddenTextLabels.length>0){
  for(var i=0;i<hiddenTextLabels.length;i++){
    addShowAllBtnClickListener(hiddenTextLabels[i]);
    addShowAllBtnKeyDownListener(hiddenTextLabels[i]);
  }
}

window.addEventListener("resize",function(event){
  if(showAllBtn && brandItems){
    addOrRemoveTabindexAttr(brandItems,showAllBtn.getBoundingClientRect().top);
  }
  if(window.innerWidth<768){
    if(swiperWrapper&&swiperWrapper.style.height) swiperWrapper.style.removeProperty("height");
  }
  else{ 
    if(swiperWrapper) swiperWrapper.removeAttribute("style");
    if(swiperWrapper && !swiperWrapper.style.height && document.querySelector(".continuation__text--displayed")){
      swiperWrapper.style.height="auto";
    }
  }
})