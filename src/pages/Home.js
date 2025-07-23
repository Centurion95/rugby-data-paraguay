import Axios from 'axios'
import React, { useEffect, useState } from 'react'

import FrmFecha from '../components/FrmFecha'
import Spinner from '../components/Spinner'
import { links } from '../utils/links'
const { insertWebVisit } = require('../utils/utils')

export default function Page() {
  const this_url = process.env.REACT_APP_SERVER + links.TORNEOS_BY_YEAR + new Date().getFullYear()
  const [isLoading, setIsLoading] = useState(true)
  const [elements, setElements] = useState([])

  useEffect(() => {
    console.log('*** useEffect() - HOME')
    insertWebVisit(1)
    fetchData()
  }, [])

  async function fetchData() {
    setIsLoading(true)

    await Axios.get(this_url)
      .then((response) => {
        setElements(response.data)

        //seleccionamos el 1er torneo..
        setTorneo_id(response.data[0]._id)
        setTorneo_nombre(response.data[0].name)
      })
    setIsLoading(false)
  }

  const [torneo_id, setTorneo_id] = useState('')
  const [torneo_nombre, setTorneo_nombre] = useState('')
  useEffect(() => {
    if (torneo_id) {
      console.log('*** useEffect() - torneo_id', torneo_id)
      fetchData_matches()
    }
  }, [torneo_id])

  const [arrayFechas, setArrayFechas] = useState([])

  async function fetchData_matches() {
    const this_url = process.env.REACT_APP_SERVER + links.TORNEO_DETALLES
    setIsLoading(true)

    await Axios.get(this_url, {
      params: { id_tournament: torneo_id }
    })
      .then((response) => {
        const matches = response.data
        const fechas = {}

        matches.forEach(obj => {
          if (!fechas[obj.round]) {
            fechas[obj.round] = []
          }
          fechas[obj.round].push(obj)
        })

        setArrayFechas(Object.values(fechas))
      })

    setIsLoading(false)
  }

  const handleInputChange = (event) => {
    setTorneo_id(event.target.value)
    const selectedItem = elements.find(item => item._id === event.target.value)
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
            {elements.length > 0 &&
              <>
                {elements.map((element) => {
                  return (
                    <option key={element._id} value={element._id}>
                      {element.name}
                    </option>
                  )
                })}
              </>
            }
          </select>
        </div>
      </div>

      <div className="container-c">
        <p><u>Fechas del torneo</u></p>
        {arrayFechas.length > 0 ?
          <>
            {arrayFechas.map((fecha, index) => {
              return (
                <FrmFecha key={index} division={torneo_nombre} fecha={"Fecha " + fecha[0].round} matches={fecha} />
              )
            })}
          </>
          : <label>No se encontraron resultados..</label>
        }
      </div>
      <br />

    </div>
  )
}