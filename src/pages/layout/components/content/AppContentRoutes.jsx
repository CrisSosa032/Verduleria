import { Route, Routes } from 'react-router-dom'
import routes from '../routes/AppRoutes';


const AppContentRoutes = () => {

  let arrayRoute = []
  let path = ''

  const getRoute = route => {
    if (route.children) {
      route.children.forEach(routeSubmenu => {
        getRoute(routeSubmenu)
      })
    } else {
      let url = route.path
      if (!route.menu) {
        url = path + route.path + '/*'
      }
      console.log("ROUTE: ", route)
      arrayRoute.push({
        key: route.key, role: route.role,
        path: url, element: route.element
      })
    }
  }
  routes.forEach(route => getRoute(route))

  return <Routes>
    {arrayRoute.map(route => <Route key={route.key} path={route.path} element={route.element} />)}
  </Routes>
}

export default AppContentRoutes
