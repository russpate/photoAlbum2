/* jshint ignore:start */

$(document).ready(function () {
//
//
//
//
////// Click Events
//
// selects albums  from the homepage
//
  var navItem = $('li').find('a');
  navItem.on("click", function (event) {
    event.preventDefault();
    var selectedPage = "." + $(this).attr('rel');
    $(selectedPage).siblings('section').removeClass('active');
    $(selectedPage).addClass('active');
  });
//
// from the album in to the photo
//
  var photoItem = $('allPhotos').find('a');
  photoItem.on("click", function (event) {
    event.preventDefault();
    var selectedPhoto = "." + $(this).attr('rel');
    $(selectedPhoto).siblings('.photo').removeClass('show');
    $(selectedPhoto).addClass('show');
  });

}); // $(document).ready
