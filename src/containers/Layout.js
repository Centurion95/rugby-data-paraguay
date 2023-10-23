import React, { useEffect, useState } from 'react'
// import '../App.css'
// import { useNavigate } from 'react-router-dom'
import { getDecodedToken } from '../utils/utils'
import Nav from './Nav'
import Main from './Main'

const Layout = ({ children }) => {
  // const navigate = useNavigate()

  useEffect(() => {
    console.log('*** useEffect() - LAYOUT')
    decodeToken()
  }, [])

  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [es_admin, setEs_admin] = useState('')
  const [showLogin, setShowLogin] = useState(true)

  function decodeToken() {
    try {
      const decodedPayload = getDecodedToken()
      // console.log(decodedPayload)
      if (decodedPayload) {
        setUsername(decodedPayload.username)
        setName(decodedPayload.name)
        setEs_admin(decodedPayload.es_admin)
      }
    } catch (error) {
      console.error(error)
    }

  }

  // function cerrarSesion() {
  //   localStorage.removeItem('token')
  //   navigate('/')
  //   window.location.reload()
  // }

  return (
    // <div className="App">
    <div>

      <Nav name={name} es_admin={es_admin} />

      <Main children={children} />

      {/* <footer> */}
      {/* <h3>Rugby Data Paraguay &copy; {new Date().getFullYear()}</h3> */}
      <nav data-bs-theme="dark" className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className='container'>
          {/* <h3>Rugby Data Paraguay &copy; {new Date().getFullYear()}</h3> */}
          <a className="navbar-brand">Rugby Data Paraguay &copy; {new Date().getFullYear()}</a>
        </div>
      </nav>
      {/* </footer> */}
    </div >
  )
}

export default Layout
