import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../firebase/config';

const Checkout = () => {
    const {cart, precioTotal, vaciarCarro} = useContext(CartContext);

    const [pedidoID, setPedidoID] = useState("")

    const {register, handleSubmit} = useForm();

    const comprar = (datosUsuario) => {
        const pedido = {
            cliente: datosUsuario,
            productos: cart,
            total: precioTotal()

        }
        const pedidoRef = collection(database, "pedidos");
        addDoc(pedidoRef, pedido)
            .then((documento) => {
                setPedidoID(documento.id)
                vaciarCarro()
            })

            
    }

    if (pedidoID) {
        return (
            <div className="container">
                <h1 className="main-title">Gracias por tu compra</h1>
                <p>El pedido de su compra es: {pedidoID}</p>
            </div>
        )
    }
  
    return (
        <div className='container'>
        <h1 className="main-title">Finalizar compra</h1>
        <form action="" className="formulario" onSubmit={handleSubmit(comprar)}>
            <input type="text" required placeholder='Ingrese su nombre' {...register("nombre")} />
            <input type="email" required placeholder='Ingrese su email' {...register("email")}/>  
            <input type="phone" required placeholder='Ingrese su teléfono'{...register("teléfono")} />   
            <button className='enviar' type='submit'>Comprar</button>
            
        </form>
    </div>
  )
}

export default Checkout