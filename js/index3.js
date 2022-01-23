$(document).ready(function() {

  var mu = document.querySelectorAll('.smallLeft');
  var back_h = $(".back_vid").height();
  var count = 0;

  console.log(back_h);
  $(window).resize(function(){
    back_h = $(".back_vid").height();
    $("html").stop().animate({scrollTop: (back_h) * count},0);
    // $("header").stop().animate({top: -(back_h) * count},0);
  });

  $(mu[1]).click(function() {
    count = 0;
    $("html").stop().animate({scrollTop: (back_h) * count});
    console.log(count);
  });
  $(mu[2]).click(function() {
    count = 1;
    $("html").stop().animate({scrollTop: (back_h) * count});
    console.log(count);
  });
  $(mu[3]).click(function() {
    count = 2;
    $("html").stop().animate({scrollTop: (back_h) * count});
    console.log(count);
  });

  // $(mu[1]).click(function() {
  //   count = 0;
  //   $("header").stop().animate({top: -(back_h) * count});
  //   console.log(count);
  // });
  // $(mu[2]).click(function() {
  //   count = 1;
  //   $("header").stop().animate({top: -(back_h) * count});
  //   console.log(count);
  // });
  // $(mu[3]).click(function() {
  //   count = 2;
  //   $("header").stop().animate({top: -(back_h) * count});
  //   console.log(count);
  // });


});
