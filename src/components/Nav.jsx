import React from 'react'
import '../../src/index.css';


const Nav = () => {

  return (

    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" id="nombre_tienda" href="#">Delta Sports</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Hombre</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Mujer</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Niños</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </>
  );
}

export default Nav