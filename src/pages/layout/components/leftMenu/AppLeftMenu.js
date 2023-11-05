import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Menu, Switch} from 'antd'
import routes from '../routes/AppRoutes'



const { Sider } = Layout

const AppLeftMenu = () => {

  const navigate = useNavigate()

  const handleOnClick = e => {
    console.log('handleOnClick', e)
    navigate(e.key)
  }

  const [collapsed, onCollapse] = useState(true)

  const authRoutes = routes //.filter(item => 
  //  item.role.includes(AuthenticationHelper.getRole()))

  return <Sider
  style={{
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
  }}
  className="left-menu-main"
    collapsible collapsed={collapsed}
    onCollapse={onCollapse} >
    
    <br/><br/><br/><br/><br/><br/>
    <Menu theme="dark"
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={authRoutes}
      onClick = {handleOnClick}>


    
    </Menu>
    
  </Sider>
}

export default AppLeftMenu