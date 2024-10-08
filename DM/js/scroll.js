function fadeOutAndNavigate(targetUrl) {
    document.body.classList.add("fade-out");
    setTimeout(function() {
        window.location.href = targetUrl;
    }, 500); 
}

document.querySelectorAll('a.transition-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        fadeOutAndNavigate(this.getAttribute('href'));
    });
});
