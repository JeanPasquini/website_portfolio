function scrollToTop() {
    var currentPosition = window.scrollY;
    if (currentPosition > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentPosition - currentPosition / 5);
    }
  }
  
  function handleScroll() {
    var btnBackToTop = document.getElementById('btnBackToTop');
    if (window.pageYOffset > 100) {
      btnBackToTop.classList.add('show');
    } else {
      btnBackToTop.classList.remove('show');
    }
  }
  
  document.getElementById('btnBackToTop').addEventListener('click', function() {
    scrollToTop();
  });
  
  window.addEventListener('load', handleScroll);
  window.addEventListener('scroll', handleScroll);