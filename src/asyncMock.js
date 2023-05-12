const galletas = [
  {
    id: "1",
    nombre: 'Bizcochos salados "Don Satur"',
    precioUnid: 200,
    precioMay: 1500,
    img: "https://www.deliargentina.com/image/cache/catalog/product/alimentacion/bizcochitos-salados-de-grasa-don-satur-argentinos/bizcochitos-salados-de-grasa-don-satur-argentinos-1000x1000.png",
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

const verGalletas = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(galletas);
    }, 1000);
  });
};

export default verGalletas;
