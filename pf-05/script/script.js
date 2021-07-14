$(function(){
    
    var x = 0;
    setInterval (function(){
        if (x < 2) {
            x++;
        } else {
            x = 0;
        }
        var sp = x*(-300)+"px";
        $(".sliderList").animate({top:sp},400);
    }, 2000);




});