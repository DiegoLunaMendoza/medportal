document.addEventListener('DOMContentLoaded', () => {
    // 1. Render de la tabla de personas
    const tbody = document.getElementById('personasTable');
    const personas = [
        { nombre: 'Sardi', edad: 80 },
        { nombre: 'Fabrizzio', edad: 95 },
        { nombre: 'Diego', edad: 25 }
    ];

    personas.forEach((persona) => {
        const fila = document.createElement('tr');
        const celdaNombre = document.createElement('th');
        const celdaEdad = document.createElement('th');

        celdaNombre.textContent = persona.nombre;
        celdaEdad.textContent = persona.edad;

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaEdad); 

        tbody.appendChild(fila);
    });

    // 2. Cerrar Sesión
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }

    // 3. Control del Menú Hamburguesa
    const buttonMenu = document.getElementById('boton-menu');
    const menu = document.getElementById('menu');

    if (buttonMenu && menu) {
        buttonMenu.addEventListener('click', () => {
            const abierto = menu.classList.toggle('menu-abierto');
            buttonMenu.setAttribute('aria-expanded', abierto);
        });

        menu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                menu.classList.remove('menu-abierto');
                buttonMenu.setAttribute('aria-expanded', 'false');
            });
        });
    }
});