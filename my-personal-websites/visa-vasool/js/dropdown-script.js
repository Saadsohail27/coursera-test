// Ensures dropdown remains open when hovered over
document.addEventListener('DOMContentLoaded', () => {
    const dropdownContainer = document.querySelector('.dropdown-container');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownContainer.addEventListener('mouseenter', () => {
        dropdownMenu.style.display = 'flex';
    });

    dropdownContainer.addEventListener('mouseleave', () => {
        dropdownMenu.style.display = 'none';
    });

    dropdownMenu.addEventListener('mouseenter', () => {
        dropdownMenu.style.display = 'flex';
    });

    dropdownMenu.addEventListener('mouseleave', () => {
        dropdownMenu.style.display = 'none';
    });
});