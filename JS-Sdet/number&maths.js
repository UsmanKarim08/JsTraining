
//Need to learn more about numbers and maths in JS
const Balance = new Number(400)
// console.log(Balance.toString().replace('0', '*'))
// console.log(Balance.toFixed(3))
const hun = 10000000
// console.log(hun.toLocaleString())


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math.abs(-4)) // convert negative to positive
// console.log(Math.round(4.1)) // round up
// console.log(Math.ceil(4.1)) // round up to the nearest whole number
//console.log(Math.floor(4.9)) // round down to the nearest whole number
// console.log(Math.max(4, 5, 6, 7, 8, 9)) // find the maximum number
// console.log(Math.min(4, 5, 6, 7, 8, 9)) // find the minimum number
console.log(Math.random()) // generate a random number
console.log((Math.random()*10)+1) // generate a random number

const min = 10
const max = 20
console.log((Math.floor(Math.random()*(max-min+1))+min)) // generate a random number between 10 and 20