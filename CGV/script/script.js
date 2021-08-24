$(function(){

    //따라다니는 퀵메뉴
    $(function () {
        $(window).scroll(function () {
            var scrollTopNum = $(document).scrollTop() + 150;
            if (scrollTopNum <= 150) {
                scrollTopNum == 150;
            }
            if ($(this).scrollTop() >= 1250) {
                scrollTop() == 1250;
            }

            $("#quick").stop().animate({
                top: scrollTopNum
            }, 700);
        });


    });

    
    //슬라이드 배너
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

    // 메뉴
    $(function(){
        $('li.main').mouseover(function(){
            $(this).children('li.main>ul').stop().fadeIn(600);
        });
        $('li.main').mouseout(function(){
            $('li.main>ul').stop().fadeOut();
        });
    });
    
     

});