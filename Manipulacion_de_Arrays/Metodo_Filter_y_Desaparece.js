// Filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evennumbers = numbers.filter(number => number % 2 === 0) 

console.log(numbers)
console.log(evennumbers)

// Reduce() . Case.-1

const numbersReduce = [1, 2, 3, 4, 5]
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numbersReduce)
console.log(sum)

//// Reduce() . Case.-2

const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']

const wordsFrecuency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++
    }else{
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

console.log(wordsFrecuency)