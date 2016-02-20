
$(document).ready(function () {
//
//
//
//

var fullAlbumData = "";
_.each(albumData, function(item){
  fullAlbumData +=
  "<section class='albums'>"
  + "<a rel='"
  + item.rel
  + "' href='#'>"
  + "<img src='"
  + item.albumCover
  + "'/>"
  + "</a>"
  + "</section>"; // Home View - album covers
  + "<section rel='"
  + item.rel
  + "' class='"
  + item.type
  + " "
  + item.class
  + "'>"
  + "<h1>"
  + item.albumTitle
  + "</h1>"
  + "<div class='allPhotos photo toggle show href ='#'>"
  + "<a rel='"
  + item.photos.rel
  + "' class='photoThumb' href='#'>"
  + "<img src='"
  + item.photos.photoThumb
  + "'/>"
  + "</a>" //AlbumView - photo Thumbnails
  + "</div>"
  + "<div class='"
  + item.photos.class
  + " photo toggle' href='#'>"
  + "<a rel='allPhotos' class='photoBack' href='#'>back to Album</a>"
  + "<img src='"
  + item.photos.photoFull
  + "'/>"
  + "</div>"
  + "</section>" //Photo View - photo
  + "</section>"
});

$('.container').append(fullAlbumData);





////// Click Events
//
// selects albums from the homepage
//
$('li').find('a').on("click", function (event) {
    event.preventDefault();
    var selectedPage = "." + $(this).attr('rel');
    $(selectedPage).siblings('section').removeClass('active');
    $(selectedPage).addClass('active');
  });
//
// selects albums from the homepage
//
$('body').find('a').on("click", function (event) {
    event.preventDefault();
    var selectedPage = "." + $(this).attr('rel');
    $(selectedPage).siblings('section').removeClass('active');
    $(selectedPage).addClass('active');
  });
//
// from the album in to the photo
//
//This is the thing you are cicking
$('body').on("click",'.photoThumb', function (event) {
    event.preventDefault();
    //rel attr connects the two elements
    var selectedPhoto = "." + $(this).attr('rel');
    //This is the thing that is getting effected by click
    $(selectedPhoto).siblings('.photo').removeClass('show');
    $(selectedPhoto).addClass('show');
  });
// from photo back to album
//
//This is the thing you are cicking
$('body').on("click",'.photoBack', function (event) {
    event.preventDefault();
    //rel attr connects the two elements
    var selectedPhoto = "." + $(this).attr('rel');
    //This is the thing that is getting effected by click
    $(selectedPhoto).siblings('.photo').removeClass('show');
    $(selectedPhoto).addClass('show');
  });

}); // $(document).ready
