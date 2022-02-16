import React from 'react'
import react_logo from '../assets/img/react.gif'
import './Footer.css'


const Footer = () => {
  return (
    <>
        <nav className="navbar fixed-bottom navbar-light bg-light">
            <div className="container-fluid d-flex justify-content-center">
                <p>Hecho en<a className="navbar-brand mb-0" href="#"><img id="react_logo" src={react_logo}/></a></p>
            </div>
        </nav>

    </>
  )
}

export default Footer