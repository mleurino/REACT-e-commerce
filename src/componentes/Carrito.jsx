import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {
    const {cart, precioTotal, vaciarCarro} = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarro()
    }
    
  return (
    <div className='container'>
        <h1 className="main-title">Carrito</h1>
        {cart.map((producto) => (
            <div key={producto.id}>
                <img src={producto.imagen} alt={producto.titulo} />
                <h3>{producto.titulo}</h3>
                <p>Precio unitario: ${producto.precio}</p>
                <p>Precio total: ${producto.precio * producto.cantidad}</p>
                <p>{producto.cantidad}</p>
            </div>
            
            
            
        ))}
        { cart.length > 0 ?
          <>
            <h2>Precio total: ${precioTotal()}</h2>
            <button onClick={handleVaciar}>Eliminar productos</button>
           </> : 
           <h2>El carrito está vacio</h2>
        }
     </div>
  )
}

export default Carrito