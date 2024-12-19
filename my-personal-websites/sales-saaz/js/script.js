document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const arrow = document.querySelector('.arrow');

    dropdownToggle.addEventListener('mouseenter', () => {
        dropdownMenu.style.visibility = 'visible';
        dropdownMenu.style.opacity = '1';
        dropdownMenu.style.transform = 'translateY(0)';
        arrow.style.transform = 'rotate(180deg)';
    });

    dropdownToggle.addEventListener('mouseleave', () => {
        dropdownMenu.style.visibility = 'hidden';
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.transform = 'translateY(-10px)';
        arrow.style.transform = 'rotate(0deg)';
    });

    dropdownMenu.addEventListener('mouseenter', () => {
        dropdownMenu.style.visibility = 'visible';
        dropdownMenu.style.opacity = '1';
        dropdownMenu.style.transform = 'translateY(0)';
        arrow.style.transform = 'rotate(180deg)';
    });

    dropdownMenu.addEventListener('mouseleave', () => {
        dropdownMenu.style.visibility = 'hidden';
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.transform = 'translateY(-10px)';
        arrow.style.transform = 'rotate(0deg)';
    });
});