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
        <h1>Toros vs Jararás 🏉🇵🇾 Fecha 1 del Pre Intermedia Metro</h1>
        <p className='right i'>26/08/2024 10:40 - Horacio Ariel Garcia Cabrera</p>
        <hr />

        <p>En una siesta atípica para nuestro país, con un día soleado y menos de 15°C se dio inicio al torneo de la Pre Intermedia Metro de la URP y en esta ocasión le toco la oportunidad a los Toros de Fernando de la Mora enfrentarse de visita a los locales de Jararas en el estadio Héroes de Curupayty de la URP en el Comité Olímpico Paraguayo.</p>

        <img src="https://cdn.leonardo.ai/users/c9dac723-c745-4d5d-a9da-3b148d2b8360/generations/40425a60-091a-40e0-a796-cb508ca84fa8/Leonardo_Phoenix_Two_rugged_rugby_players_their_faces_set_in_f_1.jpg" alt='imagen' className='img_blog' />
        <br />

        <p>Con 6 try's convertidos por el equipo fernandino se aseguraron de una victoria con un marcador de 40 a 20 frente a Jararas, los Toros lograron 6 try's, pero solo 2 aciertos en las conversiones, sumando 2 penales convertidos, mientras que por el lado de Jararas lograron 3 try's y una conversión, mas un acierto en un penal.</p>

        <p>Le recordamos que los tantos en cancha son como siguen, 5 puntos por try, luego de una patada en dirección a donde se hizo el try y se llama conversión si logra la patada entrar entre los palos son 2 puntos más, luego se puede puntuar con penales o drop's que suman 3 puntos si hay acierto entre palos.</p>

        <p>De esta manera el equipo masculino de Fernando de la Mora Rugby logra empezar el clausura con el pie derecho, logrando puntuar por victoria y obteniendo el bonus ofensivo sumando 5 puntos.</p>

        <p>En rugby XV los puntajes son 4 puntos por victoria, 2 puntos por empate y luego existen 2 formas de obtener bonus, el ofensivo si se lograron 4 o mas try's, y el defensivo si se pierde por 7 o menos puntos.</p>

        <p>En la siguiente fecha los toros se enfrentarán al aguerrido Old King equipo muy tradicional del rugby paraguayo, que logro sumar una gran victoria por 63 a 19 frente a su par Santani. Completando la fecha la victoria del Curda por 64 a 10 ante Ypane.</p>

      </div>
      <div className="right">
        <a className="btn-green" href="/blog/2024_08_25">Anterior</a>
        <a className="btn-green margin-left-10" href="/blog/2024_08_29">Siguiente</a>
      </div>
    </div>
  )
}

export default Page