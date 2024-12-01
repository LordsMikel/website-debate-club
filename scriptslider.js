// Seleccionar todos los elementos con la clase "slide-in"
const sliders = document.querySelectorAll('.slide-in');

// Configuración del Intersection Observer
const observerOptions = {
    threshold: 0.2 // 20% del elemento visible para activarlo
};

// Función de callback
const slideInCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Deja de observar el elemento después de activarlo
        }
    });
};

// Crear el Intersection Observer
const observer = new IntersectionObserver(slideInCallback, observerOptions);

// Aplicar el observador a cada elemento
sliders.forEach(slider => observer.observe(slider));
