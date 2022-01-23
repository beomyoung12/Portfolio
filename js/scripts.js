/*!
* Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
//
$(document).ready(function(){

    var navHeight = $("#skills").height() * (3/4);
    //navHeight 의 높이를 구하기
    // console.log(navHeight);

    var proHeight = $("#projects").height() * (7/3);
    // console.log(proHeight);


    // const progress = document.querySelector(".progress-bar");
    //
    $(".pgbar").hide();
    // //스크롤시 나타날 객체 미리 숨기기
    //
    $(window).scroll(function(){  // 윈도우 스크롤 기능 작동
        var rollIt = $(this).scrollTop() >= navHeight;
        console.log($(this).scrollTop());


    if(rollIt){
		//윈도우 스크롤 기능의 값이 navHeight 의 높이와 같거나 크면
            $(".pgbar").show();
            tag();
        }
        else{
            // $(".pgbar").hide();
        }
    });

    function tag () {
  let progress = document.querySelector('.pgbar')
  let interval = 1
  let updatesPerSecond = 1000 / 60
  let end = progress.max * 0.8

  function animator () {
    progress.value = progress.value + interval;
    if ( progress.value + interval < end){
      setTimeout(animator, updatesPerSecond);
    } else {
      progress.value = end;
    }
  }

  setTimeout(() => {
    animator()
  }, updatesPerSecond);
}



});
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };



    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    });


});
