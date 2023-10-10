// difference between primitive and no primitive ==>> call by value and call by reference
// Primitive ==>> call by value
//String,Number,Boolean,null,NaN,Symbol,BinInt (some sceintific or large number )

// const name = 'john smith' > String
// const age = 38 > Number
// const value = 69.12 > Number
// const isLoggedIn = true > Boolean
// const outSideTemp = null > empty value
// let userName; > undefined
// const id = Symbol ('usman')
// const firstName = Symbol ('Karim')
// console.log(id == firstName)
//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they 
//hold at runtime and can change throughout the program as we assign different values to them


// Reference Type ==>> Non- Primitive
//Arrays,Objects,Functions
// let testArray = ['Usman','karim',1234];  >> Array
// console.log(testArray)

// let user = {
//     'name':'Osman',       >> Object
//     age : 36
// }
// console.log(user)

// let user1 = [
//     {
//         'name':'Osman',      
//     age : 36
//     },                             >> object of array
//     {
//         'name':'Osman',       
//    age : 36
//     }
// ]
// console.log(user1)