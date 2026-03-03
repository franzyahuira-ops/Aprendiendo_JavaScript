// 1. Map()

const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squaredNumbers)

// 2. Foreach

const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)

// Exercise:

const temperaturesInFahrenheit = [32, 68, 95, 104, 212]
const temperaturesInCelsius = temperaturesInFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32))

console.log('Temperatures In Fahrenheit: ', temperaturesInFahrenheit)
console.log('Temperatures In Celsius', temperaturesInCelsius)

// Excersise:

const newNumbers = [1, 2, 3, 4, 5]

let sum = 0

newNumbers.forEach(number => {
    sum =+ number
})

console.log('Array numbers: ', newNumbers)
console.log('Sum of numbers: ', sum)
