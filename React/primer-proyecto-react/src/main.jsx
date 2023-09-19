import React from 'react'
import ReactDOM from 'react-dom/client'
// import { PrimariComponent } from './examplePrimariComponent.jsx.bak'
// import {ListadoApp} from './UserApp'
import { UserApp } from "./UserApp";
import './css/normalize.css'
import './css/style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <PrimariComponent titulo="Esta session es de titulo" subtitulo='Seccion PROPS 123'/> */}
    {/* <ListadoApp/> */}
    <UserApp></UserApp>
  </React.StrictMode>,
)