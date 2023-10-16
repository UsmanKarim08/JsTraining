// // function addTwoNumbers(num1, num2){
    
// //     return num1 + num2
// // }
// // console.log(addTwoNumbers(2,3))

// function userLogIn(username){
//     if(!username){
//         return `Please Enter Your User Name`
//     }
//     else{
//         return `${username} just logged in`
//     }
// }
// console.log(userLogIn())

// function addToCart(...num1){
//     return num1
// }
// console.log(addToCart(1,2))

let user={
    name : 'Samsung',
    prices : 209
}
function checkObjectInFunc(anyObject){
return `Phone make is ${anyObject.name} and price is ${anyObject.price}`
}
console.log(checkObjectInFunc({ name :'nokia', price : 150}))