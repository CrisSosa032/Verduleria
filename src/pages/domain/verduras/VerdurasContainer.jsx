import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import  axios  from 'axios'
import { Link } from 'react-router-dom'
import "./stylev.css"

const styles = {
  borrar: {
    margin: '10px',
    padding: '15 30',
    width: '100px',
    height: '40px'

  },
  actualizar: {
    margin: '10px',
    padding: '15 30',
    width: '150px',
    height: '40px',
  },
  img: {
    height: '250px',
    width: '250px'
  },
  agregar: {
    borderRadius: '5px',
    width: '300px',
    height: '40px',
  }
}

const VerdurasContainer = () => {
  const [verduras, setVerduras] = useState([])

  useEffect (()=>{
    const fecthAllVerduras = async ()=>{
      try{
        const res = await axios.get ("http://localhost:8800/verduras")
        setVerduras(res.data)
        
        console.log(res)
      }catch(err){
        console.log(err)

      }
    }
    fecthAllVerduras()

  },[])

  const handleDelete = async (id)=>{
    try{
      await axios.delete("http://localhost:8800/verduras/" +id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }
  
  return (
    <div className='container'>
      <h1>VERDURAS</h1>
      <br />
      <div className="verduras">
        {verduras.map((verdura) => (
          <div className="verdura" key={verdura.id}>       
            <img style={styles.img} src={verdura.foto} alt={verdura.nombre} />
            <h2>{verdura.nombre}</h2>
            <p>{verdura.descripcion}</p>
            <span>{verdura.precio}</span>
            <br /> <br />
            <button style={styles.borrar} className='borrar' onClick={()=>handleDelete(verdura.id)}>Delete</button>
            <button style={styles.actualizar} className='actualizar'><Link to={`/updateverduras/${verdura.id}`}>Actualizar</Link></button>

          </div>
        ))}
      </div>
      <br />
      <button style={styles.agregar}>
        <Link to="/addVerduras">Agregar nueva verdura</Link>
      </button>
    </div>
  )
}

export default VerdurasContainer