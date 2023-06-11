window.addEventListener('scroll', function() {
  var headerContainer = document.querySelector('.header-container');
  if (window.pageYOffset > 0) {
    headerContainer.style.height = '60px'; /* Adjust the desired height */
  } else {
    headerContainer.style.height = '80px'; /* Adjust the initial height */
  }
});
