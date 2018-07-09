var _ouibounce = ouibounce(document.getElementById('myModal'), {
  aggressive: true,
  timer: 0
});

$('body').on('click', function() {
  $('#myModal').hide();
});

$('#myModal').on('click', function() {
  $('#myModal').hide();
});

$('#myModal .modal').on('click', function(e) {
  e.stopPropagation();
});

$.getJSON('http://ip-api.com/json').then(data => {
  $('#city').html(data.city.toUpperCase());
});
