var flag='hello';
// console.log(flag);
$(document).ready(function(){         
        $(window).scroll(function(){                  
            if(flag!=='nothello')  {
                // console.log("scoll enter");
                var activeClass= $("#myScrollspy ul").find('.active').addClass("visited");        
                var nextVisited= $(activeClass).next().hasClass("visited");
                if(nextVisited){                    
                $(activeClass).next().removeClass("visited");
                }                 
            } 
            else{
              flag='hello';
            }           
          });    
  });
  
  function clickFunction(current) {
      // console.log("enter click");
    flag='nothello';           
    $(current).parent().addClass("visited");
    var nextVisit= $(current).parent().next().hasClass("visited");
    if(nextVisit){
     $(current).parent().nextAll().removeClass("visited");
    }    
}