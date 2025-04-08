// Updated Mobile Navigation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuButton = document.getElementById('close-menu-button');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    
    // Show/hide menu functions
    function openMobileMenu() {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.remove('hidden');
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
        // Only prevent default if it's an anchor link
        if (this.getAttribute('href').startsWith('#')) {
          e.preventDefault();
        }
        
        closeMobileMenu();
        
        // Handle smooth scrolling to section for anchor links
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
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
    
    // Scroll to top button functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
          scrollToTopBtn.classList.add('opacity-100');
          scrollToTopBtn.classList.remove('invisible');
        } else {
          scrollToTopBtn.classList.remove('opacity-100');
          scrollToTopBtn.classList.add('invisible');
        }
      });
      
      scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
    
    // Animate elements on scroll
    const animateOnScroll = function() {
      const elements = document.querySelectorAll('.slide-up');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add('active');
        }
      });
    };
    
    // Run on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});