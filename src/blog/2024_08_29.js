import React from 'react'
import { Helmet } from 'react-helmet'

const Page = () => {
  // Datos de los metadatos dinámicos
  const title = 'La inteligencia articifial y el rugby, ¿¿que tienen que ver??'
  const description = 'En el último año, la inteligencia artificial (IA) se ha convertido en un término omnipresente en nuestras vidas. Desde aplicaciones que predicen el clima hasta asistentes virtuales que responden nuestras preguntas, la IA está en todas partes, incluso en áreas que nunca hubiéramos imaginado, como el rugby.'
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
        <h1>Inicia el torneo oficial en todas las divisiones con record en partidos disputados en todo el pais! 🏉🇵🇾</h1>
        <p className='right i'>29/08/2024 08:33 - Adry Decoud</p>
        <hr />

        <p>Histórico y sin precedentes en Paraguay: 54 partidos disputados entre categorías M13, M14, M16, M18, Intermedia, Primera y Femenino, tanto en Asunción como en el interior del país. El rugby se juega en la capital y en el interior, abarcando todas las divisiones, con árbitros paraguayos certificados por World Rugby.</p>

        <img src="https://cdn.leonardo.ai/users/c9dac723-c745-4d5d-a9da-3b148d2b8360/generations/7fe66478-6ea4-4962-9852-45f64f0ac672/Leonardo_Phoenix_a_sprawling_rugby_stadium_bathed_in_warm_broa_0.jpg" alt='imagen' className='img_blog' />
        <br />

        <p>Ha comenzado un nuevo campeonato en el que participarán todos los clubes de rugby de Paraguay, desplegándose en todo el territorio nacional. Es digno de destacar el esfuerzo de clubes como Encarnación Rugby Club, que después de 12 años vuelve a presentar una categoría M18. También sobresale Fernando de la Mora, que en solo tres años ha logrado conformar todas las divisiones.</p>

        <p>El rugby ha vuelto a convertirse en una fiesta familiar, una señal que muchos celebran, pues refleja el verdadero crecimiento de los clubes y, por ende, de nuestro rugby. Por primera vez, el deporte se juega en todo el país, abarcando todas las divisiones, desde Santaní hasta Villarrica, e incluyendo equipos del este y de otros puntos del país, que participan con esfuerzo y constancia.</p>

        <p>Los resultados de la primera fecha mostraron diferencias y alguna que otra sorpresa, pero lo importante es que el crecimiento continúa. Hay clubes que aún tienen margen para mejorar, y confiamos en que lo harán pronto. El rugby sigue avanzando por el camino del desarrollo, y está claro que con dedicación, podemos estar al nivel de los mejores de la región.</p>

        <p>Es fundamental recordar que las primeras divisiones son el ejemplo para las formativas; los más jóvenes observan y aprenden de ellas.El Tercer Tiempo es parte integral del rugby, un espacio donde se superan diferencias y se forjan amistades.Ganar a cualquier costo no es ganar si no se juega con limpieza, y el doping, además de antideportivo, es inaceptable.</p >

        <p>El rugby bello lo construimos entre todos. ¡Fuerza, y que este sea el mejor año para quienes realmente aman este deporte!</p >

      </div >
      <div class="right">
        <a className="btn-green" href="/blog/2024_08_26">Anterior</a>
        <a className="btn-gray margin-left-10">Siguiente</a>
      </div>
    </div >
  )
}

export default Page
