import React from 'react'
import { Helmet } from 'react-helmet'

const Page = () => {
  // Datos de los metadatos dinámicos
  const title = 'Fecha 2 del Rugby Seven Femenino!!'
  const description = 'El Domingo 18 de agosto se llevo a cabo la segunda fecha del torneo clausura del seven femenino de la URP, en esta ocasión el Fernando de la Mora Fem Rugby tuvieron la dura tarea de enfrentarse al campeón y vicecampeón del torneo apertura, primero se enfrentaron con Santa Clara el 2° en el torneo apertura y luego contra Old King el campeón del apertura.'
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
        <h1>Fecha 2 del Rugby Seven Femenino!!</h1>
        <p className='right i'>19/08/2024 20:30 - Horacio Ariel Garcia Cabrera</p>
        <hr />

        <p>El Domingo 18 de agosto se llevo a cabo la segunda fecha del torneo clausura del seven femenino de la URP, en esta ocasión el Fernando de la Mora Fem Rugby tuvieron la dura tarea de enfrentarse al campeón y vicecampeón del torneo apertura, primero se enfrentaron con Santa Clara el 2° en el torneo apertura y luego contra Old King el campeón del apertura.</p>

        <img src="https://cdn.leonardo.ai/users/c9dac723-c745-4d5d-a9da-3b148d2b8360/generations/d33e12cb-566c-4bbf-8edc-a72574865522/Leonardo_Phoenix_Two_strong_and_determined_female_rugby_player_3.jpg" alt='imagen' className='img_blog' />
        <br />

        <p>En ambos partidos se notó la supremacía de los equipos que llegaron a la final del torneo apertura y se impusieron fácilmente al equipo fernandino, Cristo Rey logro su victoria por 48 a 0, mientras que Old King se impuso por 49 a 0.</p>

        <p>Con estas derrotas las chicas de Fernando de la Mora Rugby se ubican en la posición 12 en la tabla con 4 puntos. </p>
      </div>
      <div class="right">
        <a className="btn-green" href="/blog/2024_08_05">Anterior</a>
        <a className="btn-green margin-left-10" href="/blog/2024_08_25">Siguiente</a>
      </div>
    </div>
  )
}

export default Page
