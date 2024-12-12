// comparsion operator
// <, >, <=, >=, ==, ===, != (not equal), !== (not equal strict check)
// let temp  = 50;
// if(temp < 40){
//     console.log('less tehnn 40');
    
// }else{
//     console.log('executed')
// }

//short hand note
const balance = 1000
// if(balance > 500)console.log('test')
const userLoggedIn = true
const cc = true
if(userLoggedIn && cc ){
    console.log('Allow user to checkout');
    
}

// || (Or) && (And) ! (Not) !! (Not Not)
const google = true
const email = false
if(google || email){
    //console.log('yes');
    
}

let browser = true
let email1 = false
if(browser && email1 ){
    console.log('Yes')
}