$(function(){
     var winW = $(window).width();
    if(winW<=479){
   
    var li_num = $("div#m_ourStory ul li").length;
    
    /*ul,li,div width 설정하기*/
    $("div#m_ourStory ul li").width(winW);
    $("div#m_ourStory ul").width(winW*li_num);
    $("div#m_ourStory div.ulWrap").width(winW);

    $("div#m_ourStory div ul li:last").prependTo("div#m_ourStory div ul");
    $("div#m_ourStory div ul").css("margin-left",-winW);
    
    $(window).resize(function(){
       winW = $(window).width();
       //ul,li,div width 설정하기
        $("div#m_ourStory ul li").width(winW);
        $("div#m_ourStory ul").width(winW*li_num);
        $("div#m_ourStory div.ulWrap").width(winW);

        $("div#m_ourStory div ul li:last").prependTo("div#m_ourStory div ul");
        $("div#m_ourStory div ul").css("margin-left",-winW);
        
    })
   
    function rolling(){
        $("div#m_ourStory ul").stop().animate({
            marginLeft:parseInt($("div#m_ourStory div ul").css("margin-left"))+winW+"px"
        },function(){
            $("div#m_ourStory ul li:last").prependTo("div#m_ourStory ul");
            $("div#m_ourStory ul").css("margin-left",-winW);
        });
    }
    var rollingId = setInterval(function(){rolling();},3000);
    
    }
})