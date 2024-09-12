// Handle hamburger menu click
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.add('active');
});

// Handle close button click
document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.remove('active');
});

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
function playVideo(iframe) {
  const videoId = iframe.getAttribute('data-id');
  const iframeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`;

  // Create a new iframe with fullscreen support
  const newIframe = document.createElement('iframe');
  newIframe.src = iframeUrl;
  newIframe.frameBorder = '0';
  newIframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen';
  newIframe.allowFullscreen = true;
  newIframe.style.width = '100%';
  newIframe.style.height = '100%';

  // Replace existing iframe with the new one
  const container = iframe.parentNode;
  container.innerHTML = ''; // Clear existing content
  container.appendChild(newIframe);

  // Request fullscreen
  if (newIframe.requestFullscreen) {
      newIframe.requestFullscreen();
  } else if (newIframe.mozRequestFullScreen) { /* Firefox */
      newIframe.mozRequestFullScreen();
  } else if (newIframe.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      newIframe.webkitRequestFullscreen();
  } else if (newIframe.msRequestFullscreen) { /* IE/Edge */
      newIframe.msRequestFullscreen();
  }
}

/*filtering function*/
function filterVideos(category) {
    const items = document.querySelectorAll('.video-item');
    if (category === 'all') {
        items.forEach(item => item.classList.remove('hidden'));
    } else {
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }
}

// JavaScript to handle Show More functionality
document.addEventListener('DOMContentLoaded', function() {
    const videosToShow = 6; // Number of videos to show initially
    let videosShown = videosToShow;

    // Initially display only the top 3 videos
    const videoItems = document.querySelectorAll('.video-item');
    videoItems.forEach((video, index) => {
        if (index < videosToShow) {
            video.classList.add('show');
        }
    });

    // Show more videos when the button is clicked
    document.getElementById('show-more-btn').addEventListener('click', function() {
        let hiddenVideos = [...videoItems].slice(videosShown, videosShown + videosToShow);

        hiddenVideos.forEach(video => {
            video.classList.add('show'); // Reveal more videos
        });

        videosShown += videosToShow;

        // Hide the Show More button when all videos are shown
        if (videosShown >= videoItems.length) {
            document.getElementById('show-more-btn').style.display = 'none';
        }
    });
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
    duration:.7,
    transform:"translateX(-100%)",
    scrollTrigger:{
        trigger: ".social-media a ",
        scroller: "body",
        start: "top 90%",
        end: "top 75%",
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
    
    }
})


gsap.to(".video-container iframe",{
    scale:1.06,
    duration: 1,
    
})





