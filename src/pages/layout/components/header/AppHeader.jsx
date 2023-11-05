import { React, useState } from 'react'
import './AppHeader.css'
import logo from './assets/logo.png'
import './AppHeader.css'

const styles= {
  img: {
    width: '100px',
  },
  texto: {
    fontSize: '30px',
    paddingTop: '28px',
    paddingLeft: '30px',
  }
}

function AppHeader() {

  return (
    <div className='header'>
            <img style={styles.img} src={logo} alt="logo" className="logoImg" />
            <br />
            <h1 style={styles.texto}>CHANGARINES - VERDULERIA - POLLERIA</h1>
    </div>
  )
}

export default AppHeader

