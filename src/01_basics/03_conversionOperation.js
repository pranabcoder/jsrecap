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

// *************************** Operations ***************************

const value = 3
const negValue = -value
console.log(negValue) // -3
console.log(2 + 2) // 4
console.log(2 - 3) // -1
console.log(2 * 2) // 4
console.log(2 / 2) // 1
console.log(2 % 2) // 0
console.log(2 ** 3) // 8

const str1 = 'Hello'
const str2 = ' John'
const str3 = str1 + str2
console.log(str3) // Hello John

console.log('1' + 2) // 12
console.log(1 + '2') // 12
console.log('1' + 2 + 2) // 122
console.log(1 + 2 + '2') // 32
console.log(((3 + 4) * 5) % 3) // 2
console.log(true) // true

let num1, num2, num3
// eslint-disable-next-line prefer-const
num1 = num2 = num3 = 2 + 2
console.log(num1, num2, num3) // 4 4 4

let gameCounter = 100
gameCounter++
console.log(gameCounter) // 101
