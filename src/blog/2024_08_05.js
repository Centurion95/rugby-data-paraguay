import React from 'react'
import { Helmet } from 'react-helmet'

export default function Page() {
  // Datos de los metadatos dinámicos
  const title = 'Empezó el torneo clausura de Rugby Seven Femenino'
  const description = 'Este domingo 4 de agosto empezó el torneo clausura de Rugby Seven Femenino, torneo organizado por la Union de Rugby del Paraguay (URP), este año se cuenta con 14 equipos de todos los rincones del país y por 3 año consecutivo se presenta el Fernando de la Mora Rugby Fem en este torneo.'
  const keywords = 'blog, rugby, Paraguay, noticias, historias, deporte, CURDA, San Jose, URP, union de rugby del paraguay'
  const author = 'Rugby Data Paraguay'

  return (
    <div className="max-width-90p">
      {/* Utiliza React Helmet para agregar metadatos */}
      <Helmet>
        {/* <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      <div className="container-c">
        <h1>Empezó el torneo clausura de Rugby Seven Femenino!!</h1>
        <p className='right i'>05/08/2024 17:30 - Horacio Ariel Garcia Cabrera</p>
        <hr />

        <p>Este domingo 4 de agosto empezó el torneo clausura de Rugby Seven Femenino, torneo organizado por la Union de Rugby del Paraguay (URP), este año se cuenta con 14 equipos de todos los rincones del país y por 3 año consecutivo se presenta el Fernando de la Mora Rugby Fem en este torneo.</p>

        <img src="https://cdn.leonardo.ai/users/c9dac723-c745-4d5d-a9da-3b148d2b8360/generations/bd55b5d0-bc3e-44fd-95b6-0138f781c123/Leonardo_Phoenix_Two_womens_rugby_teams_each_comprising_fiftee_2.jpg" alt='imagen' className='img_blog' />
        <br />

        <p>La modalidad del torneo se realiza por Jornadas, siendo la inicial la del domingo en la ciudad de Encarnación. Son rondas de ida y vuelta de todos contra todos para luego los 8 mejores juegan las clasificatorias, hasta ahora el equipo femenino de Fernando siempre a logrado estar entre las 8 mejores.</p>

        <p>Los partidos de la fecha para el Fernando de la Mora Rugby Fem fueron dos, a las 09.30 hs se enfrentaron al Área 1 de Ciudad del Este y el esultado fue tambien ajustado de 19 a 10 a favor de Taguato. Con 2 Trys convertidos por el equipo fernandino.</p>
      </div>
      <div className="right">
        <a className="btn-green" href="/blog/2023_10_22">Anterior</a>
        <a className="btn-green margin-left-10" href="/blog/2024_08_19">Siguiente</a>
      </div>
    </div>
  )
}
