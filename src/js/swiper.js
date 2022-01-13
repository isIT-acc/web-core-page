var swiperWrapper=document.querySelector(".swiper-wrapper");
var swiper = new Swiper('.swiper', {
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
  swiper.on('fromEdge', function (swiper) {
    if(swiperWrapper && swiper.activeIndex!==0){
        swiperWrapper.style.removeProperty('margin-left');      
    }  
  });
  swiper.on('reachEnd', function () {
    if(swiperWrapper){
        swiperWrapper.style.marginLeft="-65px";
    }
  });
  swiper.on('resize',function(){
    if(swiperWrapper && window.innerWidth>=768){
      swiperWrapper.style.removeProperty("transform");
    }
    else{
      if(swiper.isEnd && swiperWrapper){
        swiperWrapper.style.marginLeft="-65px";
      }
    }
  });
  swiper = document.querySelector('.swiper').swiper;