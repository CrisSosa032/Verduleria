import React from 'react'
import HomePage from '../../../home/HomePage'
import ClientesContainer from '../../../domain/ventas/clientes/ClientesContainer'
import VerdurasContainer from '../../../domain/verduras/VerdurasContainer'
import FrutasContainer from '../../../domain/frutas/FrutasContainer'
import HortalizasContainer from '../../../domain/hortalizas/HortalizasContainer'
import PolloContainer from '../../../domain/pollo/PolloContainer'
import AñadirVerduras from '../../../domain/add/AñadirVerduras'
import AñadirFrutas from '../../../domain/add/AñadirFrutas'
import AñadirHortalizas from '../../../domain/add/AñadirHortalizas'
import AñadirPollo from '../../../domain/add/AñadirPollo'
import AñadirCliente from '../../../domain/add/AñadirCliente'
import UpdateVerduras from '../../../domain/update/UpdateVerduras'
import UpdateFrutas from '../../../domain/update/UpdateFrutas'
import UpdateHortalizas from '../../../domain/update/UpdateHortalizas'
import UpdatePollo from '../../../domain/update/UpdatePollo'
import {HomeOutlined, DatabaseOutlined, GlobalOutlined, DollarCircleOutlined,ShopOutlined} from "@ant-design/icons"

const routes = [
  { key: 'home', role: 'admin', label: 'Inicio',
    path: '/home', menu: true, icon: <HomeOutlined />, element: <HomePage />
  },
  { key: 'productos', role: 'admin', label: 'Productos',
  path: '/productos', menu: true, icon: <ShopOutlined />,
  children: [
    { key: 'verduras', role: 'admin', label: 'Verduras',
      path: '/verduras', icon: <GlobalOutlined />, element: <VerdurasContainer />
    },
    { key: 'frutas', role: 'admin', label: 'Frutas',
      path: '/frutas', icon: <GlobalOutlined />, element: <FrutasContainer />
    },
    { key: 'hortalizas', role: 'admin', label: 'Hortalizas',
      path: '/hortalizas', icon: <GlobalOutlined />, element: <HortalizasContainer />
    },
    { key: 'pollos', role: 'admin', label: 'Pollos',
      path: '/pollos', icon: <GlobalOutlined />, element: <PolloContainer />
    },
  ]
},
    
  { key: 'add', role: 'admin', label: 'Agregar',
  path: '/add', menu: true, icon: <ShopOutlined />,
  children: [
    { key: 'addVerduras', role: 'admin', label: 'Agregar Verduras',
      path: '/addverduras', icon: <GlobalOutlined />, element: <AñadirVerduras />
    },
    { key: 'addFrutas', role: 'admin', label: 'Agregar Frutas',
      path: '/addfrutas', icon: <GlobalOutlined />, element: <AñadirFrutas />
    },
    { key: 'addHortalizas', role: 'admin', label: 'Agregar Hortalizas',
      path: '/addhortalizas', icon: <GlobalOutlined />, element: <AñadirHortalizas />
    },
    { key: 'addPollos', role: 'admin', label: 'Agregar Pollos',
      path: '/addpollos', icon: <GlobalOutlined />, element: <AñadirPollo />
    },
  ]
},
{ key: 'ventas', role: 'admin', label: 'Ventas',
    path: '/cajas', menu: true, icon: <DollarCircleOutlined />,
    children: [
      { key: 'clientes', role: 'admin', label: 'Clientes',
        path: '/clientes', icon: <GlobalOutlined />, element: <ClientesContainer />
      },
      { key: 'addClientes', role: 'admin', label: 'Agregar Clientes',
        path: '/addclientes', icon: <GlobalOutlined />, element: <AñadirCliente />
      },
    ]
  },
{ key: 'update', role: 'admin', label: 'Actualizar',
path: "/update/:id", menu: true, icon: <ShopOutlined />, 
children: [
  { key: 'updateVerduras', role: 'admin', label: 'Actualizar Verduras',
    path: '/updateverduras/:id', icon: <GlobalOutlined />, element: <UpdateVerduras />
  },
  { key: 'updateFrutas', role: 'admin', label: 'Actualizar Frutas',
    path: '/updatefrutas', icon: <GlobalOutlined />, element: <UpdateFrutas />
  },
  { key: 'updateHortalizas', role: 'admin', label: 'Actualizar Hortalizas',
    path: '/updatehortalizas', icon: <GlobalOutlined />, element: <UpdateHortalizas />
  },
  {  key: 'updatePollos', role: 'admin', label: 'Actualizar Pollos',
    path: '/updatepollos', icon: <GlobalOutlined />, element: <UpdatePollo />
  },
  
]
}
]

export default routes