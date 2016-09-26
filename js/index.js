
var msnry = new Masonry('.grid', {
  // options
  itemSelector: '.grid-cell',
  isFitWidth: true,
});

imagesLoaded('.grid', function () {
  console.log('hit');
  msnry.layout();
  // msnry = new Masonry('.grid', {
  //   // options
  //   itemSelector: '.grid-cell',
  //   isFitWidth: true,
  // });
});
