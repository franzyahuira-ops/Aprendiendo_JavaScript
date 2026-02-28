const greeting = function (name) {
    return `Hi, ${name}`
}

//Arrow function - Explicit return

const newGreeting = (name) => {
    return `Hi, ${name}`
}

// Arrow function - Implicit return

const newGreetingImplicit = name => `Hi, ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastname) => `Hi, I'am ${name} ${lastname}`

// Lexical Binding

const finctionalCharacter = {
    name: 'Uncle Bem',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction:message => console.log(`${this.name} says: ${message}`)
}

finctionalCharacter.messageWithTraditionalFunction('With great power comes great resonsability.')
finctionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.')
