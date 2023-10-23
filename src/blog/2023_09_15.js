import React from 'react'
import { Helmet } from 'react-helmet'

const Page = () => {
  // Datos de los metadatos dinámicos
  const title = '1 año de Rugby Data Paraguay'
  const description = 'Descubre contenido exclusivo sobre rugby en Paraguay en nuestro nuevo blog.'
  const keywords = 'Rugby Data Paraguay, blog, rugby, Paraguay, noticias, historias, deporte'
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

      <h1>¡1 año de Rugby Data Paraguay!</h1>
      <p className='right i'>15/09/2023 19:00 - Rodrigo Centurión</p>
      <hr />
      <p>Hoy celebramos un hito especial: se cumple un año desde que iniciamos esta emocionante aventura. 🎉</p>

      <p>El 15 de septiembre de 2022, decidí embarcarme en este proyecto, después de postergarlo y buscar el momento "perfecto". Aprendí que la perfección no existe y que es en la acción donde se forjan los sueños.</p>

      <p>A lo largo de este año, hemos compartido datos, estadísticas y noticias sobre el rugby en Paraguay. A pesar de los desafíos, cada día nos ha acercado más a nuestra comunidad apasionada por este deporte.</p>

      <p>Gracias por su apoyo constante. Esperamos seguir creciendo y mejorando en los años venideros. ¡Vamos por más éxitos en el mundo del rugby en Paraguay! 🏉🇵🇾 #Aniversario #RugbyDataParaguay</p>

    </div>
  )
}

export default Page