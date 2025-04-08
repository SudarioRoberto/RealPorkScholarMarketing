// Enhanced Mobile Navigation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const menuButton = document.querySelector('button.md\\:hidden');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu fixed inset-0 bg-white z-50 transform translate-x-full transition-transform duration-300 ease-in-out';
    mobileMenu.innerHTML = `
      <div class="flex justify-between items-center p-6 border-b">
        <a href="#hero" class="flex items-center space-x-3">
          <img src="images/logo.png" alt="MicroPig Logo" class="h-10 w-auto">
          <span class="text-xl font-bold text-gray-800">MicroPig</span>
        </a>
        <button class="close-menu focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="p-6">
        <nav class="flex flex-col space-y-4">
          <a href="#team" class="text-lg font-medium py-2 border-b border-gray-100">Team</a>
          <a href="#research" class="text-lg font-medium py-2 border-b border-gray-100">Research</a>
          <a href="#impact" class="text-lg font-medium py-2 border-b border-gray-100">Impact</a>
          <a href="#approach" class="text-lg font-medium py-2 border-b border-gray-100">Our Approach</a>
          <a href="#resources" class="text-lg font-medium py-2 border-b border-gray-100">Resources</a>
          <a href="#contact" class="mt-4 block w-full px-5 py-3 text-center rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-medium">
            Contact
          </a>
        </nav>
      </div>
    `;
    document.body.appendChild(mobileMenu);
  
    // Open mobile menu
    menuButton.addEventListener('click', function() {
      mobileMenu.classList.remove('translate-x-full');
      document.body.classList.add('overflow-hidden'); // Prevent scrolling when menu is open
    });
  
    // Close mobile menu
    const closeMenuButton = mobileMenu.querySelector('.close-menu');
    closeMenuButton.addEventListener('click', function() {
      mobileMenu.classList.add('translate-x-full');
      document.body.classList.remove('overflow-hidden');
    });
  
    // Close menu when clicking on links
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('translate-x-full');
        document.body.classList.remove('overflow-hidden');
        
        // Handle smooth scrolling
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            setTimeout(() => {
              window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
              });
            }, 300); // Small delay to allow menu transition to complete
          }
        }
      });
    });
  
    // Add CSS for mobile menu
    const style = document.createElement('style');
    style.textContent = `
      .mobile-menu {
        height: 100vh;
        overflow-y: auto;
      }
      
      body.overflow-hidden {
        overflow: hidden;
      }
    `;
    document.head.appendChild(style);
  
    // Fix navbar scrolling behavior
    const nav = document.querySelector('nav');
    const hero = document.getElementById('hero');
    
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
    
    // Make sure navbar is initialized correctly on page load
    updateNavbarOnScroll();
  });