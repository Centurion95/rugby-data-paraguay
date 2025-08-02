import React, { useEffect, useState } from 'react'

import FrmFecha from '../components/FrmFecha'
import Spinner from '../components/Spinner'
import { links } from '../utils/links'
const { insertWebVisit } = require('../utils/utils')

export default function Page() {
  const this_url = process.env.REACT_APP_SERVER + links.TORNEOS_BY_YEAR + new Date().getFullYear()
  const [isLoading, setIsLoading] = useState(true)
  const [elements, setElements] = useState([])

  const [torneo_id, setTorneo_id] = useState('')
  const [torneo_nombre, setTorneo_nombre] = useState('')
  const [arrayFechas, setArrayFechas] = useState([])

  useEffect(() => {
    console.log('*** useEffect() - HOME')
    insertWebVisit(1)
    fetchData()
  }, [])

  async function fetchData() {
    try {
      setIsLoading(true)
      const response = await fetch(this_url)
      const data = await response.json()

      setElements(data)

      if (data.length > 0) {
        setTorneo_id(data[0]._id)
        setTorneo_nombre(data[0].name)
      }
    } catch (error) {
      console.error('Error al obtener los torneos:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (torneo_id) {
      console.log('*** useEffect() - torneo_id', torneo_id)
      fetchData_matches()
    }
  }, [torneo_id])

  async function fetchData_matches() {
    try {
      setIsLoading(true)

      const this_url = process.env.REACT_APP_SERVER + links.TORNEO_DETALLES
      const urlWithParams = `${this_url}?id_tournament=${encodeURIComponent(torneo_id)}`
      const response = await fetch(urlWithParams)
      const matches = await response.json()

      const fechas = {}
      matches.forEach(obj => {
        if (!fechas[obj.round]) {
          fechas[obj.round] = []
        }
        fechas[obj.round].push(obj)
      })

      setArrayFechas(Object.values(fechas))
    } catch (error) {
      console.error('Error al obtener los detalles del torneo:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (event) => {
    const selectedId = event.target.value
    setTorneo_id(selectedId)
    const selectedItem = elements.find(item => item._id === selectedId)
    setTorneo_nombre(selectedItem?.name)
  }

  return (
    <div>
      {isLoading && <Spinner />}

      <h1>Torneos en curso</h1>

      <div className="row">
        <div className="col-25">
          <label>Seleccione el torneo</label>
        </div>
        <div className="col-75">
          <select value={torneo_id} onChange={handleInputChange}>
            {elements.map((element) => (
              <option key={element._id} value={element._id}>
                {element.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="container-c">
        <p><u>Fechas del torneo</u></p>
        {arrayFechas.length > 0 ? (
          arrayFechas.map((fecha, index) => (
            <FrmFecha key={index} division={torneo_nombre} fecha={"Fecha " + fecha[0].round} matches={fecha} />
          ))
        ) : (
          <label>No se encontraron resultados..</label>
        )}
      </div>
      <br />
    </div>
  )
}