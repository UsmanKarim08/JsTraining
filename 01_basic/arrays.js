// array
const arr = [1, 2, 3, 4, 5];
const newArr = [6,7,8,9,10]
// arr.push(6)
// arr.pop()
// arr.unshift(20)
// arr.shift()
const combine = [...arr,...newArr]
let se = combine.slice(1,3)
// console.log(se)
let str = "hello"
let rev = str.split('').reverse().join('')
console.log(rev)