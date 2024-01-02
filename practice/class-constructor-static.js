class user{
    constructor(name,email){
        this.name= name;
        this.email = email;
    }
}
// let user1 = new user('Osman','usman2gmail.com');
// console.log(user1);
// let user2 = new user('imran','imran@gmail.com');
// console.log(user2);
class admin extends user{
    constructor(name,email,role){
        super(name,email)
        this.role = role
    }
}
let admin1 = new admin('Osman','usman2gmail.com','admin');
console.log(admin1);