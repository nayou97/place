$(function(){
    $(".map li button").click(function(){
        var i=$(this).parent("li").index();
        console.log(i);
        $(".map").addClass("on");
        $(".sub2 strong").addClass("on");
        $(".sub2 .xBox i").addClass("on");
        $(".map_list_group>ul").removeClass("on");
        $(".map_list_group>ul").eq(i).addClass("on");
      /*   $(".map_list_grop ul").removeClass("on");
        $(this).addClass("on"); */
    });

    $(".sub2 .xBox i").click(function(){
        $(".sub2 strong").removeClass("on");
        $(".map").removeClass("on");
        $(".map_list_group>ul").removeClass("on");
        $(this).removeClass("on");
    });

    $(window).scroll(function(){
        var scrTop = $(window).scrollTop();
        if (scrTop>=800){
            $("nav ").eq(0).removeClass("on");
            $("nav ").eq(1).addClass("on");
        }else{
            $("nav ").eq(1).removeClass("on");
            $("nav ").eq(0).addClass("on");
        }
    });

    // 햄버거
    $(".nav_icon_name").find("button.ham").click(function(){
        $(this).removeClass("on").next().addClass("on");
        $(".nav_list").stop().slideDown();
    });
    $(".nav_icon_name").find("button.close").click(function(){
        $(this).removeClass("on").prev().addClass("on");
        $(".nav_list").stop().slideUp();
    });

    //sub1 bbq slideDown
    $(window).scroll(function(){
        var st = $(this).scrollTop(); 
        var bbqTop = $(".sub1").offset().top - 800;
        if(st>bbqTop){
            $(".txt_box").slideDown();
        }else{
            $(".txt_box").slideUp();
        }
    });
    //캘린더
    $('.calendar-container').calendar();
    $(".chk").click(function(){
        $(".calendar-container").toggleClass("on");
    });
});