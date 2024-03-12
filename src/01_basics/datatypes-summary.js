// Primitive datatypes

// 7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Non-Primitive datatypes

// Object, Array, Function

// Example - Number Type
const score = 100
console.log(`Example number type score with int: ${score}`)
const scoreValue = 100.3
console.log(`Example number type scoreValue with float: ${scoreValue}`)
// Example - Boolean Type
const isLogged = false
console.log(`Example boolean type isLogged: ${isLogged}`)
// Example - Null Type
const outSideTemp = null
console.log(`Example null type outSideTemp: ${outSideTemp}`)
// Example - Undefined Type
const userEmail = undefined
console.log(`Example undefined type userEmail: ${userEmail}`)
// Example - Symbol Type
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id)
console.log(anotherId)
console.log(id === anotherId) // false
// Example - BigInt Type
const bigNumber = 67890120n
console.log(bigNumber) // 67890120n
console.log(typeof bigNumber) // bigint
