import './App.css'
import { Home } from './Components/Pages/Home/home'
import { useRoutes } from 'react-router-dom'
import {Acercademi} from './Components/Pages/AcercaDemi/Acercademi'
import { Contacto } from './Components/Pages/Contacto/Contacto'
import { NotFound } from './Components/NotFound/NotFound'
import { Header } from './Components/Layouts/Header/Header'
import { Logo } from './Components/Logo/Logo'
import { Navbar } from './Components/Navbar/Navbar'
import { Item } from './Components/Item/Item'




const AppRoutes = () => {

  let routes = useRoutes ([
    { path: '/', element: <Home/>},
    { path: '/Acercademi', element: <Acercademi/>},
    { path: '/Contacto', element: <Contacto/>},
    { path: '/*', element: <NotFound/>}
  ])
  return routes
}

function App() {
  
  return (
    <>  
    <Header>
      <Logo/>
      <Navbar>
        <Item content = 'Inicio' route=''/>
        <Item content = 'Acerca de mi' route='Acercademi'/>
        <Item content = 'Contacto' route='Contacto'/>
      </Navbar>
    </Header>    
      <AppRoutes />
    </>
  )
}

export default App
