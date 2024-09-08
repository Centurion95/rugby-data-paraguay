import React from 'react'
import { Helmet } from 'react-helmet'
import img_whatsapp from '../img/logos/whatsapp.png'

const Page = () => {
  // Datos de los metadatos dinámicos
  const title = 'Lanzamos la comunidad de WhatsApp de Rugby en Paraguay'
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
        <h1>Lanzamos la comunidad de WhatsApp de Rugby en Paraguay</h1>
        <p className='right i'>15/09/2023 20:00 - Rodrigo Centurión</p>
        <hr />
        <p>Estamos emocionados de anunciar el lanzamiento de nuestra comunidad de WhatsApp dedicada al rugby en Paraguay. 🏉</p>

        <p>Esta iniciativa tiene un objetivo claro: fomentar la colaboración entre todos los miembros. Queremos que este grupo sea un espacio donde podamos generar conversaciones, compartir ideas, opiniones y conocimientos para robustecer nuestra comunidad rugbística.</p>

        <p>El rugby es un deporte que se basa en el trabajo en equipo y la unidad, y queremos que nuestra comunidad en WhatsApp refleje estos valores. Juntos, podemos hacer crecer el rugby en Paraguay y fortalecer nuestra pasión por este deporte.</p>

        <p>¡Únete a la comunidad de WhatsApp y comencemos a construir un espacio donde todos puedan contribuir y enriquecer nuestra experiencia rugbística en Paraguay!</p>

        <p>Para unirte, simplemente sigue este enlace: <a target="_blank" href='https://chat.whatsapp.com/CxOlZsPcKndFLs0W2E8fUP'><img src={img_whatsapp} alt='WhatsApp' className='margin-left-10' /></a> </p>
      </div>
      <div className="right">
        <a className="btn-green" href="/blog/2023_09_15">Anterior</a>
        <a className="btn-green margin-left-10" href="/blog/2023_09_16">Siguiente</a>
      </div>
    </div>
  )
}

export default Page