// main.js

function applyTheme() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const backgroundColor = prefersDarkScheme ? "#333" : "#f0f0f0";
    document.body.style.backgroundColor = backgroundColor;
}

applyTheme(); // Apply the theme when the script runs

// Optional: Listen for changes in color scheme preference
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyTheme);
