import React, { useState } from 'react'
import './Header.css'
import BoasVindas from './BoasVindas'

function Header() {

  const [user, setUser] = useState('')
  const [mensagem, setMensagem] = useState('Você é o visitante N° 1 Milhão! 🎇')

  function handleLogin() {
    var userName = prompt('Digite seu nome:')
    setUser(userName)
  }

  function handleLogout() {
    setUser('')
  }

  return (
    <div>
        <div className="header-container">
            <p>Link 1</p>
            <p>Link 2</p>
            <p>Link 3</p>
            
            {/* { user && <BoasVindas nome={ user } mensagem={ mensagem }/> } */}
            { user ? <BoasVindas nome={ user } mensagem={ mensagem }/> : <button className='botaoNav' onClick={ () => setUser(prompt('Digite seu nome')) }>Login</button> }
            { user && <button className='botaoNav' onClick={handleLogout}>Logout</button>}

        </div>
    </div>
  )
}

export default Header
