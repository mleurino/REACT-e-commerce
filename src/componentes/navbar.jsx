import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className='navbar '>
        <Link to='/' className='logo'><h1>Shopping</h1> </Link>
        <ul className='menu'>
            <li><Link className='menu-link' to='/'>Inicio</Link></li>
            
            <li className='menu-item'>
              <button 
                className='menu-link dropdown-toggle' 
                onClick={toggleDropdown}
              >
                Categorias
              </button>
            {isDropdownOpen && (
                <ul className='dropdown-menu'>
                  
                  <li><Link className='menu-link dropdown-item' to='/productos/medias'>Medias</Link></li>
                  <li><Link className='menu-link dropdown-item' to='/productos/pantalones'>Pantalones</Link></li>
                  <li><Link className='menu-link dropdown-item' to='/productos/remeras'>Remeras</Link></li>
                  <li><Link className='menu-link dropdown-item' to='/productos/buzos'>Buzos</Link></li>
                </ul>
              )}
            </li>
           
            <li><Link className='menu-link' to='/contacto'>Contacto</Link></li>
            <li><CartWidget /> </li>
        </ul>
    </nav>
  )
}

export default Navbar