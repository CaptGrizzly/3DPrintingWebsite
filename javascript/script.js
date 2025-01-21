// Toggles the visibility of the navigation menu
function toggleMenu() {
    const navBar = document.querySelector('.NavBarRow');
    navBar.classList.toggle('show');
}

// Closes the menu after clicking a link
document.querySelectorAll('.NavBarColumn a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.NavBarRow').classList.remove('show');
    });
});
