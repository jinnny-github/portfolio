$(function () {
  var winW = $(window).width();
  if (winW >= 481 && winW < 1024) {
    $("header nav > ul ul").css("height", winW / 4);
  } else if (winW < 1200) {
    $("header nav > ul ul").css("height", winW / 5);
  } else if (winW < 1400) {
    $("header nav > ul ul").css("height", winW / 5.5);
  } else {
    $("header nav > ul ul").css("height", winW / 6);
  }

  $(window).resize(function () {
    var winW = $(window).width();
    if (winW >= 481 && winW < 1024) {
      $("header nav > ul ul").css("height", winW / 4);
    } else if (winW < 1200) {
      $("header nav > ul ul").css("height", winW / 5);
    } else if (winW < 1400) {
      $("header nav > ul ul").css("height", winW / 5.5);
    } else {
      $("header nav > ul ul").css("height", winW / 6);
    }
  })
})
