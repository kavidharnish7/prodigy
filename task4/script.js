// Dark Mode Toggle
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

const button = document.createElement('button');
button.textContent = 'Toggle Dark Mode';
button.onclick = toggleDarkMode;
document.body.prepend(button);

// Dark mode styles (Add in your CSS file as well)
