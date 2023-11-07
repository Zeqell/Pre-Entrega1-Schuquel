import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../Cartwidget/Cartwidget'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo"><h1>JJE</h1></Link>
            <ul className="menu">
                <li><Link className="menu-link" to="/">Inicio</Link></li>
                <li><Link className="menu-link" to="/productos">Productos</Link></li>
                <li><Link className="menu-link" to="/productos/Muebles Living">Muebles Living</Link></li>
                <li><Link className="menu-link" to="/productos/Muebles para TV">Muebles Para TV</Link></li>
                <li><Link className="menu-link" to="/productos/Placar">Placar</Link></li>
                <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
                <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}

export default Navbar