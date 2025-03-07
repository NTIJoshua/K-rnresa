// Visa ett resetips
function visaTips() {
    const tips = [
        "Besök Paris och njut av Eiffeltornet!",
        "Upptäck de fantastiska stränderna i Maldiverna!",
        "Utforska Tokyo och dess futuristiska stadsbild!",
        "Vandra genom de vackra Alperna!",
        "Njut av kulturen och maten i Rom!",
        "Gå på en trevlig resa med familj och vänner!",
        "Upptäck dig själv på en underbar resa!",
        "Lär känna nya vänner för livet!"
    ];
    
    const randomIndex = Math.floor(Math.random() * tips.length);
    document.getElementById("reseTips").textContent = tips[randomIndex];
}

// Skroll-effekt på header
window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Hamburgermeny funktion
document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const menuButton = document.querySelector(".menu-button");
    const fadeLayer = document.createElement('div');
    fadeLayer.classList.add("fade-layer");
    document.body.appendChild(fadeLayer);

    // Visa/dölj hamburgermeny
    const toggleMenu = () => {
        const isOpen = menu.classList.toggle("show");
        fadeLayer.classList.toggle("visible", isOpen);
    };

    // Event listeners
    menuButton.addEventListener("click", toggleMenu);
    fadeLayer.addEventListener("click", toggleMenu);
});
