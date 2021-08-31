import React from 'react'
import Titulo from '../Titulo/Titulo.js'

import './Contatos.css'
import ContatosHeader from './ContatosHeader.js'

export default function Contatos() {
    return (
        <div>

            <Titulo texto="Seção de Contatos" />
            
            <div className="contatos">
                
                <ContatosHeader/>
                
            </div>

        </div>
    )
}

