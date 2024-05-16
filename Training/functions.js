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
console.log(loginUser('usman'))