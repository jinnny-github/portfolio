$(function () {
  /*아래에서 위로*/
  $(window).on("scroll load", function () {
    $("div#why h3, div#why ul li, div#best h3, div#earlyB, div#adBanner, div#tours > span").each(function () {
      var obtSB = $(this).offset().top + $(this).outerHeight() / 4;
      var winSB = $(window).scrollTop() + $(window).height()/1.5;
      if (obtSB < winSB) {
        $(this).css({
          "opacity": "1",
          "transform": "translateY(" + 0 + "em)"
        })
      } else {
        $(this).css({
          "opacity": "0",
          "transform": "translateY(" + 4 + "em)"
        })
      }
    })
    
    /*위에서 아래로*/
    $("div#best div.right div.grid:first-child").each(function () {
      var obtSB = $(this).offset().top + $(this).outerHeight() / 4;
      var winSB = $(window).scrollTop() + $(window).height()/1.8;
      if (obtSB < winSB) {
        $(this).css({
          "opacity": "1",
          "transform": "translateY(" + 0 + "em)"
        })
      } else {
        $(this).css({
          "opacity": "0",
          "transform": "translateY(" + -4 + "em)"
        })
      }
    })
    
    /*왼쪽에서 오른쪽으로*/
    $("div#best div.left, article div.left").each(function () {
      var obtSB = $(this).offset().top + $(this).outerHeight() / 4;
      var winSB = $(window).scrollTop() + $(window).height()/1.5;
      if (obtSB < winSB) {
        $(this).css({
          "opacity": "1",
          "transform": "translateX(" + 0 + "em)"
        })
      } else {
        $(this).css({
          "opacity": "0",
          "transform": "translateX(" + -4 + "em)"
        })
      }
    })
    
    /*오른쪽에서 왼쪽으로*/
    $("div#best div.right div.grid:last-child , div#tours h4 , article div.right").each(function () {
      var obtSB = $(this).offset().top + $(this).outerHeight() / 4;
      var winSB = $(window).scrollTop() + $(window).height()/1.5;
      if (obtSB < winSB) {
        $(this).css({
          "opacity": "1",
          "transform": "translateX(" + 0 + "em)"
        })
      } else {
        $(this).css({
          "opacity": "0",
          "transform": "translateX(" + 4 + "em)"
        })
      }
    })
    
  })
})
