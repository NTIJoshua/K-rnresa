function visaTips() {
    const tips = [
        "Besök Paris och njut av Eiffeltornet!",
        "Upptäck de fantastiska stränderna i Maldiverna!",
        "Utforska Tokyo och dess futuristiska stadsbild!",
        "Vandra genom de vackra Alperna!",
        "Njut av kulturen och maten i Rom!"
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


window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.style.transform = "translateY(-10px)";
        header.style.padding = "10px";
        header.style.textAlign = "left";
    } else {
        header.style.transform = "translateY(0)";
        header.style.padding = "1000px";
        header.style.textAlign = "center";
    }
});

window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    const headerText = document.getElementById("header-text");
    if (window.scrollY > 50) {
        header.style.transform = "translateY(-10px)";
        header.style.padding = "10px";
        header.style.textAlign = "left";
        headerText.style.opacity = "0";
        headerText.style.transition = "opacity 0.3s ease";
    } else {
        header.style.transform = "translateY(0)";
        header.style.padding = "20px";
        header.style.textAlign = "center";
        headerText.style.opacity = "1";
    }
});