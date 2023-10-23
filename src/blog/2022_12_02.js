import React from 'react'
import { Helmet } from 'react-helmet'
import img_instagram from '../img/logos/instagram.png'

const Page = () => {
  // Datos de los metadatos dinámicos
  const title = 'Llegamos a 4000 seguidores: Rugby Data Paraguay'
  const description = 'Bienvenidos a Rugby Data Paraguay, tu fuente de estadísticas, noticias y perfiles de jugadores de rugby en Paraguay.'
  const keywords = 'rugby, data, Paraguay, blog, noticias, historias, deporte'
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

      <h1>¡Llegamos a 4.000 seguidores!</h1>
      <p className='right i'>02/12/2022 07:31 - Rodrigo Centurión</p>
      <hr />
      <p>Estamos emocionados de anunciar que hemos alcanzado la increíble cifra de 4.000 seguidores. 🎉🙌</p>

      <a target="_blank" href='https://www.instagram.com/p/Clq7GT-rGrh/'><img src={img_instagram} alt='Instagram' className='margin-left-10' /></a>

      <p>Este viaje no ha estado exento de desafíos, pero cada obstáculo nos ha enseñado valiosas lecciones. Hemos aprendido que la dedicación y la pasión pueden superar cualquier dificultad.</p>

      <p>Además, hemos formado vínculos fuertes con todos ustedes, nuestra increíble comunidad. Cada seguidor, cada comentario y cada mensaje nos ha unido más en torno a nuestra pasión compartida por el rugby en Paraguay.</p>

      <p>Queremos agradecer a cada uno de ustedes por ser parte de este viaje. Su apoyo constante nos impulsa a seguir compartiendo el emocionante mundo del rugby en nuestro país.</p>

      <p>¡Mantente atento a más noticias, historias y contenido emocionante! 🏉🇵🇾 #RugbyEnParaguay #Seguidores #Rugby</p>
    </div>
  )
}

export default Page