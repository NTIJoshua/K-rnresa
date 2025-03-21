// script.js

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

// Smooth scrolling for internal links only
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
        // External links will work as normal
    });
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

// Contact form validation
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Vänligen fyll i alla fält.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Vänligen ange en giltig e-postadress.');
        return;
    }

    document.getElementById('contactForm').classList.add('hidden');
    document.getElementById('formSubmitMessage').classList.remove('hidden');
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}