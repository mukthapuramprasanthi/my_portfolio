document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate form submission (replace with actual backend handling)
    setTimeout(function() {
        document.getElementById('form-message').innerHTML = '<p>Message sent successfully!</p>';
        document.getElementById('contact-form').reset();
    }, 1000);
});
