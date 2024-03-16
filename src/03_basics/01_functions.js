// Example - Sample function
// Function - sayMyName - definition
function sayMyName() {
  console.log('H')
  console.log('I')
  console.log('T')
  console.log('E')
  console.log('S')
  console.log('H')
}

sayMyName() // H I T E S H - function execution

// Function - add two numbers - definition
function addTwoNumbers(number1, number2) {
  const result = number1 + number2
  return result
  // return number1 + number2
}
const result = addTwoNumbers(3, 5)
console.log('Result: ', result)

// Example - Function with parameters
function loginUserMessage(username = 'sam') {
  if (!username) {
    console.log('PLease enter a username')
    return
  }
  return `${username} just logged in`
}

console.log(loginUserMessage('hitesh')) // hitesh just logged in
// Example - Suppose we are designing a function to calculate the shopping cart total, where we don't know the number of items in the cart previously
function calculateCartPrice(...num1) {
  return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))

// Example - How to use an object as a parameter in a function

const user = {
  username: 'hitesh',
  prices: 199,
}

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  )
}
// handleObject(user) // Username is hitesh and price is 199
handleObject({
  username: 'sam',
  price: 399,
})

// Example - How to use an array as a parameter in a function
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray) {
  return getArray[1]
}
console.log(returnSecondValue(myNewArray)) // 400
console.log(returnSecondValue([20, 40, 50, 100])) // 40
