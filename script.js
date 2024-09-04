// Toggle navigation for mobile view
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) { 
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Initialize the first Swiper
var swiper1 = new Swiper(".mySwiper1", {
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

// Initialize the second Swiper with responsive breakpoints
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

    // Smooth scroll effect
    gsap.utils.toArray('.hero').forEach(content => {
        gsap.from(content, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: content,
                start: 'top 80%', // Adjust the start position as needed
                end: 'bottom 60%',
                toggleActions: 'play none none reverse',
            }
        });
    });

    // Optional: Smooth scroll for other sections like the services section
    gsap.utils.toArray('#service').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 60%',
                toggleActions: 'play none none reverse',
            }
        });
    });

