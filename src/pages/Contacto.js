import { useNavigate, useParams, useLocation } from 'react-router-dom'
import Axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'

import imgEdit from '../img/edit.png'
import imgDelete from '../img/delete.png'
import imgCancel from '../img/cancel.png'
import imgOk from '../img/ok.png'
import Spinner from '../components/Spinner'

import * as XLSX from 'xlsx'

import { links } from '../utils/links'

const { getFormatedDateTime, mostrarError, mostrarConfirmarCancelar, getDecodedToken } = require('../utils/utils')

function Page() {
  const { id_owner } = useParams()

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const name = searchParams.get('name')

  const this_url = process.env.REACT_APP_SERVER + links.CONTACTOS
  const tipo_contacto_url = process.env.REACT_APP_SERVER + links.TIPO_CONTACTO

  const [isLoading, setIsLoading] = useState(true)

  const [titulo, setTitulo] = useState('Insertar nuevo registro')
  const [elements, setElements] = useState([])
  const [fk_elements, setFk_Elements] = useState([])

  const [value, setValue] = useState('')
  const [fkID, setFkID] = useState(0)

  const valueRef = useRef(null)
  const fkRef = useRef(null)


  const [editID, setEditID] = useState(0)
  const [round, setRound] = useState(0)
  const [order_number, setOrder_number] = useState(0)
  const [id_stadium, setId_stadium] = useState('')
  const [date, setDate] = useState('')
  const [id_local_team, setId_local_team] = useState('')
  const [id_visiting_team, setId_visiting_team] = useState('')
  const [local_team_final_score, setLocal_team_final_score] = useState(0)
  const [visiting_team_final_score, setVisiting_team_final_score] = useState(0)

  const roundRef = useRef(null)
  const order_numberRef = useRef(null)
  const id_stadiumRef = useRef(null)
  const dateRef = useRef(null)
  const id_local_teamRef = useRef(null)
  const id_visiting_teamRef = useRef(null)
  const local_team_final_scoreRef = useRef(null)
  const visiting_team_final_scoreRef = useRef(null)

  const navigate = useNavigate()
  useEffect(() => {
    //si no es admin, redirigimos al LOGIN
    const es_admin = getDecodedToken()?.es_admin
    if (!es_admin) {
      navigate('/login')
      window.location.reload()
      return
    }

    console.table('*** useEffect - torneoDetalle')
    fetchData()

    valueRef.current.focus()
  }, [])

  async function fetchData() {
    await Axios.get(this_url, {
      params: { id_owner }
    }).then((response) => {
      setElements(response.data)
    }).catch((error) => mostrarError(error))

    await Axios.get(tipo_contacto_url, {
      headers: { Authorization: localStorage.getItem('token') }
    }).then((response) => {
      setFk_Elements(response.data)
    }).catch((error) => mostrarError(error))

    setIsLoading(false)
  }

  function editElement(element) {
    setTitulo('Editar un registro')

    setEditID(element._id)
    setValue(element.value)
    setFkID(element.id_contact_type?._id || '')

    valueRef.current.focus()
  }

  const insertFunction = async () => {
    if (value.trim() === '') {
      valueRef.current.focus()
      return mostrarError(`Debe ingresar el contacto!`)
    }

    if (fkID === 0) {
      fkRef.current.focus()
      return mostrarError(`Debe seleccionar el Tipo de contacto!`)
    }


    if (editID === 0) { //insert
      const newDocument = {
        id_owner,
        value,
        id_contact_type: fkID,
      }
      await Axios.post(this_url, newDocument)
        .then(() => window.location.reload())
        .catch((error) => mostrarError(error))

    } else { //update
      await Axios.patch(this_url + editID, {
        value,
        id_contact_type: fkID,
      })
        .then(() => window.location.reload())
        .catch((error) => mostrarError(error))
    }
  }

  const cancelFunction = async () => {
    setTitulo('Insertar nuevo registro')
    setEditID(0)
    setRound(0)
    setOrder_number(0)
    setId_stadium('')
    setDate('')
    setId_local_team('')
    setId_visiting_team('')
    setLocal_team_final_score(0)
    setVisiting_team_final_score(0)
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

  const exportToXLSX = () => {
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(elements)
    XLSX.utils.book_append_sheet(wb, ws, "Hoja1")
    XLSX.writeFile(wb, id_owner + ".xlsx")
  }

  return (
    <div className="center">
      {isLoading && <Spinner />}

      <h1>Contactos del registro</h1>
      <h4>{name}</h4>

      <div className="container-c">
        <h2>{titulo}</h2>

        <form onSubmit={null}>
          <div className="container-c center">

            <div className="row">
              <div className="col-25"><label className='label-left'>Value</label></div>
              <div className="col-75">
                <input type="text" className="input-right" required placeholder='Nombre'
                  value={value} onChange={e => setValue(e.target.value)} ref={valueRef} />
              </div>
            </div>

            <div className="row">
              <div className="col-25"><label className='label-left'>Tipo de contacto</label></div>
              <div className="col-75">
                <select ref={fkRef} value={fkID} onChange={e => setFkID(e.target.value)}>
                  <option key="0" value="0">Seleccione una opción</option>
                  {fk_elements.map((element) => {
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
            <th>Valor</th>
            <th>Fecha creación</th>
            <th>Tipo</th>
            <th colSpan={2}>
              {elements.length !== 0
                && <button className="btn-green" onClick={exportToXLSX}>Exportar XLSX</button>
              }
            </th>
          </tr>
        </thead>
        <tbody>
          {elements.length === 0
            ? <tr><td>No hay registros</td></tr>
            : elements.map((element) => {
              const updatedAt = getFormatedDateTime(new Date(element.updatedAt))
              return (
                <tr key={element._id} >
                  <td>{element.value} </td>
                  <td>{updatedAt} </td>
                  <td>{element.id_contact_type?.name}</td>

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