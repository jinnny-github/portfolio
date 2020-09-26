$(function () {
  var ulW = $("#products .ulWrap ul").width();
  var liW = $("#products .ulWrap ul li").width() + ulW * 0.04;
  var li = $("#products .ulWrap ul li").length;
  var cnt = 0;

  $("#leftBtn,#rightBtn").click(function () {
    if ($(this).attr("id") == "leftBtn") {
      if (cnt > 0) {
        $("#products .ulWrap ul").stop().animate({
          marginLeft: parseInt($("#products .ulWrap ul").css("margin-left")) + liW
        })
        cnt--;
      }
      
    } else {
      if (cnt < li-4) {
        $("#products .ulWrap ul").stop().animate({
          marginLeft: parseInt($("#products .ulWrap ul").css("margin-left")) - liW
        })
        cnt++;
      }
    }
  })
})
