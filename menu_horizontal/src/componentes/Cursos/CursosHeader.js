import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import '../Header/Header.css'

import './Cursos.css'

export default function CursosHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">

                <ul>
                    <li><Link to="/"> Voltar </Link></li>
                    <li><Link to="/cursos"> Informática </Link></li>
                    <li><Link to="/cursos"> Engenharia </Link></li>
                    <li><Link to="/cursos"> Quimica </Link></li>
                    <li><Link to="/cursos"> Administração </Link></li>
                    <li><Link to="/cursos"> Direito </Link></li>
                </ul>

            </nav>
        </header>
    )
}

