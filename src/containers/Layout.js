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

      <div className="layout">
        <aside className="left-sidebar">
          {/* <h2>Left Sidebar</h2>
          <div className="widget">
            <h3>Quick Info</h3>
            <p>This could be a widget, additional navigation, or any other secondary content.</p>
          </div> */}
        </aside>

        {/* <Main children={children} /> */}

        <div className="main-content">
          <Main children={children} />
          {/* <h2>Main Content</h2>
          <p>This is the main content area. It's flanked by two aside elements on larger screens.</p> */}
        </div>

        <aside className="right-sidebar">
          {/* <h2>Right Sidebar</h2>
          <div className="widget">
            <h3>Quick Info</h3>
            <p>This could be a widget, additional navigation, or any other secondary content.</p>
          </div> */}
        </aside>
      </div >

      <nav data-bs-theme="dark" className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className='container'>
          <a className="navbar-brand">Rugby Data Paraguay &copy; {new Date().getFullYear()}</a>
        </div>
      </nav>
    </div >
  )
}

export default Layout
