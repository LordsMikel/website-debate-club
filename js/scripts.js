
function toggleCorreo(show) {
    const correoField = document.getElementById('correo');
    if (show) {
        correoField.style.display = 'block';
        correoField.setAttribute('required', 'required'); // Hace el campo obligatorio
    } else {
        correoField.style.display = 'none';
        correoField.removeAttribute('required'); // Elimina la obligatoriedad
        correoField.value = ''; // Limpia el campo si estaba visible
    }
}


document.addEventListener("DOMContentLoaded", () => {

    console.log("El DOM ha sido cargado y el script está ejecutándose.");

    // Seleccionamos los elementos necesarios
    const radioButtons = document.querySelectorAll('input[name="gestion"]');
    const explanationDiv = document.getElementById("explanation");
    const responseText = document.getElementById("response-text");
    const newResponseField = document.getElementById("new-response");

    // Iteramos sobre los botones de radio para añadirles un evento
    radioButtons.forEach(radio => {
        radio.addEventListener("change", () => {
            // Muestra el contenedor de explicación
            explanationDiv.classList.remove("hidden");

            // Captura el valor seleccionado (Sí o No)
            const userResponse = radio.value;

            // Actualiza el texto dentro del contenedor
            responseText.textContent = `Has respondido "${userResponse}". ¿Por qué? Por favor, explica tu respuesta:`;

            // Limpia el área de texto y lo hace obligatorio
            newResponseField.value = "";
            newResponseField.setAttribute('required', 'required');
        });
    });
});


