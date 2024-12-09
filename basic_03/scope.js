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
