
function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

// Cargar header y footer
loadHTML('menu', './header.html');
loadHTML('footer', './footer.html');



// 1. Animación al hacer scroll (las cards aparecen suavemente)
const cards = document.querySelectorAll(".card");

function showCards() {
    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < trigger) {
            card.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showCards);
showCards();


// 2. Animación del título principal
const title = document.querySelector("h2");
title.style.opacity = 0;
title.style.transform = "translateY(-20px)";

setTimeout(() => {
    title.style.transition = "all 1s ease";
    title.style.opacity = 1;
    title.style.transform = "translateY(0)";
}, 300);


// 3. Botón para volver arriba
const btnTop = document.createElement("button");
btnTop.innerHTML = "⬆";
btnTop.id = "btnTop";
document.body.appendChild(btnTop);

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {
    btnTop.style.display = window.scrollY > 400 ? "block" : "none";
});
