let jsUser={
    fName: 'Usman',
    lName:'Karim',
    email: 'some@gmail.com',
    age: 26,
    isloggedIn: true
}

//Object.freeze(jsUser)
// console.log(jsUser['email'])
jsUser.greeting = function (){
    console.log(`hi jsUser ${this.isloggedIn}`)
}
console.log(jsUser.greeting())