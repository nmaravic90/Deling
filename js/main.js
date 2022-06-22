$('.navbar-toggler').on('click', function () {
  $('main').toggle();
  $('footer').toggle();
});

$(document).ready(function () {
  $('.nav-link').removeClass('active');
  if (location.pathname == '/deling.sk/index.php') {
    $('#home').addClass('active');
  }
  if (location.pathname == '/deling.sk/portfolio.php') {
    $('#portfolio').addClass('active');
  }
  if (location.pathname == '/deling.sk/how-we-do.php') {
    $('#how-we-do').addClass('active');
  }
  if (location.pathname == '/deling.sk/contact.php') {
    $('#contact').addClass('active');
  }
});

$(function () {$(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

// $('#back-to-top').on('click', function (e) {
//   e.preventDefault();
//   $('html, body').animate({ scrollTop: 0 }, 1000);
// });

