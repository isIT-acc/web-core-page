export function addClickListener(element,handler,paramsArray){
  if(element && handler){
    element.addEventListener("click",function(){
      handler(this, paramsArray);
    });
  }
}

export function addSpaceEnterListener(element, handler, paramsArray){
  element.addEventListener("keydown",function(event){
    if(event.code === "Space" || event.code === "Enter" ){
      handler(this, paramsArray);
    }
  });
}

// add or remove tabindex attribute to elements depends 
// on top border of element above 
// (for user keyboard interaction with browser)
export function addOrRemoveTabindexAttr(elements,aboveElement){
  if(elements && aboveElement){
    var topBorder=aboveElement.getBoundingClientRect().top;
    for (var i=elements.length-1;i>=0;i--){
      if(elements[i].getBoundingClientRect().bottom > topBorder){
        elements[i].removeAttribute("tabindex");
        continue;
      }
      elements[i].setAttribute("tabindex","0");
    }
  }  
}
