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
