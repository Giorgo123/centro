// Función para manejar el evento de desplazamiento
function handleScroll() {
  const elements = document.querySelectorAll('.slide-in');
  const windowHeight = window.innerHeight;

  elements.forEach((element, index) => {
    const elementPosition = element.getBoundingClientRect().top;

    // Si el elemento está en la ventana visible, agregar la clase 'show' después de un retraso basado en su índice
    if (elementPosition < windowHeight * 0.75) {
      setTimeout(() => {
        element.classList.add('show');
      }, index * 100); // Ajusta el tiempo de retraso según tus preferencias
    }
  });
}

// Asigna el evento de scroll al documento
document.addEventListener('scroll', handleScroll);

// Llama a la función handleScroll al cargar la página para mostrar los elementos iniciales
window.addEventListener('load', handleScroll);
