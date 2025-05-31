
const darkmodeButton = document.createElement("button");
const darkmodeCss = document.createElement("link");

darkmodeButton.className = "switcherjs";
darkmodeButton.style.padding = "6px 10px";
darkmodeButton.innerText = "Switch Theme";
darkmodeButton.title = "Toggle between dark and light mode";

// Append the button to the body
document.body.appendChild(darkmodeButton);

// Load external dark mode CSS
darkmodeCss.rel = "stylesheet";
darkmodeCss.href = "https://ariyoaresa.github.io/darkmodejs/darkmode.css";
document.head.appendChild(darkmodeCss);

// Apply saved theme from localStorage on page load
document.addEventListener("DOMContentLoaded", function () {
    document.documentElement.style.transition = "0.3s ease-in-out";

    const savedTheme = localStorage.getItem("switchertheme");
    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
});

darkmodeButton.addEventListener("click", function () {
    const html = document.documentElement;
    html.classList.toggle("dark");

    // Save the new theme
    const newTheme = html.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("switchertheme", newTheme);
});
        
