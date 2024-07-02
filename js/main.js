document.addEventListener('DOMContentLoaded', function () {
    // Get the elements
    const toggleButtons = document.querySelectorAll('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Check if elements are found
    if (toggleButtons.length && mobileMenu) {
        // Add event listener to each button
        toggleButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Toggle the mobile menu
                mobileMenu.classList.toggle('hidden');
            });
        });
    } else {
        console.error('Elements not found:', {
            toggleButtons: toggleButtons.length,
            mobileMenu: !!mobileMenu
        });
    }
});