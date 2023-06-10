import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext/CartContext";

const ItemDetail = ({
  id,
  title,
  categoryId,
  price,
  image,
  stock,
  description,
}) => {
  const [agregarCant, setAgregarCant] = useState(0);

  const { addItem } = useContext(CartContext);

  const confirmarCant = (cantidad) => {
    setAgregarCant(cantidad);

    const item = { id, title, price };

    addItem(item, cantidad);
  };

  return (
    <div className="position">
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <img src={image} alt={title} className="img-detalle" />
      </div>
      <div>
        <p className="info">Categoria: {categoryId}</p>
        <p className="info">Descripcion: {description}</p>
        <p className="info">Precio por unidad: ${price}</p>
      </div>
      <div>
        {agregarCant > 0 ? (
          <Link to="/cart">
            <button className="boton">Terminar compra</button>
          </Link>
        ) : (
          <ItemCount
            existencias={stock}
            cantInicial={1}
            agregar={confirmarCant}
          />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
