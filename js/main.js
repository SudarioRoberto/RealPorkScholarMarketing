// Updated Mobile Navigation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuButton = document.getElementById('close-menu-button');
    const hero = document.getElementById('hero'); // Add this line to define the hero element
    const nav = document.querySelector('nav');
    // Fix: Get all links in the mobile menu
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    
    // Mobile menu toggle functionality
    function openMobileMenu() {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }
    
    function closeMobileMenu() {
      mobileMenu.classList.add('translate-x-full');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
      document.body.classList.remove('overflow-hidden');
    }
    
    // Event listeners
    mobileMenuButton.addEventListener('click', openMobileMenu);
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
    function updateNavbarOnScroll() {
        if (!hero) {
          // Fallback if hero element doesn't exist
          if (window.scrollY > 10) {
            nav.classList.add('shadow-lg', 'bg-white/95');
            nav.classList.remove('bg-white/70');
          } else {
            nav.classList.remove('shadow-lg');
            nav.classList.add('bg-white/70');
            nav.classList.remove('bg-white/95');
          }
          return;
        }
        
        const heroBottom = hero.getBoundingClientRect().bottom;
        
        if (window.scrollY > 10) {
          nav.classList.add('shadow-lg');
          
          if (heroBottom <= 80) {
            // Past hero section - green background
            nav.classList.add('bg-green-50', 'text-gray-800');
            nav.classList.remove('text-gray-800', 'bg-white', 'text-gray-800');
            
            // Make sure all text in nav elements is white when background is green
            const navLinks = nav.querySelectorAll('.nav-link, .text-gray-800, .text-gray-500');
            navLinks.forEach(link => {
              link.classList.add('text-gray-800');
              link.classList.remove('bg-white', 'text-gray-500');
            });
            
          } else {
            // On hero section but scrolled a bit - translucent white
            nav.classList.add('text-gray-800');
            nav.classList.remove('text-gray-800', 'bg-green-700', 'text-gray-800');
            
            // Restore original text colors
            const navLinks = nav.querySelectorAll('.nav-link, .text-gray-800');
            navLinks.forEach(link => {
              link.classList.remove('text-gray-800');
              link.classList.add('text-gray-800');
            });
          }
        } else {
          // Top of page - transparent white
          nav.classList.remove('shadow-lg', 'bg-white/95', 'bg-green-700', 'text-gray-800');
          nav.classList.add('bg-white/70', 'text-gray-800');
          
          // Restore original text colors
          const navLinks = nav.querySelectorAll('.nav-link, .text-gray-800');
          navLinks.forEach(link => {
            link.classList.remove('text-gray-800');
            link.classList.add('text-gray-800');
          });
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