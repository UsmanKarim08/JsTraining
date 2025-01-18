const  user ={
    userName: 'Usman',
    logincount: 8,
    signedin :true,
   getUserDetails : ()=>{
    console.log("Get User Data from DB");
    
   }
}
// console.log(user.getUserDetails());

function User(username,logincount,isLoggedIn){
    this.username = username,
    this.logincount = logincount,
    this.isLoggedIn = isLoggedIn
    this.greeting =function(){
        console.log(`${this.username}has loggedIn: ${this.isLoggedIn}`);
        
    }
    return this
}
//const userOne = User('usman',8,true)
const userOne = new User('usman',8,true)
const userTwo = new User('Imran',10,false)

console.log(userOne);
console.log(userTwo);
