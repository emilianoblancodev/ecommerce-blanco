import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.jsx'

import Contacto from '../src/components/Contacto/Contacto.jsx'
import Main from '../src/components/Main/Main.jsx'

function App() {


  return (
    <>
      <Navigation />
      
      <Main />
      {/* <Contacto />  Lo dejo comentado hasta crear las rutas*/}  

    </>
  );
}

export default App;
