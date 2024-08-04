// Seleccionar elementos del DOM
const botonesAgregar = document.querySelectorAll('.agregar');
const listaCarrito = document.getElementById('lista-carrito');
const totalElement = document.getElementById('total');

// Variable para almacenar el total
let totalCompra = 0;

// Evento para añadir productos al carrito
botonesAgregar.forEach(boton => {
    boton.addEventListener('click', () => {
        const producto = boton.parentElement.querySelector('span').innerText; // Obtiene el nombre del producto
        const precio = parseFloat(boton.getAttribute('data-precio')); // Obtiene el precio del botón

        // Agregar el producto al carrito
        const li = document.createElement('li');
        li.textContent = `${producto} - $${precio}`;
        listaCarrito.appendChild(li);

        // Actualizar el total
        totalCompra += precio;
        totalElement.textContent = `Total: $${totalCompra}`;
    });
});

// Evento para finalizar la compra
document.getElementById('finalizar-compra').addEventListener('click', () => {
    if (totalCompra > 0) {
        alert(`Compra finalizada. Total a pagar: $${totalCompra}`);
        listaCarrito.innerHTML = ''; // Limpiar el carrito
        totalCompra = 0; // Restablecer el total
        totalElement.textContent = `Total: $0`; // Actualizar el total en la UI
    } else {
        alert('El carrito está vacío.');
    }
});