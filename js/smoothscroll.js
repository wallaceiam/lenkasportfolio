
function scrollTo(pos, duration) {

  // cancel if already at position
  if (document.scrollingElement.scrollTop === pos) return;

  var cosParameter = (window.pageYOffset - pos) / 2,
    scrollCount = 0,
    oldTimestamp = window.performance.now();


  function step(newTimestamp) {
    var tsDiff = newTimestamp - oldTimestamp;

    if (tsDiff > 100) {
      tsDiff = 30;
    }

    scrollCount += Math.PI / (duration / tsDiff);

    if (scrollCount >= Math.PI) {
      return;
    }

    var moveStep = Math.round(pos + cosParameter + cosParameter * Math.cos(scrollCount));
    document.scrollingElement.scrollTop = moveStep;
    oldTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);

  return false;

}

var elements = document.querySelectorAll(".scroll");

for (var element of elements) {
  element.addEventListener("click", function (event) {
    event.preventDefault();

    var id = this.getAttribute('href').replace('#', '');
    var pos = document.getElementById(id).offsetTop;

    return scrollTo(pos, 750);
  });
}