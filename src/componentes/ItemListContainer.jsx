import { useState, useEffect } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {collection, getDocs, query, where } from "firebase/firestore";
import {database} from "../firebase/config";


function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos")
  const categoria = useParams().categoria;
  
  


  useEffect(() => {
       const referenciaProductos = collection(database, "productos");

       const quer = categoria ? query(referenciaProductos, where("categoria", "==", categoria)) : referenciaProductos;


      getDocs(quer)
        .then((respuesta) => {

          setProductos(
            respuesta.docs.map((documento) => {
              return {...documento.data(), id: documento.id}
            })
          )
        })


    }, [categoria])
  
  
  
  
    return (
    <div><ItemList productos={productos} titulo={titulo} /> </div>
  )
}

export default ItemListContainer