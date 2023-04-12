document.addEventListener('DOMContentLoaded', () => {
  const homeLink = document.querySelector('a[href="#home"]');

  homeLink.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});


