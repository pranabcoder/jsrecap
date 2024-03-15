// Example - Singleton object
// const tinderUser = new Object()

const tinderUser = {} // object literals
// Example - adding properties and values to the object
tinderUser.id = '123abc'
tinderUser.name = 'Sammy'
tinderUser.isLoggedIn = false
console.log(tinderUser) // { id: '123abc', name: 'Sammy', isLoggedIn: false }
// Example - object within the object
const regularUser = {
  email: 'some@gmail.com',
  fullName: {
    userFullName: {
      firstName: 'hitesh',
      lastName: 'choudhary',
    },
  },
}

console.log(regularUser.fullName?.userFullName.firstName) // hitesh

// Example - combines different objects
const obj1 = { 1: 'a', 2: 'b' }
const obj2 = { 3: 'a', 4: 'b' }

// Example - one way to combine objects
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// Example - another way to combine objects
const obj4 = { ...obj1, ...obj2 }
console.log(obj4) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// Example - object destructuring
const users = [
  {
    id: 1,
    email: 'h1@gmail.com',
  },
  {
    id: 1,
    email: 'h2@gmail.com',
  },
  {
    id: 1,
    email: 'h3@gmail.com',
  },
]
console.log(users[1].email) // h2@gmail.com
// Example - get all keys from the object
console.log(tinderUser) // { id: '123abc', name: 'Sammy', isLoggedIn: false }
console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'isLoggedIn' ]
// Example - get all values from the object
console.log(Object.values(tinderUser)) // [ '123abc', 'Sammy', false ]
// Example - get all key-value pairs in an array from the object
console.log(Object.entries(tinderUser)) // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
// Example - a property is present from the object
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// Example - object destructuring
const course = {
  courseName: 'js in hindi',
  price: '999',
  courseInstructor: 'hitesh',
}

// Example - get the value of the key from the object
const { courseInstructor } = course
console.log(courseInstructor) // hitesh
const { courseInstructor: instructor } = course
console.log(instructor) // hitesh
