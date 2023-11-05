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



const HortalizasContainer = () => {
  const [hortalizas, setHortalizas] = useState([])

  useEffect (()=>{
    const fecthAllHortalizas = async ()=>{
      try{
        const res = await axios.get ("http://localhost:8800/hortalizas")
        setHortalizas(res.data)
        
        console.log(res)
      }catch(err){
        console.log(err)

      }
    }
    fecthAllHortalizas()

  },[])

  const handleDelete = async (id)=>{
    try{
      await axios.delete("http://localhost:8800/hortalizas/" +id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }
  
  return (
    <div className='container'>
      <h1>HORTALIZAS</h1>
      <br />
      <div className="hortalizas">
        {hortalizas.map((hortaliza) => (
          <div className="hortaliza" key={hortaliza.id}>       
            <img style={styles.img} src={hortaliza.foto} alt={hortaliza.nombre} />
            <h2>{hortaliza.nombre}</h2>
            <p>{hortaliza.descripcion}</p>
            <span>{hortaliza.precio}</span>
            <br /> <br />
            <button style={styles.borrar} className='borrar' onClick={()=>handleDelete(hortaliza.id)}>Delete</button>
            <button style={styles.actualizar} className='actualizar'><Link to={`/updatehortalizas/${hortaliza.id}`}>Actualizar</Link></button>

          </div>
        ))}
      </div>
      <br />
      <button style={styles.agregar}>
        <Link to="/addHortalizas">Agregar nueva hortaliza</Link>
      </button>
    </div>
  )
}

export default HortalizasContainer