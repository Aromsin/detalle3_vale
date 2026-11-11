// ============================================
// SCRAPBOOK DIGITAL PARA VALERIA
// ============================================

// 1. Animar la aparición de las secciones al desplazarse.
const elementosReveal = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver((entradas, observer) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
                observer.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.12
    });

    elementosReveal.forEach((elemento) => observador.observe(elemento));
} else {
    // Alternativa para navegadores antiguos.
    elementosReveal.forEach((elemento) => elemento.classList.add("visible"));
}


// 2. Abrir una ventana con el texto de cada recuerdo.
const tarjetas = document.querySelectorAll(".memory-card");
const modal = document.getElementById("memoryModal");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalMessage = document.getElementById("modalMessage");
const closeModalButton = document.getElementById("closeModal");

function abrirRecuerdo(tarjeta) {
    modalTitle.textContent = tarjeta.dataset.title;
    modalDate.textContent = tarjeta.dataset.date;
    modalMessage.textContent = tarjeta.dataset.message;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeModalButton.focus();
}

function cerrarRecuerdo() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener("click", () => abrirRecuerdo(tarjeta));

    // Permite abrir la tarjeta con Enter o barra espaciadora.
    tarjeta.addEventListener("keydown", (evento) => {
        if (evento.key === "Enter" || evento.key === " ") {
            evento.preventDefault();
            abrirRecuerdo(tarjeta);
        }
    });
});

closeModalButton.addEventListener("click", cerrarRecuerdo);

modal.addEventListener("click", (evento) => {
    if (evento.target.hasAttribute("data-close-modal")) {
        cerrarRecuerdo();
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && modal.classList.contains("is-open")) {
        cerrarRecuerdo();
    }
});


// 3. Notitas que cambian al pulsar el botón.
const notitas = [
    "Que nunca te falten razones para sonreír, ni personas que celebren tus pequeñas alegrías.",
    "Ojalá hoy te pase algo bonito, de esas cosas sencillas que mejoran todo el día.",
    "No olvides lo valiosa que eres y todo lo bonito que puedes aportar al mundo.",
    "Que tus días tengan momentos tranquilos, risas sinceras y sueños que te ilusionen.",
    "A veces, una pausa, una canción bonita y una sonrisa son un gran comienzo."
];

const dailyNote = document.getElementById("dailyNote");
const newNoteButton = document.getElementById("newNote");
let notaActual = 0;

newNoteButton.addEventListener("click", () => {
    let siguienteNota;

    do {
        siguienteNota = Math.floor(Math.random() * notitas.length);
    } while (siguienteNota === notaActual);

    notaActual = siguienteNota;
    dailyNote.style.opacity = "0";

    setTimeout(() => {
        dailyNote.textContent = notitas[notaActual];
        dailyNote.style.opacity = "1";
    }, 180);
});


// 4. Pequeños destellos decorativos en el fondo.
const simbolos = ["✦", "✧", "·"];

function crearDestello() {
    const destello = document.createElement("span");
    destello.classList.add("sparkle");
    destello.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];

    destello.style.left = `${Math.random() * 100}%`;
    destello.style.bottom = "-25px";
    destello.style.fontSize = `${Math.random() * 12 + 8}px`;

    const duracion = Math.random() * 5 + 7;
    destello.style.animationDuration = `${duracion}s`;

    document.body.appendChild(destello);

    setTimeout(() => destello.remove(), duracion * 1000);
}

const movimientoReducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!movimientoReducido) {
    setInterval(crearDestello, 900);
}
