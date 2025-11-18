
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
