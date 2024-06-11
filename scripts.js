// Función para obtener el valor seleccionado del menú desplegable
function obtenerProcesadorSeleccionado() {
    var menuProcesador = document.getElementById("procesador-intel");
    var procesadorSeleccionado = menuProcesador.value;
    return procesadorSeleccionado;
}

// Función para redireccionar a la página de características del procesador seleccionado
function redireccionarCaracteristicas() {
    var procesador = obtenerProcesadorSeleccionado();
    if (procesador) {
        window.location.href = "caracteristicas/" + procesador + ".html";
    } else {
        alert("Por favor, selecciona un procesador primero.");
    }
}
function compararEspecificaciones() {
    // Redirige al usuario a la página "comparacion.html"
    window.location.href = "comparacion.html";
}

function restablecerFrames() {
    // Restablecer el contenido de los frames comparacion-1 y comparacion-2
    parent.frames['comparacion-1'].location.href = 'comparacion-1.html';
    parent.frames['comparacion-2'].location.href = 'comparacion-2.html';
}
function Regresar() {
    // Cambiar la URL del marco principal de vuelta a la página principal (índice)
    parent.location.href = 'seleccion-1.html';
}