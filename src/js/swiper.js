import Swiper, { Navigation, Pagination } from 'swiper';
import {addOrRemoveTabindexAttr, addSpaceEnterListener, addClickListener} from './main';
Swiper.use([Navigation, Pagination]);

var htmlSwipers = document.querySelectorAll(".swiper");

initSwipers(htmlSwipers);


function initSwipers(htmlSwipers){
  for(var i=0; i<htmlSwipers.length; i++){
    var swiperWrapper=htmlSwipers[i].querySelector(".swiper-wrapper");
    var swiperItems=htmlSwipers[i].querySelectorAll(".swiper-slide");
    var showAllBtn=htmlSwipers[i].querySelector(".swiper__continuation");
    var hiddenTextLabel=htmlSwipers[i].querySelector(".continuation__hidden-text");
    initSwiper(htmlSwipers[i], [swiperWrapper, swiperItems, showAllBtn]);
    addOrRemoveTabindexAttr(swiperItems,showAllBtn);
    addClickListener(hiddenTextLabel, swiperShowAllBtnHandler, [swiperWrapper, swiperItems]);
    addSpaceEnterListener(hiddenTextLabel,swiperShowAllBtnHandler,[swiperWrapper, swiperItems]);
  }
}
 
function initSwiper(htmlSwiper, paramsArr){
  var librarySwiper = new Swiper(htmlSwiper, {
    CSSWidthAndHeight: true,
    slidesPerView:'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return'<span class="' + className + '"></span>';
      }    
    },
  });
  librarySwiper.on('fromEdge', function (swiper) {
    if(paramsArr[0] && swiper.activeIndex!==0){
      paramsArr[0].style.removeProperty('margin-left');      
    }  
  });
  librarySwiper.on('reachEnd', function () {
    if(paramsArr[0]){
      paramsArr[0].style.marginLeft="-65px";
    }
  });
  librarySwiper.on('resize',function(){
    if(paramsArr[1] && paramsArr[2]){
      addOrRemoveTabindexAttr(paramsArr[1],paramsArr[2]);
    }
    if(paramsArr[0] && window.innerWidth>=768){
      paramsArr[0].style.removeProperty("transform");
      if(paramsArr[0]) paramsArr[0].removeAttribute("style");
      if(paramsArr[0] && !paramsArr[0].style.height && htmlSwiper.querySelector(".continuation__hidden-text--displayed")){
        paramsArr[0].style.height="auto";
      }
    }
    else{
      if(librarySwiper.isEnd && paramsArr[0]){
        paramsArr[0].style.marginLeft="-65px";
      }
      if(paramsArr[0] && paramsArr[0].style.height) paramsArr[0].style.removeProperty("height");
    }
  });
  librarySwiper = htmlSwiper.swiper;
}

// options contain swiperWrapper and swiperItems
function swiperShowAllBtnHandler(showAllBtn, options){
  if(showAllBtn){
    var classes=showAllBtn.classList;
    if(classes.toggle("continuation__hidden-text--displayed")){
      showAllBtn.style.transform="translateY(-50%) translateY(15px)";
      if(options[0]) options[0].style.height="auto";
      showAllBtn.parentElement.style.position="relative";
    }
    else{
      showAllBtn.style.removeProperty("transform");
      if(options[0]) options[0].style.removeProperty("height");
      showAllBtn.parentElement.style.removeProperty("position");
    }
    // for user keyboard interaction with browser
    if(options[1]){
      addOrRemoveTabindexAttr(options[1],showAllBtn);
    }
  }
}