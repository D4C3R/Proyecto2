document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Atrapa los valores
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Recupera los valores
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        // Validar si el usuario si existe
        if (username === storedUsername && password === storedPassword) {
            window.location.href = 'index.html';
        } else { 
            errorMessage.style.display = 'block';
        }
    });
});
