$(function(){
    var wd = $(".aniWrap ul li").width()+10;
    /*margin값도 계산해주기!*/
    $(".aniWrap ul li:last").prependTo(".aniWrap ul");
    $(".aniWrap ul").css("margin-left",-wd);
    
    $("#ltBtn,#gtBtn").click(function(){
        if($(this).attr("id")=="ltBtn"){
            $(".aniWrap ul").animate({
                marginLeft:parseInt($(".aniWrap ul").css("margin-left"))+wd
            },function(){//animate 실행 후 실행되어야 할 실행문
                $(".aniWrap ul li:last").prependTo(".aniWrap ul");
                $(".aniWrap ul").css("margin-left",-wd);
            })
        }else{
            $(".aniWrap ul").animate({
                marginLeft:parseInt($(".aniWrap ul").css("margin-left"))-wd
            },function(){
                $(".aniWrap ul li:first").appendTo(".aniWrap ul");
                $(".aniWrap ul").css("margin-left",-wd);
            })
        }
    })
})