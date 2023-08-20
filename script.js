

// Ejemplo de manejo de eventos para agregar productos al carrito
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart() {
    // Aquí puedes agregar la lógica para agregar productos al carrito
    alert('Producto agregado al carrito');
}
