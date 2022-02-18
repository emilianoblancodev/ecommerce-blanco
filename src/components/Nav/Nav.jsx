import React from 'react'
import './Nav.css';
import logo from '../../assets/img/jugador.gif'
import carrito from '../../assets/img/carrito.png'


const Nav = () => {

  return (

    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <img id="logo" src={logo} />
                <a className="navbar-brand" id="nombre_tienda" href="#">Delta Sports</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Hombre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Mujer</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Niños</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img id="carrito" src={carrito}/></a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </>
  );
}

export default Nav