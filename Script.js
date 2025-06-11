// Variable para controlar la visibilidad del menú
let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList.remove("responsive");
        menuVisible = false;
    } else {
        document.getElementById("nav").classList.add("responsive");
        menuVisible = true;
    }
}

function seleccionar() {
    // Oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;
}

// Inicializar EmailJS
(function() {
    emailjs.init("-oQgMr62XBOuBda4A");
})();

// Manejo del envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var templateParams = {
        from_name: name,
        from_phone: phone,
        from_email: email,
        subject: subject,
        message: message
    };

    emailjs.send('service_z0jqxxf', 'template_cs2ww5f', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('¡Mensaje enviado!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Error al enviar el mensaje. Inténtalo de nuevo.');
        });
});