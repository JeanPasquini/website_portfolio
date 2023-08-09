window.addEventListener("scroll", function() {
  var backButton = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    backButton.style.display = "block";
  } else {
    backButton.style.display = "none";
  }
});

document.getElementById("backToTop").addEventListener("click", function() {
  var currentPosition = window.scrollY;
  var targetPosition = 0;
  var animationDuration = 400; // Tempo da animação em milissegundos
  var startTime = null;

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var easeInOutCubic = progress / animationDuration;
    if (easeInOutCubic > 1) easeInOutCubic = 1;

    var position = currentPosition - (currentPosition * easeInOutCubic);
    window.scrollTo(0, position);

    if (progress < animationDuration) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
});