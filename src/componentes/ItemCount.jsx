import React, { useState } from 'react'

const ItemCount = ({cantidad, decrecer, aumentar, handleAgregar}) => {
    
  return (
    <div>
        <div className="item-count">
            <button onClick={decrecer}>-</button>
            <p>{cantidad}</p>
            <button onClick={aumentar}>+</button>
        </div>
        <button onClick={handleAgregar} className='agregar-al-carrito'>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount