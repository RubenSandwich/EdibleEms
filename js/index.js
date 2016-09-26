
var msnry = new Masonry('.grid', {
  // options
  itemSelector: '.grid-cell',
  isFitWidth: true,
});

imagesLoaded('.grid', function () {
  // Maybe reload after each inital image load?
  msnry.layout();
});
