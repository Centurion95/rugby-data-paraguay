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
        <h1>Rugby Femenino - Este Domingo se juega la ultima fecha antes de las rondas finales</h1>
        <p className='right i'>14/09/2024 12:27 - Horacio Ariel Garcia Cabrera</p>
        <hr />

        <p>Ultima fecha del torneo seven femenino de la URP, para algunas correcciones o información que desconocía sobre el formato del torneo femenino, este torneo clausura se ha cambiado el formato, ya que anteriormente todos los torneos eran de rondas todos contra todos.</p>

        <img src="https://cdn.leonardo.ai/users/c9dac723-c745-4d5d-a9da-3b148d2b8360/generations/234571fb-2964-48b9-9962-5cb45ae2c708/Leonardo_Phoenix_rugby_stadium_at_noon_womens_rugby_players_fa_2.jpg" alt='imagen' className='img_blog' />
        <br />

        <p>Para este torneo clausura se dividió en dos grupos con 7 equipos cada uno y una ronda de todos contra todos, mas un partido Inter grupo para cada equipo.</p>

        <p>El primer grupo conformado por los siguientes equipos: Old King, Leonas de Encarnación, Cristo Rey, Taguato de Villarrica, Franco, Fernando de la Mora y Jararas. Mientras que el segundo grupo está conformado por: Asunción, Área 1, San Jose, San Cayetano, Luque y Jabalíes.</p>

        <p>Este Domingo se juega la ultima fecha antes de las rondas finales para que todos completen los 7 partidos jugados y definir los 4 primeros de cada grupo que pasan a la siguiente ronda.  Los partidos a jugarse este domingo en la URP en el estadio Héroes de Curupayty desde las nueve de la mañana son:</p>
        <ul>
          <li>Cristo Rey vs San Jose</li>
          <li>Santa Clara vs Asunción</li>
          <li>OKC vs Cristo Rey</li>
          <li>San Jose vs Asunción</li>
          <li>Luque vs Jabalíes</li>
        </ul>
        <p>Antes de que se juegen estos partidos las posiciones en cada grupo están de la siguiente forma, prácticamente con los 4 equipos de cada grupo ya clasificados:</p>

        <table id="my_table">
          <tr>
            <th colSpan={10}>Grupo A</th>
          </tr>
          <tr>
            <th>Equipo</th>
            <th>PJ</th>
            <th>PG</th>
            <th>PE</th>
            <th>PP</th>
            <th>WO</th>
            <th>TF</th>
            <th>TE</th>
            <th>Dif</th>
            <th>Puntos</th>
          </tr>
          <tr>
            <td>Old King</td>
            <td>6</td>
            <td>6</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>198</td>
            <td>17</td>
            <td>181</td>
            <td>18</td>
          </tr>
          <tr>
            <td>Encarnación</td>
            <td>7</td>
            <td>5</td>
            <td>0</td>
            <td>2</td>
            <td>0</td>
            <td>134</td>
            <td>97</td>
            <td>37</td>
            <td>17</td>
          </tr>
          <tr>
            <td>Cristo Rey</td>
            <td>5</td>
            <td>5</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>226</td>
            <td>0</td>
            <td>226</td>
            <td>15</td>
          </tr>
          <tr>
            <td>Taguato</td>
            <td>7</td>
            <td>2</td>
            <td>0</td>
            <td>5</td>
            <td>0</td>
            <td>77</td>
            <td>184</td>
            <td>-107</td>
            <td>11</td>
          </tr>
          <tr>
            <td>Franco</td>
            <td>7</td>
            <td>3</td>
            <td>0</td>
            <td>2</td>
            <td>2</td>
            <td>81</td>
            <td>100</td>
            <td>-19</td>
            <td>11</td>
          </tr>
          <tr>
            <td>Fernando de la Mora</td>
            <td>7</td>
            <td>1</td>
            <td>0</td>
            <td>6</td>
            <td>0</td>
            <td>45</td>
            <td>192</td>
            <td>-147</td>
            <td>9</td>
          </tr>
          <tr>
            <td>Jararas</td>
            <td>7</td>
            <td>0</td>
            <td>0</td>
            <td>7</td>
            <td>0</td>
            <td>5</td>
            <td>193</td>
            <td>-188</td>
            <td>7</td>
          </tr>
        </table>

        <table id="my_table">
          <tr>
            <th colSpan={10}>Grupo B</th>
          </tr>
          <tr>
            <th>Equipo</th>
            <th>PJ</th>
            <th>PG</th>
            <th>PE</th>
            <th>PP</th>
            <th>WO</th>
            <th>TF</th>
            <th>TE</th>
            <th>Dif</th>
            <th>Puntos</th>
          </tr>
          <tr>
            <td>Santa Clara</td>
            <td>6</td>
            <td>5</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>146</td>
            <td>34</td>
            <td>112</td>
            <td>16</td>
          </tr>
          <tr>
            <td>Asunción</td>
            <td>5</td>
            <td>5</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>228</td>
            <td>0</td>
            <td>228</td>
            <td>15</td>
          </tr>
          <tr>
            <td>Área 1</td>
            <td>7</td>
            <td>4</td>
            <td>0</td>
            <td>3</td>
            <td>0</td>
            <td>132</td>
            <td>102</td>
            <td>30</td>
            <td>15</td>
          </tr>
          <tr>
            <td>San Jose</td>
            <td>5</td>
            <td>4</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>152</td>
            <td>26</td>
            <td>126</td>
            <td>13</td>
          </tr>
          <tr>
            <td>San Cayetano</td>
            <td>7</td>
            <td>3</td>
            <td>0</td>
            <td>4</td>
            <td>0</td>
            <td>86</td>
            <td>158</td>
            <td>-72</td>
            <td>13</td>
          </tr>
          <tr>
            <td>Luque</td>
            <td>6</td>
            <td>0</td>
            <td>0</td>
            <td>6</td>
            <td>0</td>
            <td>0</td>
            <td>267</td>
            <td>-267</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Jabalíes</td>
            <td>6</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>6</td>
            <td>0</td>
            <td>140</td>
            <td>-140</td>
            <td>0</td>
          </tr>
        </table>

      </div >
      <div className="right">
        <a className="btn-green" href="/blog/2024_09_02">Anterior</a>
        <a className="btn-gray margin-left-10">Siguiente</a>
      </div>
    </div >
  )
}

export default Page