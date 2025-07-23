import React from 'react'
import { Helmet } from 'react-helmet'

export default function Page() {
  // Datos de los metadatos dinámicos
  const title = 'Página web de Rugby Data Paraguay disponible'
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

      <div className="container-c">
        <h1>Ya se encuentra disponible la página web de Rugby Data Paraguay</h1>
        <p className='right i'>16/09/2023 16:33 - Rodrigo Centurión</p>
        <hr />
        <p>Es con gran emoción que anunciamos la disponibilidad de nuestra página web oficial, Rugby Data Paraguay. 🏉</p>

        <p>En este sitio web, encontrarás una amplia gama de información sobre el rugby en Paraguay, incluyendo datos, estadísticas, noticias, calendarios de torneos y mucho más. Estamos comprometidos a brindarte la mejor experiencia rugbística.</p>

        <p>Esta plataforma es el resultado de un arduo trabajo y dedicación, y estamos seguros de que te será de gran utilidad. Únete a nosotros en este emocionante viaje para explorar y promover el rugby en Paraguay.</p>

        <p>¡Visita nuestra página web y descubre todo lo que tenemos para ofrecer!</p>
      </div>
      <div className="right">
        <a className="btn-green" href="/blog/2023_09_15_2">Anterior</a>
        <a className="btn-green margin-left-10" href="/blog/2023_09_22">Siguiente</a>
      </div>
    </div>
  )
}