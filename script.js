window.addEventListener("load", function() {
    setTimeout(function() {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";

            // Activar animación del texto
            document.querySelector(".title").classList.add("show");

            setTimeout(() => {
                document.querySelector(".subtitle").classList.add("show");
            }, 500);

        }, 1000);

    }, 2000);
});


// Scroll automático al presionar botón
document.getElementById("startBtn").addEventListener("click", function() {

    // Scroll suave a siguiente sección
    document.querySelector(".cream").scrollIntoView({
        behavior: "smooth"
    });

});
// Animación cuando sección entra en pantalla
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.3
});

document.querySelectorAll(".photo-section").forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1.5s ease";
    observer.observe(section);
});

document.querySelectorAll(".photo-section-2").forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(120px)";
    section.style.transition = "all 2.2s ease";

    observer.observe(section);
});

document.querySelectorAll(".photo-section-3").forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(100px)";
    section.style.transition = "all 2s ease";

    observer.observe(section);
});

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.15
});

reveals.forEach(section => {
    revealObserver.observe(section);
});

document.getElementById("surpriseBtn").addEventListener("click", function() {

    const message = document.getElementById("surpriseMessage");
    message.classList.add("show");

    startPetalRain();
});

function startPetalRain() {
    const container = document.getElementById("petal-container");

    for (let i = 0; i < 25; i++) {
        const petal = document.createElement("div");
        petal.classList.add("petal");

        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = (4 + Math.random() * 3) + "s";

        container.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 7000);
    }
}

/* ===== VIOLETAS EN SECCIONES 1, 2 Y 3 ===== */

function createVioletsAround(container) {
    const count = 20;

    for (let i = 0; i < count; i++) {
        const violet = document.createElement("div");
        violet.classList.add("violet");

        const side = Math.floor(Math.random() * 4);

        let x, y;

        if (side === 0) { // arriba
            x = Math.random() * 100;
            y = -10;
        } else if (side === 1) { // abajo
            x = Math.random() * 100;
            y = 100;
        } else if (side === 2) { // izquierda
            x = -10;
            y = Math.random() * 100;
        } else { // derecha
            x = 100;
            y = Math.random() * 100;
        }

        violet.style.left = x + "%";
        violet.style.top = y + "%";
        violet.style.animationDuration = (4 + Math.random() * 4) + "s";

        container.appendChild(violet);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".photo-container, .photo-container-2, .polaroid")
    .forEach(container => {
        createVioletsAround(container);
    });
});

const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");

startBtn.addEventListener("click", function () {

    music.currentTime = 29; // 🔹 cambia este número por el segundo que quieras

    music.volume = 0;
    music.play();

    let volumen = 0;

    const fadeIn = setInterval(function () {

        if (volumen < 0.6) {   // 🔹 aquí defines el volumen máximo
            volumen += 0.03;   // 🔹 velocidad de subida
            music.volume = volumen;
        } else {
            clearInterval(fadeIn);
        }

    }, 200); // 🔹 velocidad del efecto (más pequeño = más rápido)

});




