$(function () {
  $(window).on("scroll load", function () {
    $("body>*").each(function () {
      var obtSB = $(this).offset().top + $(this).outerHeight() / 4;
      var winSB = $(window).scrollTop() + $(window).height();
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
  })
})
