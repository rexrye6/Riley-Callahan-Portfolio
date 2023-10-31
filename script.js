document.addEventListener('DOMContentLoaded', function () {
  // Get references to the menu icon and the navigation menu
  const menuIcon = document.getElementById('menu-icon');
  const navMenu = document.getElementById('nav-menu');

  // Function to show/hide the navigation menu
  function toggleNavMenu() {
    if (window.innerWidth < 789) {
      // On small screens, toggle the menu's display property
      if (navMenu.style.display === 'block' || navMenu.style.display === '') {
        navMenu.style.display = 'none';
      } else {
        navMenu.style.display = 'block';
      }
    } else {
      // On larger screens (via media queries), always display the menu
      navMenu.style.display = 'block';
    }
  }

  // Add a click event listener to the menu icon
  menuIcon.addEventListener('click', function () {
    toggleNavMenu();
  });

  // Call the toggleNavMenu function initially and whenever the window is resized
  toggleNavMenu(); // Call initially
  window.addEventListener('resize', toggleNavMenu); // Call on resize
