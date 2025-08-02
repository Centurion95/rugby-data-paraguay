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
    try {
      setIsLoading(true)
      const response = await fetch(this_url)
      const allData = await response.json()
      setElements(allData)

      const filteredData = allData.filter(row => {
        const year = new Date(row.fecha).getFullYear()
        return year === selectedYear
      })

      const chartData = {
        labels: filteredData.map((row) => row.fecha),
        datasets: [{
          label: `Visitas ${selectedYear}`,
          data: filteredData.map((row) => row.cantidad)
        }]
      }

      setData(chartData)
    } catch (error) {
      console.error('Error al obtener visitas:', error)
    } finally {
      setIsLoading(false)
    }
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
          {[...Array(5)].map((_, i) => {
            const year = new Date().getFullYear() - i
            return <option key={year} value={year}>{year}</option>
          })}
        </select>

        <p><u>Reporte</u></p>
        {elements.length > 0 && <LineChart chartData={data} />}
      </div>
      <br />
    </div>
  )
}