// Select the button and the body element
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check if the user previously chose dark mode
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️ Light Mode';
}

// Add an event listener for when the button is clicked
themeToggleBtn.addEventListener('click', () => {
    // Toggle the dark-mode class on the body
    body.classList.toggle('dark-mode');

    // Change button text and save preference
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleBtn.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});
