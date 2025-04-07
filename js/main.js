<script>
// Simple JavaScript for smooth scrolling to anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add shadow to navigation on scroll
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 10) {
    nav.classList.add('shadow-lg');
  } else {
    nav.classList.remove('shadow-lg');
  }
});
</script>