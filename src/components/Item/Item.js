import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, title, image, price, stock }) => {
  return (
    <div className="card-item">
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <img src={image} alt={title} className="img-item" />
      </div>
      <div>
        <p>Precio por unidad: ${price}</p>
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
