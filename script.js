const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

var swiper = new Swiper(".mySwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});
