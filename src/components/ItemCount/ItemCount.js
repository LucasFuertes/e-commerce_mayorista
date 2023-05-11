import "./ItemCount.css";
const { useState } = require("react");

const ItemCount = ({ existencias, cantInicial, agregar }) => {
  const [cantidad, setCantidad] = useState(cantInicial);

  const incremento = () => {
    if (cantidad < existencias) {
      setCantidad(cantidad + 1);
    }
  };

  const decremento = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="contador">
      <div className="controles">
        <button className="boton" onClick={decremento}>
          -
        </button>
        <h3 className="numero">{cantidad}</h3>
        <button className="boton" onClick={incremento}>
          +
        </button>
      </div>
      <div>
        <button
          className="boton"
          onClick={() => agregar(cantidad)}
          disabled={!existencias}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
