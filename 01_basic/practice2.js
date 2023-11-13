// const language = {  
//     name : 'C',
//     year : 1972,
//     paradigm : 'Imperative',
//     author : 'Dennis Ritchie',
//     company : 'Bell Labs'
// };
// // destructuring
// // const{author: me} = language;
// console.table(language);
// const language = ['c++', 'java', 'python', 'javascript'];
// for (let i = 0; i < language.length; i++) {
//     if(language[1] === 'java'){
//         console.log(`Yes ${language[1]} is here`)
//         break;
//     }
//     console.log(language[i]);
// }
// const otherNumber = 123.8966

// console.log(Math.min(4, 3, 6, 8));

//  const lang= () => {return {name : 'usman', age : 38} }    // this is called imiplicit arrow function where we don't write the return key word it automatically detect that
// // console.log(lang(this))
// const print = () => {
//     console.log(lang())
// }
// print()
let myArr = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange', 'black', 'white', 'brown']
for (const arr of myArr) {
    if(arr === 'green'){
        console.log(`${arr} found`)
        break;
    }
    console.log(myArr)
    
}

