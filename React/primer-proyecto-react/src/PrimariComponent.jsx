const string = 'Esto es un texto'
const number = 123456
const array = ['Curso de React', 'Youtube', 4, 100000]
const boolean = true
const funcion = () => 1 + 1
const objeto = { nombre: ' Curso de Javascript', duracion: 4 }
const fecha = new Date()


export const PrimariComponent = () => {
  return (
    <>
      <h1>Variables en JSX</h1>
      <h4>Variable tipo String:</h4> <p>{string}</p>
      <h4>Variable tipo number:</h4> <p>{number}</p>
      <h4>Variable tipo array:</h4> <p>{array}</p>
      <h4>Variable tipo boolean:</h4> <p>{boolean}</p>
      <h4>Variable tipo funcion:</h4> <p>{funcion()}</p>
      <h4>Variable tipo String:</h4> <p>{string}</p>
    </>
  )
}

