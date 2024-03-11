const score = 33
const scoreString = '33abc'
console.log(typeof score) // number
console.log(typeof scoreString) // string

const valueInNumber = Number(scoreString)
console.log(valueInNumber) // NaN
console.log(typeof valueInNumber) // number

const isLoggedIn = 1

const booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true

const someNumber = 33
const stringNumber = String(someNumber)
console.log(typeof stringNumber) // string
