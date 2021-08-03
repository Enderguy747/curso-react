import React from 'react';
import PropTypes from 'prop-types';

export default function Propiedades(props) {
    return(
        <div>

        <h1>{props.porDefecto}</h1>

        <ol>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.booleano?"Verdadero":"falso"}</li>       
            <li>{props.arreglo.join(", ")}</li>
            <li>{props.objeto.nombre + " - " +props.objeto.correo }</li>
            <li>{props.arreglo.map(props.funcion).join(", ")}</li>
            <li>{props.elementoReact}</li>
            <li>{props.componenteReact}</li>
        </ol>

        </div>

    );
}

Propiedades.defaultProps={
    porDefecto: "hello",
}

Propiedades.propTypes = {
numero:PropTypes.number,
cadena:PropTypes.string,
booleano:PropTypes.bool,
}
