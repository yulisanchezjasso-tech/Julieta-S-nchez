// Función genérica para simular la captura de datos del formulario
function capturarDatos(evento, nombreFormulario) {
    evento.preventDefault(); // Evita que la página se recargue de golpe
    alert("¡Datos del formulario de " + nombreFormulario + " capturados correctamente con JavaScript!");
}