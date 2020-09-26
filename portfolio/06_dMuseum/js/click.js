$(function () {
  $("div#menu").click(function () {
    $("nav").toggleClass("on");
    $(this).toggleClass("on");
  })

  $("section div.left div.imgWrap").click(function () {
    $("div.subPage").toggleClass("on");
  })
})
