// Función para obtener el valor seleccionado del menú desplegable
function obtenerProcesadorSeleccionado() {
    var menuProcesador = document.getElementById("procesador-amd");
    var procesadorSeleccionado = menuProcesador.value;
    return procesadorSeleccionado;
}

// Función para redireccionar a la página de características del procesador seleccionado
function redireccionarCaracteristicas() {
    var procesador = obtenerProcesadorSeleccionado();
    if (procesador) {
        window.location.href = "caracteristicas-amd/" + procesador + ".html";
    } else {
        alert("Por favor, selecciona un procesador primero.");
    }
}

// Función para redireccionar a la página de arquitectura del procesador seleccionado
function redireccionarArquitectura() {
    var procesador = obtenerProcesadorSeleccionado();
    if (procesador) {
        window.location.href = "arquitectura-amd/" + procesador + ".html";
    } else {
        alert("Por favor, selecciona un procesador primero.");
    }
}
function compararEspecificacionesAMD() {
    // Redirige al usuario a la página "comparacion.html"
    window.location.href = "comparacion-amd.html";
}

function restablecerFrames() {
    // Restablecer el contenido de los frames comparacion-1 y comparacion-2
    parent.frames['comparacion-1-amd'].location.href = 'comparacion-1-amd.html';
    parent.frames['comparacion-2-amd'].location.href = 'comparacion-2-amd.html';
}
function Regresar() {
    // Cambiar la URL del marco principal de vuelta a la página principal (índice)
    parent.location.href = 'seleccion-2.html';
}