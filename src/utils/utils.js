const Swal = require('sweetalert2')

export function getCurrentDateTime() {
  const now = new Date()

  const day = String(now.getDate()).padStart(2, '0')
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const year = now.getFullYear()

  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
}

export function getFormatedDateTime(datetime) {
  const day = String(datetime.getDate()).padStart(2, '0')
  const month = String(datetime.getMonth() + 1).padStart(2, '0')
  const year = datetime.getFullYear()

  const hours = String(datetime.getHours()).padStart(2, '0')
  const minutes = String(datetime.getMinutes()).padStart(2, '0')
  const seconds = String(datetime.getSeconds()).padStart(2, '0')

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
}

export function getFormatedDateTime_short(datetime) {
  const day = String(datetime.getDate()).padStart(2, '0')
  const month = String(datetime.getMonth() + 1).padStart(2, '0')

  const hours = String(datetime.getHours()).padStart(2, '0')
  const minutes = String(datetime.getMinutes()).padStart(2, '0')

  return `${day}/${month} ${hours}:${minutes}`
}

export function getFormatedDate(datetime) {
  const day = String(datetime.getDate()).padStart(2, '0')
  const month = String(datetime.getMonth() + 1).padStart(2, '0')
  const year = datetime.getFullYear()

  return `${day}/${month}/${year}`
}

//ISO-8601: AAAA-MM-DD
export function getFormatedDate_to_ISO_8601(datetime) {
  const day = String(datetime.getDate()).padStart(2, '0')
  const month = String(datetime.getMonth() + 1).padStart(2, '0')
  const year = datetime.getFullYear()

  return `${year}-${month}-${day}`
}

//ejemplo "1970-12-31T00:00:00.000Z" -> "31/12/1970"
export function getFormatedDate_from_ISO_8601(datetime) {
  const day = datetime.getUTCDate().toString().padStart(2, '0')
  const month = (datetime.getUTCMonth() + 1).toString().padStart(2, '0') // Sumar 1 al mes ya que los meses en JavaScript son base 0 (0-11)
  const year = datetime.getUTCFullYear()

  return `${day}/${month}/${year}`
}

export function mostrarError(text) {
  Swal.fire({
    icon: 'error',
    title: 'Atención',
    text,
  })
}
export function mostrarOK(text) {
  Swal.fire({
    icon: 'success',
    title: 'Rugby Data Paraguay',
    text,
  })
}
export function mostrarConfirmarCancelar() {
  return Swal.fire({
    title: 'Are you sure you want to DELETE this document?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3a3a3b',
    confirmButtonText: 'Yes, delete it!'
  })
}

export async function insertWebVisit(page_id) {
  const Axios = require('axios')
  try {
    await Axios.post(process.env.REACT_APP_SERVER + "web_visit/", { page_id })
  } catch (error) {
    console.error("Error inserting web visit:", error)
  }
}

export function getDecodedToken() {
  try {
    const storedToken = localStorage.getItem('token')
    if (storedToken) { // Decodificar el token y establecer el payload
      const tokenPayload = storedToken.split('.')[1]
      const decodedPayload = JSON.parse(atob(tokenPayload))
      return decodedPayload
    } else {
      return undefined
    }
  } catch (error) {
    console.error(error)
  }
}