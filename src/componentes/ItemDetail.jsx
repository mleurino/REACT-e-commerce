import React, { useContext, useEffect } from 'react'
import ItemCount from "./ItemCount"
import { useState } from 'react';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({item}) => {
    
    const {cart, agregarAlCarrito} = useContext(CartContext);
    console.log(cart)
    const [cantidad, setCantidad] = useState(1);
//    const [precio, setPrecio] = useState(item.precio)

//    useEffect(() => {
//      setPrecio(item.precio * cantidad);
//    }, [cantidad, item.precio]);
    

    const aumentar = () => {
      cantidad < item.stock && setCantidad (cantidad + 1) ;

    }

    const decrecer = () => {
        cantidad > 1 && setCantidad (cantidad - 1);
    }

      if (!item) return null;


  return (
    <div>
        <div className="container">
            <div className="producto-detalle ">
                    <img  src={item.imagen} alt={item.titulo} />
                <div>
                    
                    <h3 className="detail-titulo">{item.titulo}</h3>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="categoria">Categoria: {item.categoria}</p>
                    <p className="precio">${item.precio}</p>
                    <ItemCount aumentar={aumentar} decrecer={decrecer} cantidad={cantidad} handleAgregar={() => {agregarAlCarrito(item, cantidad)}} />
                </div>
            
            
            
            </div>
        </div>




    </div>
  )
}

export default ItemDetail