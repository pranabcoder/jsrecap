'use strict'

/*
alert(3 + 3) => we are using nodejs, not browser
*/
const userName = 'John'
const age = 25
const isLoggedIn = true

console.table([userName, age, isLoggedIn])
console.log(typeof userName, typeof age, typeof isLoggedIn) // string number boolean
console.log(typeof null) // object
console.log(typeof undefined) // undefined
