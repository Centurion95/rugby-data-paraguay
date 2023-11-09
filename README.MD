# Rugby Data Paraguay

Frontend project.

Author: Rodrigo Centurión

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Versiones](#versiones)

## Installation

1. Clone the repository:
```
git clone https://github.com/Centurion95/rugby-data-paraguay
```

2. Install dependencies:
```
cd rugby-data-paraguay
npm install
```

3. Set up the environment variables:
- Create a `.env` file based on the `.env.example` file.
- Update the environment variables with your own values.

## Usage

1. Start the server:
```
npm start
```

2. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Versiones

#### rc95 09/11/2023 10:40 
- Cambio de alcance para la version 1, no se tendrá ABM de personas
- Se agregan los `headers` faltantes en los POST y PATCH
- Se agrega la sección VISITAS
- Se implementa `chart.js`

#### rc95 - 22/10/2023 18:57
- Se agrega la sección BLOG
- Se agrega BOOTSTRAP para el NAVBAR
- Se agrega la sección VERSIONES para el usuario logueado
- Cambios en el manifest

#### rc95 - 14/09/2023 04:12
- Primeros trabajos para convertir a responsive

#### rc95 - 08/09/2023 23:12
- Ahora las vistas administrativas estan protegidas
- Si se trata de forzar una url, se redirigide al LOGIN

#### rc95 - 08/09/2023 22:37
- Se cambia el icono de la web!
- Se agregan los logos de las RRSS 

#### rc95 - 08/09/2023 21:37
- Se implementa `order_number` en `tournament`

#### rc95 - 05/09/2023 03:02
- Cargados todos los resultados de los torneos "oficiales 2023" a la fecha
- Optimizaciones en las visualizaciones de:
  - Los (w.o.) "walkover"
  - Los empates
  - Los equipos libres en la fecha
  - El fixture para femenino (seven)
  - Los partidos aun no disputados
  - Se centran las tablas de las fechas en la web

#### rc95 - 28/08/2023 00:24
- Ya funciona la pantalla principal, se puede seleccionar el torneo y se actualizan las fechas/partidos en pantalla
- Lo mismo para la pantalla de torneos anteriores

#### rc95 - 27/08/2023 04:05
- Se implementa el LOGIN

#### rc95 - 26/08/2023 21:32
- Cambios necesarios para el web_visit

#### rc95 - 12/08/2023 00:47
- Del lado del back, se han realizado los cambios necesarios para migrar de AWS a VERCEL
- Se omite el uso de `mui-datatables` por el momento

#### rc95 - 09/08/2023 23:37
- Se agrega la pagina "Acerca de"
- Se depura el menu / submenu
- Se optimiza la pagina principal
- Se ocultan las vistas protegidas
- Se agrega la vista secundaria "Torneos Anteriores"

#### rc95 - 05/07/2023
- Las variables del `.env` que no son sensibles, se mueven a `utils.js` como `links`
- Se modifican todas las pantallas para consumir `links` de `utils.js`
- Se agrega un spinner simple (html+css) y se implementa en todas las pantallas de carga
- Cambios en el `README`

#### rc95 - 02/07/2023
- Se agregan cambios para AWS

#### rc95 - 29/06/2023
- Se agrega `sweetalert2` reemplazando los alerts simples
- Se refactoriza para implementar desde `utils.js`

#### rc95 - 23/06/2023
- Primeros pasos con `mui-datatables`
- Se implementa `xlsx` y se agregan botones para exportar los resultados a Excel

#### rc95 - 16/06/2023
- Se implementa `react-datepicker`
- Se agregan las pantallas:
  - estadios
  - torneos-detalle
- Se implementa `jsonwebtoken` del lado del backend
- Se agrega propotipo de `Login`

#### rc95 - 09/06/2023
- Limpieza de código
- Se agregan las pantallas:
  - jugadores
  - torneos

#### rc95 - 08/06/2023
- Se agrega `FrmPersona.js`
- Ajustes en `utils.js`
- Se agregan las pantallas:
  - clubes
  - tipos_contacto
  - personas

#### rc95 - 06/06/2023
- Se agregan las variables de entorno
- Se implementa `Layout.js` y `Routes.js`
- Se implementan las imagenes en los botones
- Se agregan las pantallas:
  - continentes
  - paises
  - estados
  - ciudades
- Se implementan los endpoints para todas las pantallas
- Se crea el archivo `utils.js` para formateo de fechas

#### rc95 - 03/06/2023
- Primer commit
- Prototipo de Layout
- Hoja de estilos