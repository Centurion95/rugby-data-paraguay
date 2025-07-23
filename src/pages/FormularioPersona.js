import Axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'

import imgNew from '../img/new.png'
import imgEdit from '../img/edit.png'
import imgDelete from '../img/delete.png'
import imgCancel from '../img/cancel.png'
import imgOk from '../img/ok.png'
import Spinner from '../components/Spinner'

import * as XLSX from 'xlsx'

import { links } from '../utils/links'

import { Link, useNavigate } from 'react-router-dom'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'
registerLocale('es', es)
setDefaultLocale('es')

const {
  getFormatedDateTime,
  getFormatedDate_from_ISO_8601,
  mostrarError,
  mostrarConfirmarCancelar,
  getDecodedToken, } = require('../utils/utils')

export default function Page(props) {
  const this_url = process.env.REACT_APP_SERVER + props.link
  const identifier_type_url = process.env.REACT_APP_SERVER + links.TIPO_IDENTIFICADOR
  const country_url = process.env.REACT_APP_SERVER + links.PAISES

  const [isLoading, setIsLoading] = useState(true)

  const [titulo, setTitulo] = useState('Insertar nuevo registro')
  const [elements, setElements] = useState([])
  const [identifier_type_elements, setIdentifier_type_elements] = useState([])
  const [country_elements, setCountry_elements] = useState([])

  const [editID, setEditID] = useState(0)
  const [name, setName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [gender, setGender] = useState('')
  const [id_identifier_type, setId_identifier_type] = useState('')
  const [identifier_number, setIdentifier_number] = useState('')
  const [id_country, setId_country] = useState('')

  const nameRef = useRef(null)
  const birthDateRef = useRef(null)
  const genderRef = useRef(null)
  const id_identifier_typeRef = useRef(null)
  const identifier_numberRef = useRef(null)
  const countryRef = useRef(null)

  const navigate = useNavigate()
  useEffect(() => {
    //si no es admin, redirigimos al LOGIN
    const es_admin = getDecodedToken()?.es_admin
    if (!es_admin) {
      navigate('/login')
      window.location.reload()
      return
    }

    console.table('*** useEffect - frmPersona')
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

    await Axios.get(identifier_type_url, {
      headers: { Authorization: localStorage.getItem('token') }
    })
      .then((response) => {
        // console.table(response.data)
        setIdentifier_type_elements(response.data)
      })
      .catch((error) => mostrarError(error))

    await Axios.get(country_url, {
      headers: { Authorization: localStorage.getItem('token') }
    })
      .then((response) => {
        // console.table(response.data)
        setCountry_elements(response.data)
      })
      .catch((error) => mostrarError(error))

    setIsLoading(false)
  }

  function editElement(element) {
    setTitulo('Editar un registro')

    setEditID(element._id)
    setName(element.name)
    setBirthDate(new Date(element.birthDate))
    setGender(element.gender)
    setId_identifier_type(element.id_identifier_type._id)
    setIdentifier_number(element.identifier_number)
    setId_country(element.id_country._id)

    nameRef.current.focus()
  }

  const insertFunction = async () => {
    if (name.trim() === '') {
      nameRef.current.focus()
      return mostrarError(`Debe ingresar el nombre!`)
    }

    if (birthDate === '') {
      // birthDateRef.current.focus()
      return mostrarError(`Debe ingresar la fecha de nacimiento!`)
    }

    if (gender.trim() === '') {
      genderRef.current.focus()
      return mostrarError(`Debe ingresar el género!`)
    }

    if (id_identifier_type.trim() === '') {
      id_identifier_typeRef.current.focus()
      return mostrarError(`Debe ingresar el tipo de identificador!`)
    }

    if (identifier_number.trim() === '') {
      identifier_numberRef.current.focus()
      return mostrarError(`Debe ingresar el numero de identificador!`)
    }

    if (id_country.trim() === '') {
      countryRef.current.focus()
      return mostrarError(`Debe seleccionar el país!`)
    }

    if (editID === 0) { //insert
      const newDocument = {
        name,
        birthDate,
        gender,
        id_identifier_type,
        identifier_number,
        id_country,
      }
      await Axios.post(this_url, newDocument,
        { headers: { Authorization: localStorage.getItem('token') } }
      )
        .then(() => window.location.reload())
        .catch((error) => mostrarError(error))

    } else { //update
      await Axios.patch(this_url + editID, {
        name,
        birthDate,
        gender,
        id_identifier_type,
        identifier_number,
        id_country,
      },
        { headers: { Authorization: localStorage.getItem('token') } })
        .then(() => window.location.reload())
        .catch((error) => mostrarError(error))
    }
    // window.location.reload()
  }

  const cancelFunction = async () => {
    setTitulo('Insertar nuevo registro')
    setEditID(0)
    setName('')
    setBirthDate('')
    setGender('')
    setId_identifier_type('')
    setIdentifier_number('')
    setId_country(0)
  }

  const deleteFunction = (_id) => {
    mostrarConfirmarCancelar().then(async (result) => {
      if (result.isConfirmed) {
        await Axios.patch(this_url + _id, { archived: true },
          { headers: { Authorization: localStorage.getItem('token') } }
        )
          .then(() => window.location.reload())
          .catch((error) => mostrarError(error))
      }
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
              <div className="col-25"><label>Nombre</label></div>
              <div className="col-75">
                <input type="text" className="input-right" required placeholder='Nombre'
                  value={name} onChange={e => setName(e.target.value)} ref={nameRef} />
              </div>
            </div>

            <div className="row">
              <div className="col-25"><label className='label-left'>Fecha de nacimiento</label></div>
              <div className="col-75">
                {/* <input type="date" className="input-right" required placeholder='Fecha Nacimiento'
                  value={birthDate} onChange={e => setBirthDate(e.target.value)} ref={birthDateRef} /> */}

                <DatePicker
                  ref={birthDateRef}
                  selected={birthDate}
                  onChange={value => setBirthDate(value)}
                  dateFormat="dd/MM/yyyy" />
              </div>
            </div>

            <div className="row">
              <div className="col-25"><label className='label-left'>Género</label></div>
              <div className="col-75">
                <select ref={genderRef} value={gender} onChange={e => setGender(e.target.value)}>
                  <option key="0" value="">-- Seleccione una opción --</option>
                  <option key="M" value="M">Masculino</option>
                  <option key="F" value="F">Femenino</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-25"><label className='label-left'>Tipo de Identificador</label></div>
              <div className="col-75">
                <select ref={id_identifier_typeRef} value={id_identifier_type} onChange={e => setId_identifier_type(e.target.value)}>
                  <option key="0" value="">-- Seleccione una opción --</option>
                  {identifier_type_elements.map((element) => {
                    return (
                      <option key={element._id} value={element._id}>
                        {element.name}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-25"><label className='label-left'>Número de Identificador</label></div>
              <div className="col-75">
                <input type="text" className="input-right" required placeholder='Número de Identificador'
                  value={identifier_number} onChange={e => setIdentifier_number(e.target.value)} ref={identifier_numberRef} />
              </div>
            </div>

            <div className="row">
              <div className="col-25"><label className='label-left'>País</label></div>
              <div className="col-75">
                <select ref={countryRef} value={id_country} onChange={e => setId_country(e.target.value)}>
                  <option key="0" value="">-- Seleccione una opción --</option>
                  {country_elements.map((element) => {
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
            <th></th>
            <th>Nombre</th>
            <th>Fecha nacimiento</th>
            <th>Género</th>
            <th>Tipo identificador</th>
            <th>Número identificador</th>
            <th>País</th>
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
            // const birthDate = getFormatedDate(new Date(element.birthDate))
            const birthDate = getFormatedDate_from_ISO_8601(new Date(element.birthDate))
            const updatedAt = getFormatedDateTime(new Date(element.updatedAt))
            return (
              <tr key={element._id} >
                <td>
                  <Link to={`/contactos/${element._id}?name=${element.name}`}>
                    <img src={imgNew} alt='see details' className='img-button' />
                  </Link>
                </td>
                <td>{element.name} </td>
                <td>{birthDate} </td>
                <td>{element.gender} </td>
                <td>{element.id_identifier_type.name} </td>
                <td>{element.identifier_number} </td>
                <td>{element.id_country.name} </td>
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
