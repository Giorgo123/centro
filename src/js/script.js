
document.addEventListener("DOMContentLoaded", function() {
  let carousel = document.querySelector('.carousel');
  let images = document.querySelectorAll('.carousel img');
  let currentIndex = 0;
  const totalImages = images.length;
  const slideInterval = 3000; // Cambia esta variable para ajustar la velocidad de desplazamiento

  function setCarouselWidth() {
    const imageWidth = window.innerWidth; // Ancho de la ventana
    carousel.style.width = totalImages * imageWidth + 'px';

    images.forEach(function(img) {
      img.style.width = imageWidth + 'px';
    });

    // Ajustar la posición actual
    let newPosition = -currentIndex * imageWidth;
    carousel.style.transform = `translateX(${newPosition}px)`;
  }

  setCarouselWidth();

  window.addEventListener('resize', setCarouselWidth);

  setInterval(nextSlide, slideInterval);

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    let newPosition = -currentIndex * window.innerWidth;
    carousel.style.transition = 'transform 0.5s ease';
    carousel.style.transform = `translateX(${newPosition}px)`;
  }
});



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
