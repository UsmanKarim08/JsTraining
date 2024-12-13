// let arr = [1, 2, 3, "Usman", { first: "karim" }];
// for (const i of arr) {
//   console.log(i);
// }

// const greeting = "Hello World";
// for (const greet of greeting) {
//   console.log(`My first programming word was ${greet}`);
//   if (greet == " ") {
//     console.log("Detect space");
//     continue;
//   }
// }
// Map function is used to iterate over an array and return a new array it work key value pair map don't take duplicate
 const map = new Map()
 map.set('pakistan', 'Usman')
 map.set('lahore', 'punjab')
for (const [key, value] of map) {
    console.log(` Key of map is ${key}, ': ' , Value of map is ${value}`)
}
// can not use for of loops on objects
// let myobj ={
// first:'usman',
// age:40
// }
// for (const [key, value] of myobj) {
//     console.log(` Key of map is ${key}, ': ' , Value of map is ${value}`)
// }