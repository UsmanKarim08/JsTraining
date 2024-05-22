const user ={
    username: 'Shubham',
    price : 100,
    welcome(){
        console.log(`Welcome ${this.username}`);
    }
}
user.welcome();
// regular function
// function welcome(){
//     console.log(`Welcome ${this.username}`);
// }
// welcome();

// Arrow function
// const addTwo = (a,b) => {
//     return a+b;
// }
// console.log(addTwo(2,3));
const addTwo = (a,b) => a+b
console.log(addTwo(2,3));

// objects in arrow functions
const obj = ()=> ({userName: 'imran'})
console.log(obj())
const arr = ()=> (['imran'])
console.log(arr())
