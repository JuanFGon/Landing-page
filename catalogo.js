const productos = [
    {nombre: "Mouse", precio: 20, stock: 5, imagen: "Imagenes/mouse.jpeg"},
    {nombre: "Teclado", precio: 45, stock: 0, imagen: "Imagenes/teclado.jpeg"},
    {nombre: "Monitor", precio: 150, stock: 3, imagen: "Imagenes/monitor.jpeg"},
    {nombre: "Webcam", precio: 30, stock: 8, imagen: "Imagenes/web.jpeg"},
];

function obtenerDisponibles(lista) {
    return lista.filter((p) => p.stock > 0);
}

function crearCardHTML(producto) {
    const {nombre, precio, stock, imagen} = producto;
    return `
    <article class="card-producto">
      <img src="${imagen}" alt="${nombre}" class="imagen-producto" />
      <h3>${nombre}</h3>
      <p class="precio">$${precio}</p>
      <p class="stock">Stock disponible: ${stock} unidades</p>
    </article>
  `;
}

function renderizarProductos() {
    const contenedor = document.querySelector(".grid-productos");
    const disponibles = obtenerDisponibles(productos);
    const cardsHTML = disponibles.map((p) => crearCardHTML(p)).join("");
    contenedor.innerHTML = cardsHTML;
}

renderizarProductos();