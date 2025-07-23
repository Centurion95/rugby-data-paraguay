import React from 'react'
import { Helmet } from 'react-helmet'

export default function Page() {
  // Datos de los metadatos dinámicos
  const title = 'El inicio de un gran proyecto: Rugby Data Paraguay'
  const description = 'Bienvenidos a Rugby Data Paraguay, tu fuente de estadísticas, noticias y perfiles de jugadores de rugby en Paraguay.'
  const keywords = 'blog, rugby, Paraguay, noticias, historias, deporte'
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
        <h1>El inicio de un gran proyecto: Rugby Data Paraguay</h1>
        <p className='right i'>15/09/2022 11:30 - Rodrigo Centurión</p>
        <hr />
        <p>Estamos emocionados de dar la bienvenida a una nueva era en la cobertura del rugby en Paraguay con el lanzamiento de Rugby Data Paraguay. Este proyecto es el fruto de nuestra pasión compartida por el rugby y nuestro compromiso de brindar a la comunidad rugbística de Paraguay la mejor experiencia en línea.</p>

        <p>En Rugby Data Paraguay, nos dedicamos a recopilar, analizar y compartir datos y estadísticas precisas sobre el rugby en nuestro país. Desde los emocionantes torneos locales hasta el desempeño de nuestros talentosos jugadores, nuestro objetivo es ofrecer una plataforma integral para todos los amantes del rugby.</p>

        <h2>¿Qué puedes esperar de Rugby Data Paraguay?</h2>
        <ul>
          <li><strong>Cobertura Integral:</strong> Te mantendremos al tanto de los torneos, divisiones, equipos y partidos de rugby en Paraguay. Nuestra cobertura en tiempo real te brindará los últimos resultados y análisis de cada encuentro.</li>
          <li><strong>Estadísticas Detalladas:</strong> Profundizaremos en las estadísticas para que puedas conocer a fondo el rendimiento de los equipos y jugadores. Desde goleadores destacados hasta récords impresionantes, todo estará a tu alcance.</li>
          <li><strong>Perfil de Jugadores:</strong> Descubre quiénes son los jugadores que están marcando la diferencia en el rugby paraguayo. Presentaremos perfiles individuales de atletas destacados para que los conozcas mejor.</li>
          <li><strong>Noticias y Entrevistas:</strong> Mantente actualizado con las últimas noticias y entrevistas exclusivas. Conectaremos contigo a través de historias inspiradoras y análisis en profundidad.</li>
          <li><strong>Comunidad Rugby:</strong> Queremos que seas parte de nuestra comunidad. Únete a nosotros en las conversaciones, comparte tus opiniones y sé parte de la emocionante comunidad de Rugby Data Paraguay.</li>
        </ul>

        <p>Este es solo el comienzo de un viaje apasionante. Nos comprometemos a brindarte una experiencia única en línea para todos los fanáticos del rugby en Paraguay. ¡Gracias por unirte a nosotros en este emocionante viaje!</p>
      </div>
      <div className="right">
        <a className="btn-green margin-left-10" href="/blog/2022_09_30">Siguiente</a>
      </div>
    </div>
  )
}