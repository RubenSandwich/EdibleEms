
var elem = '.grid';

var msnry = new Masonry(elem, {
  itemSelector: '.grid-cell',
  isFitWidth: true,
});

// Reload grid after each image load
// The 'correct way' to do this is:
// 1. Store image sizes in DOM
// 2. Use image sizes to layout grid
// This prevent reflows, but who has the time. :(
imagesLoaded(elem).on('progress', function () {
  msnry.layout();
});
