import { useState, useEffect } from "react"
import { PedirItemID } from "../helpers/pedirItemID";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";



const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
      PedirItemID(Number(id))
        .then((respuesta) => {
            setItem(respuesta);

        })



    }, [id])
    
    return (
        <div> 
            
           {item && <ItemDetail item={item}/> } 
        
        </div>
    )



}

export default ItemDetailsContainer