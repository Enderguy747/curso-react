import React, { Component } from 'react';
import { hydrate } from 'react-dom/cjs/react-dom.development';

export default class RenderizadoElementos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seasons: ["primavera","verano","otoño","invierno" ],
        }
    }
    render() {
        return (
            <div>
                <h1>Renderizado de Elementos</h1>
                <h3>Estaciones del año</h3>
                {
                    this.state.seasons.map((el,index) =>  
                    <li key={index}>{el}</li>)
                }
                
            </div>
        )
    }
}