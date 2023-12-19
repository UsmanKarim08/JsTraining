class user{
    constructor(name, email){
        this.email = email;
        this.name = name;
    }
    changeuserName(){
        return `this user name is ${this.name.toUpperCase()}`;
    }
    
}
let user1 = new user('Osman','abc@gmail.com');
console.log(user1 instanceof user);
console.log(user1.changeuserName());
