
import React from 'react'

import Dog from './dog404.png';

import './notfound.css'

export default function NotFound() {

    return (
        <div className="box-not-found">
            <img src={Dog} alt="Não encontrado" />
        </div>
    )
}


