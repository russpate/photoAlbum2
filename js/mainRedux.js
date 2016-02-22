$(document).ready(function () {








  
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
