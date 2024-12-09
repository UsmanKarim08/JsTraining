let mySymb = Symbol('my Key');
let user = {
    name: 'Usman',
    [mySymb]: 'my Key',
    age: 40,
    location: 'USA',
    isLoggedIn: false
};

// Accessing the property using the symbol
// console.log(typeof user[mySymb]); 

//How to Change the value
//user.name = 'Karim'
// console.log( user['name'])

//how to freeze the object 
//Object.freeze(user)
user.name = 'chouhdary'
// console.log( user['name'])
user.greeting= function(){
    console.log(`has ${this.name}  logged in ${this.isLoggedIn}`)
}
user.greeting()