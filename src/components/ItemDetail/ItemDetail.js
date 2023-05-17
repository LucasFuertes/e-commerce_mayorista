import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, nombre, categoria, precioUnid, precioMay, img, stock, descripcion}) => {
    return(
        <div>
            <div>
                <h2>
                    {nombre}
                </h2>
            </div>
            <div>
                <img src={img} alt={nombre} className="img-detalle"/>
            </div>
            <div>
                <p className="info">
                    Categoria: {categoria}
                </p>
                <p className="info">
                    Descripcion: {descripcion}
                </p>
                <p className="info">
                    Precio por unidad: ${precioUnid}
                </p>
                <p className="info">
                    Precio por mayor: ${precioMay} x 10 unid.
                </p>
            </div>
            <div>
                <ItemCount existencias={stock} cantInicial={1} agregar={(cantidad) => console.log(`Cantidad de artículos seleccionados: ${cantidad}`)}/>
            </div>
        </div>
    );
}

export default ItemDetail;