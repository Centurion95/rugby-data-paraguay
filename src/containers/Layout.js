import React, { useEffect, useState } from 'react'
import { getDecodedToken } from '../utils/utils'
import Nav from './Nav'
import Main from './Main'

const Layout = ({ children }) => {

  useEffect(() => {
    console.log('*** useEffect() - LAYOUT')
    decodeToken()
  }, [])

  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [es_admin, setEs_admin] = useState('')

  function decodeToken() {
    try {
      const decodedPayload = getDecodedToken()
      if (decodedPayload) {
        setUsername(decodedPayload.username)
        setName(decodedPayload.name)
        setEs_admin(decodedPayload.es_admin)
      }
    } catch (error) {
      console.error(error)
    }

  }

  return (
    <div>
      <Nav name={name} es_admin={es_admin} />

      <div className="layout">
        <aside className="left-sidebar">
          {/* 
          <h2>Left Sidebar</h2>
          <div className="widget">
            <h3>Quick Info</h3>
            <p>This could be a widget, additional navigation, or any other secondary content.</p>
          </div> 
          */}
        </aside>

        <div className="main-content">
          <Main children={children} />
        </div>

        <aside className="right-sidebar">
          {/* 
          <h2>Right Sidebar</h2>
          <div className="widget">
            <h3>Quick Info</h3>
            <p>This could be a widget, additional navigation, or any other secondary content.</p>
          </div> 
          */}
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