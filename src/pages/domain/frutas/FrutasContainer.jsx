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



const FrutasContainer = () => {
  const [frutas, setFrutas] = useState([])

  useEffect (()=>{
    const fecthAllFrutas = async ()=>{
      try{
        const res = await axios.get ("http://localhost:8800/frutas")
        setFrutas(res.data)
        
        console.log(res)
      }catch(err){
        console.log(err)

      }
    }
    fecthAllFrutas()

  },[])

  const handleDelete = async (id)=>{
    try{
      await axios.delete("http://localhost:8800/frutas/" +id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }
  
  return (
    <div className='container'>
      <h1>FRUTAS</h1>
      <br />
      <div className="frutas">
        {frutas.map((fruta) => (
          <div className="fruta" key={fruta.id}>       
            <img style={styles.img} src={fruta.foto} alt={fruta.nombre} />
            <h2>{fruta.nombre}</h2>
            <p>{fruta.descripcion}</p>
            <span>{fruta.precio}</span>
            <br /> <br />
            <button style={styles.borrar} className='borrar' onClick={()=>handleDelete(fruta.id)}>BORRAR</button>
            <button style={styles.actualizar} className='actualizar'><Link to={`/updatefrutas/${fruta.id}`}>ACTUALIZAR</Link></button>

          </div>
        ))}
      </div>
      <br />
      <button style={styles.agregar}>
        <Link to="/addFrutas">Agregar nueva fruta</Link>
      </button>
    </div>
  )
}

export default FrutasContainer