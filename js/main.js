
$(document).ready(function () {
//
//
//
//

var albumCovers = "";
_.each(albumData, function(item){
  albumCovers +=
  "<a rel='"
  + item.rel
  + "' class='albumCover' href='#'>"
  + "<div>"
  + "<h2>"
  + item.albumTitle
  + "</h2>"
  + "<img src='"
  + item.albumCover
  + "' />"
  + "</div>"
  + "</a>";
});
$('.albums').append(albumCovers);

var albumView = "";
_.each(albumData, function(item){
  albumView +=
  "<section class='album "
  + item.class
  + "'>"
  + "<h1>"
  + item.albumTitle
  + "</h1>"
  + "<div class='allPhotos photo toggle' href='#'>"
  + "<a rel='"
  + item.photoBank.rel
  + "' class='photoThumb' href='#'>"
  +"<img src='"
  + item.photoBank.photoThumb
  + "' /></a>"
  +"</div>"
  + "<div class='toggle"
  + item.photoBank.class
  + "' href='#'>"
  + "<a rel='allPhotos' class='photoBack' href='#'>back to "
  + item.albumTitle
  + "</a>"
  + "<img src='"
  + item.photoBank.photoFull
  + "' />"
  + "</div>"
  +"</section>";
});
$(".albums").after(albumView);


////// Click Events
//
// selects albums from the homepage
//
$('body li').find('a').on("click", function (event) {
    event.preventDefault();
    var selectedPage = "." + $(this).attr('rel');
    $(selectedPage).siblings('section').removeClass('active');
    $(selectedPage).addClass('active');
  });
//
// from the albumCover Homepage in to the photo
//
//This is the thing you are cicking
$('body').on("click",'.albumCover', function (event) {
    event.preventDefault();
    //rel attr connects the two elements
    var selectedPhoto = "." + $(this).attr('rel');
    //This is the thing that is getting effected by click
    $(selectedPhoto).siblings('section').removeClass('active');
    $(selectedPhoto).addClass('active');
  });
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
