// Select the "About" link
const aboutLink = document.querySelector('a[href="#about"]');

// Add a click event listener to the "About" link
aboutLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    
    // Get the target section using the hash fragment in the link
    const targetSection = document.querySelector(event.target.getAttribute('href'));

    // Scroll smoothly to the target section
    targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Scroll to the top of the section
    });
});

$(document).ready(function(){
    $("#mobile-menu").click(function(){
      $("#navbar .nav-list").toggleClass("active");
      $("#mobile-menu").toggleClass("active");
    });
  });
  
