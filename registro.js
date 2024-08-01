const storedUsername = localStorage.getItem('username');
const storedPassword = localStorage.getItem('password');

document.addEventListener('DOMContentLoaded', function() {
const registroForm = document.getElementById('registroForm');

registroForm.addEventListener('submit', function(event) {
    event.preventDefault();

        //Atrapa los valores
        const username = document.getElementById('username').value; 
        const password = document.getElementById('password').value;

        //Sube los valores
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
       
        //Ver si el usuario ya existe
        if (username === storedUsername && password === storedPassword) {
            alert('El usuario ya esta registrado, por favor registre un usuario')
        } else {
        registroForm.reset();

        alert('Registro exitoso. Puedes iniciar sesión.');
        window.location.href = 'login.html';    
        }


    });
});
