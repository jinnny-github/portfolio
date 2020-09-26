$(function(){
    var winT = $(window).scrollTop();
    var divT = $("div#thorWrap").offset().top;
    if(divT <= winT){
        $("div#thorWrap div#light").addClass("on");
    }
})