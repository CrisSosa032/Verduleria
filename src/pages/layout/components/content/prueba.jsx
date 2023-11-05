import AppContentRoutes from './AppContentRoutes'
import routes from '../routes/AppRoutes'
import './AppContent.scss'
import CategoriaIvasContainer from '../../../domain/parametricas/categoriaivas/CategoriaIvasContainer'
import ClientesContainer from '../../../domain/ventas/clientes/ClientesContainer'
import VerdurasContainer from '../../../domain/verduras/VerdurasContainer'
import FrutasContainer from '../../../domain/frutas/FrutasContainer'
import HortalizasContainer from '../../../domain/hortalizas/HortalizasContainer'
import PolloContainer from '../../../domain/pollo/PolloContainer'


const valor = <AppContentRoutes/>

const arr = routes


 function prueba(arr, valor) {
   for (let i = 0; i < arr.length; i++) {
       const route = arr[i];
  
       if (route.path = valor) {
         return route.element;
       }
  
       if (route.children) {
         const childElement = prueba(route.children, valor);
         if (childElement) {
           return childElement;
         }
       }
     }
  
     return null;
   }



   export default prueba