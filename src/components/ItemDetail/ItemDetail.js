import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext/CartContext";

const ItemDetail = ({
  id,
  nombre,
  categoria,
  precioUnid,
  precioMay,
  img,
  stock,
  descripcion,
}) => {
  const [agregarCant, setAgregarCant] = useState(0);

  const { addItem } = useContext(CartContext);

  const confirmarCant = (cantidad) => {
    setAgregarCant(cantidad);

    const item = { id, nombre, precioUnid };

    addItem(item, cantidad);
  };

  return (
    <div className="position">
      <div>
        <h2>{nombre}</h2>
      </div>
      <div>
        <img src={img} alt={nombre} className="img-detalle" />
      </div>
      <div>
        <p className="info">Categoria: {categoria}</p>
        <p className="info">Descripcion: {descripcion}</p>
        <p className="info">Precio por unidad: ${precioUnid}</p>
        <p className="info">Precio por mayor: ${precioMay} x 10 unid.</p>
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
