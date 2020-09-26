$(function () {
    var headerH = $("header").height();
    var hT = $("#hotBrand h2").offset().top - headerH * 10;
    $(window).scroll(function () {
        var scT = $(window).scrollTop();
        if (hT <= scT) {
            $("#hotBrand h2 span#hot").animate({
                marginLeft: '9%'
            }, 1200);
            $("#hotBrand h2 span#brand").animate({
                right: "-9%"
            }, 1200);
        }
    })
})
