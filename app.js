
document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.getElementById('goToTop');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 185) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
