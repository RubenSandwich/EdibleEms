
var msnry = new Masonry('.grid', {
  // options
  itemSelector: '.grid-cell',
  isFitWidth: true,
});

imagesLoaded('.grid', function () {
  msnry.layout();
  // msnry = new Masonry('.grid', {
  //   // options
  //   itemSelector: '.grid-cell',
  //   isFitWidth: true,
  // });
});
