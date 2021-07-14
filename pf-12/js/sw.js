$(function(){
    
    // swipe
    window.mySwipe = $('#mySwipe').Swipe({
        startslide : 0, // 초기 첫 배너 노출
        auto : 300, // 0.3초 이후 자동 이동
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
});