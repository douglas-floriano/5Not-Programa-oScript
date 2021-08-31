import React from 'react'
import { Link } from 'react-router-dom'

import './Inicio.css'
import Titulo from '../Titulo/Titulo.js'

import Logo from "../imagens/LogoFatec.jpeg"

export default function Inicio() {
    return (
        <div>

            <Titulo texto="Formulário Inicial do Projeto! Com Props" />
            
            <div className="inicio">
                <button id="confirmar">Confirmar</button>
                <button id="salvar" onClick={() => {alert('Clicado') } }> Salvar  </button>
                

                <figure>
                    <img id="logo" src={Logo} align='center' />
                </figure>
            </div>

        </div>
    )
}

