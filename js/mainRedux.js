$(document).ready(function () {
  //// Homepage Album Covers
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
  $('body').on("click",'.albumCover', function (event) {
      event.preventDefault();
      var selectedPhoto = "." + $(this).attr('rel');
      $(selectedPhoto).siblings('section').removeClass('active');
      $(selectedPhoto).addClass('active');
    });
  // from the album in to the photo
  //
  $('body').on("click",'.photoThumb', function (event) {
      event.preventDefault();
      var selectedPhoto = "." + $(this).attr('rel');
      $(selectedPhoto).siblings('.photo').removeClass('show');
      $(selectedPhoto).addClass('show');
    });
  //
  // from photo back to album
  $('body').on("click",'.photoBack', function (event) {
      event.preventDefault();
      var selectedPhoto = "." + $(this).attr('rel');
      $(selectedPhoto).siblings('.photo').removeClass('show');
      $(selectedPhoto).addClass('show');
    });

}); // $(document).ready
