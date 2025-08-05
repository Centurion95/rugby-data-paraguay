import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './containers/Layout'

import Home from './pages/Home'
import Formulario from './pages/Formulario'
import FormularioPersona from './pages/FormularioPersona'
import FormularioJugador from './pages/FormularioJugador'
import TorneoDetalle from './pages/TorneoDetalle'
import Contacto from './pages/Contacto'

import About from './pages/About'
import Login from './pages/Login'
import Anteriores from './pages/Anteriores'

import { links } from './utils/links'

import Blog from './pages/Blog'
import Landing from './pages/Landing'
import Versiones from './pages/Versiones'

import Visitas from './pages/Visitas'

import CambiarPassword from './pages/CambiarPassword'

import B_2022_09_15 from './blog/2022_09_15'
import B_2022_09_30 from './blog/2022_09_30'
import B_2022_11_11 from './blog/2022_11_11'
import B_2022_12_02 from './blog/2022_12_02'
import B_2023_08_04 from './blog/2023_08_04'
import B_2023_09_15 from './blog/2023_09_15'
import B_2023_09_15_2 from './blog/2023_09_15_2'
import B_2023_09_16 from './blog/2023_09_16'
import B_2023_09_22 from './blog/2023_09_22'
import B_2023_10_22 from './blog/2023_10_22'
import B_2024_08_05 from './blog/2024_08_05'
import B_2024_08_19 from './blog/2024_08_19'
import B_2024_08_25 from './blog/2024_08_25'
import B_2024_08_26 from './blog/2024_08_26'
import B_2024_08_29 from './blog/2024_08_29'
import B_2024_09_02 from './blog/2024_09_02'
import B_2024_09_14 from './blog/2024_09_14'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />


          <Route exact path="/continentes" element={<Formulario titulo="Continentes" link={links.CONTINENTES} />} />
          <Route exact path="/paises" element={<Formulario titulo="Paises" link={links.PAISES} fk_titulo="Continente" fk_link={links.CONTINENTES} />} />
          <Route exact path="/estados" element={<Formulario titulo="Estados" link={links.ESTADOS} fk_titulo="Pais" fk_link={links.PAISES} />} />
          <Route exact path="/ciudades" element={<Formulario titulo="Ciudades" link={links.CIUDADES} fk_titulo="Estado" fk_link={links.ESTADOS} />} />
          <Route exact path="/clubes" element={<Formulario titulo="Clubes" link={links.CLUBES} fk_titulo="Ciudad" fk_link={links.CIUDADES} />} />
          <Route exact path="/estadios" element={<Formulario titulo="Estadios" link={links.ESTADIOS} fk_titulo="Club" fk_link={links.CLUBES} />} />

          <Route exact path="/tipos_contacto" element={<Formulario titulo="Tipos de contacto" link={links.TIPO_CONTACTO} />} />
          <Route exact path="/tipos_identificador" element={<Formulario titulo="Tipos de identificación" link={links.TIPO_IDENTIFICADOR} fk_titulo="Pais" fk_link={links.PAISES} />} />
          <Route exact path="/personas" element={<FormularioPersona titulo="Personas" link={links.PERSONAS} />} />

          <Route exact path="/jugadores" element={<FormularioJugador titulo="Jugadores" link={links.JUGADORES} />} />

          <Route exact path="/torneos" element={<Formulario titulo="Torneos" link={links.TORNEOS} pedirYear />} />

          <Route exact path="/torneos/:id_tournament" element={<TorneoDetalle titulo="Detalles del Torneo" link={links.TORNEOS} />} />
          <Route exact path="/contactos/:id_owner" element={<Contacto titulo="Contactos del registro" link={links.CONTACTOS} />} />

          <Route exact path="/about" element={<About />} />

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cambiarPassword" element={<CambiarPassword />} />
          <Route exact path="/anteriores" element={<Anteriores />} />

          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/landing" element={<Landing />} />
          <Route exact path="/versiones" element={<Versiones />} />

          <Route exact path="/visitas" element={<Visitas />} />

          <Route exact path="/blog/2022_09_15" element={<B_2022_09_15 />} />
          <Route exact path="/blog/2022_09_30" element={<B_2022_09_30 />} />
          <Route exact path="/blog/2022_11_11" element={<B_2022_11_11 />} />
          <Route exact path="/blog/2022_12_02" element={<B_2022_12_02 />} />
          <Route exact path="/blog/2023_08_04" element={<B_2023_08_04 />} />
          <Route exact path="/blog/2023_09_15" element={<B_2023_09_15 />} />
          <Route exact path="/blog/2023_09_15_2" element={<B_2023_09_15_2 />} />
          <Route exact path="/blog/2023_09_16" element={<B_2023_09_16 />} />
          <Route exact path="/blog/2023_09_22" element={<B_2023_09_22 />} />
          <Route exact path="/blog/2023_10_22" element={<B_2023_10_22 />} />
          <Route exact path="/blog/2024_08_05" element={<B_2024_08_05 />} />
          <Route exact path="/blog/2024_08_19" element={<B_2024_08_19 />} />
          <Route exact path="/blog/2024_08_25" element={<B_2024_08_25 />} />
          <Route exact path="/blog/2024_08_26" element={<B_2024_08_26 />} />
          <Route exact path="/blog/2024_08_29" element={<B_2024_08_29 />} />
          <Route exact path="/blog/2024_09_02" element={<B_2024_09_02 />} />
          <Route exact path="/blog/2024_09_14" element={<B_2024_09_14 />} />

          <Route path="*" element={<div><h1>Error 404: Pagina no encontrada</h1><a className="btn-green" href="/">Volver al inicio...</a></div>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App