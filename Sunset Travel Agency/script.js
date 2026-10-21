<script>
    document.addEventListener('DOMContentLoaded', function() {
      // Set current year in footer
      document.getElementById('year').textContent = new Date().getFullYear();
      
      // Carousel functionality
      const track = document.querySelector('.carousel-track');
      const slides = Array.from(track.children);
      const nextButton = document.querySelector('.carousel-btn.next');
      const prevButton = document.querySelector('.carousel-btn.prev');
      const dotsContainer = document.querySelector('.carousel-dots');
      
      let currentSlide = 0;
      const slideCount = slides.length;
      
      // Create dots
      slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
          goToSlide(index);
        });
        dotsContainer.appendChild(dot);
      });
      
      const dots = Array.from(dotsContainer.children);
      
      // Function to update slide position
      function updateSlidePosition() {
        // Hide all slides
        slides.forEach(slide => {
          slide.classList.remove('active');
        });
        
        // Show current slide
        slides[currentSlide].classList.add('active');
        
        // Update dots
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentSlide);
        });
      }
      
      // Function to go to specific slide
      function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateSlidePosition();
      }
      
      // Function to go to next slide
      function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlidePosition();
      }
      
      // Function to go to previous slide
      function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlidePosition();
      }
      
      // Event listeners for buttons
      nextButton.addEventListener('click', nextSlide);
      prevButton.addEventListener('click', prevSlide);
      
      // Auto-advance slides every 5 seconds
      let slideInterval = setInterval(nextSlide, 5000);
      
      // Pause auto-advance when hovering over carousel
      const carouselContainer = document.querySelector('.carousel-container');
      carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
      });
      
      carouselContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
      });
      
      // Initialize the carousel
      updateSlidePosition();
    });
  </script>
