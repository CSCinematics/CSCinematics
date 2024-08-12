document.addEventListener("DOMContentLoaded", function() {
    // GSAP animation for header title
    gsap.from(".title", {
        duration: 1.5,
        y: -50,
        opacity: 0,
        delay: 0.5,
        ease: "power3.out"
    });

    // ScrollMagic controller
    var controller = new ScrollMagic.Controller();

    // Sections fade-in effect
    document.querySelectorAll("section").forEach(function(section) {
        new ScrollMagic.Scene({
            triggerElement: section,
            triggerHook: 0.9,
            reverse: false
        })
        .setTween(gsap.to(section, { duration: 1.5, opacity: 1, y: 0, ease: "power2.out" }))
        .addTo(controller);
    });

    // Parallax effect for header
    new ScrollMagic.Scene({
        triggerElement: "#header",
        triggerHook: 0,
        duration: "100%"
    })
    .setTween(gsap.to("#header", { backgroundPosition: "50% 100%", ease: "none" }))
    .addTo(controller);

    // Contact form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Thank you for reaching out, ${name}! We will get back to you at ${email} soon.`);

        // Clear the form
        document.getElementById('contact-form').reset();
    });
});
