import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const AñadirCliente = () =>{
    const [cliente, setCliente] = useState ({
        nombre:"",
        apellido:"",
        dni: null,
        tipo: "",
    })
    const navigate = useNavigate()

    const handleChange = (e) =>{
        setCliente(prev=>({...prev, [e.target.name]: e.target.value}))
    }   

    const handleClick = async e =>{
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/clientes", cliente)
            navigate("/clientes")
        } catch (error) {
            console.log(error)
        }


    }
    console.log(cliente)
    return (
        <div className='form'>
            <h1>Añadir un nuevo cliente</h1>
            <input type="text" placeholder="Nombre" onChange={handleChange} name="nombre"/>
            <input type="text" placeholder="Apellido" onChange={handleChange} name="apellido"/>
            <input type="number" placeholder="dni" onChange={handleChange} name="dni"/>
            <input type="text" placeholder="tipo" onChange={handleChange} name="tipo"/>
            <button className='formButton' onClick={handleClick}>Cargar datos</button>
        </div>
    )
}

export default AñadirCliente