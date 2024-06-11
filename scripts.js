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

// Función para redireccionar a la página de arquitectura del procesador seleccionado
function redireccionarArquitectura() {
    var procesador = obtenerProcesadorSeleccionado();
    if (procesador) {
        window.location.href = "arquitectura/" + procesador + ".html";
    } else {
        alert("Por favor, selecciona un procesador primero.");
    }
}
