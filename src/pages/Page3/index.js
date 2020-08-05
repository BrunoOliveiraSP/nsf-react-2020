
import React, { useState } from 'react'


export default function Page3() {

    const [mensagem, setMensagem] = useState('Sejam bem-vindos!')
    const [nome, setNome]         = useState('Bruno');
    const [linguagens, setLinguagens] = useState(['Html', 'CSS', 'JS', 'C#', 'SQL']);
    

    return (
        <div>
            <h1> Olá fofuras </h1>
        
            <h2> {mensagem} </h2>

            {nome === 'Bruno' && (
                <h3> {nome} é lindo </h3>
            )}

            {nome !== 'Bruno' && (
                <h3> {nome} é feiooo </h3>
            )}


            <ol>

                {linguagens.map(item => 
                    <li key={item}> {item} </li>    
                )}

            </ol>
        
        </div>
    )
}