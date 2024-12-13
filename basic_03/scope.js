var a = 40;
let b = 50;
const c = 70;
if (true) {
  var a = 30;
  let b = 40;
  const c = 80;
  console.log('inner value:',b,c)
}
//console.log(a)
console.log(b)
console.log(c)

function scope(){
  let firstName= 'Usman'
  function  second(){
    let last_name ='Karim'
    console.log(firstName)
  }
  // console.log(last_name)
  second()
}
scope()
//+++++++++++++++++++++++++++Hoisting++++++++++++++++++++++++++++++++++
console.log(add(5)); // this will run

function add(num){
  return num + 1
}

console.log(addition(6)) // This will not run because we called this function before it's declartion this function also called expression
let ad = function addition(num1){
  return num1 + 5
}
