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
        <h1>Fecha 2 en Pre Intermedia y M14 Metro, Fecha 3 en Femenino! 🏉🇵🇾</h1>
        <p className='right i'>02/09/2024 15:08 - Horacio Ariel Garcia Cabrera</p>
        <hr />

        <p>En un vibrante partido con trys y marcador de ida y vuelta el domingo 1 de septiembre, los Toros de Fernando de la Mora Rugby visitaron a su par de Old King Club en el estadio Héroes de Curupayty en el comité Olímpico paraguayo para dar continuidad a la segunda fecha del torneo clausura en la División Pre intermedia.</p>

        <img src="https://cdn.leonardo.ai/users/c9dac723-c745-4d5d-a9da-3b148d2b8360/generations/7097d3a0-aca4-4029-935e-766f8b0cae78/Leonardo_Phoenix_rugby_stadium_at_noon_14yearold_male_rugby_pl_3.jpg" alt='imagen' className='img_blog' />
        <br />

        <p>Los toros abrieron rápidamente el marcador con un Try a los pocos minutos de iniciar el partido, no logrando la conversión, tras convertir un penal concedido los toros aumentaban el marcador con una ventaja de 0-8, pero el equipo de OKC reacciono rápido y con un penal mas un try con la conversión pudieron ponerse al frente por 10-8, en un desarrollo muy parejo los toros lograron un try más, sin la conversión, y dos penales convertidos que les llevaba al descanso con un resultado a favor de 10-19.</p>

        <p>En el segundo tiempo el partido se desarrollo con la misma intensidad y paridad de fuerzas donde los pequeños errores marcaban las diferencias y OKC con dos trys y una conversión logran nuevamente subir en el marcador 22-19, llegando a la mitad del segundo tiempo los toros convierten un try más una conversión haciendo que el marcador este a su favor 22-26, que duro poco porque OKC llega a marcar su cuarto try para asegurar el bonus ofensivo y volver a ponerse al frente del marcador por 29-26. En los últimos 10 minutos del encuentro los toros logran un try más con su conversión llegando así al cuarto try y el bonus ofensivo tambien dejando el marcador en 33 a 29, que por desgracia para el equipo fernandino no prevaleció ya que en el ultimo minuto de juego OKC logra ponerse al frente con su quinto try sin la conversión logrando la victoria del encuentro por la mínima diferencia de 34 a 33. </p>

        <p>De esta manera la derrota del equipo fernandino nos deja de igual manera sumando dos puntos al obtener ambos puntos bonus. Recordamos que en el Rugby un partido ganado suma 4 puntos, un empate 2 puntos y existen los Puntos Bonus, el punto bonus ofensivo se obtiene ganando o perdiendo cada ves que se logran convertir 4 o mas try’s en el partido, y el punto bonus defensivo si se pierde por menos de 7 puntos de diferencia. </p>

        <p>En otros resultados en esta división Ypane Rugby logro sacar un empate de su visita a Santani en una igualdad de 31-31, mientras que CURDA en su visita a Jararas logro una victoria ajustada por 23-25, quien junto al OKC están invictos al concluir la segunda fecha.</p >

        <p>Con estos resultados la tabla en la intermedia queda con OKC y CURDA con 10 puntos, Fernando de la Mora Rugby con 7 y con 2 puntos Ypane, Jararas y Santani.</p >

        <p>En la tercera fecha los toros de Fernando de la Mora Rugby en condición de local se enfrentarán al CURDA buscando sacarle la racha de victorias mientras que Ypane se enfrentará a OKC y Jararas recibirá la visita de Santani.</p >
        <br />

        <h2>División Femenino</h2>
        <p>El domingo 1 de septiembre arranco la tercera fecha del torneo de rugby seven femenino, donde en esta ocasión el Fernando de la Mora Rubgy Fem tuvo tres enfrentamientos, logrando su primera victoria en el torneo.</p >

        <p>En el primer enfrentamiento a las 09 horas del domingo, las chicas del Fernando se enfrentaron a su par de Jararas con un resultado positivo y ganando el partido por 10 a 5 logrando de esta manera su primera victoria en el torneo, a segunda hora tuvieron un duro partido enfrentándose con Franco y con un resultado negativo de 32 a 0, ya cerca del mediodía del domingo en un partido intenso Encarnación pudo ganar el encuentro con las chicas del Fernando por 19 a 10.</p >

        <p>Con estos enfrentamientos y los demás resultados de la fecha dejan al equipo fernandino ubicadas en la decima primera ubicación con 9 puntos. El cuadro de puntuaciones queda en estos momentos de la siguiente manera:</p >

        <table id="my_table">
          <thead>
            <tr>
              <th>Equipo</th>
              <th>Puntos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Old King</td>
              <td>18</td>
            </tr>
            <tr>
              <td>Encarnación</td>
              <td>17</td>
            </tr>
            <tr>
              <td>Santa Clara</td>
              <td>16</td>
            </tr>
            <tr>
              <td>Asunción</td>
              <td>15</td>
            </tr>
            <tr>
              <td>Cristo Rey</td>
              <td>15</td>
            </tr>
            <tr>
              <td>Área 1</td>
              <td>15</td>
            </tr>
            <tr>
              <td>San Jose</td>
              <td>13</td>
            </tr>
            <tr>
              <td>San Cayetano</td>
              <td>13</td>
            </tr>
            <tr>
              <td>Taguato</td>
              <td>11</td>
            </tr>
            <tr>
              <td>Franco</td>
              <td>11</td>
            </tr>
            <tr>
              <td>Fernando de la Mora</td>
              <td>9</td>
            </tr>
            <tr>
              <td>Jararas</td>
              <td>7</td>
            </tr>
            <tr>
              <td>Luque</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Jabalíes</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
        <br />

        <h2>División M14 Metro</h2>

        <p>Arranco el torneo clausura en la división de M14 Metro en la URP con la participación del Fernando de la Mora Rugby, campeón del torneo apertura en dicha división.</p>

        <p>En este torneo clausura cambia el formato un poco en relación al torneo pasado ya que se realizará en jornadas de 2 fechas en rondas de todos contra todos ida y vuelta, siendo así que se jugaran 5 jornadas con 10 fechas, los equipos en esta división son los siguientes Fernando de la Mora Rugby, Jabalíes, Jararas, Mariano Roque Alonso, Old King e Ypane.</p>

        <p>El domingo 1 de septiembre en la cancha de Jabalíes en la ciudad de Luque se inició la jornada con el primer partido entre Fernando y Mariano, donde en un partido muy intenso culminando en un empate 12 a 12, con dos trys y una conversión para cada equipo, 12 en el primer tiempo para Fernando y 12 para Mariano en el segundo tiempo. Para la segunda fecha Fernando se enfrento al Ypane logrando una victoria de 28 a 0.</p>

        <p>En otros resultados de la primera fecha se dieron los siguientes marcadores: Ypane 0-28 Jabalíes, Old King 28-0 Jararas, mientras que los otros resultados de la segunda fecha fueron: Mariano 7- 14 OKC y Jabalíes 33-0 Jararas.</p>

        <p>Con estos resultados las tablas de posiciones quedan de la siguiente manera:</p>

        <p>Jablaies 10 puntos, OKC 9 puntos, Fernando de la Mora 7 puntos, Mariano 3 puntos, Jararas e Ypane sin puntos.</p>

        <p>En la próxima fecha el Domingo 15 de septiembre los Toros fernandinos se enfrentaran a Old King y Jabalies.</p>


      </div >
      <div className="right">
        <a className="btn-green" href="/blog/2024_08_29">Anterior</a>
        <a className="btn-green margin-left-10" href="/blog/2024_09_14">Siguiente</a>
      </div>
    </div >
  )
}

export default Page