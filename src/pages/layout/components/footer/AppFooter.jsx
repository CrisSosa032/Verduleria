import React from 'react'
import { Layout } from 'antd'
import whatsapp from '../../assets/whatsapp.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import './AppFooter.css'

const { Footer } = Layout

const AppFooter = () => 
	<Footer className='app-Layout-background' style={{ textAlign: 'center' }}>
		<div><h3>Estamos en Crisostomo Alvarez 500 - Monteros - Tucumán</h3></div> 
		<div className='botones'>
			<a aria-label="Chat on WhatsApp" href="https://wa.me/+5493813636700"><img alt="Chat on WhatsApp" src={whatsapp} width={200} /> </a>
			<a aria-label="Chat on WhatsApp" href="https://www.facebook.com/verduleria.changarines"><img alt="Chat on WhatsApp" src={facebook} width={130} /> </a>
			<a aria-label="Chat on WhatsApp" href="https://instagram.com/changarines?igshid=MzNlNGNkZWQ4Mg=="><img alt="Chat on WhatsApp" src={instagram} width={200} /> </a>
		</div>
	</Footer>

export default AppFooter