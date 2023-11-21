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

const PolloContainer = ({agregarAlCarro}) => {
  const [pollos, setPollos] = useState([])

  useEffect (()=>{
    const fecthAllPollos = async ()=>{
      try{
        const res = await axios.get ("http://localhost:8800/pollos")
        setPollos(res.data)
        
        console.log(res)
      }catch(err){
        console.log(err)

      }
    }
    fecthAllPollos()

  },[])

  const handleDelete = async (id)=>{
    try{
      await axios.delete("http://localhost:8800/pollos/" +id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }
  
  return (
    <div className='container'>
      <h1>Pollo</h1>
      <br />
      <div className="pollos">
        {pollos.map((pollo) => (
          <div className="pollo" key={pollo.id}>       
            <img style={styles.img} src={pollo.foto} alt={pollo.nombre} />
            <h2>{pollo.nombre}</h2>
            <p>{pollo.descripcion}</p>
            <span>{pollo.precio}</span>
            <br /> <br />
            <button style={styles.borrar} className='borrar' onClick={()=>handleDelete(pollo.id)}>BORRAR</button>
            <button style={styles.actualizar} className='actualizar'><Link to={`/updatepollos/${pollo.id}`}>ACTUALIZAR</Link></button>
            <button style={styles.agregar} className='agregar' onClick={() => agregarAlCarro(pollo)}>AGREGAR AL CARRITO</button>


          </div>
        ))}
      </div>
      <br />
      <button style={styles.agregar}>
        <Link to="/addPollos">Agregar nuevo pollo</Link>
      </button>
    </div>
  )
}

export default PolloContainer