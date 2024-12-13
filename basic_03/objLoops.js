const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  occupation: "Developer",
};
for (const key in person) {
  console.log(person[key]);
}
// create a array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//For each
// arr.forEach(function (element){
// console.log(element)
// })
// arr.forEach((element)=>{
//     console.log(element)
// })

// arr.forEach(element => console.log(element))
function printme(item){
    console.log(item)
}
arr.forEach(printme)