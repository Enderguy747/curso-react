import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <section>
          <Componente msg="Componente" />
          <hr />
          <Propiedades
            cadena="esto es una cadena"
            numero={15}
            booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "daniel", correo: "da@da.com" }}
            funcion={(num) => num * num}
            elementoReact={<i>Esto es un elemento de react</i>}
            componenteReact={<Componente msg="soy un componente mandado por props" />}/>
            <hr/>
            <Estado/>
        </section>

      </header>

    </div>
  );
}


