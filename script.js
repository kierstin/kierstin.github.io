$(document).ready(function() {
  var audioElm1=$('#musictrigger1').get(0)
  var audioElm2=$('#musictrigger2').get(0)

  $(".Aboutus h3").click(function() {
    $(".au").toggle();
  });

    $(window).scroll(function() {
      var pageScroll=$(window).scrollTop();
      var end_top=$("#end").position().top;


    if(pageScroll<500 || pageScroll>+end_top - window.innerHeight) {
      audioElm1.pause();
      audioElm2.pause();
    } else if(pageScroll>= $("#Kierstin").position().top) {
      audioElm1.pause();
      audioElm2.play();

    } else if(pageScroll>= $("#Sophie").position().top) {
      audioElm1.play();
      audioElm2.pause();
      }
    });
});
