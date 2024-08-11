document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("boton");
    boton.addEventListener("click", function(event) {
        alert("Hola!");
        event.stopPropagation(); // Evitando que el evento se propague al div
    });

    const contenedor = document.getElementById("contenedor");
    contenedor.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });
});