const procesadorSelect = document.getElementById('procesador');                 //Obtiene el objeto seleccionado

procesadorSelect.addEventListener('change', function() {                        //Adjunta un detector de eventos al evento change del elemento seleccionado
    const procesadorSeleccionado = procesadorSelect.value;                      //Recupera el valor del elemento seleccionado
    console.log('Procesador Seleccionado:', procesadorSeleccionado);            //Registra el valor seleccionado en la consola para mostrarlo en pantalla

    const infoProcesador = document.getElementById('processor-info');           
    infoProcesador.textContent = `Seleccionaste: ${procesadorSeleccionado}`;    //Actualiza el contenido de texto del párrafo para mostrar el procesador seleccionado
});