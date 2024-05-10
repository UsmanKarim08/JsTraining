// how to declare singlton object
// const myUser =new Object()
// console.log(myUser)
// // Non singleton object
// const myUser1 ={}
// myUser1.id = 123,
// myUser1.name = 'Usman'

// console.log(myUser1)

const newUser ={
    email:'usman@gmail.com',
    fullName:{
        firstName: 'Usman',
        lastName: 'Karim'
    }
}
// console.log(newUser.fullName.lastName)
// //How to concat objects
const user = {1:'usman',2:'Karim'}
const user1 = {3:'imran',4:'Karim'}
const user3 = {...user,...user1}   //<< spread method
//console.log(user3)
console.log(Object.values(user3))
console.log(Object.create({name:'usman'}))





