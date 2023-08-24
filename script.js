// Smooth scroll function
function smoothScroll(target) {
  const targetSection = document.querySelector(target);
  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  }
}

// Event listeners for scrolling to sections
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('section-1').addEventListener('click', () => smoothScroll('#section-1'));
  document.getElementById('section2').addEventListener('click', () => smoothScroll('#section3'));
  // Add more event listeners for additional sections as needed
});