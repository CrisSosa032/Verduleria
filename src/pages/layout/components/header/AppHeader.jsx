import { React, useState } from 'react'
import './AppHeader.css'
import logo from './assets/logo.png'
import usuario from './assets/usuario.png'
import './AppHeader.css'


const styles= {
  img: {
    width: '100px',
  },
  texto: {
    fontSize: '30px',
    paddingTop: '28px',
    paddingLeft: '30px',
  },
  ingresar:{
    width: '30px'
  },
  botonIngresar:{
    borderRadius: '10px',
    marginRight: '200px',
  }
}

function AppHeader() {

  return (
    <div className='header'>
            <button style={styles.botonIngresar}><img style={styles.ingresar} src={usuario} alt="" />ingresar</button>
            <img style={styles.img} src={logo} alt="logo" className="logoImg" />
            <br />
            <h1 style={styles.texto}>CHANGARINES - VERDULERIA - POLLERIA</h1>
            
    </div>
  )
}

export default AppHeader

