import { useState, useEffect } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos")
  const categoria = useParams().categoria;
  
  


  useEffect(() => {
       pedirDatos() 
            .then( (respuesta) => {
              if(categoria){
                setProductos(respuesta.filter((productos) => productos.categoria === categoria));
                setTitulo(categoria)

              } else {
                setProductos(respuesta);
                setTitulo(!categoria)
              }
                
            })
    }, [categoria, titulo])
  
  
  
  
    return (
    <div><ItemList productos={productos} titulo={titulo} /> </div>
  )
}

export default ItemListContainer