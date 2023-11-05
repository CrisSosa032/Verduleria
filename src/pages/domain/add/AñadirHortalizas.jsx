import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'




const AñadirHortalizas = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState(0);
  const [foto, setFoto] = useState(null);

  const navigate = useNavigate()

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crea un objeto FormData para enviar los datos del formulario
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('descripcion', descripcion);
    formData.append('precio', precio);
    formData.append('foto', foto);

    try {
      // Realiza una solicitud POST a la API para cargar los datos
      const response = await axios.post('http://localhost:8800/hortalizas', formData);
      console.log(response.data); // Respuesta del servidor

      // Restablece los valores del formulario después de la carga exitosa
      navigate("/hortalizas")
      
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <form className='form' onSubmit={handleSubmit}>
        {/* Aquí puedes crear los campos del formulario */}
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="text" placeholder="Descripción" value={descripcion}  onChange={(e) => setDescripcion(e.target.value)} />
        <input type="number" placeholder="Precio" value={precio}  onChange={(e) => setPrecio(e.target.value)} />
        <input type="file"  onChange={(e) => setFoto(e.target.files[0])} />

        <button className='formButton' type="submit">Cargar datos</button>
    </form>
  )
}

export default AñadirHortalizas