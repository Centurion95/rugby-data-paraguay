import React from 'react'
import { Helmet } from 'react-helmet'

const Page = () => {
  // Datos de los metadatos dinámicos
  const title = 'CURDA se corona campeón del torneo oficial 2023 tras una victoria reñida contra San José - Rugby en Paraguay'
  const description = 'El equipo de rugby CURDA ha dejado una huella imborrable en la historia del deporte paraguayo al consagrarse campeón del torneo oficial 2023. En una emocionante batalla contra San José, el equipo CURDA logró imponerse con un marcador de 29 a 25 en el Estadio "Héroes del Curupayty" el pasado sábado 21 de octubre de 2023.'
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

      <h1>CURDA se corona campeón del torneo oficial 2023 tras una victoria reñida contra San José</h1>
      <p className='right i'>22/10/2023 18:22 - Rodrigo Centurión</p>
      <hr />
      <p>¡Es momento de celebrar! El equipo de rugby CURDA ha dejado una huella imborrable en la historia del deporte paraguayo al consagrarse campeón del torneo oficial 2023. En una emocionante batalla contra San José, el equipo CURDA logró imponerse con un marcador de 29 a 25 en el Estadio "Héroes del Curupayty" el pasado sábado 21 de octubre de 2023.</p>

      <p>Desde el inicio del encuentro, la intensidad en el terreno de juego era palpable. Los jugadores de ambas escuadras mostraron un desempeño excepcional, dejando a la multitud de espectadores al borde de sus asientos en todo momento. Los aficionados de CURDA y San José se congregaron en el estadio, creando una atmósfera electrizante y llena de pasión por el rugby.</p>

      <p>El partido, que se llevó a cabo a partir de las 19:00, se convirtió en una batalla de resistencia y habilidades estratégicas, donde cada jugada fue crucial para determinar el resultado final. Sin embargo, a medida que el reloj avanzaba, el equipo de CURDA mostró un juego excepcional, demostrando su dedicación y compromiso con el deporte. Su determinación incansable y su habilidad para superar las adversidades les permitió asegurar la victoria y alcanzar la codiciada posición de campeones.</p>

      <p>El entrenador de CURDA, en una entrevista después del partido, expresó su orgullo por el desempeño sobresaliente de sus jugadores, enfatizando su arduo trabajo y su enfoque inquebrantable en alcanzar la victoria. Los seguidores del equipo, llenos de emoción y alegría, inundaron las redes sociales con mensajes de apoyo y felicitaciones, mostrando su gratitud y admiración por el esfuerzo colectivo de los jugadores.</p>

      <p>En consecuencia, CURDA se ha ganado un lugar en la historia del rugby paraguayo, y su triunfo en el torneo oficial 2023 será recordado por generaciones venideras. Con una actuación magistral y una dedicación sin igual, CURDA ha demostrado que la perseverancia y la pasión son los pilares fundamentales para alcanzar la grandeza en el mundo del rugby.</p>

      <p>¡Felicidades a CURDA por su impresionante logro y a todos los jugadores, entrenadores y seguidores por su inquebrantable apoyo y espíritu deportivo!</p>


    </div>
  )
}

export default Page