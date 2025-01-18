// // How to check the string if it is available 
// let str = ' hello World +'
// // let fin = str.includes('hello')
// let rep = str.replace('hello' , 'hi')
// console.log(`Is HELLO present in ${str} : ${rep}`)
// // let tri = str.trim()
// // console.log(tri)
// let str = 'hello World'
// // let spli = str.split()
// let joi = str.split().join("-")
// console.log(joi )

// Reverse
let rev = 'Hello'
let prac = rev.split('').reverse()
// console.log(prac)
function removeVowels(str){
    return str.replace(/[aeiouAEIOU]/g, '');
}
let env = 'hello'
let result = removeVowels(env)
console.log(result)