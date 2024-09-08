import React from 'react'
import { useNavigate } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Page = ({ name, es_admin }) => {
  const navigate = useNavigate()
  function cerrarSesion() {
    localStorage.removeItem('token')
    navigate('/')
    window.location.reload()
  }

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Rugby Data Paraguay</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="me-auto">
              </Nav> */}
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="/">Torneos en curso</Nav.Link>
            <Nav.Link href="/anteriores">Torneos anteriores</Nav.Link>
            {es_admin &&
              <NavDropdown title="Administración" id="basic-nav-dropdown">
                <NavDropdown.Item href="/continentes">Continentes</NavDropdown.Item>
                <NavDropdown.Item href="/paises">Paises</NavDropdown.Item>
                <NavDropdown.Item href="/estados">Estados</NavDropdown.Item>
                <NavDropdown.Item href="/ciudades">Ciudades</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/clubes">Clubes</NavDropdown.Item>
                <NavDropdown.Item href="/estadios">Estadios</NavDropdown.Item>
                <NavDropdown.Divider />
                {/* rc95 09/11/2023 00:23 - cambio de alcance para la version 1, no se tendrá ABM de personas */}
                {/* <NavDropdown.Item href="/tipos_contacto">Tipos de contacto</NavDropdown.Item>
                <NavDropdown.Item href="/tipos_identificador">Tipos de identificación</NavDropdown.Item>
                <NavDropdown.Item href="/personas">Personas</NavDropdown.Item>
                <NavDropdown.Item href="/jugadores">Jugadores</NavDropdown.Item>
                <NavDropdown.Divider /> */}
                <NavDropdown.Item href="/torneos">Torneos</NavDropdown.Item>
              </NavDropdown>
            }
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/about">Acerca de</Nav.Link>
            {name
              ?
              <NavDropdown title={name} id="basic-nav-dropdown">
                <NavDropdown.Item href="/versiones">Versiones</NavDropdown.Item>
                <NavDropdown.Item href="/visitas">Visitas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={cerrarSesion}>Cerrar sesión</NavDropdown.Item>
              </NavDropdown>
              :
              <Nav.Link href="/login">Iniciar sesión</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Page