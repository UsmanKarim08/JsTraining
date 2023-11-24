// const myArr =[1,2,3,4,5,6,7];
// myArr.unshift(0)
// myArr.some(num => {
//     if(num === 0){
//         console.log(`${num} is found`)
//         return true
//     }
// })
// const myArr = ['usman','Imran','Aleem','Zohaib']
// myArr.forEach((arr, index) => {
//     if(arr === 'Zohaib'){
//         console.log(`${arr} is found at index ${index}`)
//     }
//     // console.log(`${arr} is at index ${index}`)
// })


//To remove duplicate values from array we use Set method and spread operator 
//E.glet myArr3 = [...new Set(myArr)]
const myArr = ['usman','usman','Imran','Aleem','Zohaib']
// const myArr2 = [1,2,3,4,5,6,7,8,9,10]
// let myArr3 = [...myArr,...myArr2]
console.log(myArr)
let myArr2 = [...new Set(myArr)]
console.log(myArr2)