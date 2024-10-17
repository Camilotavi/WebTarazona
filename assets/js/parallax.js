var parallaxSection = document.querySelector('.parallax-section');
var background = parallaxSection.querySelector('.body');

parallaxEffect(0.5); // Initialize the background position on page load

function parallaxEffect(multiplier) {
  multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
  multiplier = 1 - multiplier;
  var scrollTop = window.pageYOffset;
  var bgCss = '0px ' + (multiplier * scrollTop) + 'px';
  background.style.backgroundPosition = bgCss;
}

window.addEventListener('scroll', function() {
  parallaxEffect(0.5); // adjust the multiplier value to your liking
});