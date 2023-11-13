// singletone object....by creating constructer 
// let user = new Object()
// console.log(user)

// non-singletone object
// let user1 = {}
// console.log(user1)

// //How to concat objects
// const user = {1:'usman',2:'Karim'}
// const user1 = {3:'imran',4:'Karim'}
// // const user3 = {...user,...user1}   << spread method
// // console.log(user3)

// console.log(Object.keys(user1))
// console.log(Object.values(user1))
// //To check the property exist or not
// console.log(user.hasOwnProperty('Karim'))

//De-structure the object
const course = {
    courseName : 'Js',
    courseInstructor : 'hitesh'
}
const{courseInstructor: instructor} = course
console.log(instructor)


