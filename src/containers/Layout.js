import React, { useEffect, useState } from 'react'
import { getDecodedToken } from '../utils/utils'
import Nav from './Nav'
import Main from './Main'

export default function Page({ children }) {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [es_admin, setEs_admin] = useState('')
  const [ID, setID] = useState('')

  useEffect(() => {
    console.log('📌 useEffect() - LAYOUT')
    const decoded = getDecodedToken()
    if (decoded) {
      setUsername(decoded.username || '')
      setName(decoded.name || '')
      setEs_admin(decoded.es_admin || false)
      setID(decoded._id || null)
    }
  }, [])

  return (
    <div>
      <Nav name={name} es_admin={es_admin} />

      <div className="layout">
        <aside className="left-sidebar">
        </aside>

        <div className="main-content">
          <Main children={children} />
        </div>

        <aside className="right-sidebar">
        </aside>
      </div >

      {/* <nav data-bs-theme="dark" className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className='container'>
          <a className="navbar-brand">Rugby Data Paraguay &copy; {new Date().getFullYear()}</a>
        </div>
      </nav> */}

      <nav data-bs-theme="dark" className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className='container d-flex justify-content-between align-items-center'>

          <span className="navbar-brand m-0">
            Rugby Data Paraguay &copy; {new Date().getFullYear()}
          </span>

          <a
            href="https://linktr.ee/rugby_data_paraguay"
            target="_blank"
            rel="noopener noreferrer"
            className="linktree-link centered"
          >
            🔗🌲
          </a>

        </div>
      </nav>

    </div >
  )
}