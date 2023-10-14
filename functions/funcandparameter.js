function sayMyName (){
    console.log('U')
    console.log('S')
    console.log('M')
    console.log('A')
    console.log('N')
}
// sayMyName()  >> to execute the function

// function addTwoNumbers (number1, number2){   //   << This called function defination 
// console.log(number1 + number2)
// }

// function addTwoNumbers (number1, number2){   
//     // let result = number1 + number2
//     return number1 + number2
//     }
// let result = addTwoNumbers(2 ,1)  
// // console.log(result)

// function userLogin (userName){
//     return `${userName}just logged in`
// }
function userLogin(userName){
    if(!userName ){
        console.log('please enter user name');
        return
    }
    return `${userName} just logged in`
}
// console.log(userLogin())


//function with objects and parameter 
//  ...   << this is rest operator
function addToCart(...num1){
return num1
}
// console.log(addToCart(200,500,900))
// let user ={
//     firstName : 'osman',
//     price : 99
// }
// function userName(anyObject){
// console.log(`Your name is ${anyObject.firstName} and prince is ${anyObject.price}`)
// }
// // userName({
// // firstName : 'imran',
// // price : 89
// // })
// userName(['Osman', 89])

let rray = [500,98,78]                                                  
function giveMeValue(myArray){
return myArray[0]
}
console.log(giveMeValue(rray))


// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// // console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));