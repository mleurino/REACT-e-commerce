import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();
/*const carritoInicial = JSON.parse(localStorage.getItem("carrito"))|| [];*/

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
      
    const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = {...item, cantidad}

    const nuevoCarrito = [...cart]
    const yaEstaCart = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)
      if (yaEstaCart) {
        yaEstaCart.cantidad =+ cantidad;
        
      } else {
        nuevoCarrito.push(itemAgregado);
      }
      setCart(nuevoCarrito);
  }
  const cantidadCarrito = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
  }
  const precioTotal = () => {
    return cart.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0)
  }
  const vaciarCarro = () => {
    setCart([]);
  }
  //useEffect(() => {
   // localStorage.setItem("carrito", JSON.stringify(cart));
  //  }, [cart])

  return (
    <CartContext.Provider value={{cart, agregarAlCarrito, cantidadCarrito, precioTotal, vaciarCarro}}>
        {children}
    </CartContext.Provider>
  )
}