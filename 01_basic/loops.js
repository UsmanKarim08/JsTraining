// const num = 100
// for (let num = 0; num <= 100; num++) {
//     const element = num;
//     console.log(element)
    
// }
// const myArr = ['osman', 'imran','rayyan']
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];+
//     console.log(element)
    
// }

//how to break a loop
// break keyword is used to break a loop

// for (let index = 0; index <= 100 ; index++) {
    
//     if (index == 98) {
//         console.log('deteced 98')
//         break
        
//     }
//     console.log(index)
// }

// While loop
// in while loop the condition is checked before the loop is executed
// let index = 1;
// while (index < 100) {
//     console.log(`Value of index is ${index}`);
//     index = index + 3;
// }

// do while loop
// in do while loop the condition is checked after the loop is executed
// let index = 1;//this will run at least once
// do { //this will run at least once
//     console.log(`Value of index is ${index}`); 
//     index = index + 3; 
// } while (index < 100); 

// for in loop
const myObj = {
    name: 'osman',
    age: 20,
    profession: 'developer'
}
for (const key in myObj) {
    console.log(key)
    console.log(myObj[key])
}


