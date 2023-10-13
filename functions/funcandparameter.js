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
console.log(userLogin())