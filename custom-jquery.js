
$(document).ready(function(){   
    $(window).scroll(function(){
        var activeClass= $("#myScrollspy ul").find('.active');        
        $("#myScrollspy ul li.active").addClass("visited");
        var nextVisited= $("#myScrollspy ul li.active").next().hasClass("visited");
        if(nextVisited){
         $("#myScrollspy ul li.active").next().removeClass("visited");
        }  
      }); 
      // $("#myScrollspy a").click(function(){
      //   var activeClass= $("#myScrollspy ul").find('.active');        
      //   $("#myScrollspy ul li.active").addClass("visited");
      //   var nextVisited= $("#myScrollspy ul li.active").next().hasClass("visited");
      //   if(nextVisited){
      //    $("#myScrollspy ul li.active").nextAll().removeClass("visited");
      //   }  
      // });   
  });