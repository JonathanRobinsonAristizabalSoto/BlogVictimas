

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    // Establece los elementos a mostrar
    const titulo = menu.querySelector('.logoHambHeader');
    const enlacesMenu = menu.querySelector('.hipervinculosHambHeader');
    const enlacesRedes = menu.querySelector('.hipervinculosHambRedes');

    // Agrega un evento click al botón del menú
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');

        // Cambia el color del icono al hacer clic
        if (menu.classList.contains('show')) {
            menuToggle.style.color = 'var(--blanco)';

            // Muestra el contenedor del menú
            enlacesRedes.style.opacity = 1;
            enlacesRedes.style.transform = 'translateY(0)';

            // Muestra los hipervínculos del menú
            enlacesMenu.style.opacity = 1;
            enlacesMenu.style.transform = 'translateY(0)';

            // Muestra el título
            titulo.style.opacity = 1;
            titulo.style.transform = 'translateY(0)';

        } else {
            menuToggle.style.color = 'var(--negro-profundo)';
            resetMenu();
        }
    });

    function resetMenu() {
        // Resetea el contenedor del menú, los enlaces de redes, los enlaces del menú y el título
        titulo.style.opacity = 0;
        titulo.style.transform = 'translateY(-1000px)';

        enlacesMenu.style.opacity = 0;
        enlacesMenu.style.transform = 'translateY(-800px)';
        
        enlacesRedes.style.opacity = 0;
        enlacesRedes.style.transform = 'translateY(0px)';
    }
});