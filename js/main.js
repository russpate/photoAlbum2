$(document).ready(function () {
//
//
//
//
////// Click Events
//
// selects albums  from the homepage
  var navItem = $('li').find('a');
  navItem.on("click", function (event) {
    event.preventDefault();
    var selectedPage = "." + $(this).attr('rel');
    $(selectedPage).siblings('section').removeClass('active');
    $(selectedPage).addClass('active');
  });
//
// from the album in to the photo
  var photoItem = $('a');
  photoItem.click(function (event) {
    event.preventDefault();
    var selectedPage = "." + $(this).attr('rel');
    $(selectedPage).siblings('photo').removeClass('photoActive');
    $(selectedPage).addClass('photoActive');
  });

}); // $(document).ready
