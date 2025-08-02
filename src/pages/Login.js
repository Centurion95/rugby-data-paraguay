import React, { useEffect, useState, useRef } from 'react'
import CryptoJS from 'crypto-js'
import { links } from '../utils/links'
import { mostrarError } from '../utils/utils'
import { useNavigate } from 'react-router-dom'

export default function Page() {
  const navigate = useNavigate()
  const this_url = process.env.REACT_APP_SERVER + links.LOGIN

  useEffect(() => {
    console.log('*** useEffect() - login')
  }, [])

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleLogin = async () => {
    try {
      const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex)

      const response = await fetch(this_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password: hashedPassword
        })
      })

      if (!response.ok) throw new Error('Login fallido')

      const data = await response.json()
      localStorage.setItem('token', data.token)

      navigate('/')
      window.location.reload()
    } catch (error) {
      mostrarError('Error de LOGIN!')
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleLogin()
      event.preventDefault()
    }
  }

  return (
    <div>
      <div className="container-c">
        <h2>Iniciar sesión</h2>

        <div className="row">
          <div className="col-25"><label className='label-left'>Usuario</label></div>
          <div className="col-75">
            <input type="text" className="input-right" required placeholder='Username'
              value={username} onChange={e => setUsername(e.target.value)} ref={usernameRef} />
          </div>
        </div>

        <div className="row">
          <div className="col-25"><label className='label-left'>Constraseña</label></div>
          <div className="col-75">
            <input type="password" className="input-right" required placeholder='Password'
              value={password} onChange={e => setPassword(e.target.value)} ref={passwordRef}
              onKeyDown={handleKeyDown} />
          </div>
        </div>

        <div className="right">
          <button className="btn-green" onClick={handleLogin}>Iniciar sesión</button>
        </div>
      </div>
    </div>
  )
}