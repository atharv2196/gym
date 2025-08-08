// Smooth scrolling for navigation links
document.querySelectorAll('header nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    // Only smooth scroll for hash links (e.g. #about)
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60, // Adjust for header if needed
          behavior: 'smooth'
        });
      }
    }
    // Active link highlighting
    document.querySelectorAll('header nav ul li a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Fade-in animation on scroll
function handleScrollAnimation() {
  const elements = document.querySelectorAll('.fade-in');
  const windowBottom = window.innerHeight + window.pageYOffset;
  elements.forEach(el => {
    if (el.offsetTop < windowBottom - 100) {
      el.classList.add('visible');
    }
  });
}

// Run fade-in when scrolling or when page loads
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// Optionally, you can initialize .fade-in elements on load in case they are in view
handleScrollAnimation();

