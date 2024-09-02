import { useState, useEffect } from "react"
import { PedirItemID } from "../helpers/pedirItemID";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../firebase/config";



const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        const referenciaDocumento = doc(database, "productos", id);
        getDoc(referenciaDocumento) 
            .then((respuesta) => {
                setItem(
                    {...respuesta.data(), id: respuesta.id}
                )
            })


    }, [id])
    
    return (
        <div> 
            
           {item && <ItemDetail item={item}/> } 
        
        </div>
    )



}

export default ItemDetailsContainer