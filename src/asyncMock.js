const productos = [
  {
    id: "1",
    nombre: 'Bizcochos salados "Don Satur"',
    categoria: 'galletas',
    precioUnid: 200,
    precioMay: 1500,
    img: "https://www.deliargentina.com/image/cache/catalog/product/alimentacion/bizcochitos-salados-de-grasa-don-satur-argentinos/bizcochitos-salados-de-grasa-don-satur-argentinos-1000x1000.png",
    stock: 60,
    descripcion: "Descripcion de bizcochos salados",
  },
  {
    id: "2",
    nombre: 'Galletitas rellenas "Pitusas"',
    categoria: 'galletas',
    precioUnid: 220,
    precioMay: 1700,
    img: "https://elmercaderdist.com.ar/tienda/wp-content/uploads/2021/01/1421cho.jpg",
    stock: 60,
    descripcion: "Descripcion de galletas rellenas",
  },
  {
    id: "3",
    nombre: 'Galletitas surtidas "Bagley"',
    categoria: 'galletas',
    precioUnid: 500,
    precioMay: 4000,
    img: "https://plataforma.supersimple.com.ar/Panelcontenidos/Contenidos/Galletitas-surtido-bagley-x-390-gr-1634924138-0-0.jpg",
    stock: 40,
    descripcion: "Descripcion de galletas surtidas",
  },
  {
    id: "4",
    nombre: 'Antifaces',
    categoria: 'cotillon',
    precioUnid: 100,
    precioMay: 700,
    img: "https://http2.mlstatic.com/D_NQ_NP_995362-MLA31036610021_062019-W.jpg",
    stock: 40,
    descripcion: "Descripcion de antifaces",
  }
];

export const verProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

// export default verProductos;

export const verProductoId = (productoId) => {
  return new Promise ((resolve) => {
    setTimeout (() => {
      resolve(productos.find(prod => prod.id === productoId));
    }, 2000);
  });
};

export const verProductoCategoria = (productoCategoria) => {
  return new Promise ((resolve) => {
    setTimeout (() => {
      resolve(productos.filter(prod => prod.categoria === productoCategoria));
    }, 2000);
  });
};