$(function () {
            //스크롤시
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();                
                //nav 등장
                if (scroll >= 700) {
                    $("nav").stop().animate({ right: "80px" }, 300);
                } else {
                    $("nav").stop().animate({ right: "-200px" }, 300);
                }
                //nav li 색상 변경
                    if (scroll >= 800 && scroll < 1400) {
                        $("nav li").eq(1).css({ color: "#d01818", fontWeight: "bold", borderRight: "5px solid #d01818" });
                    } else {
                        $("nav li").eq(1).css({ color: "#e1e1e1", fontWeight: "normal", borderRight: "5px solid #e1e1e1" });
                    }
                    
                    if (scroll >= 1400 && scroll < 2300) {
                        $("nav li").eq(2).css({ color: "#d01818", fontWeight: "bold", borderRight: "5px solid #d01818" });
                    } else {
                        $("nav li").eq(2).css({ color: "#e1e1e1", fontWeight: "normal", borderRight: "5px solid #e1e1e1" });
                    }

                    if (scroll >= 2300 && scroll < 3200) {
                        $("nav li").eq(3).css({ color: "#d01818", fontWeight: "bold", borderRight: "5px solid #d01818" });
                    } else {
                        $("nav li").eq(3).css({ color: "#e1e1e1", fontWeight: "normal", borderRight: "5px solid #e1e1e1" });
                    }

                    if (scroll >= 3200 && scroll < 4200) {
                        $("nav li").eq(4).css({ color: "#d01818", fontWeight: "bold", borderRight: "5px solid #d01818" });
                    } else {
                        $("nav li").eq(4).css({ color: "#e1e1e1", fontWeight: "normal", borderRight: "5px solid #e1e1e1" });
                    }

                    if (scroll >= 4200 && scroll < 5200) {
                        $("nav li").eq(5).css({ color: "#d01818", fontWeight: "bold", borderRight: "5px solid #d01818" });
                    } else {
                        $("nav li").eq(5).css({ color: "#e1e1e1", fontWeight: "normal", borderRight: "5px solid #e1e1e1" });
                    }

                    if (scroll >= 5200 ) {
                        $("nav li").eq(6).css({ color: "#d01818", fontWeight: "bold", borderRight: "5px solid #d01818" });
                    } else {
                        $("nav li").eq(6).css({ color: "#e1e1e1", fontWeight: "normal", borderRight: "5px solid #e1e1e1" });
                    }
            });

            //nav 클릭시 이동
            $("nav li").eq(0).click(function () {
                $("html, body").stop().animate({ scrollTop: 0 }, 500);
            });
            $("nav li").eq(1).click(function () {
                $("html, body").stop().animate({ scrollTop: 830 }, 500);
            });
            $("nav li").eq(2).click(function () {
                $("html, body").stop().animate({ scrollTop: 1480 }, 500);
            });
            $("nav li").eq(3).click(function () {
                $("html, body").stop().animate({ scrollTop: 2400 }, 500);
            });
            $("nav li").eq(4).click(function () {
                $("html, body").stop().animate({ scrollTop: 3350 }, 500);
            });
            $("nav li").eq(5).click(function () {
                $("html, body").stop().animate({ scrollTop: 4545 }, 500);
            });
            $("nav li").eq(6).click(function () {
                $("html, body").stop().animate({ scrollTop: 5500 }, 500);
            });


            //플레이 리스트 클릭시 재생표시
            $(".track div").click(function () {
                $("header> img").stop().animate({ opacity: 0 }, 300 );
                
                $(".track").removeClass("on");
                $(this).parent(".track").addClass("on");

                $("#bar").stop().css({ width: "0" });
                $("#bar").stop().animate({ width: "100%" }, 10000);
            });

            $("header> img").click(function () {
                $("header> img").stop().animate({ opacity: 1 }, 300);
                $("#bar").stop().css({ width: "0" });
            });

            //플레이 리스트 클릭시 동영상 변경 
            $(".track").eq(0).find("div").click(function () {
                $("header video").attr({ src: "./video/perform.mp4" });
            });

            $(".track").eq(1).find("div").click(function () {
                $("header video").attr({ src: "./video/style.mp4" });
            });

            $(".track").eq(2).find("div").click(function () {
                $("header video").attr({ src: "./video/free.mp4" });
            });

            

            //performance 탭메뉴
            $("#perform_btn li").click(function () {
                var per = $(this).index();

                //메뉴 표시
                $("#perform_btn li").removeClass("on");
                $(this).addClass("on");

                //performance 탭메뉴 클릭시 컨텐츠 변화
                $(".per").stop().animate({ opacity: "0", left: "53%" }, 200, function () {
                    $(".per").removeClass("on");
                    $(".per").eq(per).addClass("on");
                    $(".per").stop().animate({ opacity: "1", left: "50%" }, 300);
                });
            });


            //more+ 버튼
            $(".more").mouseenter(function () {
                $(this).css({ backgroundColor: "#182842" });
                $(".more a").css({ color: "#e1e1e1", fontWeight: "normal" });
            });
            $(".more").mouseleave(function () {
                $(this).css({ backgroundColor: "initial" });
                $(".more a").css({ color: "#182842", fontWeight: "bold" });
            });


            //exterior 슬라이드 버튼클릭시
            $("#ex_btn p").click(function () {
                var ex = $(this).index();

                //버튼 모양 변경
                $("#ex_btn p").removeClass("on");
                $(this).addClass("on");

                //화면 슬라이드
                var w = $(window).width();
                var move = ex * -w;
                $("#ex_img").stop().animate({ left: move }, 300, function () {
                    //타이틀 텍스트 변경
                    if (ex == 0) {
                        $("#ex_title span").text("날렵한 인상과 와이드한 스탠드");
                        $("#ex_title strong").text("프리미엄 다이나믹 스타일");
                    } else if (ex == 1) {
                        $("#ex_title span").text("속도감이 느껴지는 다운포스 디자인");
                        $("#ex_title strong").text("프리미엄 다이나믹 스타일");
                    } else if (ex == 2) {
                        $("#ex_title span").text("고급스럽고 안정적인 후면부");
                        $("#ex_title strong").text("프리미엄 다이나믹 스타일");
                    } else if (ex == 3) {
                        $("#ex_title strong").eq(0).text("360º VR");
                        $("#ex_title span").html("상기 이미지 색상은 실제 색상과 <br /> 차이가 있을 수 있습니다.");
                    }

                    //타이틀과 버튼 색상 변경 
                    if (ex == 2) {
                        $("#ex_title h2, #ex_title p").css({ color: "#e1e1e1" });
                        $(".more").css({ border: "2px solid #e1e1e1" });
                        $(".more a").css({ color: "#e1e1e1", fontWeight: "normal" });

                        $(".more").mouseenter(function () {
                            $(this).css({ backgroundColor: "#e1e1e1" });
                            $(".more a").css({ color: "#182842", fontWeight: "bold" });
                        });
                        $(".more").mouseleave(function () {
                            $(this).css({ backgroundColor: "initial" });
                            $(".more a").css({ color: "#e1e1e1", fontWeight: "normal" });
                        });
                    } else {
                        $("#ex_title h2, #ex_title p").css({ color: "#182842" });
                        $(".more").css({ border: "2px solid #182842" });
                        $(".more a").css({ color: "#182842", fontWeight: "bold" });

                        $(".more").mouseenter(function () {
                            $(this).css({ backgroundColor: "#182842" });
                            $(".more a").css({ color: "#e1e1e1", fontWeight: "normal" });
                        });
                        $(".more").mouseleave(function () {
                            $(this).css({ backgroundColor: "initial" });
                            $(".more a").css({ color: "#182842", fontWeight: "bold" });
                        });
                    }

                });
            });
            

            //버튼 클릭시
            $("#ex_color p").click(function () {
                var color = $(this).index();
                //버튼 on class
                $("#ex_color p").removeClass("on");
                $(this).addClass("on");

                //자동차 사진 변경
                var at = "../images/exterior/" + color + ".png"
                $("#ex_rot img").eq(0).attr({ src: at });

                //rot_btn 표시
                $("#ex_rot> img").show();
                $("#rot_img").hide();
            });


            //버튼 클릭시 색이름 변경
            $("#ex_color p").eq(0).click(function () {
                $("#ex_color span").text("하이크로마 레드");
            });
            $("#ex_color p").eq(1).click(function () {
                $("#ex_color span").text("마이크로 블루");
            });
            $("#ex_color p").eq(2).click(function () {
                $("#ex_color span").text("딥 크로마 브루");
            });
            $("#ex_color p").eq(3).click(function () {
                $("#ex_color span").text("오로라 블랙 펄");
            });
            $("#ex_color p").eq(4).click(function () {
                $("#ex_color span").text("판테라 메탈");
            });
            $("#ex_color p").eq(5).click(function () {
                $("#ex_color span").text("스노우 화이트 펄");
            });


            //360도 돌리기
            $("#rot_btn").click(function () {
                $("#rot_btn").hide();

                var imgs = ""
                for (var i = 0; i < 36; i++ ) {
                    imgs += "<img src= '../images/360/H4R_" + i + ".jpg'>"
                }

                $("#rot_img").html(imgs);
                $("#rot_img").show();
                $("#ex_rot img").eq(0).hide();

                $("#ex_rot").mousemove(function (e) {
                    
                    var wid = $("#ex_rot").width();
                    var xpos = e.pageX;
                    var i = Math.floor((xpos / wid) * 34 - 7);

                    $("#rot_img img").hide();
                    $("#rot_img img").eq(i).show();
                });
            });


            /************************************************************************************************************************************/

            //interior popup
            $("#inbtn li").click(function () {
                var p = $(this).index();

                //popup창 애니메이션
                $(".insub").eq(p).css({ display: "block" });
                $(".insub").stop().animate({ opacity: "1" }, 300);
                
                //text 애니메이션
                $(".insub p:nth-child(4), .insub p:nth-child(5)").stop().animate({ opacity: 1, marginLeft: 0 },500);
            });

            //popup창 닫기
            $("#inbtnpopup img").click(function () {
                $(".insub p:nth-child(4), .insub p:nth-child(5)").stop().animate({ opacity: 0, marginLeft: "-40px" }, 300, function () {
                    $(".insub").stop().animate({ opacity: 0 }, 300, function () {
                        $(".insub").css({ display: "none" });
                    });
                });
                
            });



            //safety btn
            var s = 0;
            //오른쪽 버튼
            $("#safebtn img:nth-child(2)").click(function () {
                if (s < 4) {
                    s++;
                    var move = -1100 * s;
                    $("#safeboxwrap, #safeboxwrap div p span").stop().animate({ marginLeft: move }, 500);
                } else {
                    false;
                }
                $("#safesubbox p img").removeClass()
                $("#safesubbox p img").eq(s).addClass("on")
            });
            //왼쪽 버튼
            $("#safebtn img:nth-child(1)").click(function () {
                if (s > 0) {
                    s--;
                    var move = -1100 * s;
                    $("#safeboxwrap, #safeboxwrap div p span").stop().animate({ marginLeft: move }, 500);
                } else {
                    false;
                }
                $("#safesubbox p img").removeClass()
                $("#safesubbox p img").eq(s).addClass("on")
            });

            //safety sub click
            $("#safesubbox p").click(function () {
                var ssub = $(this).index();
                $("#safesubbox p img").removeClass()
                $("#safesubbox p img").eq(ssub).addClass("on")

                var move = -1100 * ssub;
                $("#safeboxwrap, #safeboxwrap div p span").stop().animate({ marginLeft: move }, 500);
                s = ssub;
            });

            //자동차
            $(window).scroll(function () {
                var p = $("html").scrollTop();
                if (p >= 5000) {
                    $("#pur p:nth-child(5)").stop().animate({ left: "600px" }, 1000);
                } else {
                    $("#pur p:nth-child(5)").stop().animate({ left: "1800px" }, 1000);
                }

            });
        });