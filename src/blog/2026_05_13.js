import React from 'react'
import { Helmet } from 'react-helmet'
import img_rc95 from '../img/rc95_RDP.png'

export default function Page() {
  // Datos de los metadatos dinámicos
  const title = 'Gracias, Rugby Data Paraguay'
  const description = 'Hoy quiero escribir unas palabras muy especiales para todos los que formaron parte de este proyecto durante tantos años.'
  const keywords = 'blog, rugby, Paraguay, noticias, historias, deporte, CURDA, San Jose, URP, union de rugby del paraguay'
  const author = 'Rugby Data Paraguay, Rodrigo Centurión'

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
        <h1>Gracias, Rugby Data Paraguay</h1>
        <p className='right i'>13/05/2026 11:09 - Rodrigo Centurión</p>
        <hr />

        <p>
          Hoy quiero escribir unas palabras muy especiales para todos los que formaron parte de este proyecto durante tantos años.
        </p>

        <img
          src={img_rc95}
          alt='Rodrigo_Centurion__Rugby_Data_Paraguay'
          className='img_blog' />

        <br />

        <p>
          Antes que nada, gracias. Gracias a cada persona que acompañó, apoyó, compartió, comentó y creyó en Rugby Data Paraguay desde el primer día. Este proyecto me dio muchísimas satisfacciones, aprendizajes y experiencias que voy a valorar siempre.
        </p>
        <p>
          Con el paso del tiempo, siento que realmente existió un antes y un después de Rugby Data Paraguay. Poco a poco, vimos cómo los clubes comenzaron a fortalecer cada vez más sus redes sociales, a compartir mejor sus resultados, fixtures, calendarios, cronogramas y toda la información relacionada al rugby nacional. Eso fue algo muy positivo para toda la comunidad.
        </p>
        <p>
          El impacto también pudo sentirse dentro de la Unión de Rugby del Paraguay, y personalmente tuve la oportunidad de hablar y compartir con dirigentes, jugadores, periodistas y muchísimas personas apasionadas por este deporte. De cada conversación me llevé algo valioso.
        </p>
        <p>
          Durante este camino intentamos hacer muchas cosas buenas. Escuchamos a nuestros usuarios, implementamos nuevas ideas e intentamos innovar constantemente. Siempre buscamos aportar algo distinto y útil para el rugby paraguayo.
        </p>
        <p>
          Como muchos ya se habrán dado cuenta, desde hace bastante tiempo me encuentro desconectado de las redes sociales y la plataforma ya no ha sido actualizada. Esto responde principalmente a que actualmente estoy enfocado en otros proyectos que demandan gran parte de mi tiempo y esfuerzo.
        </p>
        <p>
          Pero también creo que, de alguna manera, Rugby Data Paraguay cumplió su objetivo y su razón de ser. Hoy los clubes y la URP han avanzado muchísimo en todo lo relacionado a la comunicación, organización y publicación de datos. Eso es algo que sinceramente me pone muy contento.
        </p>
        <p>
          Estoy confiado en que las siguientes administraciones y responsables seguirán trabajando en este aspecto, reforzando cada vez más la transparencia, la apertura de datos y el crecimiento del rugby paraguayo.
        </p>
        <p>
          Nuevamente, gracias a todos por acompañarme en este camino. Les deseo el mayor de los éxitos en todo lo que se propongan, dentro y fuera de la cancha.
        </p>

        <br />

        <p>
          Saludos,
          <br />
          Rodrigo Centurión
          <br />
          centu95@hotmail.com
          <br />
          0972 471 250
        </p>


      </div >

      <div className="right">
        <a className="btn-green" href="/blog/2024_09_14">Anterior</a>
        <a className="btn-gray margin-left-10">Gracias a todos!!</a>
      </div>
    </div >
  )
}