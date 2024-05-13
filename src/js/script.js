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
  



  