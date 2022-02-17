import React from 'react';
import './App.css';
import Nav from '../src/components/Nav/Nav.jsx';
import Footer from '../src/components/Footer/Footer.jsx';
import Contacto from '../src/components/Contacto/Contacto.jsx'
import Card from './components/Card.jsx'

function App() {

  return (
    <>
      <Nav />
      <Footer />
      {/* <Contacto />  Lo dejo comentado hasta crear las rutas*/}  

    </>
  );
}

export default App;
