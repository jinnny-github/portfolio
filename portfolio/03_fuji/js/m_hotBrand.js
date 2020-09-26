$(function(){
    var winW = $(window).width();
    $("div#m_hotBrand div ul li").width(winW);
    var li_num = $("div#m_hotBrand div ul li").length;
    var ul_size = winW*li_num+"px";
    $("div#m_hotBrand div ul").width(ul_size);
    $("div#m_hotBrand div").width(winW-1);
    
    $("div#m_hotBrand div ul li:last").prependTo("div#m_hotBrand div ul");
    $("div#m_hotBrand div ul").css("margin-left",-winW);
    
    /*왼쪽 버튼 클릭*/
    $("div#m_hotBrand button#left-button").click(function(){
        $("div#m_hotBrand div ul").animate({
            marginLeft:parseInt($("div#m_hotBrand div ul").css("margin-left"))+winW+"px"
        },function(){
            $("div#m_hotBrand div ul li:last").prependTo("div#m_hotBrand div ul");
            $("div#m_hotBrand div ul").css("margin-left",-winW);
        });
    })
    
    /*오른쪽 버튼 클릭*/
    $("div#m_hotBrand button#right-button").click(function(){
        $("div#m_hotBrand div ul").animate({
            marginLeft:parseInt($("div#m_hotBrand div ul").css("margin-left"))-winW+"px"
        },function(){
            $("div#m_hotBrand div ul li:first").appendTo("div#m_hotBrand div ul");
            $("div#m_hotBrand div ul").css("margin-left",-winW);
        });
    })
    
    $(window).resize(function(){
        var winW = $(window).width();
        $("div#m_hotBrand div ul li").width(winW);
        var li_num = $("div#m_hotBrand div ul li").length;
        var ul_size = winW*li_num+"px";
        $("div#m_hotBrand div ul").width(ul_size);
        $("div#m_hotBrand div").width(winW-1);
        
        $("div#m_hotBrand div ul li:last").prependTo("div#m_hotBrand div ul");
        $("div#m_hotBrand div ul").css("margin-left",-winW);
        
        /*왼쪽 버튼 클릭*/
        $("div#m_hotBrand button#left-button").click(function(){
        $("div#m_hotBrand div ul").stop().animate({
                marginLeft:parseInt($("div#m_hotBrand div ul").css("margin-left"))+winW+"px"
            },function(){
            $("div#m_hotBrand div ul li:last").prependTo("div#m_hotBrand div ul");
            $("div#m_hotBrand div ul").css("margin-left",-winW);
        });
        })
        
        /*오른쪽 버튼 클릭*/
        $("div#m_hotBrand button#right-button").click(function(){
            $("div#m_hotBrand div ul").stop().animate({
                marginLeft:parseInt($("div#m_hotBrand div ul").css("margin-left"))-winW+"px"
            },function(){
            $("div#m_hotBrand div ul li:first").appendTo("div#m_hotBrand div ul");
            $("div#m_hotBrand div ul").css("margin-left",-winW);
        });
        })      
    })
})