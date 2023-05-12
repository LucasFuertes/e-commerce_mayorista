import "./Item.css";

const Item = ({ id, nombre, img, precioUnid, stock }) => {
  return (
    <div className="card-item">
      <div>
        <h2>{nombre}</h2>
      </div>
      <div>
        <img src={img} alt={nombre} className="img-item" />
      </div>
      <div>
        <p>Precio por unidad: ${precioUnid}</p>
        <p>Stock del producto: {stock} unidades</p>
      </div>
      <div>
        <button className="boton-detalle"> Ver detalle </button>
      </div>
    </div>
  );
};

export default Item;
