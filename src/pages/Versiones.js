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
      <h1>Versiones</h1>

      <div className="container-c">
        <p><u>Versión 25/08/2024 21:07</u></p>
        <ul>
          <li>En la pagina "Visitas" se agregó un selector de años y el gráfico filtra según este dato</li>
          <li>Se actualizan el icono y la imagen de perfil de la web</li>
          <li>Se agrega el modulo "Estados" en la sección de "Administración"</li>
          <li>Se modifica la estructura del layout para ingresar 2 "asides" alrededor del "main"</li>
          <li>Se modifica el CSS para corregir el encuadre de los elementos que se estaban encimando y escapando de los DIV padres</li>
          <li>Se modifica el CSS en los articulos del blog para mejorar el aspecto y se agregan botones de navegación</li>
          <li>Se configura "Error 404: Pagina no encontrada"</li>
        </ul>
      </div>
      <br />

      <div className="container-c">
        <p><u>Versión 19/06/2024 21:41</u></p>
        <ul>
          <li>Cambios para mejorar el SEO, en la carpeta public:</li>
          <ul>
            <li> Se modifica el archivo `index.html`</li>
            <li> Se crea el archivo `robots.txt`</li>
          </ul>
        </ul>
      </div>
      <br />

      <div className="container-c">
        <p><u>Versión 09/11/2023 10:40</u></p>
        <ul>
          <li>Cambio de alcance para la version 1, no se tendrá ABM de personas</li>
          <li>Se agregan los `headers` faltantes en los POST y PATCH</li>
          <li>Se agrega la sección VISITAS</li>
          <li>Se implementa `chart.js`</li>
        </ul>
      </div>
      <br />

      <div className="container-c">
        <p><u>Versión 22/10/2023 18:57</u></p>
        <ul>
          <li>Se agrega la sección BLOG</li>
          <li>Se agrega BOOTSTRAP para el NAVBAR</li>
          <li>Se agrega la sección VERSIONES para el usuario logueado</li>
          <li>Cambios en el manifest</li>
        </ul>
      </div>
      <br />

      <div className="container-c">
        <p><u>Versión 16/09/2023 16:30</u></p>
        <ul>
          <li>Mas trabajos para responsive</li>
          <li>Se cambian los logos</li>
          <li>Se separa el "acerca de" de "versiones"</li>
        </ul>
      </div>
      <br />

      <div className="container-c">
        <p><u>Versión 14/09/2023 04:04</u></p>
        <ul>
          <li>Primeros trabajos para convertir a responsive</li>
        </ul>
      </div>
      <br />

      <div className="container-c">
        <p><u>Versión 08/09/2023 23:04</u></p>
        <ul>
          <li>Ahora las vistas administrativas estan protegidas</li>
          <li>Si se trata de forzar una url, se redirigide al LOGIN</li>
        </ul>
      </div>
      <br />

      <div className="container-c">
        <p><u>Versión 08/09/2023 22:29</u></p>
        <ul>
          <li>Se cambia el icono de la web!</li>
          <li>En el acerca de, se reemplazan los links de las RRSS por imagenes</li>
        </ul>
      </div>
      <br />

      <div className="container-c">
        <p><u>Versión 08/09/2023 21:59</u></p>
        <ul>
          <li>Se implementa "order_number" en "torneos"</li>
          <li>Pequeña corrección de bug en "async/await"</li>
        </ul>
      </div>
      <br />

      <div className="container-c">
        <p><u>Versión 05/09/2023 03:02</u></p>
        <ul>
          <li>Cargados todos los resultados de los torneos "oficiales 2023" a la fecha</li>
          <li>Optimizaciones en las visualizaciones de:</li>
          <ul>
            <li>Los (w.o.) "walkover"</li>
            <li>Los empates</li>
            <li>Los equipos libres en la fecha</li>
            <li>El fixture para femenino (seven)</li>
            <li>Los partidos aun no disputados</li>
            <li>Se centran las tablas de las fechas en la web</li>
          </ul>
        </ul>
      </div>
      <br />

      <div className="container-c">
        <p><u>Versión 28/08/2023 00:24</u></p>
        <ul>
          <li>Ya funciona la pantalla principal, se puede seleccionar el torneo y se actualizan las fechas/partidos en pantalla</li>
          <li>Lo mismo para la pantalla de torneos anteriores</li>
        </ul>
      </div>
      <br />

      <div className="container-c">
        <p><u>Versión 27/08/2023 04:05</u></p>
        <ul>
          <li>Se cargan los datos para la tabla users</li>
          <li>Se realizan los cambios estructurales en el front y el back para el LOGIN</li>
          <li>Se implementa la pantalla LOGIN en el front</li>
        </ul>
      </div>
      <br />

      <div className="container-c">
        <p><u>Versión 26/08/2023 21:30</u></p>
        <ul>
          <li>Se crean los datos para las tablas: estados, ciudades, clubes, estadios</li>
          <li>Se actualizan los datos del ultimo torneo en todas las divisiones</li>
          <li>Se agrega un esquema para conteo de visitas en cada pagina</li>
        </ul>
      </div>
      <br />

      <div className="container-c">
        <p><u>Versión 12/08/2023 02:18</u></p>
        <ul>
          <li>Se migra el backend de AWS a VERCEL</li>
          <li>Se corrige el bug en las vistas de administración</li>
          <li>En el "home" y "torneos anteriores" se agrega la función para obtener los torneos</li>
          <li>En el backend se pre-poblan los torneos "oficiales" del 2023, 2022 y 2021</li>
        </ul>
      </div>
      <br />

      <div className="container-c">
        <p><u>Versión 09/08/2023 19:56</u></p>
        <ul>
          <li>Se agrega la pagina "Acerca de"</li>
          <li>Se depura el menu / submenu</li>
          <li>Se optimiza la pagina principal</li>
          <li>Se ocultan las vistas protegidas</li>
          <li>Se agrega la vista secundaria "Torneos Anteriores"</li>
        </ul>
      </div>
      <br />

      <div className="container-c">
        <p><u>Versión 05/07/2023</u></p>
        <ul>
          <li>Se implementa spinner</li>
          <li>Refactorización de codigo</li>
          <li>Cambios en el readme (git)</li>
        </ul>
      </div>
      <br />

      <div className="container-c">
        <p><u>Versión 02/07/2023</u></p>
        <ul>
          <li>Deploy en Vercel y AWS</li>
        </ul>
      </div>
      <br />

      <div className="container-c">
        <p><u>Versión 29/06/2023</u></p>
        <ul>
          <li>Se implementa sweetalert2</li>
        </ul>
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