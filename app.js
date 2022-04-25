//  Object Destructuring 1
// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered // 1846)

// Object Destructuring 2
// console.log(discoveryyears); // [yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659]

// Object Destructuring 3
// Your name is Alejandro and you like purple
// Your name is Melissa and you like green
// Your name is undefined and you like green

// Array Destructuring 1
// 'Maya'
// 'Marisa'
// 'Chi'

// Array Destructuring 2
// Raindrops on roses
// whiskers on kittens
// ['birght copper kettles', 'warm woolen mittens', 'brown paper packages tied up with strings'];

// Array Destructuring 3
// [10, 30, 20]

// Assigning Varables to Object Properties
const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

const { a, b } = obj.numbers

// One-line array swap with destructuring
[arr[0], arr[1]] = [arr[1], arr[0]]

// raceResults()

const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest })
