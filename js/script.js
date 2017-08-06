$(function(){
  $(window).scroll(function() {
     if($(window).scrollTop() >= 450) {
       $('.arrow').addClass('show-arrow');
     }
    else {
      $('.arrow').removeClass('show-arrow');
    }
  });
});
