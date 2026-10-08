import { Link } from "react-router-dom"

import React from 'react'

const Header = () => {
  return (
    <header>
        <h1>Toy<span>Store</span></h1>
        <nav>
            <ul>
                <li>Home</li>
                <li>Produtos</li>
                <li>Contato</li>
                <li>Login</li>                                                    
            </ul>
        </nav>
      
    </header>
  )
}

export default Header
