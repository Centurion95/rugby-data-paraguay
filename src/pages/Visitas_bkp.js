import Axios from 'axios'
import React, { useEffect, useState } from 'react'

import Spinner from '../components/Spinner'
import { links } from '../utils/links'

import LineChart from '../components/LineChart'

function Page() {
  const this_url = process.env.REACT_APP_SERVER + links.VISITAS
  const [isLoading, setIsLoading] = useState(true)
  const [elements, setElements] = useState([])

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
  }, [])

  async function fetchData() {
    setIsLoading(true)

    await Axios.get(this_url)
      .then((response) => {
        console.table(response.data)
        setElements(response.data)

        const myArray = []
        myArray.push({
          label: 'Visitas',
          data: response.data.map((subrow) => subrow.cantidad)
        })
        setData({
          labels: response.data.map((row) => row.fecha),
          datasets: myArray
        })
      })
    setIsLoading(false)
  }

  return (
    <div>
      {isLoading && <Spinner />}

      <h1>Reporte de Visitas</h1>
      <div className="container-c">
        <p><u>Reporte</u></p>
        {elements.length > 0 &&
          <LineChart chartData={data} />
        }
      </div>
      <br />

    </div>
  )
}

export default Page