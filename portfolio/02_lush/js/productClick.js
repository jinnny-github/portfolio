$(function(){
	var ulW = $("#products .ulWrap ul").width();
	var liW = $("#products .ulWrap ul li").width()+ulW*0.04;
    
    $("#leftBtn,#rightBtn").click(function(){
        if($(this).attr("id")=="leftBtn"){
            $("#products .ulWrap ul").stop().animate({
                marginLeft:parseInt($("#products .ulWrap ul").css("margin-left"))+liW
            })
        }else{
            $("#products .ulWrap ul").stop().animate({
                marginLeft:parseInt($("#products .ulWrap ul").css("margin-left"))-liW
            })
        }
    })
})