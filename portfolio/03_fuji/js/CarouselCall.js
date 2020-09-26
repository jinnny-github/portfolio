$(document).ready(function () {
  var winW = $(window).width();
  if (winW > 480 && winW < 600) {
      $('.container2').carousel({
        num: 3,
        maxWidth: 150,
        maxHeight: 250,
        distance: 100,
        scale: 0.9,
        animationTime: 1000,
        showTime: 4000
      });
    }else if (winW < 800) {
      $('.container2').carousel({
        num: 3,
        maxWidth: 180,
        maxHeight: 300,
        distance: 120,
        scale: 0.9,
        animationTime: 1000,
        showTime: 4000
      });
    }else if (winW < 1000) {
      $('.container2').carousel({
        num: 3,
        maxWidth: 200,
        maxHeight: 300,
        distance: 150,
        scale: 0.9,
        animationTime: 1000,
        showTime: 4000
      });
    }else if (winW < 1200) {
      $('.container2').carousel({
        num: 3,
        maxWidth: 250,
        maxHeight: 350,
        distance: 200,
        scale: 0.9,
        animationTime: 1000,
        showTime: 4000
      });
    } else if (winW < 1400) {
      $('.container2').carousel({
        num: 3,
        maxWidth: 300,
        maxHeight: 400,
        distance: 200,
        scale: 0.9,
        animationTime: 1000,
        showTime: 4000
      });
    } else if (winW < 1600) {
      $('.container2').carousel({
        num: 3,
        maxWidth: 300,
        maxHeight: 400,
        distance: 250,
        scale: 0.9,
        animationTime: 1000,
        showTime: 4000
      });
    }else if (winW < 1800) {
      $('.container2').carousel({
        num: 3,
        maxWidth: 350,
        maxHeight: 500,
        distance: 300,
        scale: 0.9,
        animationTime: 1000,
        showTime: 4000
      });
    }else {
      $('.container2').carousel({
        num: 3,
        maxWidth: 450,
        maxHeight: 600,
        distance: 400,
        scale: 0.9,
        animationTime: 1000,
        showTime: 4000
      });
    }

  $(window).resize(function () {
    var winW = $(window).width();
  if (winW > 480 && winW < 600) {
      $('.container2').carousel({
        num: 3,
        maxWidth: 150,
        maxHeight: 250,
        distance: 100,
        scale: 0.9,
        animationTime: 1000,
        showTime: 4000
      });
    }else if (winW < 800) {
      $('.container2').carousel({
        num: 3,
        maxWidth: 180,
        maxHeight: 300,
        distance: 120,
        scale: 0.9,
        animationTime: 1000,
        showTime: 4000
      });
    }else if (winW < 1000) {
      $('.container2').carousel({
        num: 3,
        maxWidth: 200,
        maxHeight: 300,
        distance: 150,
        scale: 0.9,
        animationTime: 1000,
        showTime: 4000
      });
    }else if (winW < 1200) {
      $('.container2').carousel({
        num: 3,
        maxWidth: 250,
        maxHeight: 350,
        distance: 200,
        scale: 0.9,
        animationTime: 1000,
        showTime: 4000
      });
    } else if (winW < 1400) {
      $('.container2').carousel({
        num: 3,
        maxWidth: 300,
        maxHeight: 400,
        distance: 200,
        scale: 0.9,
        animationTime: 1000,
        showTime: 4000
      });
    } else if (winW < 1600) {
      $('.container2').carousel({
        num: 3,
        maxWidth: 300,
        maxHeight: 400,
        distance: 250,
        scale: 0.9,
        animationTime: 1000,
        showTime: 4000
      });
    }else if (winW < 1800) {
      $('.container2').carousel({
        num: 3,
        maxWidth: 350,
        maxHeight: 500,
        distance: 300,
        scale: 0.9,
        animationTime: 1000,
        showTime: 4000
      });
    }else {
      $('.container2').carousel({
        num: 3,
        maxWidth: 450,
        maxHeight: 600,
        distance: 400,
        scale: 0.9,
        animationTime: 1000,
        showTime: 4000
      });
    }
  })
});
