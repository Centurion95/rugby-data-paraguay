import React, { useState } from 'react';
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom';
import { getDecodedToken } from '../utils/utils'
// import { useAuth } from "../context/AuthContext";
import CryptoJS from 'crypto-js'

export default function CambiarPassword() {
  const decoded = getDecodedToken()
  // if (decoded) {
  //   console.log('decoded:', decoded);
  // }

  const navigate = useNavigate();
  // const { logged_user } = useAuth();
  const headers = {
    Authorization: localStorage.getItem('token'),
    'Content-Type': 'application/json',
  }

  const username = decoded.username;
  const [passwordActual, setActual] = useState('');
  const [passwordNueva, setNueva] = useState('');
  const [passwordNuevaConfirmacion, setConfirmacion] = useState('');

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordNueva !== passwordNuevaConfirmacion) {
      alert("La nueva contraseña y su confirmación no coinciden.");
      return;
    }

    setIsLoading(true)
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}login/${decoded._id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify({
          username,
          passwordActual: CryptoJS.SHA256(passwordActual).toString(CryptoJS.enc.Hex),
          passwordNueva: CryptoJS.SHA256(passwordNueva).toString(CryptoJS.enc.Hex),
        }),
      });

      // const url = `${import.meta.env.VITE_REACT_APP_SERVER}usuario/${logged_user.usuario._id}`;
      // const response = await fetch(url, {
      //   method: 'PUT',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${logged_user.token}`
      //   },
      //   body: JSON.stringify({
      //     email,
      //     passwordActual,
      //     passwordNueva,
      //   }),
      // });

      if (response.ok) {
        alert("Contraseña cambiada correctamente!");
        navigate("/");
      } else {
        const err = await response.json();
        alert("Error al insertar el registro: " + err.error);
      }
    } catch (err) {
      console.error("Error al conectar con el servidor:", err);
      alert("Error de conexión con el servidor");
    }
    setIsLoading(false)

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-fondo)] px-4">
      {isLoading && <Spinner />}
      <div className="container-c">

        {/* Ícono */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Cambiar Contraseña</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}

          <div className="row">
            <div className="col-25"><label className='label-left'>Usuario*</label></div>
            <div className="col-75">
              <input type="text" className="input-right" required placeholder='Username'
                value={username} readOnly />
            </div>
          </div>

          <div className="row">
            <div className="col-25"><label className='label-left'>Contraseña actual*</label></div>
            <div className="col-75">
              <input type="password" className="input-right" required
                value={passwordActual} onChange={(e) => setActual(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="col-25"><label className='label-left'>Nueva contraseña*</label></div>
            <div className="col-75">
              <input type="password" className="input-right" required
                value={passwordNueva} onChange={(e) => setNueva(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="col-25"><label className='label-left'>Confirmar nueva contraseña*</label></div>
            <div className="col-75">
              <input type="password" className="input-right" required
                value={passwordNuevaConfirmacion} onChange={(e) => setConfirmacion(e.target.value)} />
            </div>
          </div>

          <div className="right">
            <button className="btn-green" type="submit">Cambiar contraseña</button>
          </div>

        </form>
      </div>
    </div>
  );
}