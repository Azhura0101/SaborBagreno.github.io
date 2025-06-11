console.log('Created By Azhura0101')

// ------------------------
// ANIMACIONES CON INTERSECTION OBSERVER
// ------------------------
const platos = document.querySelectorAll(".plato");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
platos.forEach((plato) => observer.observe(plato));

// ------------------------
// PLATO DESTACADO DEL DÍA
// ------------------------
const platosDelDia = [
  // 0 - Domingo
  {
    nombre: "Mondongo",
    imagen:
      "https://elrinconcolombiano.com/wp-content/uploads/2023/11/Mondongo-paisa-o-sopa-de-mondongo-o-callo.jpg",
    descripcion: "Sabor tradicional con toque casero.",
    precio: "$20.000",
  },
  // 1 - Lunes
  {
    nombre: "Bandeja De Res",
    imagen:
      "https://i0.wp.com/gastroturismord.com/wp-content/uploads/2023/05/aadd83f9a31b4b02b3ed5a5675b72cbf.jpg?resize=1000%2C566&ssl=1",
    descripcion:
      "Con acompañantes como: Arroz-Frijoles-Ensalada-Tajadas y jugo",
    precio: "$14.000",
  },
  // 2 - Martes
  {
    nombre: "Bandeja De Cerdo",
    imagen:
      "https://i.postimg.cc/5tqJZkXG/549287fb-bae7-4e5f-8ae8-866056f741a1.png",
    descripcion: "Tradición antioqueña con amor.",
    precio: "$14.000",
  },
  // 3 - Miércoles
  {
    nombre: "Bandeja De Chicharron ",
    imagen: "https://i.postimg.cc/bY79Vztm/aff501b7-5ad9-4da9-90ac-112f7a80b874.jpg",
    descripcion: "Deliciosa mezcla de mariscos frescos.",
    precio: "$14.000",
  },
  // 4 - Jueves
  {
    nombre: "Bandeja De Pechuga",
    imagen: "https://i.postimg.cc/L4xjGm3C/Whats-App-Image-2025-06-08-at-9-14-06-PM-Editado.png",
    descripcion: "Arroz saborizado con camarones frescos.",
    precio: "$14.000",
  },
  // 5 - Viernes
  {
    nombre: "Bandeja Paisa",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3GvefrM5x6aymSyHOJNe_2opyiMOLwgDQbQ&s",
    descripcion: "Sancocho tradicional con bagre fresco.",
    precio: "$20.000",
  },
  // 6 - Sábado
  {
    nombre: "Pescado Tilapia o Robalo",
    imagen: "https://i.postimg.cc/kGWQ0SJk/b5d8b3fa-7f59-4008-ae23-fe02642933a6.png",
    descripcion: "Deliciosos Pescados como Tilapia y Robalo",
    precio: "$20.000",
  },
];

// Obtener día actual
const hoy = new Date().getDay();

// Seleccionar elementos del DOM
const seccionPlato = document.querySelector(".destacado .plato.especial");
const imgPlato = seccionPlato.querySelector("img");
const nombrePlato = seccionPlato.querySelector("h3");
const descripcionPlato = seccionPlato.querySelector("p");
const precioPlato = seccionPlato.querySelector(".precio");

// Mostrar el plato del día
if (platosDelDia[hoy]) {
  const plato = platosDelDia[hoy];
  imgPlato.src = plato.imagen;
  imgPlato.alt = plato.nombre;
  nombrePlato.textContent = plato.nombre;
  descripcionPlato.textContent = plato.descripcion;
  precioPlato.textContent = plato.precio;
}

document.querySelectorAll('.carrusel-con-botones').forEach(contenedor => {
    const carrusel = contenedor.querySelector('.carrusel');
    const btnIzquierda = contenedor.querySelector('.btn-flecha.izquierda');
    const btnDerecha = contenedor.querySelector('.btn-flecha.derecha');

    btnIzquierda.addEventListener('click', () => {
        carrusel.scrollBy({ left: -550, behavior: 'smooth' });
    });

    btnDerecha.addEventListener('click', () => {
        carrusel.scrollBy({ left: 550, behavior: 'smooth' });
    });
});

