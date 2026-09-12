document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('usuario').value;
        const password = document.getElementById('password').value;

        // NOTA: credenciales hardcodeadas solo para maqueta/demo.
        // En un caso real esta validación debe hacerla un backend.
        if (username === 'admin' && password === 'password') {
            window.location.href = 'dashboard.html';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
});