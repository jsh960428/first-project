$(function(){
    $(window).scroll(function () {

        // project1
        if ($(this).scrollTop() > 1000) {
            $("#project1>#project1_img").animate({ opacity: "1" }, 400, function() {
                $("#project1>#project1_text").animate({ marginLeft: "0" }, 400, function() {
                    $("#project1_text>.stie_btn").animate({ opacity : "1" }, 400);
                });
            });
        }

        // project2
        if ($(this).scrollTop() > 1640) {
            $("#project2>#project2_img").animate({ opacity: "1" }, 400, function() {
                $("#project2>#project2_text").animate({ marginLeft: "700px" }, 400, function() {
                    $("#project2_text>.stie_btn").animate({ opacity : "1" }, 400);
                });
            });
        }

        // project3
        if ($(this).scrollTop() > 2280) {
            $("#project3>#project3_img").animate({ opacity: "1" }, 400, function() {
                $("#project3>#project3_text").animate({ marginLeft: "0" }, 400, function() {
                    $("#project3_text>.stie_btn").animate({ opacity : "1" }, 400);
                });
            });
        }

        // project4
        if ($(this).scrollTop() > 2920) {
            $("#project4>#project4_img").animate({ opacity: "1" }, 400, function() {
                $("#project4>#project4_text").animate({ marginLeft: "700px" }, 400, function() {
                    $("#project4_text>.stie_btn").animate({ opacity : "1" }, 400);
                });
            });
        }

        // project5
        if ($(this).scrollTop() > 3560) {
            $("#project5>#project5_img").animate({ opacity: "1" }, 400, function() {
                $("#project5>#project5_text").animate({ marginLeft: "0" }, 400, function() {
                    $("#project5_text>.stie_btn").animate({ opacity : "1" }, 400);
                });
            });
        }

        // project6
        if ($(this).scrollTop() > 4200) {
            $("#project6>#project6_img").animate({ opacity: "1" }, 400, function() {
                $("#project6>#project6_text").animate({ marginLeft: "700px" }, 400, function() {
                    $("#project6_text>.stie_btn").animate({ opacity : "1" }, 400);
                });
            });
        }

        // project7
        if ($(this).scrollTop() > 4840) {
            $("#project7>#project7_img").animate({ opacity: "1" }, 400, function() {
                $("#project7>#project7_text").animate({ marginLeft: "0" }, 400, function() {
                    $("#project7_text>.stie_btn").animate({ opacity : "1" }, 400);
                });
            });
        }


    });

});