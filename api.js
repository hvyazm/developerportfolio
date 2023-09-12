import R from "./ramda.js";

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

const menu = document.querySelector("#menu-toggle");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    ul.classList.toggle("show");
  });
  const navLink = document.querySelectorAll(".nav-link");
