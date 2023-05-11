const galletas = [
  {
    id: "1",
    nombre: 'Bizcochos salados "Don Satur"',
    precioUnid: 200,
    precioMay: 1500,
    img: "https://golmarymar.com.ar/wp-content/uploads/Caja-Bizcocho-Don-Satur-Grasa.jpg",
    stock: 60,
    descripcion: "Descripcion de bizcochos salados",
  },
  {
    id: "2",
    nombre: 'Galletitas rellenas "Pitusas"',
    precioUnid: 220,
    precioMay: 1700,
    img: "https://elmercaderdist.com.ar/tienda/wp-content/uploads/2021/01/1421cho.jpg",
    stock: 60,
    descripcion: "Descripcion de galletas rellenas",
  },
  {
    id: "3",
    nombre: 'Galletitas surtidas "Bagley"',
    precioUnid: 500,
    precioMay: 4000,
    img: "https://plataforma.supersimple.com.ar/Panelcontenidos/Contenidos/Galletitas-surtido-bagley-x-390-gr-1634924138-0-0.jpg",
    stock: 40,
    descripcion: "Descripcion de galletas surtidas",
  },
];

const obtenerGalletas = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(galletas);
    }, 1000);
  });
};

export default obtenerGalletas;
