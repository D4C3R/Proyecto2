// login.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Obtener los valores de los campos
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Recuperar los datos almacenados en localStorage
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        // Validar las credenciales
        if (username === storedUsername && password === storedPassword) {
            // Redirigir a index.html
            window.location.href = 'index.html';
        } else { 
            // Mostrar mensaje de error
            errorMessage.style.display = 'block';
        }
    });
});
