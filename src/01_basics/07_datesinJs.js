// Example - Dates in JS
const myDate = new Date()
console.log(myDate) // 2024-03-14T17:45:59.558Z
// Example - Convert date to string
console.log(`Example of Date To String conversion is ${myDate.toString()}`) // Thu Mar 14 2024 23:21:26 GMT+0530 (India Standard Time)
// Example - toDateSting method
console.log(`Example of toDateString method is ${myDate.toDateString()}`) // Thu Mar 14 2024
// Example - toLocalString method
console.log(`Example of toLocalString method is ${myDate.toLocaleString()}`) // Example of toLocalString method is 14/03/2024, 23:27:50
// Example - type of date
console.log(`Type of date is ${typeof myDate}`) // Type of date is object
// Example - Want info about date from a particular date
const myCreatedDate = new Date(2024, 3, 14)
console.log(`My created date is ${myCreatedDate.toDateString()}`) // My created date is Sun Apr 14 2024
// Example - Get the time and date both from a particular date
const myCreatedDateTime = new Date(2024, 3, 14, 17, 45, 59)
console.log(`My created date and time is ${myCreatedDateTime.toLocaleString()}`) // My created date and time is 14/04/2024, 17:45:59
// Example - Get the date in mm/dd/yyyy format
const myCreatedDateFormatted = new Date('2023-01-14')
console.log(
  `My created date in mm/dd/yyyy format is ${myCreatedDateFormatted.toLocaleDateString()}`
) // My created date in mm/dd/yyyy format is 14/01/2023

// Example - timestamp in JS
const timeStamp = Date.now()
console.log(`Timestamp is ${timeStamp}`) // Timestamp is 1710440443448

// Example - Get the second from timestamp
console.log(`Seconds from timestamp is ${Math.floor(timeStamp / 1000)}`) // Seconds from timestamp is 1710440782

// Example - Get the month from timestamp
const timeStampNew = new Date()
console.log(`Month from timestamp is ${timeStampNew.getMonth() + 1}`) // Month from timestamp is 2
// Example - Get the day from timestamp
console.log(`Day from timestamp is ${timeStampNew.getDay()}`) // Day from timestamp is 4
// Example - toLocalString method
timeStampNew.toLocaleString('default', { month: 'long' }) // February
timeStampNew.toLocaleString('default', { weekday: 'long' }) // Thursday
timeStampNew.toLocaleString('default', { day: 'numeric' }) // 14
timeStampNew.toLocaleString('default', { year: 'numeric' }) // 2024
timeStampNew.toLocaleString('default', { hour: 'numeric' }) // 17
timeStampNew.toLocaleString('default', { minute: 'numeric' }) // 45
