/*
function a () {}
function b (a) {}
b(a)

//retornar funciones

function a () {
    function b () {}
    return b
}

//asignar funciones a variables -> Exprecion de funcion

const a = function() {}

// Tener pro[piedades y metodos

function a () {}
const obj = {}
a.call(obj)

// Anidar funciones

function a () {
    function b () {
        function c () {} 
    }
}
*/

// Es posible almacenar funciones en objetos?

const rocket = {
    name: 'Falcon 9',
    launchMenssage() {
        console.log(this.name + ': fuego');
    }
}

rocket.launchMenssage();