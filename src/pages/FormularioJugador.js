import React, { useEffect, useState, useRef } from 'react'

import imgEdit from '../img/edit.png'
import imgDelete from '../img/delete.png'
import imgCancel from '../img/cancel.png'
import imgOk from '../img/ok.png'
import Spinner from '../components/Spinner'

import * as XLSX from 'xlsx'
import { links } from '../utils/links'
import { useNavigate } from 'react-router-dom'
const { getFormatedDateTime, mostrarError, mostrarConfirmarCancelar, getDecodedToken } = require('../utils/utils')

export default function Page(props) {
  const this_url = process.env.REACT_APP_SERVER + props.link
  const person_url = process.env.REACT_APP_SERVER + links.PERSONAS
  const club_url = process.env.REACT_APP_SERVER + links.CLUBES

  const [isLoading, setIsLoading] = useState(true)

  const [titulo, setTitulo] = useState('Insertar nuevo registro')
  const [elements, setElements] = useState([])
  const [club_elements, setClub_elements] = useState([])

  const [editID, setEditID] = useState(0)
  const [year, setYear] = useState(new Date().getFullYear())
  const [id_person, setId_person] = useState('')
  const [id_club, setId_club] = useState('')

  const id_clubRef = useRef(null)
  const identifier_numberRef = useRef(null)

  const [identifier_number, setIdentifier_number] = useState('')
  const [person_name, setPerson_name] = useState('')

  const navigate = useNavigate()
  useEffect(() => {
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
    try {
      const res1 = await fetch(this_url, {
        headers: { Authorization: localStorage.getItem('token') }
      })
      const data1 = await res1.json()
      setElements(data1)
    } catch (error) {
      mostrarError(error)
    }

    try {
      const res2 = await fetch(club_url, {
        headers: { Authorization: localStorage.getItem('token') }
      })
      const data2 = await res2.json()
      setClub_elements(data2)
    } catch (error) {
      mostrarError(error)
    }

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

    const newDocument = {
      year,
      id_person,
      id_club,
    }

    try {
      const response = await fetch(this_url + (editID === 0 ? '' : editID), {
        method: editID === 0 ? 'POST' : 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(newDocument)
      })

      if (!response.ok) throw new Error('Error en la operación')
      window.location.reload()
    } catch (error) {
      mostrarError(error)
    }
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
        try {
          const response = await fetch(this_url + _id, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              Authorization: localStorage.getItem('token')
            },
            body: JSON.stringify({ archived: true })
          })

          if (!response.ok) throw new Error('Error al eliminar')
          window.location.reload()
        } catch (error) {
          mostrarError(error)
        }
      }
    })
  }

  async function onBlur_identifier_number() {
    setId_person('')
    setPerson_name('')
    if (identifier_number.trim() === '') return

    try {
      const res = await fetch(person_url + 'get_one_by_identifier_number?' + new URLSearchParams({ identifier_number }), {
        headers: { Authorization: localStorage.getItem('token') }
      })
      const data = await res.json()

      if (data.encontrado === false) {
        setPerson_name('No existe el registro')
        return
      }

      setId_person(data._id)
      setPerson_name(data.name)
    } catch (error) {
      mostrarError(error)
    }
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
              {elements.length !== 0 &&
                <button className="btn-green" onClick={exportToXLSX}>Exportar XLSX</button>
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
                <td>{element.id_club?.name} </td>
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