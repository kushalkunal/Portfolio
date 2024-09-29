 // Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show or hide the back-to-top button based on scroll position
window.addEventListener('scroll', () => {
    const button = document.getElementById('back-to-top');
    if (window.scrollY > 200) { // Show button if scrolled down 200px
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});
