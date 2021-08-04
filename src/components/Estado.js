import React, { Component } from 'react';
import EstadoAHijo from './EstadoAHijo';



export default class Estado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        }
        setInterval(() => {
            this.setState({ contador: this.state.contador + 1 });
        }, 1000)
    }
    render() {
        return (
            <div>
                <h2>El estado</h2>
                <h2>El valor del estado es {this.state.contador}</h2>
                <h5>El valor del padre a hijo es de: <EstadoAHijo contadorHijo={this.state.contador} /></h5>
            </div>
        )

    }

}