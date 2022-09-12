$(function(){
    $("ul.traffic>li").click(function(){
        $(this).siblings().removeClass("on");
        $(this).toggleClass("on");    
    });

});
