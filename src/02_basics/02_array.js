const marvelHeroes = ['thor', 'Ironman', 'Spiderman']
const dcHeros = ['Batman', 'Superman', 'Wonderwoman']
// Example 1 - with push operation
/*
marvelHeroes.push(dcHeros)
console.log('After push operation', marvelHeroes) // ['thor', 'Ironman', 'Spiderman', ['Batman', 'Superman', 'Wonderwoman']]
*/
// Example 2 - with concat operation
/*
const allHeros = marvelHeroes.concat(dcHeros)
console.log('After concatenate operations ', allHeros) // ['thor', 'Ironman', 'Spiderman', 'Batman', 'Superman', 'Wonderwoman']
*/
// Example 3 - with spread operator
const allHerosWithSpread = [...marvelHeroes, ...dcHeros]
console.log('After spread operations ', allHerosWithSpread) // ['thor', 'Ironman', 'Spiderman', 'Batman', 'Superman', 'Wonderwoman']
// Example 4 - flatten array
// flat method is used to flatten the array by default it will flatten the array by 1 level
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log('After flatten the array', realAnotherArray)
// Example 5 - isArray method
// isArray method is used to check whether the given value is array or not
console.log('Is array check? ', Array.isArray('John')) // false
// Example 6 - fromArray method
// fromArray method is used to convert the array like objects to array
console.log('Array from array like object', Array.from('John')) // ['J', 'o', 'h', 'n']
console.log(Array.from({ name: 'hitesh' })) // []
// Example 7 - array of method
// array of method is used to convert the given arguments to array
const score1 = 100
const score2 = 200
const score3 = 300

console.log('Example Array of method', Array.of(score1, score2, score3)) // [100, 200, 300]
