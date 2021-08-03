$(function(){
    //  plus, minus
    var current = 1;
    var $window = $(window);
    var $body=$(".conbox>table");
    var $btnZoomIn = $(".button-zoomin");
    var $btnZoomOut = $(".button-zoomout");    
    $btnZoomIn.on("click",function(){
        current += 0.1; zoom();
    });
    $btnZoomOut.on("click",function(){
        current += -0.1; zoom();
    });
  function zoom(){
      if (current > 1.3){
          alert('더이상 화면을 확대 하실 수 없습니다.');
          return false;
      }
      if (current < 0.8){
          alert('더이상 화면을 축소 하실 수 없습니다.');
          return false;
      }
      $body.css({
        zoom:current,
        '-moz-transform':'scale('+current+')'
      });
  }  
 });
 
// 프린트 기능
 function print_current_page(){
    window.print();
}