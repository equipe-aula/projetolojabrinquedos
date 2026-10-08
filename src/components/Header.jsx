import { Link } from "react-router-dom"

import React from 'react'

const Header = () => {
  return (
    <header>
        <h1>Toy<span>Store</span></h1>
        <nav>
            <ul>
                <li><Link>Home</Link></li>
                <li><Link>Brinquedos</Link></li>
                <li><Link>Contato</Link></li>
                <li><Link>Login</Link></li>                                                    
            </ul>
        </nav>
      
    </header>
  )
}

export default Header
