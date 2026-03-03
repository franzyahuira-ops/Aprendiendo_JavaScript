// How to create an Array ?

// 1. new Array() or Array()

const fruits = Array('apple', 'manzana', 'orange')
console.log(fruits)

const justOneNumber = Array(12)
console.log(justOneNumber)

const Number = Array(1, 2, 3, 4, 5)
console.log(Number)

// 2. Array literal syntax

const oneNumber = [4] 
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const sports = ['ssoccer', 'tennis', 'rugby']
console.log(sports)

const recipeIngredients = [
    'Flour',
    true,
    2,
    {
        ingredient: 'Milk', quantity: '1 cup'
    },
    false
]

console.log(recipeIngredients)

// Accessing array elements

const firstFruit = fruits[0]
console.log(firstFruit)

// length property

const numberOfFruits = fruits.length
console.log(numberOfFruits)

// Mutability

fruits.push('watermelon')
console.log(fruits)

// Immutability

const newFruits = fruits.concat(['grape', 'kiwi'])
console.log(newFruits)

// Practical exercise: sum all elements of an array.

