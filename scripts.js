document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you for reaching out, ${name}! We will get back to you at ${email} soon.`);

    // Clear the form
    document.getElementById('contact-form').reset();
});
