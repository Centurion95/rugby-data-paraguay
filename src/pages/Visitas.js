import Axios from 'axios'
import React, { useEffect, useState } from 'react'

import Spinner from '../components/Spinner'
import { links } from '../utils/links'

import LineChart from '../components/LineChart'
export default function Page() {
  const this_url = process.env.REACT_APP_SERVER + links.VISITAS
  const [isLoading, setIsLoading] = useState(true)
  const [elements, setElements] = useState([])
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

  const emptyChartProps = {
    labels: ['Cargando..'],
    datasets: [{
      label: '',
      data: []
    }]
  }
  const [data, setData] = useState(emptyChartProps)

  useEffect(() => {
    console.log('*** useEffect() - VISITAS')
    fetchData()
  }, [selectedYear])

  async function fetchData() {
    setIsLoading(true)

    await Axios.get(this_url)
      .then((response) => {
        setElements(response.data)

        const filteredData = response.data.filter(row => {
          const year = new Date(row.fecha).getFullYear()
          return year === selectedYear
        })

        const myArray = []
        myArray.push({
          label: `Visitas ${selectedYear}`,
          data: filteredData.map((subrow) => subrow.cantidad)
        })
        setData({
          labels: filteredData.map((row) => row.fecha),
          datasets: myArray
        })
      })
    setIsLoading(false)
  }

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value))
  }

  return (
    <div>
      {isLoading && <Spinner />}

      <h1>Reporte de Visitas</h1>
      <div className="container-c">
        <label htmlFor="year-select">Seleccione el año: </label>
        <select id="year-select" value={selectedYear} onChange={handleYearChange}>
          {/* Genera una lista de años dinámicamente */}
          {[...new Array(5)].map((_, i) => {
            const year = new Date().getFullYear() - i
            return <option key={year} value={year}>{year}</option>
          })}
        </select>

        <p><u>Reporte</u></p>
        {elements.length > 0 &&
          <LineChart chartData={data} />
        }
      </div>
      <br />
    </div>
  )
}