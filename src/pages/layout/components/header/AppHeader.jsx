import { React, useState } from 'react'
import { Component } from 'react'
import './AppHeader.css'
import logo from './assets/logo.png'
import usuario from './assets/usuario.png'
import './AppHeader.css'
import Carro from './Carro'


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
    
  },
  disp: {
    display: 'flex',
    justifyContent: 'space-around'
    

  },
  logo: {
    display: 'flex'

  }
}


class AppHeader extends Component {
  render() {
      const { carro, esCarroVisible, mostrarCarro } = this.props
      return(
        <div style={styles.disp} className='header'>
          <button style={styles.botonIngresar}><img style={styles.ingresar} src={usuario} alt="" />ingresar</button>
          <div style={styles.logo}>
            <img style={styles.img} src={logo} alt="logo" className="logoImg" />
            <h1 style={styles.texto}>CHANGARINES - VERDULERIA - POLLERIA</h1>
          </div>
            <Carro  
              carro={carro} 
              esCarroVisible={esCarroVisible} 
              mostrarCarro={mostrarCarro}
            />
        </div>
      )
  }
}

export default AppHeader

