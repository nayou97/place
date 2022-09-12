$(function(){
    // 햄버거
    $(".ham").click(function(){
        $(this).removeClass("on").next().addClass("on");
        $(".nav_list").stop().slideDown();
    });
    $(".close").click(function(){
        $(this).removeClass("on").prev().addClass("on");
        $(".nav_list").stop().slideUp();
    });

});