import React, { useEffect, useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { getDecodedToken } from '../utils/utils'

const Layout = ({ children }) => {
  const navigate = useNavigate()

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

  function cerrarSesion() {
    localStorage.removeItem('token')
    navigate('/')
    window.location.reload()
  }

  const [isOpen, setIsOpen] = useState(false)
  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  const [isOpen2, setIsOpen2] = useState(false)
  const toggleNavbar2 = () => {
    setIsOpen2(!isOpen2)
  }

  return (
    <div className="App">

      <nav className={`navbar ${isOpen ? 'active' : ''}`}>
        <div className="navbar-logo">
          <a href="/">Rugby Data Paraguay</a>
        </div>
        <div className="navbar-toggle margin-right-10" onClick={toggleNavbar}>
          ☰
        </div>
        <ul className="navbar-menu">
          <a href="/">Torneos en curso</a>

          <a href="/anteriores">Torneos anteriores</a>

          {es_admin &&
            <>

              <a className="subnav" href="#">Administración</a>

              <div className="subnav-content">
                <a href="/continentes">Continentes</a>
              </div>

              {/* 
              <nav className={`navbar2 ${isOpen2 ? 'active' : ''}`}>
                <div className="navbar-toggle" href="#" onClick={toggleNavbar2}>
                  Administración
                </div>
                <ul className="navbar-menu">
                  <a href="/continentes">Continentes</a>
                  <a href="/paises">Paises</a>
                  <a href="/estados">Estados</a>
                  <a href="/ciudades">Ciudades</a>
                  <a href="/clubes">Clubes</a>

                  <a href="/estadios">Estadios</a>

                  <a href="/tipos_contacto">Tipos de contacto</a>
                  <a href="/tipos_identificador">Tipos de identificación</a>
                  <a href="/personas">Personas</a>
                  <a href="/jugadores">Jugadores</a>

                  <a href="/torneos">Torneos</a>
                </ul>
              </nav>
               */}
            </>
          }

          <a href="/blog">Blog</a>
          <a href="/about">Acerca de</a>

          {name
            ?
            <a className="subnav">
              <>
                <button className="subnavbtn">{name}</button>
                <button className='subnavbtn subnav-content text-right' onClick={cerrarSesion}>Cerrar sesión</button>
              </>
            </a>
            :
            <a href="/login">Iniciar sesión</a>
          }
        </ul>
      </nav>


      {/* <header>
        <div className="navbar">
          <a href="/">Rugby Data Paraguay</a>

          <a href="/anteriores">Torneos anteriores</a>

          {es_admin &&
            <div className="subnav">
              <button className="subnavbtn">Administración</button>
              <div className="subnav-content">
                <a href="/continentes">Continentes</a>
                <a href="/paises">Paises</a>
                <a href="/estados">Estados</a>
                <a href="/ciudades">Ciudades</a>
                <a href="/clubes">Clubes</a>

                <a href="/estadios">Estadios</a>

                <a href="/tipos_contacto">Tipos de contacto</a>
                <a href="/tipos_identificador">Tipos de identificación</a>
                <a href="/personas">Personas</a>
                <a href="/jugadores">Jugadores</a>

                <a href="/torneos">Torneos</a>
              </div>
            </div>
          }

          <a href="/about">Acerca de</a>

          {name
            ?
            <div className="subnav float-right">
              <button className="subnavbtn">{name}</button>
              <div className="subnav-content">
                <a className='float-right' onClick={cerrarSesion}>Cerrar sesión</a>

              </div>
            </div>
            :
            <a className='float-right' href="/login">Iniciar sesión</a>
          }
        </div>
      </header> */}

      <main>
        {children}
      </main>

      <footer>
        <p>Rugby Data Paraguay &copy; {new Date().getFullYear()}</p>
      </footer>
    </div >
  )
}

export default Layout
