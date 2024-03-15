// Singleton
// object literals
const mySym = Symbol('key1')
const jsUser = {
  name: 'John',
  'full name': 'John Doe',
  [mySym]: 'mykey1',
  age: 30,
  location: 'Jaipur',
  email: 'john@google.com',
  isLoggedIn: false,
  lastLoginDays: ['Monday', 'Saturday'],
}
console.log(jsUser.email) // john@google.com
console.log(jsUser['email']) // john@google.com
console.log(jsUser['full name']) // John Doe
console.log(typeof jsUser[mySym]) // symbol
// Example - change email value
jsUser.email = 'john@chatgpt.com'
console.log(jsUser) // { name: 'John', 'full name': 'John Doe', age: 30, location: 'Jaipur', email: 'john@chatgpt.com',isLoggedIn: false, lastLoginDays: [ 'Monday', 'Saturday' ],[Symbol(key1)]: 'mykey1'}
// Example - freezing object
// Object.freeze(jsUser)
jsUser.email = 'john@microsoft.com'
console.log(jsUser) // { name: 'John', 'full name': 'John Doe', age: 30, location: 'Jaipur', email: 'john@chatgpt.com',isLoggedIn: false, lastLoginDays: [ 'Monday', 'Saturday' ],[Symbol(key1)]: 'mykey1'}

jsUser.greeting = function () {
  return `Hello, I am ${this.name}`
}
console.log(jsUser.greeting()) // Hello, I am John
