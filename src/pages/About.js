import React from 'react'
import img_paraguay from '../img/paraguay.jpg'

export default function Page() {

  const colaboradores = [
    {
      nombre: "Lourdes Lezcano",
      rol: "COO - Directora de Operaciones",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQFqJe2FIEmpww/profile-displayphoto-crop_800_800/B4DZekBTINGkAI-/0/1750803494658?e=1756339200&v=beta&t=7CFkDGfNA3Qrx25NILPqAZArwqEgsA-DEhXGau2XN2k",
      link: "https://linktr.ee/lourdeslezcano"
    },
    {
      nombre: "Santino Sodano",
      rol: "Periodista",
      foto: "https://drive.google.com/uc?id=1-pEtlKndEYr-YDNGtBoUKVRCFLN9aZUJ",
      link: "https://linktr.ee/123456"
    },
    {
      nombre: "Lidia Canatta",
      rol: "Fotógrafa",
      foto: "https://drive.google.com/uc?id=1-pEtlKndEYr-YDNGtBoUKVRCFLN9aZUJ",
      link: "https://linktr.ee/123456"
    },
    {
      nombre: "Daniel Lopez",
      rol: "Colaborador",
      foto: "https://drive.google.com/uc?id=1-daniELopez123456", // modificá este ID según corresponda
      link: "https://linktr.ee/123456"
    },
    {
      nombre: "Adriana Robertti",
      rol: "Creadora de contenido - Entrevistas",
      foto: "https://drive.google.com/uc?id=1-vUEsX2fJ7xehbZMH_lZC7npvDNTekPQ", // transformado de link de Forms a imagen visible
      link: "https://linktr.ee/123456"
    },
  ]


  return (
    <main className="about-page">
      <section className="intro">
        <h1>Acerca de</h1>
        <article className="container-article">
          <h2>🏉 Tu fuente definitiva sobre el rugby en Paraguay 🇵🇾</h2>

          <p>
            Bienvenido a <strong>Rugby Data Paraguay</strong>, el espacio donde la pasión por el rugby se convierte en información clara, completa y accesible 📊🔥.
          </p>

          <p>
            Acá vas a encontrar <strong>todo</strong>: fixtures actualizados, resultados al instante, estadísticas de jugadores 🧠, tablas de posiciones 📈, datos históricos y mucho más. Ya seas jugador, entrenador, periodista, fanático o simplemente curioso, este sitio fue hecho pensando en vos 🙌.
          </p>

          <p>
            Nos mueve un sueño: construir una comunidad digital donde el rugby paraguayo tenga el lugar que se merece 💪. Y lo estamos logrando con tu ayuda, partido a partido, dato a dato.
          </p>

          <p>
            Además, te vas a enterar de curiosidades, entrevistas 🗣️, análisis tácticos, historia de clubes 🏟️, eventos especiales 🎉 y lanzamientos importantes del ecosistema ovalado nacional.
          </p>

          <p>
            Esto no es solo una web. Es una herramienta de difusión, orgullo y crecimiento para todo el rugby del país 🛠️🇵🇾. Y lo mejor... ¡recién estamos comenzando!
          </p>

          <p>
            📣 <strong>Sumate</strong>, compartí, recomendá y ayudanos a seguir construyendo este espacio. Juntos vamos a levantar el rugby paraguayo desde todos los frentes. ¡Bienvenido a tu nueva casa rugbística!
          </p>

        </article>
      </section>

      <section className="cards-row">
        {/* Card Rugby Data Paraguay */}
        <div className="profile-card vertical">
          <div className="profile-info center-text">
            <h3>Rugby Data Paraguay</h3>
            <p>Estadísticas, fixtures y resultados del rugby nacional 🇵🇾</p>
          </div>

          <img
            src={img_paraguay}
            alt="Logo Rugby Data Paraguay"
            className="avatar bottom-img"
            width="160"
            height="160"
          />

          <a
            href="https://linktr.ee/rugby_data_paraguay"
            target="_blank"
            rel="noopener noreferrer"
            className="linktree-link centered"
          >
            🔗🌲 Linktree
          </a>
        </div>


        {/* Card Rodrigo Centurión */}
        <div className="profile-card vertical">
          <div className="profile-info center-text">
            <h3>CEO - Rodrigo Centurión</h3>
            <p>Software Engineer – Fullstack Developer</p>
          </div>

          <img
            src="https://avatars.githubusercontent.com/u/22380683?v=4"
            alt="Rodrigo Centurión"
            className="avatar bottom-img"
            width="160"
            height="160"
          />

          <a
            href="https://linktr.ee/centurion95"
            target="_blank"
            rel="noopener noreferrer"
            className="linktree-link centered"
          >
            🔗🌲 Linktree
          </a>
        </div>
      </section>

      <hr className="section-divider" />

      <section className="colaboradores-section">
        <h2 className="section-title">🤝 Colaboradores</h2>
        <div className="cards-row">
          {colaboradores.map((colab, index) => (
            <div className="profile-card vertical" key={index}>
              <div className="profile-info center-text">
                <h3>{colab.nombre}</h3>
                <p>{colab.rol}</p>
              </div>
              <img
                src={colab.foto}
                alt={colab.nombre}
                className="avatar bottom-img"
                width="160"
                height="160"
              />
              <a
                href={colab.link}
                target="_blank"
                rel="noopener noreferrer"
                className="linktree-link centered"
              >
                🔗🌲 Linktree
              </a>
            </div>
          ))}
        </div>
      </section>


    </main>
  )
}