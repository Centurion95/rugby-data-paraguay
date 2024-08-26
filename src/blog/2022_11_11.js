import React from 'react'
import { Helmet } from 'react-helmet'

const Page = () => {
  // Datos de los metadatos dinámicos
  const title = 'Rugby en Juegos Universitarios UNA 2022: Rugby Data Paraguay'
  const description = '¡Únete a nuestra nueva aventura en Instagram! Rugby Data Paraguay te trae momentos destacados, perfiles de jugadores y noticias emocionantes.'
  const keywords = 'Juegos Universitarios UNA, JJUU, Rugby en Paraguay, blog, rugby, Paraguay, noticias, historias, deporte'
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
        <h1>Rugby en Juegos Universitarios UNA 2022</h1>
        <p className='right i'>11/11/2022 21:00 - Rodrigo Centurión</p>
        <hr />
        <p>Los Juegos Universitarios UNA 2022 están a punto de comenzar y el rugby será una parte fundamental de este emocionante evento. 🏉</p>

        <p>Equipos de diferentes universidades se enfrentarán en una competencia deportiva de alto nivel. Será una oportunidad para demostrar talento, espíritu deportivo y unidad.</p>

        <p>¡Sigue nuestras actualizaciones para estar al tanto de los resultados! 🎥</p>

        <p>Apoyemos juntos el rugby universitario en Paraguay. 🇵🇾 ¡Que empiecen los juegos! 🏆</p>
      </div>
      <div class="right">
        <a className="btn-green" href="/blog/2022_09_30">Anterior</a>
        <a className="btn-green margin-left-10" href="/blog/2022_12_02">Siguiente</a>
      </div>
    </div>
  )
}

export default Page