import "./appreact.css"
import ItemDetailsContainer from "./componentes/ItemDetailsContainer";
import ItemListContainer from "./componentes/ItemListContainer";
import Navbar from "./componentes/navbar";
import Exercises from "./componentes/Exercises";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Nosotros from "./componentes/Nosotros";
import Contacto from "./componentes/Contacto";
import { CartContext, CartProvider } from "./context/CartContext";
import { useState } from "react";
import Carrito from "./componentes/Carrito";
import Checkout from "./componentes/Checkout";



function App() {
  
      

    return (
     <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailsContainer  />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>  
         
      </CartProvider>  
      
   );
}

export default App;
