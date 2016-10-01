
document.addEventListener('DOMContentLoaded', function () {
  var previousScrollTop = 0;
  var header = document.getElementById('header');

  // If scrolling down then hide the header
  window.onscroll = function () {
    // body.scrollTop is deprecated and no longer available on Firefox
    var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (bodyScrollTop <= header.clientHeight) {
      header.classList.remove('hide');
      return;
    }

    if (bodyScrollTop > previousScrollTop) {
      header.classList.add('hide');
    } else {
      header.classList.remove('hide');
    }

    previousScrollTop = bodyScrollTop;
  };

  // If mouse movement close to the top of the screen then show the header
  document.body.onmousemove = function (evt) {
    if (evt.clientY <= header.clientHeight) {
      header.classList.remove('hide');
    }
  };

  // If mouse down or touch any of the header then show the whole header
  header.onmousedown = function () {
    header.classList.remove('hide');
  };
});
