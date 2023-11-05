import { Layout } from 'antd'
import AppContentRoutes from './AppContentRoutes'

const { Content } = Layout

const AppContent = () => {
  console.log("AppContent")
  return <Content> 
    <section >
      <AppContentRoutes />
    </section>
  </Content>

}
  

export default AppContent