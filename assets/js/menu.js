/* Ruta: /assets/js/menu.js */

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle'); // Botón del menú
    const menu = document.getElementById('menu'); // Menú desplegable

    // Establece los elementos a mostrar
    const titulo = menu.querySelector('.logoHambHeader');
    const enlacesMenu = menu.querySelector('.hipervinculosHambHeader');
    const enlacesRedes = menu.querySelector('.hipervinculosHambRedes');

    // Agrega un evento click al botón del menú
    menuToggle.addEventListener('click', function() {
        // Alterna la clase 'show' en el menú
        menu.classList.toggle('show');

        // Cambia el color del icono al hacer clic
        if (menu.classList.contains('show')) {
            menuToggle.style.color = 'var(--blanco)'; // Color blanco cuando el menú está abierto

            // Muestra el contenedor del menú
            setTimeout(() => {
                enlacesRedes.style.opacity = 1; // Hace visibles los enlaces de redes
                enlacesRedes.style.transform = 'translateY(0)'; // Mueve los enlaces de redes hacia abajo
            }, 400); // Retraso para los enlaces de redes

            // Muestra los hipervínculos del menú después de otro retraso
            setTimeout(() => {
                enlacesMenu.style.opacity = 1; // Hace visibles los enlaces del menú
                enlacesMenu.style.transform = 'translateY(0)'; // Mueve los enlaces del menú hacia abajo
            }, 800); // Retraso para los hipervínculos

            // Muestra el título después de otro retraso
            setTimeout(() => {
                titulo.style.opacity = 1; // Hace visible el título
                titulo.style.transform = 'translateY(0)'; // Mueve el título hacia abajo
            }, 1200); // Retraso para el título

        } else {
            menuToggle.style.color = 'var(--negro-profundo)'; // Color original del icono

            // Resetea el estado cuando se cierra el menú
            resetMenu();
        }
    });

    function resetMenu() {
        // Resetea el contenedor del menú, los enlaces de redes, los enlaces del menú y el título
        titulo.style.opacity = 0; // Hace invisible el título
        titulo.style.transform = 'translateY(-1300px)'; // Resetea la posición del título

        enlacesMenu.style.opacity = 0; // Hace invisibles los enlaces del menú
        enlacesMenu.style.transform = 'translateY(-900px)'; // Resetea la posición de los enlaces del menú
        
        enlacesRedes.style.opacity = 0; // Hace invisibles los enlaces de redes
        enlacesRedes.style.transform = 'translateY(0px)'; // Resetea la posición de los enlaces de redes
    }
});
