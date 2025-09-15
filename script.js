// /* ===============================================
//    PORTFOLIO WEBSITE - JAVASCRIPT FUNCTIONALITY
//    Author: Barshat Pradhan
//    Description: Interactive features and form handling
//    =============================================== */

// // DOCUMENT READY - Initialize all functionality when DOM is loaded
// document.addEventListener('DOMContentLoaded', function() {
//     initializeNavigation();
//     initializeScrollEffects();
//     initializeContactForm();
//     initializeAnimations();
// });

// /* ===============================================
//    NAVIGATION FUNCTIONALITY
//    =============================================== */

// /**
//  * Show loading state for form submission
//  * @param {HTMLFormElement} form - The contact form
//  */
// function showFormLoading(form) {
//     const submitButton = form.querySelector('button[type="submit"]');
//     const originalText = submitButton.textContent;
    
//     submitButton.disabled = true;
//     submitButton.textContent = 'Sending...';
//     submitButton.style.opacity = '0.7';
    
//     // Store original text for later restoration
//     submitButton.dataset.originalText = originalText;
// }

// /**
//  * Show success message after form submission
//  * @param {HTMLFormElement} form - The contact form
//  */
// function showFormSuccess(form) {
//     const submitButton = form.querySelector('button[type="submit"]');
    
//     // Reset button state
//     submitButton.disabled = false;
//     submitButton.textContent = submitButton.dataset.originalText || 'Send Message';
//     submitButton.style.opacity = '1';
    
//     // Clear form
//     form.reset();
    
//     // Show success message
//     showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
// }

// /**
//  * Show error message for form submission
//  * @param {HTMLFormElement} form - The contact form
//  * @param {string} message - Error message to display
//  */
// function showFormError(form, message) {
//     const submitButton = form.querySelector('button[type="submit"]');
    
//     // Reset button state
//     submitButton.disabled = false;
//     submitButton.textContent = submitButton.dataset.originalText || 'Send Message';
//     submitButton.style.opacity = '1';
    
//     // Show error message
//     showNotification(message, 'error');
// }

// /**
//  * Display notification message to user
//  * @param {string} message - Notification message
//  * @param {string} type - Notification type ('success', 'error', 'info')
//  */
// function showNotification(message, type = 'info') {
//     // Remove existing notifications
//     const existingNotification = document.querySelector('.notification');
//     if (existingNotification) {
//         existingNotification.remove();
//     }
    
//     // Create notification element
//     const notification = document.createElement('div');
//     notification.className = `notification notification-${type}`;
//     notification.textContent = message;
    
//     // Styling for notification
//     Object.assign(notification.style, {
//         position: 'fixed',
//         top: '20px',
//         right: '20px',
//         padding: '1rem 1.5rem',
//         borderRadius: '5px',
//         color: 'white',
//         fontWeight: '500',
//         zIndex: '10000',
//         opacity: '0',
//         transform: 'translateX(100%)',
//         transition: 'all 0.3s ease'
//     });
    
//     // Type-specific styling
//     switch (type) {
//         case 'success':
//             notification.style.backgroundColor = '#27ae60';
//             break;
//         case 'error':
//             notification.style.backgroundColor = '#e74c3c';
//             break;
//         default:
//             notification.style.backgroundColor = '#4a90e2';
//     }
    
//     // Add to DOM
//     document.body.appendChild(notification);
    
//     // Animate in
//     setTimeout(() => {
//         notification.style.opacity = '1';
//         notification.style.transform = 'translateX(0)';
//     }, 100);
    
//     // Auto remove after 5 seconds
//     setTimeout(() => {
//         notification.style.opacity = '0';
//         notification.style.transform = 'translateX(100%)';
//         setTimeout(() => notification.remove(), 300);
//     }, 5000);
// }

// /* ===============================================
//    ANIMATIONS AND VISUAL EFFECTS
//    =============================================== */

// /**
//  * Initialize scroll-based animations and visual effects
//  */
// function initializeAnimations() {
//     // Intersection Observer for fade-in animations
//     const observerOptions = {
//         root: null,
//         rootMargin: '0px 0px -100px 0px',
//         threshold: 0.1
//     };
    
//     const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
//     // Observe all animatable elements
//     const animatableElements = document.querySelectorAll(
//         '.experience-item, .education-item, .certification-item, .project-card, .skill-item, .contact-item'
//     );
    
//     animatableElements.forEach(element => {
//         element.style.opacity = '0';
//         element.style.transform = 'translateY(30px)';
//         element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//         observer.observe(element);
//     });
    
//     // Initialize typing effect for hero subtitle
//     initializeTypingEffect();
    
//     // Initialize particle background effect (optional)
//     // initializeParticleBackground();
// }

// /**
//  * Handle intersection observer callback for animations
//  * @param {IntersectionObserverEntry[]} entries - Observed elements
//  */
// function handleIntersection(entries) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             // Add animation with staggered delay for multiple elements
//             const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
            
//             setTimeout(() => {
//                 entry.target.style.opacity = '1';
//                 entry.target.style.transform = 'translateY(0)';
//             }, delay);
//         }
//     });
// }

// /**
//  * Initialize typing effect for hero subtitle
//  */
// function initializeTypingEffect() {
//     const typingElement = document.querySelector('.hero-subtitle');
//     if (!typingElement) return;
    
//     const originalText = typingElement.textContent;
//     const typingTexts = [
//         'Frontend Developer & Software Engineer',
//         'React.js & Node.js Enthusiast',
//         'Full-Stack Web Developer',
//         'UI/UX Design Advocate'
//     ];
    
//     let currentTextIndex = 0;
//     let currentCharIndex = 0;
//     let isDeleting = false;
    
//     function typeText() {
//         const currentText = typingTexts[currentTextIndex];
        
//         if (isDeleting) {
//             // Remove characters
//             typingElement.textContent = currentText.substring(0, currentCharIndex - 1);
//             currentCharIndex--;
            
//             if (currentCharIndex === 0) {
//                 isDeleting = false;
//                 currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
//                 setTimeout(typeText, 500); // Pause before typing next text
//             } else {
//                 setTimeout(typeText, 50); // Deletion speed
//             }
//         } else {
//             // Add characters
//             typingElement.textContent = currentText.substring(0, currentCharIndex + 1);
//             currentCharIndex++;
            
//             if (currentCharIndex === currentText.length) {
//                 setTimeout(() => {
//                     isDeleting = true;
//                     typeText();
//                 }, 2000); // Pause when text is complete
//             } else {
//                 setTimeout(typeText, 100); // Typing speed
//             }
//         }
//     }
    
//     // Start typing effect after page load
//     setTimeout(typeText, 1000);
// }

// /* ===============================================
//    UTILITY FUNCTIONS
//    =============================================== */

// /**
//  * Smooth scroll to element with offset for fixed navbar
//  * @param {string} targetId - ID of target element
//  */
// function scrollToElement(targetId) {
//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//         const navbarHeight = document.getElementById('navbar').offsetHeight;
//         const targetPosition = targetElement.offsetTop - navbarHeight - 20;
        
//         window.scrollTo({
//             top: targetPosition,
//             behavior: 'smooth'
//         });
//     }
// }

// /**
//  * Debounce function to limit function execution frequency
//  * @param {Function} func - Function to debounce
//  * @param {number} wait - Wait time in milliseconds
//  * @returns {Function} - Debounced function
//  */
// function debounce(func, wait) {
//     let timeout;
//     return function executedFunction(...args) {
//         const later = () => {
//             clearTimeout(timeout);
//             func(...args);
//         };
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//     };
// }

// /**
//  * Throttle function to limit function execution rate
//  * @param {Function} func - Function to throttle
//  * @param {number} limit - Time limit in milliseconds
//  * @returns {Function} - Throttled function
//  */
// function throttle(func, limit) {
//     let inThrottle;
//     return function() {
//         const args = arguments;
//         const context = this;
//         if (!inThrottle) {
//             func.apply(context, args);
//             inThrottle = true;
//             setTimeout(() => inThrottle = false, limit);
//         }
//     };
// }

// /* ===============================================
//    PERFORMANCE OPTIMIZATIONS
//    =============================================== */

// // Throttle scroll events for better performance
// const throttledScroll = throttle(function() {
//     updateActiveNavLink();
// }, 100);

// // Replace direct scroll event listener with throttled version
// window.removeEventListener('scroll', updateActiveNavLink);
// window.addEventListener('scroll', throttledScroll);

// /* ===============================================
//    ACCESSIBILITY ENHANCEMENTS
//    =============================================== */

// /**
//  * Initialize accessibility features
//  */
// function initializeAccessibility() {
//     // Skip to main content link
//     addSkipToMainLink();
    
//     // Enhanced keyboard navigation
//     enhanceKeyboardNavigation();
    
//     // Focus management for mobile menu
//     manageMobileMenuFocus();
    
//     // Reduced motion support
//     respectReducedMotion();
// }

// /**
//  * Add skip to main content link for screen readers
//  */
// function addSkipToMainLink() {
//     const skipLink = document.createElement('a');
//     skipLink.href = '#main';
//     skipLink.textContent = 'Skip to main content';
//     skipLink.className = 'skip-link';
    
//     // Hide visually but keep accessible to screen readers
//     Object.assign(skipLink.style, {
//         position: 'absolute',
//         top: '-100px',
//         left: '10px',
//         zIndex: '10001',
//         padding: '0.5rem 1rem',
//         backgroundColor: '#4a90e2',
//         color: 'white',
//         textDecoration: 'none',
//         borderRadius: '3px',
//         transition: 'top 0.3s ease'
//     });
    
//     // Show when focused
//     skipLink.addEventListener('focus', () => {
//         skipLink.style.top = '10px';
//     });
    
//     skipLink.addEventListener('blur', () => {
//         skipLink.style.top = '-100px';
//     });
    
//     document.body.insertBefore(skipLink, document.body.firstChild);
    
//     // Add main landmark if it doesn't exist
//     const heroSection = document.getElementById('home');
//     if (heroSection && !document.getElementById('main')) {
//         heroSection.id = 'main';
//         heroSection.setAttribute('role', 'main');
//     }
// }

// /**
//  * Enhance keyboard navigation throughout the site
//  */
// function enhanceKeyboardNavigation() {
//     // Add focus indicators for interactive elements
//     const focusableElements = document.querySelectorAll(
//         'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
//     );
    
//     focusableElements.forEach(element => {
//         element.addEventListener('focus', function() {
//             this.style.outline = '2px solid #4a90e2';
//             this.style.outlineOffset = '2px';
//         });
        
//         element.addEventListener('blur', function() {
//             this.style.outline = 'none';
//         });
//     });
// }

// /**
//  * Manage focus for mobile menu accessibility
//  */
// function manageMobileMenuFocus() {
//     const mobileMenuButton = document.getElementById('mobile-menu');
//     const navMenu = document.querySelector('.nav-menu');
    
//     if (mobileMenuButton && navMenu) {
//         mobileMenuButton.addEventListener('click', function() {
//             const isExpanded = navMenu.classList.contains('active');
//             mobileMenuButton.setAttribute('aria-expanded', isExpanded);
            
//             if (isExpanded) {
//                 // Focus first menu item when menu opens
//                 const firstLink = navMenu.querySelector('.nav-link');
//                 if (firstLink) {
//                     setTimeout(() => firstLink.focus(), 100);
//                 }
//             }
//         });
        
//         // Add ARIA attributes
//         mobileMenuButton.setAttribute('aria-controls', 'mobile-nav-menu');
//         mobileMenuButton.setAttribute('aria-expanded', 'false');
//         navMenu.setAttribute('id', 'mobile-nav-menu');
//     }
// }

// /**
//  * Respect user's reduced motion preferences
//  */
// function respectReducedMotion() {
//     const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
//     if (reducedMotion.matches) {
//         // Disable animations for users who prefer reduced motion
//         document.documentElement.style.setProperty('--animation-duration', '0s');
//         document.documentElement.style.setProperty('--transition-duration', '0s');
        
//         // Remove scroll behavior
//         document.documentElement.style.scrollBehavior = 'auto';
//     }
// }

// /* ===============================================
//    INITIALIZE ACCESSIBILITY ON LOAD
//    =============================================== */

// // Initialize accessibility features
// document.addEventListener('DOMContentLoaded', initializeAccessibility);

// /* ===============================================
//    ERROR HANDLING AND DEBUGGING
//    =============================================== */

// /**
//  * Global error handler for development
//  */
// window.addEventListener('error', function(e) {
//     console.error('JavaScript Error:', e.error);
//     // In production, you might want to send errors to a logging service
// });

// /**
//  * Console welcome message for developers
//  */
// console.log(`
// 🚀 Barshat Pradhan's Portfolio Website
// 📧 Contact: barshatpradhan321@gmail.com
// 🔗 LinkedIn: https://linkedin.com/in/barshatpradhan
// 💻 GitHub: https://github.com/barshatpradhan

// Built with vanilla HTML, CSS, and JavaScript
// `);

// /* ===============================================
//    FEATURE FLAGS AND CONFIGURATION
//    =============================================== */

// // Configuration object for easy customization
// const portfolioConfig = {
//     // Animation settings
//     animations: {
//         enabled: true,
//         duration: 600,
//         easing: 'ease-out'
//     },
    
//     // Contact form settings
//     contactForm: {
//         enableValidation: true,
//         showNotifications: true,
//         autoFocus: true
//     },
    
//     // Navigation settings
//     navigation: {
//         highlightActive: true,
//         smoothScroll: true,
//         mobileBreakpoint: 768
//     },
    
//     // Performance settings
//     performance: {
//         throttleScroll: true,
//         lazyLoadImages: false, // Can be implemented later
//         prefetchLinks: false   // Can be implemented later
//     }
// };

// // Export configuration for potential future use
// window.portfolioConfig = portfolioConfig; /*Initialize navigation menu functionality
//  * Handles mobile menu toggle, active link highlighting, and smooth scrolling
//  */
// function initializeNavigation() {
//     const mobileMenu = document.getElementById('mobile-menu');
//     const navMenu = document.querySelector('.nav-menu');
//     const navLinks = document.querySelectorAll('.nav-link');

//     // Mobile menu toggle functionality
//     if (mobileMenu) {
//         mobileMenu.addEventListener('click', function() {
//             mobileMenu.classList.toggle('active');
//             navMenu.classList.toggle('active');
//         });
//     }

//     // Close mobile menu when clicking on a nav link
//     navLinks.forEach(link => {
//         link.addEventListener('click', function() {
//             if (navMenu.classList.contains('active')) {
//                 mobileMenu.classList.remove('active');
//                 navMenu.classList.remove('active');
//             }
//         });
//     });

//     // Active navigation link highlighting based on scroll position
//     window.addEventListener('scroll', updateActiveNavLink);
    
//     // Initial active link setup
//     updateActiveNavLink();
// }

// /**
//  * Update active navigation link based on current scroll position
//  */
// function updateActiveNavLink() {
//     const sections = document.querySelectorAll('section[id]');
//     const navLinks = document.querySelectorAll('.nav-link');
//     const scrollPos = window.scrollY + 100; // Offset for better UX

//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;
//         const sectionId = section.getAttribute('id');

//         // Check if current scroll position is within this section
//         if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
//             // Remove active class from all links
//             navLinks.forEach(link => link.classList.remove('active'));
            
//             // Add active class to corresponding nav link
//             const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
//             if (activeLink) {
//                 activeLink.classList.add('active');
//             }
//         }
//     });
// }

// /* ===============================================
//    SCROLL EFFECTS
//    =============================================== */

// /**
//  * Initialize scroll-based effects including navbar styling and animations
//  */
// function initializeScrollEffects() {
//     const navbar = document.getElementById('navbar');
    
//     window.addEventListener('scroll', function() {
//         // Navbar background opacity on scroll
//         if (window.scrollY > 50) {
//             navbar.style.background = 'rgba(255, 255, 255, 0.98)';
//             navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
//         } else {
//             navbar.style.background = 'rgba(255, 255, 255, 0.95)';
//             navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
//         }
//     });
// }

// /* ===============================================
//    CONTACT FORM FUNCTIONALITY
//    =============================================== */

// /**
//  * Initialize contact form with validation and submission handling
//  */
// function initializeContactForm() {
//     const contactForm = document.getElementById('contact-form');
    
//     if (contactForm) {
//         contactForm.addEventListener('submit', handleFormSubmission);
        
//         // Add real-time validation to form fields
//         const formInputs = contactForm.querySelectorAll('input, textarea');
//         formInputs.forEach(input => {
//             input.addEventListener('blur', validateField);
//             input.addEventListener('input', clearFieldError);
//         });
//     }
// }

// /**
//  * Handle contact form submission
//  * @param {Event} e - Form submission event
//  */
// function handleFormSubmission(e) {
//     e.preventDefault(); // Prevent default form submission
    
//     const form = e.target;
//     const formData = new FormData(form);
    
//     // Get form field values
//     const name = formData.get('name').trim();
//     const email = formData.get('email').trim();
//     const subject = formData.get('subject').trim();
//     const message = formData.get('message').trim();
    
//     // Validate all fields before submission
//     const isValid = validateAllFields(form);
    
//     if (isValid) {
//         // Show loading state
//         showFormLoading(form);
        
//         // TODO: Integrate EmailJS or Formspree here to send form submissions via email
//         // Example EmailJS integration:
//         /*
//         emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
//             from_name: name,
//             from_email: email,
//             subject: subject,
//             message: message,
//             to_email: 'barshatpradhan321@gmail.com'
//         })
//         .then(function(response) {
//             showFormSuccess(form);
//         }, function(error) {
//             showFormError(form, 'Failed to send message. Please try again.');
//         });
//         */
        
//         // For now, simulate successful submission (remove this in production)
//         setTimeout(() => {
//             showFormSuccess(form);
//         }, 2000);
        
//         // Log form data for development purposes
//         console.log('Form submission:', {
//             name, email, subject, message
//         });
        
//     } else {
//         showFormError(form, 'Please correct the errors above.');
//     }
// }

// /**
//  * Validate individual form field
//  * @param {Event} e - Blur event from form field
//  */
// function validateField(e) {
//     const field = e.target;
//     const fieldName = field.name;
//     const fieldValue = field.value.trim();
    
//     // Clear previous error
//     clearFieldError(e);
    
//     let errorMessage = '';
    
//     // Field-specific validation
//     switch (fieldName) {
//         case 'name':
//             if (!fieldValue) {
//                 errorMessage = 'Name is required';
//             } else if (fieldValue.length < 2) {
//                 errorMessage = 'Name must be at least 2 characters';
//             }
//             break;
            
//         case 'email':
//             if (!fieldValue) {
//                 errorMessage = 'Email is required';
//             } else if (!isValidEmail(fieldValue)) {
//                 errorMessage = 'Please enter a valid email address';
//             }
//             break;
            
//         case 'subject':
//             if (!fieldValue) {
//                 errorMessage = 'Subject is required';
//             } else if (fieldValue.length < 5) {
//                 errorMessage = 'Subject must be at least 5 characters';
//             }
//             break;
            
//         case 'message':
//             if (!fieldValue) {
//                 errorMessage = 'Message is required';
//             } else if (fieldValue.length < 10) {
//                 errorMessage = 'Message must be at least 10 characters';
//             }
//             break;
//     }
    
//     // Display error if validation failed
//     if (errorMessage) {
//         showFieldError(field, errorMessage);
//         return false;
//     }
    
//     return true;
// }

// /**
//  * Validate all form fields
//  * @param {HTMLFormElement} form - The contact form
//  * @returns {boolean} - True if all fields are valid
//  */
// function validateAllFields(form) {
//     const fields = form.querySelectorAll('input[required], textarea[required]');
//     let isAllValid = true;
    
//     fields.forEach(field => {
//         const mockEvent = { target: field };
//         if (!validateField(mockEvent)) {
//             isAllValid = false;
//         }
//     });
    
//     return isAllValid;
// }

// /**
//  * Check if email format is valid
//  * @param {string} email - Email address to validate
//  * @returns {boolean} - True if email is valid
//  */
// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// /**
//  * Show error message for a specific field
//  * @param {HTMLElement} field - The form field element
//  * @param {string} message - Error message to display
//  */
// function showFieldError(field, message) {
//     field.style.borderColor = '#e74c3c';
    
//     // Remove existing error message
//     const existingError = field.parentNode.querySelector('.field-error');
//     if (existingError) {
//         existingError.remove();
//     }
    
//     // Create and display error message
//     const errorDiv = document.createElement('div');
//     errorDiv.className = 'field-error';
//     errorDiv.style.color = '#e74c3c';
//     errorDiv.style.fontSize = '0.85rem';
//     errorDiv.style.marginTop = '0.25rem';
//     errorDiv.textContent = message;
    
//     field.parentNode.appendChild(errorDiv);
// }

// /**
//  * Clear error styling and message from a field
//  * @param {Event} e - Input event from form field
//  */
// function clearFieldError(e) {
//     const field = e.target;
//     field.style.borderColor = '#e1e1e1';
    
//     const errorMessage = field.parentNode.querySelector('.field-error');
//     if (errorMessage) {
//         errorMessage.remove();
//     }
// }

// /**/



/* ===============================================
   PORTFOLIO WEBSITE - JAVASCRIPT FUNCTIONALITY
   Author: Barshat Pradhan
   Description: Interactive features and form handling
   =============================================== */

import emailjs from "emailjs-com";

// DOCUMENT READY - Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollEffects();
    initializeContactForm();
    initializeAnimations();
});

/* ===============================================
   NAVIGATION FUNCTIONALITY
   =============================================== */

/**
 * Show loading state for form submission
 * @param {HTMLFormElement} form - The contact form
 */
function showFormLoading(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    submitButton.style.opacity = '0.7';
    
    // Store original text for later restoration
    submitButton.dataset.originalText = originalText;
}

/**
 * Show success message after form submission
 * @param {HTMLFormElement} form - The contact form
 */
function showFormSuccess(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Reset button state
    submitButton.disabled = false;
    submitButton.textContent = submitButton.dataset.originalText || 'Send Message';
    submitButton.style.opacity = '1';
    
    // Clear form
    form.reset();
    
    // Show success message
    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
}

/**
 * Show error message for form submission
 * @param {HTMLFormElement} form - The contact form
 * @param {string} message - Error message to display
 */
function showFormError(form, message) {
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Reset button state
    submitButton.disabled = false;
    submitButton.textContent = submitButton.dataset.originalText || 'Send Message';
    submitButton.style.opacity = '1';
    
    // Show error message
    showNotification(message, 'error');
}

/**
 * Display notification message to user
 * @param {string} message - Notification message
 * @param {string} type - Notification type ('success', 'error', 'info')
 */
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Styling for notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '5px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease'
    });
    
    // Type-specific styling
    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#27ae60';
            break;
        case 'error':
            notification.style.backgroundColor = '#e74c3c';
            break;
        default:
            notification.style.backgroundColor = '#4a90e2';
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

/* ===============================================
   ANIMATIONS AND VISUAL EFFECTS
   =============================================== */

/**
 * Initialize scroll-based animations and visual effects
 */
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe all animatable elements
    const animatableElements = document.querySelectorAll(
        '.experience-item, .education-item, .certification-item, .project-card, .skill-item, .contact-item'
    );
    
    animatableElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // Initialize typing effect for hero subtitle
    initializeTypingEffect();
    
    // Initialize particle background effect (optional)
    // initializeParticleBackground();
}

/**
 * Handle intersection observer callback for animations
 * @param {IntersectionObserverEntry[]} entries - Observed elements
 */
function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation with staggered delay for multiple elements
            const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
            
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, delay);
        }
    });
}

/**
 * Initialize typing effect for hero subtitle
 */
function initializeTypingEffect() {
    const typingElement = document.querySelector('.hero-subtitle');
    if (!typingElement) return;
    
    const originalText = typingElement.textContent;
    const typingTexts = [
        'Frontend Developer & Software Engineer',
        'React.js & Node.js Enthusiast',
        'Full-Stack Web Developer',
        'UI/UX Design Advocate'
    ];
    
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    function typeText() {
        const currentText = typingTexts[currentTextIndex];
        
        if (isDeleting) {
            // Remove characters
            typingElement.textContent = currentText.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            
            if (currentCharIndex === 0) {
                isDeleting = false;
                currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
                setTimeout(typeText, 500); // Pause before typing next text
            } else {
                setTimeout(typeText, 50); // Deletion speed
            }
        } else {
            // Add characters
            typingElement.textContent = currentText.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            
            if (currentCharIndex === currentText.length) {
                setTimeout(() => {
                    isDeleting = true;
                    typeText();
                }, 2000); // Pause when text is complete
            } else {
                setTimeout(typeText, 100); // Typing speed
            }
        }
    }
    
    // Start typing effect after page load
    setTimeout(typeText, 1000);
}

/* ===============================================
   UTILITY FUNCTIONS
   =============================================== */

/**
 * Smooth scroll to element with offset for fixed navbar
 * @param {string} targetId - ID of target element
 */
function scrollToElement(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

/**
 * Debounce function to limit function execution frequency
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to limit function execution rate
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/* ===============================================
   PERFORMANCE OPTIMIZATIONS
   =============================================== */

// Throttle scroll events for better performance
const throttledScroll = throttle(function() {
    updateActiveNavLink();
}, 100);

// Replace direct scroll event listener with throttled version
window.removeEventListener('scroll', updateActiveNavLink);
window.addEventListener('scroll', throttledScroll);

/* ===============================================
   ACCESSIBILITY ENHANCEMENTS
   =============================================== */

/**
 * Initialize accessibility features
 */
function initializeAccessibility() {
    // Skip to main content link
    addSkipToMainLink();
    
    // Enhanced keyboard navigation
    enhanceKeyboardNavigation();
    
    // Focus management for mobile menu
    manageMobileMenuFocus();
    
    // Reduced motion support
    respectReducedMotion();
}

/**
 * Add skip to main content link for screen readers
 */
function addSkipToMainLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    
    // Hide visually but keep accessible to screen readers
    Object.assign(skipLink.style, {
        position: 'absolute',
        top: '-100px',
        left: '10px',
        zIndex: '10001',
        padding: '0.5rem 1rem',
        backgroundColor: '#4a90e2',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '3px',
        transition: 'top 0.3s ease'
    });
    
    // Show when focused
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '10px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-100px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main landmark if it doesn't exist
    const heroSection = document.getElementById('home');
    if (heroSection && !document.getElementById('main')) {
        heroSection.id = 'main';
        heroSection.setAttribute('role', 'main');
    }
}

/**
 * Enhance keyboard navigation throughout the site
 */
function enhanceKeyboardNavigation() {
    // Add focus indicators for interactive elements
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #4a90e2';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
}

/**
 * Manage focus for mobile menu accessibility
 */
function manageMobileMenuFocus() {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuButton && navMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isExpanded = navMenu.classList.contains('active');
            mobileMenuButton.setAttribute('aria-expanded', isExpanded);
            
            if (isExpanded) {
                // Focus first menu item when menu opens
                const firstLink = navMenu.querySelector('.nav-link');
                if (firstLink) {
                    setTimeout(() => firstLink.focus(), 100);
                }
            }
        });
        
        // Add ARIA attributes
        mobileMenuButton.setAttribute('aria-controls', 'mobile-nav-menu');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        navMenu.setAttribute('id', 'mobile-nav-menu');
    }
}

/**
 * Respect user's reduced motion preferences
 */
function respectReducedMotion() {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (reducedMotion.matches) {
        // Disable animations for users who prefer reduced motion
        document.documentElement.style.setProperty('--animation-duration', '0s');
        document.documentElement.style.setProperty('--transition-duration', '0s');
        
        // Remove scroll behavior
        document.documentElement.style.scrollBehavior = 'auto';
    }
}

/* ===============================================
   INITIALIZE ACCESSIBILITY ON LOAD
   =============================================== */

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', initializeAccessibility);

/* ===============================================
   ERROR HANDLING AND DEBUGGING
   =============================================== */

/**
 * Global error handler for development
 */
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // In production, you might want to send errors to a logging service
});

/**
 * Console welcome message for developers
 */
console.log(`
🚀 Barshat Pradhan's Portfolio Website
📧 Contact: barshatpradhan321@gmail.com
🔗 LinkedIn: https://linkedin.com/in/barshatpradhan
💻 GitHub: https://github.com/barshatpradhan

Built with vanilla HTML, CSS, and JavaScript
`);

/* ===============================================
   FEATURE FLAGS AND CONFIGURATION
   =============================================== */

// Configuration object for easy customization
const portfolioConfig = {
    // Animation settings
    animations: {
        enabled: true,
        duration: 600,
        easing: 'ease-out'
    },
    
    // Contact form settings
    contactForm: {
        enableValidation: true,
        showNotifications: true,
        autoFocus: true
    },
    
    // Navigation settings
    navigation: {
        highlightActive: true,
        smoothScroll: true,
        mobileBreakpoint: 768
    },
    
    // Performance settings
    performance: {
        throttleScroll: true,
        lazyLoadImages: false, // Can be implemented later
        prefetchLinks: false   // Can be implemented later
    }
};

// Export configuration for potential future use
window.portfolioConfig = portfolioConfig; /*Initialize navigation menu functionality
 * Handles mobile menu toggle, active link highlighting, and smooth scrolling
 */
function initializeNavigation() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle functionality
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Active navigation link highlighting based on scroll position
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Initial active link setup
    updateActiveNavLink();
}

/**
 * Update active navigation link based on current scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPos = window.scrollY + 100; // Offset for better UX

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        // Check if current scroll position is within this section
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to corresponding nav link
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

/* ===============================================
   SCROLL EFFECTS
   =============================================== */

/**
 * Initialize scroll-based effects including navbar styling and animations
 */
function initializeScrollEffects() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        // Navbar background opacity on scroll
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
}

/* ===============================================
   CONTACT FORM FUNCTIONALITY
   =============================================== */

/**
 * Initialize contact form with validation and submission handling
 */
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
        
        // Add real-time validation to form fields
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    }
}


/**
 * Handle contact form submission
 * @param {Event} e - Form submission event
 */
  document.getElementById("contact-form").addEventListener("submit", handleFormSubmission);

//   function handleFormSubmission(e) {
//     e.preventDefault();

//     const form = e.target;
//     const formData = new FormData(form);

//     const name = formData.get('name').trim();
//     const email = formData.get('email').trim();
//     const subject = formData.get('subject').trim();
//     const message = formData.get('message').trim();

//     if (validateAllFields(form)) {
//       showFormLoading(form);

//       emailjs.init("7wr5Obn1huOL0NIiq"); // Replace with your EmailJS public key

//       emailjs.send("service_4qtpiky", "template_3szudmm", {
//         from_name: name,
//         from_email: email,
//         subject: subject,
//         message: message,
//         to_email: "barshatpradhan321@gmail.com"
//       })
//       .then(() => {
//         showFormSuccess(form);
//       })
//       .catch(() => {
//         showFormError(form, "Failed to send message. Please try again.");
//       });

//     } else {
//       showFormError(form, "Please correct the errors above.");
//     }
//   }

/**
 * Handle contact form submission
 * @param {Event} e - Form submission event
 */

// document.getElementById("contact-form").addEventListener("submit", handleFormSubmission);
document.getElementById("contact-form").addEventListener("submit", handleFormSubmission);
function handleFormSubmission(e) {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;
    const formData = new FormData(form);

    // Get form field values
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const subject = formData.get('subject').trim();
    const message = formData.get('message').trim();

    // Validate all fields before submission
    const isValid = validateAllFields(form);

    if (isValid) {
        // Show loading state
        showFormLoading(form);

        // ✅ EmailJS integration
        emailjs.send("service_4qtpiky", "template_3szudmm", {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: "barshatpradhan321@gmail.com"
        })
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            showFormSuccess(form);
        })
        .catch(function(error) {
            console.error("FAILED...", error);
            showFormError(form, "Failed to send message. Please try again.");
        });

    } else {
        showFormError(form, "Please correct the errors above.");
    }
}


// function handleFormSubmission(e) {
//     e.preventDefault(); // Prevent default form submission
    
//     const form = e.target;
//     const formData = new FormData(form);
    
//     // Get form field values
//     const name = formData.get('name').trim();
//     const email = formData.get('email').trim();
//     const subject = formData.get('subject').trim();
//     const message = formData.get('message').trim();
    
//     // Validate all fields before submission
//     const isValid = validateAllFields(form);
    
//     if (isValid) {
//         // Show loading state
//         showFormLoading(form);
        
//         // TODO: Integrate EmailJS or Formspree here to send form submissions via email
//         // Example EmailJS integration:
        
//         emailjs.send('service_4qtpiky  ', 'template_3szudmm', {
//             from_name: name,
//             from_email: email,
//             subject: subject,
//             message: message,
//             to_email: 'barshatpradhan321@gmail.com'
//         })
//         .then(function(response) {
//             showFormSuccess(form);
//         }, function(error) {
//             showFormError(form, 'Failed to send message. Please try again.');
//         });
        
        
//         // For now, simulate successful submission (remove this in production)
//         setTimeout(() => {
//             showFormSuccess(form);
//         }, 2000);
        
//         // Log form data for development purposes
//         console.log('Form submission:', {
//             name, email, subject, message
//         });
        
//     } else {
//         showFormError(form, 'Please correct the errors above.');
//     }
// }



/**
 * Validate individual form field
 * @param {Event} e - Blur event from form field
 */
function validateField(e) {
    const field = e.target;
    const fieldName = field.name;
    const fieldValue = field.value.trim();
    
    // Clear previous error
    clearFieldError(e);
    
    let errorMessage = '';
    
    // Field-specific validation
    switch (fieldName) {
        case 'name':
            if (!fieldValue) {
                errorMessage = 'Name is required';
            } else if (fieldValue.length < 2) {
                errorMessage = 'Name must be at least 2 characters';
            }
            break;
            
        case 'email':
            if (!fieldValue) {
                errorMessage = 'Email is required';
            } else if (!isValidEmail(fieldValue)) {
                errorMessage = 'Please enter a valid email address';
            }
            break;
            
        case 'subject':
            if (!fieldValue) {
                errorMessage = 'Subject is required';
            } else if (fieldValue.length < 5) {
                errorMessage = 'Subject must be at least 5 characters';
            }
            break;
            
        case 'message':
            if (!fieldValue) {
                errorMessage = 'Message is required';
            } else if (fieldValue.length < 10) {
                errorMessage = 'Message must be at least 10 characters';
            }
            break;
    }
    
    // Display error if validation failed
    if (errorMessage) {
        showFieldError(field, errorMessage);
        return false;
    }
    
    return true;
}

/**
 * Validate all form fields
 * @param {HTMLFormElement} form - The contact form
 * @returns {boolean} - True if all fields are valid
 */
function validateAllFields(form) {
    const fields = form.querySelectorAll('input[required], textarea[required]');
    let isAllValid = true;
    
    fields.forEach(field => {
        const mockEvent = { target: field };
        if (!validateField(mockEvent)) {
            isAllValid = false;
        }
    });
    
    return isAllValid;
}

/**
 * Check if email format is valid
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if email is valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Show error message for a specific field
 * @param {HTMLElement} field - The form field element
 * @param {string} message - Error message to display
 */
function showFieldError(field, message) {
    field.style.borderColor = '#e74c3c';
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Create and display error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.85rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

/**
 * Clear error styling and message from a field
 * @param {Event} e - Input event from form field
 */
function clearFieldError(e) {
    const field = e.target;
    field.style.borderColor = '#e1e1e1';
    
    const errorMessage = field.parentNode.querySelector('.field-error');
    if (errorMessage) {
        errorMessage.remove();
    }
}

/**
 */