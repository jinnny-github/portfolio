$(function(){
    var winW = $(window).width();
    $("figure").hover(function(){
        $(this).find("figcaption").stop().animate({"top":0},500);
    },function(){
        if(winW>480){
            $("figcaption").stop().animate({"top":"10vw"},500);
        }else{
            $("figcaption").stop().animate({"top":"25vw"},500);
        }
        
    })
})