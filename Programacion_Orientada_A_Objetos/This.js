/*

this ---  class

this --- objeto

*/

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre,
        this.edad = edad
    }
}

const persona1 = new Persona("Alice", 25)

console.log(persona1)

persona1.nuevoMetodo = function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
}