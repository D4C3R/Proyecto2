// registro.js
const storedUsername = localStorage.getItem('username');
const storedPassword = localStorage.getItem('password');

document.addEventListener('DOMContentLoaded', function() {
const registroForm = document.getElementById('registroForm');

registroForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

        // Obtener los valores de los campos
        const username = document.getElementById('username').value; 
        const password = document.getElementById('password').value;

        // Guardar en localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
       
        //Verificar si el usuario ya existe
        if (username === storedUsername && password === storedPassword) {
            alert('El usuario ya esta registrado, por favor registre un usuario')
        } else {
        // Limpiar los campos del formulario
        registroForm.reset();

        alert('Registro exitoso. Puedes iniciar sesión.');
        window.location.href = 'login.html';    
        }


    });
});
