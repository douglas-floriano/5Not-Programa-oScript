import React from 'react'
import Titulo from '../Titulo/Titulo.js'

import './Cursos.css'
import CursosHeader from './CursosHeader.js'

export default function Cursos() {
    return (
        <div>

            <Titulo texto="Seção de Cursos" />
            <CursosHeader />

            <div className="cursos">
                
            </div>

        </div>
    )
}

