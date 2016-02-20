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
//This is the thing you are cicking
  var photoItem = $('.photoThumb');
  photoItem.on("click", function (event) {
    event.preventDefault();
    //rel attr connects the two elements
    var selectedPhoto = "." + $(this).attr('rel');
    //This is the thing that is getting effected by click
    $(selectedPhoto).siblings('.photo').removeClass('show');
    $(selectedPhoto).addClass('show');
  });

}); // $(document).ready
