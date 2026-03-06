//onst persona = {
//    nombre: "Franz",
//    apellido: "Yahuira"
//}

function Persona(nombre, apellido, edad) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad
}

const persona1 = new Persona("Juan", "Perez", "30")

console.log(persona1)

const persona2 = new Persona("Franz", "Yahuira", "14")

console.log(persona2)

Persona.prototype.telefeno = "555-555-5555"

persona1.nacionalidad = "Peruano"

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${nombre} ${apellido}`)
}