import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'

import imgEdit from '../img/edit.png'
import imgDelete from '../img/delete.png'
import imgCancel from '../img/cancel.png'
import imgOk from '../img/ok.png'
import Spinner from '../components/Spinner'

import * as XLSX from 'xlsx'

import { links } from '../utils/links'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'
registerLocale('es', es)
setDefaultLocale('es')

const { getFormatedDateTime, mostrarError, mostrarConfirmarCancelar, getDecodedToken } = require('../utils/utils')
export default function Page() {
  const { id_tournament } = useParams()

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const name = searchParams.get('name')

  const this_url = process.env.REACT_APP_SERVER + links.TORNEO_DETALLES
  const estadio_url = process.env.REACT_APP_SERVER + links.ESTADIOS
  const club_url = process.env.REACT_APP_SERVER + links.CLUBES

  const [isLoading, setIsLoading] = useState(true)

  const [titulo, setTitulo] = useState('Insertar nuevo registro')
  const [elements, setElements] = useState([])
  const [estadio_elements, setEstadio_elements] = useState([])
  const [club_elements, setClub_elements] = useState([])

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

    roundRef.current.focus()
  }, [])

  async function fetchData() {
    try {
      const resPartidos = await fetch(`${this_url}?id_tournament=${encodeURIComponent(id_tournament)}`)
      const partidos = await resPartidos.json()
      setElements(partidos)

      const resEstadios = await fetch(estadio_url, {
        headers: { Authorization: localStorage.getItem('token') }
      })
      const estadios = await resEstadios.json()
      setEstadio_elements(estadios)

      const resClubes = await fetch(club_url, {
        headers: { Authorization: localStorage.getItem('token') }
      })
      const clubes = await resClubes.json()
      setClub_elements(clubes)

    } catch (error) {
      mostrarError(error)
    } finally {
      setIsLoading(false)
    }
  }


  function editElement(element) {
    setTitulo('Editar un registro')

    setEditID(element._id)
    setRound(element.round)
    setOrder_number(element.order_number)
    setId_stadium(element.id_stadium?._id || '')
    setDate(element.date && new Date(element.date))
    setId_local_team(element.id_local_team._id)
    setId_visiting_team(element.id_visiting_team._id)
    setLocal_team_final_score(element.local_team_final_score)
    setVisiting_team_final_score(element.visiting_team_final_score)

    order_numberRef.current.focus()
  }

  const insertFunction = async () => {
    if (Number(round) < 1) return mostrarError(`Debe ingresar la fecha!`)
    if (Number(order_number) < 1) return mostrarError(`Debe ingresar el numero de partido!`)
    if (id_local_team.trim() === '') return mostrarError(`Debe seleccionar el equipo local!`)
    if (id_visiting_team.trim() === '') return mostrarError(`Debe seleccionar el equipo visitante!`)

    const payload = {
      id_tournament,
      round,
      order_number,
      id_stadium,
      id_local_team,
      id_visiting_team,
      date,
      local_team_final_score,
      visiting_team_final_score,
    }

    try {
      if (editID === 0) {
        await fetch(this_url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })
      } else {
        await fetch(`${this_url}${editID}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })
      }
      window.location.reload()
    } catch (error) {
      mostrarError(error)
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
        try {
          await fetch(`${this_url}${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ archived: true })
          })
          window.location.reload()
        } catch (error) {
          mostrarError(error)
        }
      }
    })
  }


  const exportToXLSX = () => {
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(elements)
    XLSX.utils.book_append_sheet(wb, ws, "Hoja1")
    XLSX.writeFile(wb, id_tournament + ".xlsx")
  }

  const nroFecha_onBlur = () => {
    setOrder_number(elements.length + 1)
  }

  return (
    <div className="center">
      {isLoading && <Spinner />}

      <h1>Detalles del torneo</h1>
      <h4>{name}</h4>

      <div className="container-c">
        <h2>{titulo}</h2>

        <form onSubmit={null}>
          <div className="container-c center">

            <div className="row">
              <div className="col-25"><label className='label-left'>Nro Fecha</label></div>
              <div className="col-75">
                <input type="number" min="0" max="100" className="input-right" required placeholder='Nro partido'
                  value={round} onChange={e => setRound(e.target.value)} ref={roundRef}
                  onBlur={nroFecha_onBlur} />
              </div>
            </div>

            <div className="row">
              <div className="col-25"><label className='label-left'>Nro partido</label></div>
              <div className="col-75">
                <input type="number" min="0" max="100" className="input-right" required placeholder='Nro partido'
                  value={order_number} onChange={e => setOrder_number(e.target.value)} ref={order_numberRef} />
              </div>
            </div>

            <div className="row">
              <div className="col-25"><label>Estadio</label></div>
              <div className="col-75">
                <select ref={id_stadiumRef} value={id_stadium} onChange={e => setId_stadium(e.target.value)}>
                  <option key="0" value="">-- Seleccione una opción --</option>
                  {estadio_elements.map((element) => {
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
              <div className="col-25"><label className='label-left'>Fecha</label></div>
              <div className="col-75">
                <DatePicker
                  ref={dateRef}
                  selected={date}
                  onChange={value => setDate(value)}
                  showTimeSelect
                  dateFormat="dd/MM/yyyy HH:mm"
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="Time" />
              </div>
            </div>

            <div className="row">
              <div className="col-25"><label>Equipo Local</label></div>
              <div className="col-75">
                <select ref={id_local_teamRef} value={id_local_team} onChange={e => setId_local_team(e.target.value)}>
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

            <div className="row">
              <div className="col-25"><label>Equipo Visitante</label></div>
              <div className="col-75">
                <select ref={id_visiting_teamRef} value={id_visiting_team} onChange={e => setId_visiting_team(e.target.value)}>
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

            <div className="row">
              <div className="col-25"><label className='label-left'>Marcador local</label></div>
              <div className="col-75">
                <input type="number" min="0" max="300" className="input-right" required placeholder='Marcador local'
                  value={local_team_final_score} onChange={e => setLocal_team_final_score(e.target.value)} ref={local_team_final_scoreRef} />
              </div>
            </div>

            <div className="row">
              <div className="col-25"><label className='label-left'>Marcador visitante</label></div>
              <div className="col-75">
                <input type="number" min="0" max="300" className="input-right" required placeholder='Marcador visitante'
                  value={visiting_team_final_score} onChange={e => setVisiting_team_final_score(e.target.value)} ref={visiting_team_final_scoreRef} />
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
            <th>Fecha</th>
            <th>#</th>
            <th>Estadio</th>
            <th>Fecha - Hora</th>
            <th>Local</th>
            <th>Visitante</th>
            <th>Resultado</th>
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
              const date = element.date && getFormatedDateTime(new Date(element.date)).slice(0, -3)
              return (
                <tr key={element._id} >
                  <td>{element.round} </td>
                  <td>{element.order_number} </td>
                  <td>{element.id_stadium?.name}</td>
                  <td>{date} </td>

                  <td className={
                    element.local_team_final_score === 0 && element.visiting_team_final_score === 0
                      ? ""
                      : element.local_team_final_score > element.visiting_team_final_score
                        ? "bgGreen"
                        : element.local_team_final_score === element.visiting_team_final_score
                          ? "bgLightGreen"
                          : element.local_team_final_score === -1
                            ? "bgRed"
                            : undefined}>
                    {element.id_local_team.name}
                  </td>

                  <td className={
                    element.local_team_final_score === 0 && element.visiting_team_final_score === 0
                      ? ""
                      : element.local_team_final_score < element.visiting_team_final_score
                        ? "bgGreen"
                        : element.local_team_final_score === element.visiting_team_final_score
                          ? "bgLightGreen"
                          : element.visiting_team_final_score === -1
                            ? "bgRed"
                            : undefined}>
                    {element.id_visiting_team.name}
                  </td>

                  <td>{element.local_team_final_score} - {element.visiting_team_final_score}</td>
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