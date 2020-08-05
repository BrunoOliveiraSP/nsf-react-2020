
import React from 'react'

import { Link } from 'react-router-dom'

export default function Home() {

    return (
        <div>
            <h1> Home</h1>
            <Link to="/pagina1"> Navegação: Página 1 </Link>
            <br />
            <Link to="/pagina2"> Navegação: Página 2 </Link>
            <br />
            <Link to="/pagina3"> Renderização </Link>
            <br />
            <Link to="/pagina4"> Eventos </Link>
            <br />
            <Link to="/pagina5"> Comunicação Comps </Link>
            <br />
            <Link to="/pagina6"> Alertas & Loading </Link>

        </div>
    )
}


