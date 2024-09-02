import { useForm } from 'react-hook-form'

const Contacto = () => {

    const {register, handleSubmit} = useForm();

    const enviar = (datosUsuario) => {
        const pedido = {
            cliente: datosUsuario
        }
    }

   return (
    <div className='container'>
        <h1 className="main-title">Contacto</h1>
        <form action="" className="formulario" onSubmit={handleSubmit(enviar)}>
            <input type="text" placeholder='Ingrese su nombre' {...register("nombre")} />
            <input type="email" placeholder='Ingrese su email' {...register("email")}/>  
            <input type="phone" placeholder='Ingrese su teléfono'{...register("teléfono")} />   
            <button className='enviar' type='submit'>Enviar</button>
            
        </form>
    </div>
  )
}

export default Contacto