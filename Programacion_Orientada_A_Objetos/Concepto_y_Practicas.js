/*

estructura de datos

key / value 

objeto {
    propiedad: valor,
    propiedad: valor,
    propiedad: valor
    Metodos
}

*/

const persona = {
    nombre: "John",
    edad: 30,
    direccion: {
        calle: "Av Insurgente 187",
        ciudad: "Peru"
    },
    saludar() {
        console.log(`hola, mi nombre es ${persona.nombre}`)
    }
}

console.log(persona)

persona.saludar();

persona.telefono = "555-555-5555";

console.log(persona.telefono)

persona.despedir = () => {
    console.log("Adios")
}

persona.despedir()