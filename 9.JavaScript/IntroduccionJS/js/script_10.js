const nombreProducto = "Monitor de 20 Pulgadas";
const precio = 300;
const disponible = true;

// Objeto
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible: true
}

// Agregar nuevas propiedades
producto.imagen = 'Imagen.jpg';

//Delete
delete producto.disponible; 

console.log(producto);

