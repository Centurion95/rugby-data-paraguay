import React from 'react'
import { Helmet } from 'react-helmet'
import img_instagram from '../img/logos/instagram.png'

const Page = () => {
  // Datos de los metadatos dinámicos
  const title = 'Primera publicación en Instagram: Rugby Data Paraguay'
  const description = '¡Únete a nuestra nueva aventura en Instagram! Rugby Data Paraguay te trae momentos destacados, perfiles de jugadores y noticias emocionantes.'
  const keywords = 'Instagram, Rugby en Paraguay, blog, rugby, Paraguay, noticias, historias, deporte'
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
        <h1>Primera publicación en Instagram</h1>
        <p className='right i'>30/09/2022 08:54 - Rodrigo Centurión</p>
        <hr />
        <p>¡Estamos emocionados de compartir nuestro viaje en Instagram! Rugby Data Paraguay llega a la plataforma para acercarte aún más al mundo del rugby en nuestro país.</p>

        <p>En esta cuenta, encontrarás momentos destacados de nuestros torneos, perfiles de jugadores, noticias y más. Únete a nosotros en este emocionante viaje rugbístico.</p>

        <p>¡Síguenos y no te pierdas ninguna actualización! 🏉🇵🇾</p>

        <a target="_blank" href='https://www.instagram.com/rugby_data_paraguay/'><img src={img_instagram} alt='Instagram' className='margin-left-10' /></a>

        <p>#RugbyEnParaguay #RugbyInstagram #DeporteParaguayo</p>
      </div>
      <div class="right">
        <a className="btn-green" href="/blog/2022_09_15">Anterior</a>
        <a className="btn-green margin-left-10" href="/blog/2022_11_11">Siguiente</a>
      </div>
    </div>
  )
}

export default Page