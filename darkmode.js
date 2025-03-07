const darkmodeButton = document.createElement("button")
const darkmodeCss = document.createElement("link")

darkmodeButton.className = "switcherjs"
darkmodeButton.style.padding = "3px"
darkmodeButton.innerText = "Switch Theme"
document.body.appendChild(darkmodeButton)

darkmodeCss.rel = "stylesheet"
darkmodeCss.href = "https://ariyoaresa.github.io/darkmodejs/darkmode.css"
document.documentElement.appendChild(darkmodeCss)

// Ad a transition ttto the html to make it smoother
document.addEventListener("DOMContentLoaded", function(){
    document.documentElement.style.transition = "0.3s ease-in-out";
})

// button functionalities

darkmodeButton.addEventListener("click", function(){
    document.documentElement.classList.toggle("dark");
})
