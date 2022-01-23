$(document).ready(function() {
  var position = 0;
  var bts = document.querySelectorAll('.bt');
  console.log(bts);


  $(bts[0]).click(function() {
    position = $("header").offset();
    $("html").stop().animate({scrollLeft: position.left},500);
  });
  $(bts[1]).click(function() {
    position = $("section").offset();
    $("html").stop().animate({scrollLeft: position.left},500);
  });
  $(bts[2]).click(function() {
    position = $("article").offset();
    $("html").stop().animate({scrollLeft: position.left},500);
  });
  $(bts[3]).click(function() {
    position = $("footer").offset();
    $("html").stop().animate({scrollLeft: position.left},500);
  });

});
