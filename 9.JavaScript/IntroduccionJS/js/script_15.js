// Array methods
const meses = ['Enero', 'febrero', 'Marzo', 'Abril', 'Mayo'];
const carrito = [
    {nombre: 'Monitor de 20 Plg',precio: 200},
    {nombre: 'Television de 50 Plg',precio: 300},
    {nombre: 'Tablet',precio: 400},
    {nombre: 'Audifonos',precio: 100},
    {nombre: 'Celular',precio: 200},
    {nombre: 'Bocinas',precio: 500},
    {nombre: 'Laptop',precio: 600}
]

// recorre Forech
meses.forEach(function (mes) {
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
})

// Includes
let resultado = meses.includes('Marzo');

// Some ideal para arreglo de objetos
resultado = carrito.some(function (producto) {
    return producto.nombre == 'Celular'
})

resultado = carrito.some(producto => producto.nombre == 'Celular')

// Reduce
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);

//Filter
resultado = carrito.filter(function (producto) {
    return producto.nombre !== 'Celular'
});


console.log(resultado);