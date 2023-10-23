import Axios from 'axios'
import React, { useState } from 'react'
import Modal from 'react-modal'
import '../App.css'

import imgNew from '../img/new.png'
import imgCancel from '../img/cancel.png'
import imgOk from '../img/ok.png'

export default function FrmFormulario(props) {
  const this_url = process.env.REACT_APP_SERVER + process.env.REACT_APP_CONTINENTES

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  Modal.setAppElement('#root')

  const [modalIsOpen, setIsOpen] = useState(false)
  
  async function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {

  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModalForEdit() {
    setIsOpen(true)
  }

  const [name, setName] = useState(0)

  const insertFunction = async () => {
    const newDocument = { name }
    await Axios.post(this_url, newDocument)

    window.location.reload()
  }


  return (
    <>
      <img src={imgNew} alt='delete' className='img-button'
        onClick={openModal} />

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="container-c col-md-6 mt-4">
          <h1>{props.titulo}</h1>
          <form onSubmit={insertFunction}>
            <div className="center">
              <div className="columns">
                <label className='label-left'>Name</label>
                <input type="text" className="input-right" required placeholder='Title'
                  onChange={e => setName(e.target.value)} />
              </div>

            </div>
            <div className="right">
              <img src={imgCancel} alt='cancel' className='img-button'
                onClick={closeModal} />

              {/* <button type="submit" > */}
              <img src={imgOk} alt='ok' className='img-button'
                onClick={insertFunction} />
              {/* </button> */}

              {/* <button onClick={closeModal}>Cancel</button>
              <button type="submit" className="btn btn-primary">Save</button> */}
            </div>
          </form>

        </div >
      </Modal>

      
    </>
  )
}
