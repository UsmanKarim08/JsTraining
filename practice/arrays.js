// const myArr =[1,2,3,4,5,6,7];
// myArr.unshift(0)
// myArr.some(num => {
//     if(num === 0){
//         console.log(`${num} is found`)
//         return true
//     }
// })
const myArr = ['usman','Imran','Aleem','Zohaib']
myArr.forEach((arr, index) => {
    if(arr === 'Zohaib'){
        console.log(`${arr} is found at index ${index}`)
    }
    // console.log(`${arr} is at index ${index}`)
})