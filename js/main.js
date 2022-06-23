$('.navbar-toggler').on('click', function () {
  $('main').toggle();
  $('footer').toggle();
});

$(document).ready(function () {
  if (window.location.pathname.split('/').pop() == 'index') {
    $('.nav-link').removeClass('active');
    $('#home').addClass('active');
  }
  if (window.location.pathname.split('/').pop() == 'portfolio') {
    $('.nav-link').removeClass('active');
    $('#portfolio').addClass('active');
  }
  if (window.location.pathname.split('/').pop() == 'how-we-do') {
    $('.nav-link').removeClass('active');
    $('#how-we-do').addClass('active');
  }
  if (window.location.pathname.split('/').pop() == 'contact') {
    $('.nav-link').removeClass('active');
    $('#contact').addClass('active');
  }
});

$(function () {$(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
