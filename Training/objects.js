let user = {
  name : 'usman',
  lastName : "karim",
  age : 38,
  email:'usmankarim@gmail.com',
  lastLoggedIn : ['Monday','tuesday']
}
console.log(user['email'])
// how to freeze the object
// Object.freeze(user)
user.email = 'imran@gmail.com'
console.log(user['email'])
user.greeting= function(){
  console.log(`hello ${this.name} Your Age is ${this.age}`)
}
console.log(user.greeting())