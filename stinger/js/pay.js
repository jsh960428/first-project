  $(document).ready(function () {

            //탭 메뉴 변경
            var step = 0;

            $("#btn p").eq(0).click(function () {
                step = 0;
                    $("#sel> div").removeClass("on");
                    $("#sel> div").eq(step).addClass("on");
                    $("nav li").removeClass("on");
                    $("nav li").eq(step).addClass("on");
            });

            $("#btn p").eq(1).click(function () {
                if (step > 0 && step <= 3) {
                    step -= 1;
                    $("#sel> div").removeClass("on");
                    $("#sel> div").eq(step).addClass("on");
                    $("nav li").removeClass("on");
                    $("nav li").eq(step).addClass("on");
                    
                    if (step == 2) {
                        $("#result").stop().animate({ marginTop: 0 });
                    }
                } else { false; }
            });

            $("#btn p").eq(2).click(function () {
                if (step >= 0 && step <3) {
                    step += 1;
                    $("#sel> div").removeClass("on");
                    $("#sel> div").eq(step).addClass("on");
                    $("nav li").removeClass("on");
                    $("nav li").eq(step).addClass("on");

                    if (step == 1) {
                        $("#result_op").html("<p>" + car + "</p><p>외장: " + ex_color + "</p><p>내장: " + in_color + "</p>");
                    } else if (step == 3) {
                        $("#result").stop().animate({ marginTop: "100px" });
                    }
                } else { false; }
            });



            
            //step1 박스 클릭시
            $(".step01 div").click(function () {
                //선택한 박스 표시
                $(".step01 div").removeClass("on");
                $(this).addClass("on");
            });

            //color 박스 클릭시
            $(".color01 .cc p").click(function () {
                var corex = $(this).index();
                //선택한 박스 표시
                $(".color01 .cc p").removeClass("on");
                $(this).addClass("on");
            });

            $(".color02 .cc p").click(function () {
                var corin = $(this).index();
                //선택한 박스 표시
                $(".color02 .cc p").removeClass("on");
                $(this).addClass("on");
            });

            //칼라 이름 변경
            $(".color01 .cc p").eq(0).click(function () {
                $(".color01 p:nth-child(1) span").text("하이크로마 레드");
            });
            $(".color01 .cc p").eq(1).click(function () {
                $(".color01 p:nth-child(1) span").text("마이크로 블루");
            });
            $(".color01 .cc p").eq(2).click(function () {
                $(".color01 p:nth-child(1) span").text("딥 크로마 블루");
            });
            $(".color01 .cc p").eq(3).click(function () {
                $(".color01 p:nth-child(1) span").text("오로라 블랙 펄");
            });
            $(".color01 .cc p").eq(4).click(function () {
                $(".color01 p:nth-child(1) span").text("판테라 메탈");
            });
            $(".color01 .cc p").eq(5).click(function () {
                $(".color01 p:nth-child(1) span").text("스노우 화이트 펄");
            });
            $(".color02 .cc p").eq(0).click(function () {
                $(".color02 p:nth-child(1) span").text("다크 레드 팩");
            });
            $(".color02 .cc p").eq(1).click(function () {
                $(".color02 p:nth-child(1) span").text("블랙 원톤 인테리어");
            });

            //step2 박스 클릭시
            $(".step02 div").click(function () {
                var opin = $(this).index();
                $(this).toggleClass("on");
                $("#re_option p").eq(opin).toggleClass("on");
            });
            



            //변수선언
            var car = "스팅어 가솔린 2.0 터보 프라임";
            var ex_color = "하이크로마 레드";
            var in_color = "다크 레드 팩";
            var car_price = 35050000;
            var option_price = 0;
            var total_price = car_price + option_price;
            $("#price").text(total_price);



            //첫번째 옵션박스 클릭시
            $(".step01 div").click(function () {

                var car_in = $(this).index();

                if (car_in == 0) {
                    car = "스팅어 가솔린 2.0 터보 프라임";
                    car_price = 35030000;
                } else if (car_in == 1) {
                    car = "스팅어 가솔린 2.0 터보 플래티넘";
                    car_price = 37700000;
                } else if (car_in == 2) {
                    car = "스팅어 2.2 디젤 프라임 라이트";
                    car_price = 37210000;
                } else if (car_in == 3) {
                    car = "스팅어 2.2 디젤 프라임";
                    car_price = 38480000;
                } else if (car_in == 4) {
                    car = "스팅어 2.2 디젤 플래티넘";
                    car_price = 41130000;
                } else if (car_in == 5) {
                    car = "스팅어 가솔린 3.3 터보 GT";
                    car_price = 49380000;
                }

                total_price = car_price + option_price;
                $("#result_op").html("<p>" + car + "</p><p>외장: </p><p>내장: </p>");
                $("#price").text(total_price);

            });


            //외장 버튼 클릭시 정보변경
            $(".color01 .cc p").click(function () {
                var ex_in = $(this).index();

                if (ex_in == 0) {
                    ex_color = "하이크로마 레드";
                } else if (ex_in == 1) {
                    ex_color = "마이크로 블루";
                } else if (ex_in == 2) {
                    ex_color = "딥 크로마 블루";
                } else if (ex_in == 3) {
                    ex_color = "오로라 블랙 펄";
                } else if (ex_in == 4) {
                    ex_color = "판테라 메탈";
                } else if (ex_in == 5) {
                    ex_color = "스노우 화이트 펄";
                }

                $("#result_op").html("<p>" + car + "</p><p>외장: " + ex_color + "</p><p>내장: " + in_color + "</p>");

            });

            
            //내장 버튼 클릭시 정보변경
            $(".color02 .cc p").click(function () {
                var in_in = $(this).index();

                if (in_in == 0) {
                    in_color = "다크 레드 팩";
                } else if (in_in == 1) {
                    in_color = "블랙 원톤 인테리어";
                }

                $("#result_op").html("<p>" + car + "</p><p>외장: " + ex_color + "</p><p>내장: " + in_color + "</p>");

            });



            //옵션 버튼 클릭시 정보변경
            $(".step02 div").eq(0).toggle(function () {
                option_price = 2450000;
                total_price += option_price;
                $("#price").text(total_price);
            }, function () {
                ption_price = 2450000;
                total_price -= option_price;
                $("#price").text(total_price);
            });

            $(".step02 div").eq(1).toggle(function () {
                option_price = 790000;
                total_price += option_price;
                $("#price").text(total_price);
            }, function () {
                ption_price = 790000;
                total_price -= option_price;
                $("#price").text(total_price);
            });

            $(".step02 div").eq(2).toggle(function () {
                option_price = 980000;
                total_price += option_price;
                $("#price").text(total_price);
            }, function () {
                ption_price = 980000;
                total_price -= option_price;
                $("#price").text(total_price);
            });

            $(".step02 div").eq(3).toggle(function () {
                option_price = 980000;
                total_price += option_price;
                $("#price").text(total_price);
            }, function () {
                ption_price = 980000;
                total_price -= option_price;
                $("#price").text(total_price);
            });

            $(".step02 div").eq(4).toggle(function () {
                option_price = 1470000;
                total_price += option_price;
                $("#price").text(total_price);
            }, function () {
                ption_price = 1470000;
                total_price -= option_price;
                $("#price").text(total_price);
            });



        });