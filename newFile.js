document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        product.style.flex = "1 1 calc(20% - 1rem)"; // Ajusta el tamaño de los productos
    });
});
