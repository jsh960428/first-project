$(function(){
    
    // swipe
    window.mySwipe = $('#mySwipe').Swipe({
        startslide : 0, // 초기 첫 배너 노출
        auto : 2000, // 2초 이후 자동 이동
        continuous : true, //배너 반복 롤링
        stopPropagation : true, // 하위 요소에 이벤트 전달 차단
        disableScroll : true, // 슬라이드 배너에 스크롤 바 생성 차단
        callback : function(index, element){}, // 이벤트 완료시 콜백함수 실행
        transitionEnd : function(index, element) {} // 화면 전환시 익명함수 실행
    }).data('Swipe');

    //버튼실행
    $(".prevBtn").on("click", function(){
        mySwipe.prev(); //이전 배너로 이동
    });
    $(".nextBtn").on("click", function(){
        mySwipe.next(); //다음 배너로 이동
    });

    $(".menu>ul>li:nth-child(1)").on("click", function () {
        var about = $("#slider").position();
        $("html, body").animate({
            scrollTop: about.top - 80
        }, 400);
    });
    $(".menu>ul>li:nth-child(2)").on("click", function () {
        var about = $(".info").position();
        $("html, body").animate({
            scrollTop: about.top - 25
        }, 400);
    });
    $(".menu>ul>li:nth-child(3)").on("click", function () {
        var about = $(".play").position();
        $("html, body").animate({
            scrollTop: about.top - 80
        }, 400);
    });
    $(".menu>ul>li:nth-child(4)").on("click", function () {
        var about = $(".event").position();
        $("html, body").animate({
            scrollTop: about.top - 50
        }, 400);
    });
    $(".menu>ul>li:nth-child(5)").on("click", function () {
        var about = $("section.help").position();
        $("html, body").animate({
            scrollTop: about.top - 20
        }, 400);
    });


    $(window).scroll(function () {
        var height = $(document).scrollTop();
        if (height <= 660) {
            $(".menu>ul>li").removeClass("on");
            $(".menu>ul>li:nth-child(1)").addClass("on");

        } else if (height >= 661 && height <= 1950) {
            $(".menu>ul>li").removeClass("on");
            $(".menu>ul>li:nth-child(2)").addClass("on");

        } else if (height >= 1951 && height <= 3053) {
            $(".menu>ul>li").removeClass("on");
            $(".menu>ul>li:nth-child(3)").addClass("on");

        } else if (height >= 3054 && height <= 4345) {
            $(".menu>ul>li").removeClass("on");
            $(".menu>ul>li:nth-child(4)").addClass("on");

        } else if (height >= 4346) {
            $(".menu>ul>li").removeClass("on");
            $(".menu>ul>li:nth-child(5)").addClass("on");

        } else {
            $(".menu>ul>li").removeClass("on");
        }
    });
});