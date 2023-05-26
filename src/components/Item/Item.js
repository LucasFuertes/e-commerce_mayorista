import { Link } from "react-router-dom";
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
        <Link to={`/item/${id}`} className="boton-detalle">
          {" "}
          Ver detalle{" "}
        </Link>
      </div>
    </div>
  );
};

export default Item;
