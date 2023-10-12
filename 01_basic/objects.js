

//For Interview 
// singletone when create through an object it's singletone means he only one type of object (created with constructer)
//if declare as literals it's singletone
//object literals
let user = {
    name : 'usman',
    lastName : "karim",
    age : 38,
    lastLoggedIn : ['Monday','tuesday']
}

    



//How to access the object
// console.log(user);
// console.log(user['name']);

//How to change value
// user.name = 'Imran'
// console.log(user['name'])
user.greeting = function(){
    console.log('good morning')
}
user.greeting2 = function(){
    console.log(`Aslam O Alekum and good morning ${this.name} `)

}
console.log(user.greeting2())
console.log(user.greeting())

