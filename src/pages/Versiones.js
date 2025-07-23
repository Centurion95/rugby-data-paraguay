import React from 'react'

const versiones = [
  {
    fecha: '22/07/2025 22:18',
    cambios: [
      'Pequeños ajustes en las declaraciones de componentes .js (para declarar y exportar en una sola línea)',
      'La pagina `Acerca de` ahora se llama `Nosotros`',
      'Se refactoriza el archivo `Versiones.js` y las redes sociales se separan y se muestran solo en `Nosotros`',
      'En el footer agregamos el enlace al LinkTree',
      'Se agregan los colaboradores en la pagina `Nosotros` y se retoca la estética, se resumen las reds sociales en Linktree',
    ]
  },
  {
    fecha: '01/10/2024 22:36',
    cambios: ['En la pantalla ABM de torneo_detalle se agregan las reglas css']
  },
  {
    fecha: '08/09/2024 00:43',
    cambios: [
      'Se eliminan dependencias innecesarias: @emoticon/react, mui-datatables',
      'Se eliminan comentarios personales, de ahora en más ver git',
      'Cambios en el README'
    ]
  },
  {
    fecha: '07/09/2024 22:42',
    cambios: ['Mejoras en el SEO: se agrega /public/sitemap.xml']
  },
  {
    fecha: '27/08/2024 00:05',
    cambios: [
      'Mejoras en el SEO según seobility.net',
      'Se eliminan ficheros innecesarios'
    ]
  },
  {
    fecha: '26/08/2024 23:44',
    cambios: [
      'Omitimos la cursiva en el Blog',
      'En "Torneos anteriores" habilitamos los años 2023, 2022 y 2021'
    ]
  },
  {
    fecha: '25/08/2024 21:07',
    cambios: [
      'En la página "Visitas" se agregó un selector de años',
      'Se actualizan icono e imagen de perfil',
      'Se agrega el módulo "Estados"',
      'Se modifican asides y layout',
      'Correcciones de CSS para elementos fuera de lugar',
      'Botones de navegación en el blog',
      'Página de Error 404'
    ]
  },
  {
    fecha: '19/06/2024 21:41',
    cambios: [
      'Mejoras SEO en public/',
      '`index.html` modificado, se crea `robots.txt`'
    ]
  },
  {
    fecha: '09/11/2023 10:40',
    cambios: [
      'Se elimina ABM de personas',
      'Se agregan headers a POST/PATCH',
      'Sección VISITAS',
      'Implementación de `chart.js`'
    ]
  },
  {
    fecha: '22/10/2023 18:57',
    cambios: [
      'Sección BLOG',
      'BOOTSTRAP para NAVBAR',
      'Vista VERSIONES para usuarios logueados',
      'Cambios en el manifest'
    ]
  },
  {
    fecha: '16/09/2023 16:30',
    cambios: [
      'Mejoras responsive',
      'Cambio de logos',
      'Separación de "acerca de" y "versiones"'
    ]
  },
  {
    fecha: '14/09/2023 04:04',
    cambios: ['Primeros trabajos para responsive']
  },
  {
    fecha: '08/09/2023 23:04',
    cambios: [
      'Protección de vistas administrativas',
      'Redirección al LOGIN si se fuerza URL'
    ]
  },
  {
    fecha: '08/09/2023 22:29',
    cambios: [
      'Cambio de icono web',
      'RRSS del Acerca de ahora con imágenes'
    ]
  },
  {
    fecha: '08/09/2023 21:59',
    cambios: [
      'Se implementa `order_number` en torneos',
      'Fix en async/await'
    ]
  },
  {
    fecha: '05/09/2023 03:02',
    cambios: [
      'Carga de resultados torneos oficiales 2023',
      'Visualización de walkovers, empates, libres',
      'Fixture femenino (seven)',
      'Partidos no disputados',
      'Tablas centradas'
    ]
  },
  {
    fecha: '28/08/2023 00:24',
    cambios: [
      'Pantalla principal funcional con selección de torneos',
      'Funciona también "torneos anteriores"'
    ]
  },
  {
    fecha: '27/08/2023 04:05',
    cambios: [
      'Carga inicial tabla users',
      'Estructura login (front y back)',
      'Pantalla LOGIN implementada'
    ]
  },
  {
    fecha: '26/08/2023 21:30',
    cambios: [
      'Creación de datos: estados, ciudades, clubes, estadios',
      'Actualización de torneos',
      'Conteo de visitas en cada página'
    ]
  },
  {
    fecha: '12/08/2023 02:18',
    cambios: [
      'Migración backend de AWS a Vercel',
      'Fix en vistas admin',
      'Función para obtener torneos',
      'Torneos 2021–2023 pre-poblados en backend'
    ]
  },
  {
    fecha: '09/08/2023 19:56',
    cambios: [
      'Página "Acerca de"',
      'Menú y submenú depurados',
      'Optimización página principal',
      'Vistas protegidas ocultas',
      'Vista "Torneos Anteriores" agregada'
    ]
  },
  {
    fecha: '05/07/2023',
    cambios: [
      'Spinner implementado',
      'Refactorización de código',
      'Cambios en README'
    ]
  },
  {
    fecha: '02/07/2023',
    cambios: ['Deploy en Vercel y AWS']
  },
  {
    fecha: '29/06/2023',
    cambios: ['Se implementa sweetalert2']
  }
]

function RegistroVersion({ fecha, cambios }) {
  return (
    <article className="container-c mb-4">
      <p><u>Versión {fecha}</u></p>
      <ul className="list-disc ml-5">
        {cambios.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

export default function Page() {
  return (
    <div className="px-6 py-8 text-gray-800 dark:text-white">
      <section>
        <h1 className="text-2xl font-bold mb-6">Historial de Versiones</h1>
        {versiones.map((ver, index) => (
          <RegistroVersion key={index} fecha={ver.fecha} cambios={ver.cambios} />
        ))}
      </section>

    </div>
  )
}