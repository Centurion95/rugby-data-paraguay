import Axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import CryptoJS from 'crypto-js'
import { links } from '../utils/links'
import { mostrarError } from '../utils/utils'
import { useNavigate } from 'react-router-dom'

function Page() {
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
    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex)
    await Axios.post(this_url, {
      username,
      password: hashedPassword
    }).then((response) => {
      localStorage.setItem('token', response.data.token)

      navigate('/')
      window.location.reload()
    }).then(() => {
    }).catch((error) => {
      return mostrarError(`Error de LOGIN!`)
    })
  }

  // const handleProtected = async () => {
  //   await Axios.get(this_url + 'protegido', {
  //     headers: { Authorization: token }
  //   }).then((response) => {
  //     setMessage(response.data.message)
  //   }).catch((error) => {
  //     console.error(error)
  //     setMessage(error.message)
  //   })
  // }

  return (
    <div>
      {/* <h1>Rugby Data Paraguay</h1> */}

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
              value={password} onChange={e => setPassword(e.target.value)} ref={passwordRef} />
          </div>
        </div>

        <div className="right">
          <button className="btn-green" onClick={handleLogin}>Iniciar sesión</button>
        </div>
      </div>
    </div>
  )
}

export default Page