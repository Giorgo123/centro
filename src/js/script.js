// Función para manejar el evento de desplazamiento
function handleScroll() {
    const elements = document.querySelectorAll('body > *, section');
  
    // Iterar sobre cada elemento
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      // Si el elemento está en la ventana visible, agregar la clase 'show'
      if (elementPosition < windowHeight * 0.75) {
        element.classList.add('show');
      }
    });
  }
  
  // Asignar evento de scroll al documento
  document.addEventListener('scroll', handleScroll);
  
  // Llamar a la función handleScroll al cargar la página para mostrar los elementos iniciales
  window.addEventListener('load', handleScroll);
  





  
document.addEventListener("DOMContentLoaded", function() {
  let carousel = document.querySelector('.carousel');
  let images = document.querySelectorAll('.carousel img');
  let currentIndex = 0;
  const totalImages = images.length;
  const slideInterval = 3000; // Cambia esta variable para ajustar la velocidad de desplazamiento
  const imageWidth = window.innerWidth; // Ancho de la ventana

  carousel.style.width = totalImages * imageWidth + 'px';

  images.forEach(function(img) {
    img.style.width = imageWidth + 'px';
  });

  setInterval(nextSlide, slideInterval);

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    let newPosition = -currentIndex * imageWidth;
    carousel.style.transition = 'transform 0.5s ease';
    carousel.style.transform = `translateX(${newPosition}px)`;
  }
});
