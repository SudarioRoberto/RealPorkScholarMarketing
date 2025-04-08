// Updated Mobile Navigation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuButton = document.getElementById('close-menu-button');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    
    // Show/hide menu functions
    function openMobileMenu() {
      mobileMenu.classList.remove('translate-x-full', 'hidden');
      document.body.classList.add('overflow-hidden');
    }
    
    function closeMobileMenu() {
      mobileMenu.classList.add('translate-x-full');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300); // Match this with transition duration
      document.body.classList.remove('overflow-hidden');
    }
    
    // Toggle mobile menu
    menuButton.addEventListener('click', openMobileMenu);
    closeMenuButton.addEventListener('click', closeMobileMenu);
    
    // Close menu when clicking links
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        closeMobileMenu();
        
        // Handle smooth scrolling to section
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            setTimeout(() => {
              window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
              });
            }, 300); // Small delay to match menu transition
          }
        }
      });
    });
  
    // Handle navbar appearance on scroll
    const nav = document.querySelector('nav');
    
    function updateNavbarOnScroll() {
      if (window.scrollY > 10) {
        nav.classList.add('shadow-lg');
        nav.classList.add('bg-white/95');
        nav.classList.remove('bg-white/70');
      } else {
        nav.classList.remove('shadow-lg');
        nav.classList.add('bg-white/70');
        nav.classList.remove('bg-white/95');
      }
    }
    
    window.addEventListener('scroll', updateNavbarOnScroll);
    updateNavbarOnScroll(); // Initialize on page load
    
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        // Skip if it's a mobile menu link (already handled)
        if (this.closest('.mobile-menu')) return;
        
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Fix for navigating from mobile menu
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Close mobile menu if open
        if (!mobileMenu.classList.contains('hidden')) {
          closeMobileMenu();
        }
      });
    });
});