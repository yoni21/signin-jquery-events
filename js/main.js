$(function() {
  $('.signin').on('click', function() {
    $('.modal').fadeIn('slow');
  });
});

$(function() {
  $('.close').on('click', function() {
    $('.modal').fadeOut('slow');
  });
});

$(function() {
  $('.submit').on('click', function() {
    $('input').attr('class', 'error');
  });
});

$('input').hover(function() {
  $(this).removeClass("error");
});

$('.modal').on('click', function() {
  $(this).fadeOut('2000');
});
$('.getstarted').click(function(e) {
  e.stopPropagation();
});
