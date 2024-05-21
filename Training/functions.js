// function myName(){
// console.log("U")
// console.log("S")
// console.log("M")
// console.log("A")
// console.log("N")
// }
// myName()
// when we ad ()it will call parameter 
function add(a, b) {
    if (typeof a === typeof b) {
        return a + b;
    } else {
        throw new Error('Data types do not match');
    }
}
//console.log(add(2, "a")); // << Argument
;
function loginUser(user){
    if(!undefined){
        console.log('Please Enter User Name')
        return
    }
    return `${user} is logged in`

}
// console.log(loginUser('usman'))
function add(...num){    //<<< this called rest operator 
return num
}
console.log(add(20,25,30,35))

const myArr = ['usman', 28,52]
function getArr(arr){
    return arr[0]
}
console.log(getArr(myArr))