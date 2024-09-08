import Axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'

import imgEdit from '../img/edit.png'
import imgDelete from '../img/delete.png'
import imgCancel from '../img/cancel.png'
import imgOk from '../img/ok.png'
import Spinner from '../components/Spinner'

import * as XLSX from 'xlsx'
import { links } from '../utils/links'
import { useNavigate } from 'react-router-dom'
const { getFormatedDateTime, getFormatedDate_to_ISO_8601, getFormatedDate_from_ISO_8601, mostrarError, mostrarConfirmarCancelar, getDecodedToken } = require('../utils/utils')

function Page(props) {
  const this_url = process.env.REACT_APP_SERVER + props.link
  const person_url = process.env.REACT_APP_SERVER + links.PERSONAS
  const club_url = process.env.REACT_APP_SERVER + links.CLUBES

  const [isLoading, setIsLoading] = useState(true)

  const [titulo, setTitulo] = useState('Insertar nuevo registro')
  const [elements, setElements] = useState([])
  const [person_elements, setPerson_elements] = useState([])
  const [club_elements, setClub_elements] = useState([])

  const [editID, setEditID] = useState(0)
  const [year, setYear] = useState(new Date().getFullYear())
  const [id_person, setId_person] = useState('')
  const [id_club, setId_club] = useState('')

  const id_personRef = useRef(null)
  const id_clubRef = useRef(null)

  const [identifier_number, setIdentifier_number] = useState('')
  const identifier_numberRef = useRef(null)
  const [person_name, setPerson_name] = useState('')

  const navigate = useNavigate()
  useEffect(() => {
    //si no es admin, redirigimos al LOGIN
    const es_admin = getDecodedToken()?.es_admin
    if (!es_admin) {
      navigate('/login')
      window.location.reload()
      return
    }

    console.table('*** useEffect - frmJugador')
    fetchData()
  }, [])

  async function fetchData() {
    await Axios.get(this_url, {
      headers: { Authorization: localStorage.getItem('token') }
    })
      .then((response) => {
        // console.table(response.data)
        setElements(response.data)
      })
      .catch((error) => mostrarError(error))

    // await Axios.get(person_url)
    //   .then((response) => {
    //     // console.table(response.data)
    //     setPerson_elements(response.data)
    //   })
    //   .catch((error) => mostrarError(error))

    await Axios.get(club_url, {
      headers: { Authorization: localStorage.getItem('token') }
    })
      .then((response) => {
        // console.table(response.data)
        setClub_elements(response.data)
      })
      .catch((error) => mostrarError(error))

    setIsLoading(false)
  }

  function editElement(element) {
    setTitulo('Editar un registro')

    setEditID(element._id)

    setYear(element.year)
    setId_person(element.id_person._id)
    setId_club(element.id_club._id)

    setIdentifier_number(element.id_person.identifier_number)
    identifier_numberRef.current.focus()
  }

  const insertFunction = async () => {
    if (identifier_number.trim() === '') {
      identifier_numberRef.current.focus()
      return mostrarError(`Debe ingresar el numero de identificador!`)
    }

    if (id_person.trim() === '') {
      identifier_numberRef.current.focus()
      return mostrarError(`Debe seleccionar una persona!`)
    }

    if (id_club.trim() === '') {
      id_clubRef.current.focus()
      return mostrarError(`Debe seleccionar el club!`)
    }

    if (editID === 0) { //insert
      const newDocument = {
        year,
        id_person,
        id_club,
      }
      await Axios.post(this_url, newDocument)
        .then(() => window.location.reload())
        .catch((error) => mostrarError(error))

    } else { //update
      await Axios.patch(this_url + editID, {
        year,
        id_person,
        id_club,
      })
        .then(() => window.location.reload())
        .catch((error) => mostrarError(error))
    }
    // window.location.reload()
  }

  const cancelFunction = async () => {
    setTitulo('Insertar nuevo registro')
    setEditID(0)
    setYear(new Date().getFullYear())
    setId_person('')
    setId_club(0)
  }

  const deleteFunction = (_id) => {
    mostrarConfirmarCancelar().then(async (result) => {
      if (result.isConfirmed) {
        await Axios.patch(this_url + _id, { archived: true })
          .then(() => window.location.reload())
          .catch((error) => mostrarError(error))
      }
    })
  }

  async function onBlur_identifier_number() {
    setId_person('')
    setPerson_name('')
    if (identifier_number.trim() === '') return

    await Axios.get(person_url + 'get_one_by_identifier_number', {
      params: { identifier_number }
    })
      .then((response) => {
        if (response.data.encontrado === false) {
          setPerson_name('No existe el registro')
          return
        }

        setId_person(response.data._id)
        setPerson_name(response.data.name)
      })
      .catch((error) => {
        mostrarError(error)
      })
  }

  const exportToXLSX = () => {
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(elements)
    XLSX.utils.book_append_sheet(wb, ws, "Hoja1")
    XLSX.writeFile(wb, props.titulo + ".xlsx")
  }

  return (
    <div className="center">
      {isLoading && <Spinner />}

      <h1>{props.titulo}</h1>

      <div className="container-c">
        <h2>{titulo}</h2>
        <form onSubmit={null}>
          <div className="container-c center">

            <div className="row">
              <div className="col-25"><label>Año</label></div>
              <div className="col-75">
                <select value={year} onChange={e => setYear(e.target.value)}>
                  {[new Date().getFullYear(), new Date().getFullYear() + 1].map((element) => {
                    return (<option key={element} value={element}>{element}</option>)
                  })}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-25"><label>Identificador</label></div>
              <div className="col-75">
                <input type="text" className="input-right" required placeholder='Número de Identificador'
                  value={identifier_number} onChange={e => setIdentifier_number(e.target.value)} ref={identifier_numberRef}
                  onBlur={onBlur_identifier_number} />
              </div>
            </div>

            <div className="row">
              <div className="col-25"></div>
              <div className="col-75">
                <label>{person_name}</label>
              </div>
            </div>

            <div className="row">
              <div className="col-25"><label>Club</label></div>
              <div className="col-75">
                <select ref={id_clubRef} value={id_club} onChange={e => setId_club(e.target.value)}>
                  <option key="0" value="">-- Seleccione una opción --</option>
                  {club_elements.map((element) => {
                    return (
                      <option key={element._id} value={element._id}>
                        {element.name}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>

          </div>
          <div className="right">
            <img src={imgCancel} alt='cancel' className='img-button'
              onClick={cancelFunction} />

            <img src={imgOk} alt='ok' className='img-button margin-left-10'
              onClick={insertFunction} />
          </div>
        </form>
      </div >

      <table>
        <thead>
          <tr>
            <th>Año</th>
            <th>Nro doc</th>
            <th>Persona</th>
            <th>Club</th>
            <th>Fecha creación</th>
            <th colSpan={2}>
              {elements.length !== 0
                && <button className="btn-green" onClick={exportToXLSX}>Exportar XLSX</button>
              }
            </th>
          </tr>
        </thead>
        <tbody>
          {elements.map((element) => {
            const updatedAt = getFormatedDateTime(new Date(element.updatedAt))
            return (
              <tr key={element._id} >
                <td>{element.year} </td>
                <td>{element.id_person.identifier_number}</td>
                <td>{element.id_person.name} </td>
                <td>{element.id_club.name} </td>
                <td>{updatedAt} </td>
                <td>
                  <img src={imgEdit} alt='edit' className='img-button'
                    onClick={() => { editElement(element) }} />
                </td>
                <td><img src={imgDelete} alt='delete' className='img-button'
                  onClick={() => { deleteFunction(element._id) }} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Page
