

import React, { useState } from 'react'

import Filho from '../Filho'

export default function Pai() {

    const [nome, setNome] = useState('Johnn')
    const [idade, setIdade] = useState(15)
    const [esportes, setEsportes] = useState({
        futebol: 'Manja muito',
        basket: 'Manja nada'
    })

    const [musicas, setMusicas] = useState(['Forró', 'Rock', 'Axé'])

    return (
        <div>
            <h2> Pai </h2>

            <Filho nome={nome}
                  idade={idade}
                  esportesPraticados={esportes}
                  musicas={musicas}
             />

            <Filho nome="Brian"
                  idade={20}
                  esportesPraticados={{futebol: '10', basket: '8'}}
                  musicas={['Rap']}
             />
        </div>
    )
}