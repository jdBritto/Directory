import './css/PrimariComponent.css'

const string = 'Esto es un texto'
const number = 123456
const array = ['Curso de React', 'Youtube', 4, 100000]
const boolean = true
const funcion = () => 1 + 1
const objeto = { nombre: ' Curso de Javascript', duracion: 4 }
const fecha = new Date()



export const PrimariComponent = ( {titulo, subtitulo} ) => {
  console.log(titulo)
  console.log(subtitulo)
  return (
    <>
      <h1>{titulo} </h1>
      <h2>{subtitulo}</h2>
    </>
  )
}

 