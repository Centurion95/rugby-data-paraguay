import React from 'react'
import { Helmet } from 'react-helmet'

const Page = () => {
  // Datos de los metadatos dinámicos
  const title = 'Campeonato Oficial URP 2023 - Rugby en Paraguay'
  const description = 'Descubre contenido exclusivo sobre rugby en Paraguay en nuestro nuevo blog.'
  const keywords = 'URP, campeonato oficial URP, 2023, blog, rugby, Paraguay, noticias, historias, deporte'
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

      <h1>Inicia el campeonato oficial URP 2023</h1>
      <p className='right i'>04/08/2023 21:00 - Rodrigo Centurión</p>
      <hr />
      <p>El emocionante campeonato oficial de 2023 dará comienzo el 5 de agosto, marcando el inicio de una nueva temporada de rugby en Paraguay. 🏉</p>

      <p>Queremos informar a nuestra comunidad que, a partir de este torneo, los resultados de los partidos serán publicados exclusivamente en nuestra página web.</p>

      <p>Esto nos permitirá brindarles una experiencia más completa y detallada.</p>

      <p>Gracias por su apoyo continuo. Juntos, haremos de este campeonato una temporada memorable. 🇵🇾 #Rugby2023</p>

    </div>
  )
}

export default Page