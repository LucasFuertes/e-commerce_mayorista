import "./ItemDetailContainer.css"
import { useEffect, useState } from "react";
import { verProductoId } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const { itemId } = useParams();
    
    useEffect(() => {
        verProductoId(itemId)
        .then((response) => {
            setProducto(response);
        })
        .catch((error) => {
            console.error(error);
        });
    }, [itemId]);

    return(
        <div className="detalles">
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer;