$(function () {

    $(function () {
        $('nav>ul>li').mouseenter(function () {
            $('.submenu').stop().slideDown(400);
        });
        $('nav>ul>li').mouseleave(function () {
            $('.submenu').stop().slideUp(400);
        });
    });

    //슬라이드 이미지
    var x = 0;
    setInterval(function () {
        if (x < 2) {
            x++;
        } else {
            x = 0;
        };
        var sliderPosition = x * (-1200) + "px";
        $('.sliderList').animate({
            left: sliderPosition
        }, 400);
        console.log(x)
    }, 3000);


    $('.LayerPopup').on('click', function(e) {
        e.preventDefault();
        $('#Popup').fadeIn();
    });
    $('#Popup').on('click', function(e) {
        $('#Popup').fadeOut();
    });



});