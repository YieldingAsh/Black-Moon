// Obtener elementos
const buscador = document.getElementById("buscador");
const checkboxes = document.querySelectorAll(".tags input[type='checkbox']");
const productos = document.querySelectorAll(".producto");

// Función para filtrar productos
function filtrarProductos() {
  const texto = buscador.value.toLowerCase();
  const tagsSeleccionados = Array.from(checkboxes)
    .filter(chk => chk.checked)
    .map(chk => chk.value);

  productos.forEach(prod => {
    const nombre = prod.querySelector("h3").textContent.toLowerCase();
    const tags = prod.dataset.tags.split(",");

    const coincideTexto = nombre.includes(texto);
    const coincideTags = tagsSeleccionados.every(tag => tags.includes(tag));

    prod.style.display = (coincideTexto && coincideTags) ? "block" : "none";
  });
}

// Eventos
buscador.addEventListener("input", filtrarProductos);
checkboxes.forEach(chk => chk.addEventListener("change", filtrarProductos));