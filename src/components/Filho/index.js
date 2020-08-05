

import React from 'react'


export default function Filho(props) {

    return (
        <div>
            <h2> Filho </h2>

            <h3>{props.nome} - {props.idade} anos </h3>
            <h3>
                Futebol: {props.esportesPraticados.futebol}
            </h3>
            <h3>
                Basket: {props.esportesPraticados.basket}
            </h3>

            <div>
                <ul>
                    {props.musicas.map(item => 
                        <li key={item}> {item} </li>    
                    )}
                </ul>
            </div>


        </div>
    )
}