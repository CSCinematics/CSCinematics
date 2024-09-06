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
    delay: 10000,
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

// gsap scroll animations

gsap.from(".hero-content",{
    scale:0,
    opacity:.7,
    transform:"translateY(-230px)",
    scrollTrigger:{
        trigger: ".hero-content",
        scroller: "body",
        start: "top 65%",
        end: "top 20%",
        scrub: 2,
    }
})

gsap.from(".social-media a ",{
    scale:0,
    opacity:0,
    duration:2,
    transform:"translateX(-100%)",
    scrollTrigger:{
        trigger: ".social-media a ",
        scroller: "body",
        start: "top 90%",
        end: "top 55%",
        scrub: 2,
        
    }
})

gsap.from("#contact-form button",{
        
    duration:1,
    transform:"translateX(-50%)",
    scrollTrigger:{
        trigger: "#contact-form button",
        scroller: "body",
        start: "top 90%",
        end: "top 75%",
        scrub: 2,
        marker: true,
    }
})


gsap.to(".album h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger: ".album h1",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin:true,
    }
})

gsap.to(".video-container iframe",{
    scale:1.06,
    duration: 1,
    
})





