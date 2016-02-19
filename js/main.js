//
//
//
//
////// Click Events
//
//
// var intoAlbum = $('.main');
// intoAlbum.on("click", function (event) {
//   event.preventDefault();
//
//   var selected = "." + $(this).attr('rel');
//   $(selected).siblings('.section').removeClass('active');
//   $(selected).addClass('active');
//
//   console.log("click!!!!");
// });

$('.main').on("click", '.collectionsView p',function (event) {
  event.preventDefault();
  console.log(this);
  var albumName = $(this).attr('rel');
  // albums[albumName]


  $(this).siblings('.section').removeClass('active');
  $(this).addClass('active');

  console.log("click!!!!");
});
