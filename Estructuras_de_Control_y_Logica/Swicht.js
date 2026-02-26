
let expr ="Papayas"

switch(expr) {
    case "Naranjas":
        console.log("Las naranjas cuestan 5soles el kg")
        break;
    case "Manzanas":
        console.log("Las manzanas cuestan 7 soles el kg")
        break;
    case "Platanos":
        console.log("El platano esta a 10 soles el kg")
        break;
    case "Mangos":
    case "Papayas":
        console.log("Los mangos y las papayas cuestan a 6 soles el kg")  
        break; 
    default:        
        console.log(`Lo siento, no contamos con ${expr}`)
}

console.log("Hay algo mas que desees?")