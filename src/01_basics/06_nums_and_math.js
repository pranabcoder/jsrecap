// Example - Number definition in JS
const score = 400
console.log(score) // 400

// Another way to define number in js which is explicitly defined as number
const highScore = new Number(500)
console.log(highScore) // [Number: 500]
// To convert it to string
const newHighScore = highScore.toString()
// check the type of newHighScore
console.log(`type of newHighScore value is ${typeof newHighScore}`) // string
// check the toFixed method - mostly used to convert number to string with fixed decimal points
console.log(highScore.toFixed(2)) // 500.00
console.log(typeof highScore) // object
// check the toPrecision method - mostly used to convert number to string with fixed length
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)) // 124
console.log(otherNumber.toPrecision(4)) // 123.9
// check the toLocaleString method - mostly used to convert number to string with local language format
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In')) // 10,00,000

// +++++++++++++++++++++++ Math Object +++++++++++++++++++++++
console.log(Math) // Math object

// Example - absolute value in js
console.log(`Absolute value of -100 is ${Math.abs(-100)}`) // Absolute value of -100 is 100
console.log(`Absolute value of 100 is ${Math.abs(100)}`) // Absolute value of 100 is 100

// Example - round value in js
console.log(`Round value of 100.4 is ${Math.round(100.4)}`) // Round value of 100.4 is 100
console.log(`Round value of 100.6 is ${Math.round(100.6)}`) // Round value of 100.6 is 101

// Example - ceil value in js
console.log(`Ceil value of 100.4 is ${Math.ceil(100.4)}`) // Ceil value of 100.4 is 101

// Example - floor value in js
console.log(`Floor value of 100.6 is ${Math.floor(100.6)}`) // Floor value of 100.6 is 100

// Example - max value in js
console.log(`Max value of 100, 200, 300 is ${Math.max(100, 200, 300)}`) // Max value of 100, 200, 300 is 300

// Example - min value in js
console.log(`Min value of 100, 200, 300 is ${Math.min(100, 200, 300)}`) // Min value of 100, 200, 300 is 100

// Example - random value in js
console.log(`Random value between 0 and 1 is ${Math.random()}`) // Random value between 0 and 1 is 0.123456789
console.log(
  `Random value between 1 and 10 is ${Math.floor(Math.random() * 10) + 1}`
) // Random value between 1 and 10 is 5
console.log(
  `Random value between 1 and 100 is ${Math.floor(Math.random() * 100) + 1}`
) // Random value between 1 and 100 is 50

// Example - Another way to generate random value in js
