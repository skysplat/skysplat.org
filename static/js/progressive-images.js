/**
 * Progressive Image Loading
 * Loads small placeholder images first, then swaps to full resolution
 */

document.addEventListener('DOMContentLoaded', function() {
  const progressiveImages = document.querySelectorAll('.progressive-image-wrapper');
  
  progressiveImages.forEach(wrapper => {
    const smallImg = wrapper.querySelector('.img-small');
    const largeImg = wrapper.querySelector('.img-large');
    
    if (!smallImg || !largeImg) return;
    
    // Load the large image
    const img = new Image();
    img.src = largeImg.dataset.src;
    
    img.onload = function() {
      // Set the src of the large image
      largeImg.src = img.src;
      
      // Add loaded class to trigger fade-in
      largeImg.classList.add('loaded');
      smallImg.classList.add('loaded');
      wrapper.classList.add('loaded');
    };
    
    img.onerror = function() {
      console.error('Failed to load image:', img.src);
      wrapper.classList.add('loaded'); // Remove spinner even on error
    };
  });
});

/**
 * Lazy loading for images below the fold
 * Uses Intersection Observer API
 */
if ('IntersectionObserver' in window) {
  const lazyImageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const wrapper = entry.target;
        const largeImg = wrapper.querySelector('.img-large');
        
        if (largeImg && largeImg.dataset.src && !largeImg.src) {
          const img = new Image();
          img.src = largeImg.dataset.src;
          
          img.onload = function() {
            largeImg.src = img.src;
            largeImg.classList.add('loaded');
            const smallImg = wrapper.querySelector('.img-small');
            if (smallImg) smallImg.classList.add('loaded');
            wrapper.classList.add('loaded');
          };
        }
        
        observer.unobserve(wrapper);
      }
    });
  }, {
    rootMargin: '50px 0px', // Start loading 50px before entering viewport
    threshold: 0.01
  });
  
  // Observe all progressive image wrappers that are marked for lazy loading
  document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('.progressive-image-wrapper[data-lazy="true"]');
    lazyImages.forEach(img => lazyImageObserver.observe(img));
  });
}