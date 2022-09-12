/* $(function(){
    let slideIndex = 0;
    const slideLength = $("ul.main_visual_img li").length - 1;


    function rollingSlide() {
   setInterval(function(){
    if(slideIndex<slideLength){
        slideIndex++;
    }else{
        slideIndex=0;
    }
    $("ul.main_visual_img li").eq(slideIndex).addClass("on").siblings().removeClass("on");
    $(".bottom_circle li").eq(slideIndex).addClass("on").siblings().removeClass("on");
    },3000);
    }



   $(".main_visual button").click(function () {
        clearInterval(inter);
        goSlide();
        inter = setInterval(goSlide, 3000);
    });
    function goSlide() {
        if (slideIndex < slideLength) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }
        rollingSlide();
    }

    $(".bottom_circle li").click(function(){
        var pagerIndex = $(this).index();
        inter = setInterval(goSlide, 3000);
        
        $("ul.main_visual_img li").eq(pagerIndex).addClass("on").siblings().removeClass("on");
        $(".bottom_circle li").eq(pagerIndex).addClass("on").siblings().removeClass("on");
        clearInterval(inter);
    });
    
}); */
    $(function(){
        $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1920
        });
  });
