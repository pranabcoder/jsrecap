// Example in arrays in js
const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[0]) // 0
const myHeros = ['Shaktiman', 'Nagraj']
console.log(myHeros[1]) // Nagraj

// Example - Another way to create array
const myArr2 = new Array(10, 20.5, 'Hello', true)
console.log(myArr2[2]) // Hello

// Example - Array methods
myArr.push(10) // Add element at the end
console.log(`After doing push operation: ${myArr}`) // [0,1,2,3,4,5,10]
myArr.pop() // Remove element from the end
console.log(`After doing pop operation: ${myArr}`) // [0,1,2,3,4,5]
myArr.unshift(100) // Add element at the start
console.log(`After doing unshift operation: ${myArr}`) // [100,0,1,2,3,4,5]
myArr.shift() // Remove element from the start
console.log(`After doing shift operation: ${myArr}`) // [0,1,2,3,4,5]
console.log(`Check a value is present in array or not? ${myArr.includes(9)}`) // false, check a value is present in array or not
console.log(`Check the index of a value in array: ${myArr.indexOf(3)}`) // 3
console.log(`Check the index of a value in array: ${myArr.indexOf(9)}`) // -1
// Example - join method
const newArray = myArr.join() // Convert array to string
console.log(newArray) // 0,1,2,3,4,5
console.log(typeof newArray) // string
console.log(typeof myArr) // object

// Example - slice, splice, concat methods
// slice method - It returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.
console.log('Before Slice operation ', myArr)
const slicedArray = myArr.slice(1, 3)
console.log('After Slice operation ', slicedArray) // [1,2]
console.log('Original array after slice operation ', myArr) // [0,1,2,3,4,5]
// splice method - It changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
console.log('Before Splice operation ', myArr)
const splicedArray = myArr.splice(1, 3)
console.log('After Splice operation ', splicedArray) // [1,2,3]
console.log('Original array after splice operation ', myArr) // [0,4,5]
