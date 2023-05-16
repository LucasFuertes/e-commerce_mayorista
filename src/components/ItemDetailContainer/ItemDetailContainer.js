import { useEffect, useState } from "react";
import { verGalletaId } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [galleta, setGalleta] = useState(null);
    
    useEffect(() => {
        verGalletaId("1")
        .then((response) => {
            setGalleta(response);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    return(
        <div className="detalles">
            <ItemDetail {...galleta}/>
        </div>
    )
}

export default ItemDetailContainer;