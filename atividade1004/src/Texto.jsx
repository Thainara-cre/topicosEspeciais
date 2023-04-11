import React from 'react'
import './texto.css';

import {BsCart3} from '../node_modules/react-icons/bs'

function Texto() {
  return (
    <div>
        <h1>PERFUME</h1>
        <h2>
            Gabrielle Essence Eau De Parfum
        </h2>
        <p className="descricao">
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <p className="preco">
            $149.99 <span>$169.99</span>
        </p>
        <button>
            <BsCart3 />  Add to Cart
        </button>
    </div>
  )
}

export default Texto