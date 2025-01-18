// push array
let marvel = ['spriderman','batman','superman']
let cricket = ['England', 'Pakistan', 'Australia','Africa']
let countries = ['India', 'Africa']
// marvel.push(cricket)
// console.log(marvel)

//Concatinating array
// let con = marvel.concat(cricket)
// console.log(con)

//Spreading the array work like same as concat

let allThings = [...cricket,...marvel,...countries]
let dup = [...new Set (allThings)]
 console.log(dup)

//How to convert to array
console.log(Array.from('Usman'))
let num = 12;
let num2 = 15;
let num3 = 17
console.log(Array.of(num,num2,num3))
console.log(Array.from({name:'usman'}))