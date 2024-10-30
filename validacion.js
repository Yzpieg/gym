// Función para validar el formulario de registro de usuario
function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const contrasenya = document.getElementById('contrasenya').value;
    const confirmarContrasenya = document.getElementById('confirmar_contrasenya').value;

    // Validación del campo de nombre: se asegura de que no esté vacío
    if (nombre.trim() === "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    }

    // Validación del campo de email: verifica que no esté vacío
    if (email.trim() === "") {
        alert("Por favor, ingresa tu correo electrónico.");
        return false;
    }

    // Validación de la longitud de la contraseña: al menos 6 caracteres
    if (contrasenya.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }

    // Validación de coincidencia de contraseñas: confirma que ambas contraseñas son iguales
    if (contrasenya !== confirmarContrasenya) {
        alert("Las contraseñas no coinciden. Por favor, verifica.");
        return false;
    }

    // Si todas las validaciones pasan, se permite el envío del formulario
    return true;
}

// Función para validar el formulario de actualización de usuario en la página de perfil
function valFormUsuario() {
    const telefono = document.getElementById('telefono').value;
    const password = document.getElementById('contrasenya').value;

    // Validación del teléfono: solo se verifica si tiene valor y consta de exactamente 9 dígitos
    const telefonoRegex = /^\d{9}$/;
    if (telefono && !telefonoRegex.test(telefono)) {
        alert("El teléfono debe tener exactamente 9 dígitos.");
        return false;
    }

    // Validación de la contraseña: solo se verifica si tiene al menos 6 caracteres si no está vacía
    if (password && password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }

    // Si todas las validaciones pasan, se permite el envío del formulario
    return true;
}







