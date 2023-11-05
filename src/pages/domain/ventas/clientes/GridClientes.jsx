import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'

function GridClientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    obtenerClientes();
  }, []);

  const obtenerClientes = async () => {
    try {
      const response = await axios.get('http://localhost:8800/clientes');
      setClientes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div  className='grid'>
      <h1>Tabla de Clientes</h1>
      <table >
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>DNI</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.nombre}</td>
              <td>{cliente.apellido}</td>
              <td>{cliente.dni}</td>
              <td>{cliente.tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GridClientes;