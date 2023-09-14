import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimariComponent } from './PrimariComponent'
import './css/normalize.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimariComponent titulo="Esta session es de titulo" subtitulo="Curso de react" subtitulo={4}/>
  </React.StrictMode>,
)

