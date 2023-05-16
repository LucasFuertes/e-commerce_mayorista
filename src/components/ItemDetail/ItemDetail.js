import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, nombre, precioUnid, precioMay, img, stock, descripcion}) => {
    return(
        <div>
            <div>
                <h2>
                    {nombre}
                </h2>
            </div>
            <div>
                <img src={img} alt={nombre}/>
            </div>
            <div>
                <p>
                    Descripcion: {descripcion}
                </p>
                <p>
                    Precio por unidad: ${precioUnid}
                </p>
                <p>
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