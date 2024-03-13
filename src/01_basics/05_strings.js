// Example - older way to define string in js
const userName = 'john'
const repoCount = 50
console.log(userName + ' ' + repoCount + ' Value') // john
// Example - modern way to define string in js - String interpolation
console.log(`Hello my name is ${userName} and my repo count is ${repoCount}`) // Hello my name is john and my repo count is 50

// Another way to define string in js
const gameName = new String('pubg')
console.log(gameName) // [String: 'PUBG']
// Example - String methods
// Access the sting value using index
console.log(gameName[0]) // P
// View the prototype methods of the string
console.log(Object.getPrototypeOf(gameName)) // [String: '']
// view the length of the string
console.log(gameName.length) // 4
// view the string in uppercase
console.log(gameName.toUpperCase()) // PUBG
// view the character at given position in a string
console.log(gameName.charAt(1)) // U
// view the index of the character in a string
console.log(gameName.indexOf('u')) // 1
const newGameName = 'Robert-PC'
// view the substring of a string
console.log(newGameName.substring(1, 5)) // obert
// view the slice of a string
console.log(newGameName.slice(-8, 4)) // obe
// view trim of a string
const newGameName2 = ' Robert-PC '
console.log(newGameName2) // Robert-PC
console.log(newGameName2.trim()) // Robert-PC
// view replace of a string
const url = 'https://lco.dev/learn%20javascript'
console.log(`Before replace: ${url}`) // https://lco.dev/learn%20javascript
console.log(`After replace: ${url.replace('%20', '-')}`) // https://lco.dev/learn-javascript
// view includes(keyword search) of a string
console.log(`includes example: ${url.includes('lco')}`) // true
// view split method of a string
const newGameName3 = 'Robert-PC-HP'
console.log(`Split based on - ${newGameName3.split('-')}`) // [ 'Robert', 'PC', 'HP' ]
