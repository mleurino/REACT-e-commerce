import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {
    const {cart, precioTotal, vaciarCarro} = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarro()
    }
    
  return (
    <div className='container'>
        <h1 className="main-title">Carrito</h1>
        {cart.map((producto) => (
            <div className='container-carrito' key={producto.id}>
                <img className='img-fluid w-25 imagencart' src={producto.imagen} alt={producto.titulo} />
                <h3>{producto.titulo}</h3>
                <p>Precio unitario: ${producto.precio}</p>
                <p>Precio total: ${producto.precio * producto.cantidad}</p>
                <p>{producto.cantidad}</p>
            </div>
            
            
            
        ))}
        { cart.length > 0 ?
          <>
            <h2>Precio total: ${precioTotal()}</h2>
            <button className='eliminar' onClick={handleVaciar}>Eliminar productos</button>
            <Link to="/checkout" className='finalizar-compra' >Finalizar compra </Link>
            
            
            
           </> : 
           <h2>El carrito está vacio</h2>
        }
     </div>
  )
}

export default Carrito