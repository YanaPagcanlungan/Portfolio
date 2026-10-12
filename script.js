
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    // Toggle the navigation menu display when hamburger is clicked
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close the mobile menu automatically when any navigation link is clicked
    const navLinks = document.querySelectorAll('#nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
});