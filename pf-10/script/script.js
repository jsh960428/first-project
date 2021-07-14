$(function(){

    var x = 0;
    
    setInterval(function(){
        if (x<3){
            x++;
        } else {
            x=0;
        }
        var sliderPostiton = x * (-1200) + "px"
        
        $(".sliderList").animate({left:sliderPostiton},400);
        console.log(x);
    }, 3000);
    
    $(function(){
        $('li.topN').on('click', function(){
            $('#popup').slideDown(400);
            $('li.topN').css('background' , '#000');
            $('li.topN>a').css('color' , '#fff');
        });
        $('.close').on('click', function(){
            $('#popup').slideUp(400);
            $('li.topN').css('background' , '#fff');
            $('li.topN>a').css('color' , '#000');
        });
    });

    $(function(){
        $('li.main').mouseover(function(){
            $(this).children('ul.sub').stop().slideDown(400);
        });
        $('li.main').mouseout(function(){
            $('ul.sub').stop().slideUp(400);
        });
    });
    
     

});