import React from 'react'
import { Component } from 'react'
import { Layout } from 'antd'
import AppLeftMenu from './components/leftMenu/AppLeftMenu'
import AppHeader from './components/header/AppHeader'
import AppContent from './components/content/AppContent'
import AppFooter from './components/footer/AppFooter'
import './AppLayout.scss'


class AppLayout extends Component{
	
	state = {
		carro: [],
		esCarroVisible: false,
		
	  }
	
	  agregarAlCarro = (producto) => {
		const { carro } = this.state
		if (carro.find(x=> x.nombre === producto.nombre)) {
		  const newCarro = carro.map(x => x.nombre === producto.nombre
			? ({
			  ...x,
			  cantidad: x.cantidad + 1
			})
		  : x)
		  return this.setState({ carro: newCarro})
		}
		return this.setState({
		  carro: this.state.carro.concat({
			...producto,
			cantidad: 1,
		  })
		})
	  }
	
	  mostrarCarro = () => {
		if(!this.state.carro.length){
		  return
		}
		this.setState({ esCarroVisible: !this.state.esCarroVisible})
	  }
	
	  render() {
		const {esCarroVisible} = this.state
		console.log(this.state.carro)
		return (
		  <div>
			<Layout style={{ minHeight: "100vh" }}>
 				<AppLeftMenu />
 				<Layout className='app-layout'>
					<AppHeader 
						carro={this.state.carro} 
						esCarroVisible={esCarroVisible} 
						mostrarCarro={this.mostrarCarro}
					/>
					<AppContent 
						agregarAlCarro={this.agregarAlCarro}
					/>
					<AppFooter />
 				</Layout>
 			</Layout>
		  </div>
		)
	  }
	}
export default AppLayout