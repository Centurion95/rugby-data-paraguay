import React from 'react'

import img_paraguay from '../img/paraguay.jpg'
import img_facebook from '../img/logos/facebook.png'
import img_github from '../img/logos/github.png'
import img_instagram from '../img/logos/instagram.png'
import img_linkedin from '../img/logos/linkedin.png'
import img_threads from '../img/logos/threads.png'
import img_whatsapp from '../img/logos/whatsapp.png'
import img_x from '../img/logos/x.png'

const Page = () => {
  return (
    <div>
      <h1>Acerca de</h1>

      <div className="container-c">
        <h1>Bienvenido a tu fuente definitiva de información sobre el rugby en Paraguay</h1>
        <p>Aquí, te sumergirás en el emocionante mundo de este deporte apasionante. Desde torneos y fixtures hasta detalles de partidos, resultados, equipos y jugadores, nuestro sitio es tu destino número uno para mantenerse actualizado sobre el rugby paraguayo.</p>
        <p>Nuestra misión es proporcionarte datos precisos y estadísticas completas para que puedas disfrutar al máximo del rugby en Paraguay. Ya seas un fanático ávido o un recién llegado al deporte, encontrarás todo lo que necesitas aquí.</p>
        <p>Explora nuestro sitio para descubrir la historia del rugby en Paraguay, conocer a los equipos y jugadores destacados, y seguir de cerca las últimas novedades y eventos. Estamos comprometidos en construir una comunidad apasionada en torno a este deporte, ¡así que únete a nosotros y celebremos juntos el rugby paraguayo!</p>
        <p>Bienvenido a tu nuevo hogar para todo lo relacionado con el rugby en Paraguay. ¡Comienza a explorar y disfruta de la experiencia!</p>
      </div>
      <br />

      <h1>Redes Sociales</h1>
      <div className="container-c">
        <div className="flex-rows">
          <div className="column">
            <img alt="foto" src={img_paraguay}
              width="160" height="160" className="avatar avatar-user border" />
          </div>
          <div className="column margin-left-10">
            <h3>Rugby Data Paraguay</h3>
            <ul>
              <a target="_blank" href='https://www.instagram.com/rugby_data_paraguay/'><img src={img_instagram} alt='Instagram' className='margin-left-10' /></a>
              <a target="_blank" href='https://chat.whatsapp.com/CxOlZsPcKndFLs0W2E8fUP'><img src={img_whatsapp} alt='WhatsApp' className='margin-left-10' /></a>
              <a target="_blank" href='https://www.facebook.com/rugby.data.paraguay'><img src={img_facebook} alt='Facebook' className='margin-left-10' /></a>
              <a target="_blank" href='https://x.com/RugbyDataPy'><img src={img_x} alt='X' className='margin-left-10' /></a>
              <a target="_blank" href='https://www.threads.net/@rugby_data_paraguay'><img src={img_threads} alt='Threads' className='margin-left-10 img48x48' /></a>
            </ul>
          </div>
        </div>
      </div>
      <br />

      <h1>Desarrollo del proyecto</h1>
      <div className="container-c">
        <div className="flex-rows">
          <div className="column">
            <img alt="foto" src="https://avatars.githubusercontent.com/u/22380683?v=4"
              width="160" height="160" className="avatar avatar-user border" />
          </div>
          <div className="column margin-left-10">
            <h3>Rodrigo Centurión</h3>
            <p>Software Engineer - Fullstack Developer</p>
            <ul>
              <a target="_blank" href='https://github.com/Centurion95'><img src={img_github} alt='Github' className='margin-left-10' /></a>
              <a target="_blank" href='https://www.linkedin.com/in/rcenturion95/'><img src={img_linkedin} alt='LinkedIn' className='margin-left-10' /></a>
            </ul>
          </div>
        </div>
      </div>
      <br />

    </div>
  )
}

export default Page