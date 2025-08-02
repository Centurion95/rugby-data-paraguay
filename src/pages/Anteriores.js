import React, { useEffect, useState } from 'react'

import FrmFecha from '../components/FrmFecha'
import Spinner from '../components/Spinner'
import { links } from '../utils/links'

const { insertWebVisit } = require('../utils/utils')

export default function Page() {
  const [year, setYear] = useState(new Date().getFullYear() - 1)
  const [isLoading, setIsLoading] = useState(true)
  const [elements, setElements] = useState([])
  const [torneo_id, setTorneo_id] = useState('')
  const [torneo_nombre, setTorneo_nombre] = useState('')
  const [arrayFechas, setArrayFechas] = useState([])

  useEffect(() => {
    console.log('*** useEffect() - torneosAnteriores')
    insertWebVisit(2)
    fetchData()
  }, [])

  useEffect(() => {
    if (year) {
      console.log('*** useEffect() - torneosAnteriores - year', year)
      fetchData()
    }
  }, [year])

  useEffect(() => {
    if (torneo_id) {
      console.log('*** useEffect() - torneosAnteriores - torneo_id', torneo_id)
      fetchData_matches()
    }
  }, [torneo_id])

  async function fetchData() {
    try {
      setIsLoading(true)
      const url = process.env.REACT_APP_SERVER + links.TORNEOS_BY_YEAR + year
      const response = await fetch(url)
      const data = await response.json()

      setElements(data)

      if (data.length > 0) {
        setTorneo_id(data[0]._id)
        setTorneo_nombre(data[0].name)
      }
    } catch (error) {
      console.error('Error al obtener torneos anteriores:', error)
    } finally {
      setIsLoading(false)
    }
  }

  async function fetchData_matches() {
    try {
      setIsLoading(true)
      const url = process.env.REACT_APP_SERVER + links.TORNEO_DETALLES + `?id_tournament=${encodeURIComponent(torneo_id)}`
      const response = await fetch(url)
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
      console.error('Error al obtener detalles del torneo:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleYearChange = (event) => {
    setYear(Number(event.target.value))
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

      <h1>Torneos anteriores</h1>

      <div className="row">
        <div className="col-25"><label>Seleccione el año</label></div>
        <div className="col-75">
          <select value={year} onChange={handleYearChange}>
            {[1, 2, 3].map(offset => {
              const y = new Date().getFullYear() - offset
              return <option key={y} value={y}>{y}</option>
            })}
          </select>
        </div>
      </div>

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