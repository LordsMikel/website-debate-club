
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
