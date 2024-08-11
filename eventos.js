document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("boton");
    boton.onclick = function() {
        alert("Hola!");
    };

    const contenedor = document.getElementById("contenedor");
    contenedor.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });
});