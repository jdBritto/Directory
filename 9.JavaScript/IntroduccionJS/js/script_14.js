// Arrays

const numeros = [20,30,40,50,60,70,80,90];
// console.table(numeros);

const arreglo = ["Hola", 20, true, "si",null, {nombre: "Jeff", Trabajo: "Sistemas"}, [0,1,2]];
// console.log(arreglo);

// Acceder a los vbalores del arreglo
// console.log(arreglo[3]);

//conocer la extension de un arreglo
// console.log(arreglo.length);

// arreglo.forEach(function (arreglo) {
    // console.log(arreglo);
// })
// arreglo[8] = 70;
arreglo.push(20);// agrega al final del arreglo
// arreglo[7] = 50;
arreglo.unshift(10) //Agrega al inicio del arreglo
// arreglo.pop(); //Elimina el ultimo elemento
// arreglo.shift(); //Elimina el primer elemento
// arreglo.splice(3,1); //Elimina el valor a medias deceado
// console.table(arreglo);

// Rest Operator o Spread Operator

const nuevoArreglo = [...arreglo, 'Mes'];
console.table(nuevoArreglo);