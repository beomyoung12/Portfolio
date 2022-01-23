$(document).ready(function(){

  var li = document.querySelectorAll('header li');
  var logo = document.querySelectorAll('.logobox')
  var mains = document.querySelectorAll('.main');
  var main = $(".main").height();
  var count = 0;
  var position;
  var hamburger = document.querySelectorAll('.hamburger');
  var width = $("html").width();

  $(hamburger).click(function() {
    if ($('.h_menu').css('display') == 'block' && $("html").width() <= 752) {
           $('.h_menu').css('display', 'none');
       } else {
           $('.h_menu').css('display', 'block');
       }
  });

  $(window).resize(function(){
    // if ($("html").width() <= 782 && $("html").width() >= 752 )
    // {
    //   $('.graphbox').css('justify-content', 'flex-start');
    // }
    if ($("html").width() >= 752)
    {
      $('.h_menu').css('display', 'block');
      position = $(mains[count]).offset();
      $("html").stop().animate({scrollTop: position.top},0);
    }
    else if ($("html").width() <= 752)
    {
      $('.h_menu').css('display', 'none');
    }
  });


  $(li[0]).click(function() {
    count = 0;
    position = $(mains[0]).offset();
    $("html").stop().animate({scrollTop: position.top});
    // console.log(count);
  });
  $(li[1]).click(function() {
    count = 1;
    position = $(mains[1]).offset();
    $("html").stop().animate({scrollTop: position.top});
    // console.log(count);
  });
  $(li[2]).click(function() {
    count = 2;
    position = $(mains[2]).offset();
    $("html").stop().animate({scrollTop: position.top});
    // console.log(count);
  });
  $(li[3]).click(function() {
    count = 3;
    position = $(mains[3]).offset();
    $("html").stop().animate({scrollTop: position.top});
    // console.log(count);
  });

  var li2 = document.querySelectorAll('.sumtext li');

  $(li2[0]).click(function() {
    count = 0;
    position = $(mains[0]).offset();
    $("html").stop().animate({scrollTop: position.top});
    // console.log(count);
  });
  $(li2[1]).click(function() {
    count = 1;
    position = $(mains[1]).offset();
    $("html").stop().animate({scrollTop: position.top});
    // console.log(count);
  });
  $(li2[2]).click(function() {
    count = 2;
    position = $(mains[2]).offset();
    $("html").stop().animate({scrollTop: position.top});
    // console.log(count);
  });
  $(li2[3]).click(function() {
    count = 3;
    position = $(mains[3]).offset();
    $("html").stop().animate({scrollTop: position.top});
    // console.log(count);
  });

  $(logo).click(function() {
    count = 0;
    position = $(mains[0]).offset();
    $("html").stop().animate({scrollTop: position.top});
    console.log(count);
  });

  var number = 0;
  var left = document.querySelectorAll('.leftbox');
  var right = document.querySelectorAll('.rightbox');
  var project = document.querySelectorAll('.projectin');
  var project_w = $(".projectin li").width();

  start();

  $(window).resize(function() {
    project_w = $(".projectin li").width();
    $('.projectin').css({left : -project_w});
    // $(".slide_wrap").class({height: slide_wrap_w * (2/3)});
  });

  //왼쪽 버튼
  $(left).click(function() {
    $(project).filter(":not(:animated)").animate(
      {left: 0},
      {complete:function() {
        $('.projectin').css({left: -project_w});
        $('.projectin').prepend($('.projectin').children()[2]);
      }},1000);

  });
  //오른쪽 버튼
  $(right).click(function() {
    $(project).filter(":not(:animated)").animate(
      {left: -project_w * 2},
      {complete:function() {
        $('.projectin').css({left: -project_w});
        $('.projectin').append($('.projectin').children()[0]);
      }},1000);

  });

  function start()
  {
    $('.projectin').css({
      left: -project_w
    });
    $('.projectin').prepend($('.projectin').children()[2]);
  }

});
