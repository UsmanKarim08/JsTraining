// let myArr = ["hello", "world", "how", "are", "you"];
// myArr.forEach((elment ,index) => {
// console.log(`Array element is: ${elment} and index is ${index}`)
// })
// let rev = ...arr,...newArr;
//console.log(rev)

function findLargestAndSmallest(arr){
    if(arr.legth === 0){
        return {Largest:null, Smallest:null}
    }
    let Largest = Math.max(...arr)
    let Smallest = Math.min(...arr)
    return{Largest,Smallest}
}
let myArr = [1,2,3,4,5]
let result = findLargestAndSmallest(myArr)
console.log(`Largest: ${result.Largest}, Smallest: ${result.Smallest}`)
// Filter Even/Odd Numbers
// let res = myArr.filter(num => num % 2 === 0)
// console.log(res)
let res1 = myArr.filter(num1 => num1 % 2 !== 0)
console.log(res1)
 //Remove Duplicate
 let fruits =  ["apple", "banana", "apple", "orange"]
fruits = [...new Set(fruits)]
console.log(fruits)
console.log(fruits)

//flat
let flatArray = [1, [2, [3, 4]], 5]
let results = flatArray.flat(Infinity)
console.log(results)

const myNum =[1,2,3,4,5,6,7,8,9,10]
// const a = myNum.filter((num) => num > 5)
// console.log(a)
let b = myNum.map((num) => num *10)
.map((num) => num + 1 )
.filter((num) => num > 41)
console.log(b)