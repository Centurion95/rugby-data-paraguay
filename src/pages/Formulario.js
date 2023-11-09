import Axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import imgNew from '../img/new.png'
import imgEdit from '../img/edit.png'
import imgDelete from '../img/delete.png'
import imgCancel from '../img/cancel.png'
import imgOk from '../img/ok.png'
import Spinner from '../components/Spinner'

import * as XLSX from 'xlsx'
// import MUIDataTable from "mui-datatables"

const { getFormatedDateTime, mostrarError, mostrarConfirmarCancelar, getDecodedToken } = require('../utils/utils')

function Page(props) {
  const this_url = process.env.REACT_APP_SERVER + props.link
  const fk_url = props.fk_link && process.env.REACT_APP_SERVER + props.fk_link

  const [isLoading, setIsLoading] = useState(true)

  const [titulo, setTitulo] = useState('Insertar nuevo registro')
  const [elements, setElements] = useState([])
  const [fk_elements, setFk_Elements] = useState([])

  const [editID, setEditID] = useState(0)
  const [year, setYear] = useState(new Date().getFullYear())
  const [name, setName] = useState('')
  const [order_number, setOrder_number] = useState(0) //rc95 08/09/2023 21:01
  const [fkID, setFkID] = useState(0)

  const nameRef = useRef(null)
  const fkRef = useRef(null)

  const navigate = useNavigate()
  useEffect(() => {
    //rc95 08/09/2023 22:59 - si no es admin, redirigimos al LOGIN
    const es_admin = getDecodedToken()?.es_admin
    if (!es_admin) {
      navigate('/login')
      window.location.reload()
      return
    }

    console.table('*** useEffect - Formulario')
    fetchData()
  }, [])

  async function fetchData() {
    await Axios.get(this_url, {
      headers: { Authorization: localStorage.getItem('token') }
    })
      .then((response) => {
        // console.table(response.data)
        setElements(response.data)

        // console.log(response.data)
        // const keys = Object.keys(response.data[0])
        // console.log(keys)

        const elementsToRemove = ['_id', 'archived', 'archivedAt', 'updatedAt', '__v'
          , 'id_continent']

        setColumns(Object.keys(response.data[0])
          .filter(item => !elementsToRemove.includes(item))
          .concat({
            name: "acciones",
            options: {
              customBodyRenderLite: (dataIndex, rowIndex) => {
                return (
                  <>
                    <img src={imgEdit} alt='edit' className='img-button'
                      onClick={() => { editElement(response.data[dataIndex]) }} />
                    <img src={imgDelete} alt='delete' className='img-button margin-left-10'
                      onClick={() => { deleteFunction(response.data[dataIndex]) }} />
                  </>
                )
              }
            },
          })
          .concat({
            name: "id_continent.name",
          })
        )
      })
      .catch((error) => mostrarError(error))


    if (fk_url) {
      await Axios.get(fk_url, {
        headers: { Authorization: localStorage.getItem('token') }
      })
        .then((response) => {
          // console.table(response.data)
          setFk_Elements(response.data)
        })
        .catch((error) => mostrarError(error))
    }
    setIsLoading(false)
  }

  function editElement(element) {
    setTitulo('Editar un registro')

    setEditID(element._id)
    setYear(element.year)
    setName(element.name)
    setOrder_number(element.order_number)

    if (element.id_continent?.name !== undefined) {
      setFkID(element.id_continent._id)
    } else if (element.id_country?.name !== undefined) {
      setFkID(element.id_country._id)
    } else if (element.id_state?.name !== undefined) {
      setFkID(element.id_state._id)
    } else if (element.id_city?.name !== undefined) {
      setFkID(element.id_city._id)
    } else if (element.id_owner?.name !== undefined) {
      setFkID(element.id_owner._id)
    } else {
      setFkID(0)
    }

    nameRef.current.focus()
  }

  const insertFunction = async () => {
    if (name.trim() === '') {
      nameRef.current.focus()
      return mostrarError(`Debe ingresar el nombre!`)
    }

    if (fk_elements.length > 0 && fkID === 0) {
      fkRef.current.focus()
      return mostrarError(`Debe seleccionar el ${props.fk_titulo}!`)
    }

    if (editID === 0) { //insert
      const newDocument = {
        name,
        fk_id: fkID ?? null,
        year: year ?? null,
        order_number: order_number ?? null,
      }
      // await Axios.post(this_url, newDocument) 
      //rc95 09/11/2023 00:36 - agregamos headers
      await Axios.post(this_url, newDocument, {
        headers: { Authorization: localStorage.getItem('token') }
      })
        .catch((error) => mostrarError(error))
    } else { //update
      // await Axios.patch(this_url + editID, {
      //   name,
      //   fk_id: fkID || undefined,
      //   year: year || undefined,
      //   order_number: order_number || undefined,
      // })
      //rc95 09/11/2023 00:36 - agregamos headers
      await Axios.patch(this_url + editID, {
        name,
        fk_id: fkID || undefined,
        year: year || undefined,
        order_number: order_number || undefined,
      }, {
        headers: { Authorization: localStorage.getItem('token') }
      })
        .catch((error) => mostrarError(error))
    }
    window.location.reload()
  }

  const cancelFunction = async () => {
    setTitulo('Insertar nuevo registro')
    setEditID(0)
    setYear(new Date().getFullYear())
    setName('')
    setOrder_number(0)
    setFkID(0)
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


  const [columns, setColumns] = useState([])

  const options = {
    responsive: 'standard',
    tableBodyHeight: 'auto',
    tableBodyMaxHeight: '100%',

    customToolbarSelect: (selectedRows, displayData, setSelectedRows) => (
      <>
        <img src={imgDelete} alt='delete all' className='img-button margin-right-10'
          onClick={() => {
            if (window.confirm(`Are you sure you want to DELETE ${selectedRows.data.length} document(s)?`)) {
              // Realiza alguna acción personalizada con los datos seleccionados
              console.log(selectedRows)

              selectedRows.data.forEach(element => {
                console.log(element)
                // deleteFunction(response.data[element.dataIndex])
              })

              setSelectedRows([])
            }
          }}
        />
      </>
    ),
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

            {props.pedirYear &&
              <>
                <div className="row">
                  <div className="col-25"><label>Año</label></div>
                  <div className="col-75">
                    <select value={year} onChange={e => setYear(e.target.value)}>
                      {[
                        new Date().getFullYear(),
                        new Date().getFullYear() + 1,
                        new Date().getFullYear() - 1,
                        new Date().getFullYear() - 2,
                        new Date().getFullYear() - 3,].map((element) => {
                          return (<option key={element} value={element}>{element}</option>)
                        })}
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-25"><label className='label-left'>Nro torneo</label></div>
                  <div className="col-75">
                    <input type="number" min="0" max="100" className="input-right" required placeholder='Nro partido'
                      value={order_number} onChange={e => setOrder_number(e.target.value)} />
                  </div>
                </div>
              </>
            }

            <div className="row">
              <div className="col-25"><label className='label-left'>Name</label></div>
              <div className="col-75">
                <input type="text" className="input-right" required placeholder='Nombre'
                  value={name} onChange={e => setName(e.target.value)} ref={nameRef} />
              </div>
            </div>

            {fk_elements.length > 0 &&
              <div className="row">
                <div className="col-25"><label className='label-left'>{props.fk_titulo}</label></div>
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
            }

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
            {props.pedirYear && <><th></th><th>Año</th><th>#</th></>}
            <th>Nombre</th>
            <th>Fecha creación</th>
            <th>{props.fk_titulo}</th>
            <th colSpan={2}>
              {elements.length !== 0
                && <button className="btn-green" onClick={exportToXLSX}>Exportar XLSX</button>
              }
            </th>
          </tr>
        </thead>
        <tbody>
          {elements.map((element) => {
            const updatedAt = getFormatedDateTime(new Date(element.updatedAt))
            return (
              <tr key={element._id} >
                {props.pedirYear &&
                  <>
                    <td>
                      <Link to={`/torneos/${element._id}`}>
                        <img src={imgNew} alt='see details' className='img-button' />
                      </Link>
                    </td>
                    <td>{element.year} </td>
                    <td>{element.order_number} </td>
                  </>}
                <td>{element.name} </td>
                <td>{updatedAt} </td>
                <td>
                  {element.id_continent?.name}
                  {element.id_country?.name}
                  {element.id_state?.name}
                  {element.id_city?.name}
                  {element.id_owner?.name}
                </td>
                <td>
                  <img src={imgEdit} alt='edit' className='img-button'
                    onClick={() => { editElement(element) }} />
                </td>
                <td>
                  <img src={imgDelete} alt='delete' className='img-button'
                    onClick={() => { deleteFunction(element._id) }} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>


      {/* <MUIDataTable
      title={"Registros en la base de datos"}
      data={elements}
      columns={columns}
      options={options}
      /> */}

    </div>
  )
}

export default Page
