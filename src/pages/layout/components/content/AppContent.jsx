import { Component } from 'react'
import { Layout } from 'antd'
import AppContentRoutes from './AppContentRoutes'

const { Content } = Layout

class AppContent extends Component{
  render() {
    const { agregarAlCarro} = this.props

    return ( 
            <Content> 
              <section >
                <AppContentRoutes 
                  agregarAlCarro={agregarAlCarro}
                />
              </section>
            </Content>
    )
}
}
  

export default AppContent