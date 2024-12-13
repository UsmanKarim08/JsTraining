// let user = {
//     userName: 'Usman',
//     webSite: 'Testing.com',
//     welcome(){
//         console.log(`${this.userName} welcome to ${this.webSite}`)
//     }

//     }
//     user.welcome()
// // this key word can not be used in function
//     function user1(){
//         let firstName = 'Usman'
//         console.log(this.firstName)
//     }
//     user1()

// const addTwo =(num, num2) =>{
// return num+ num2
// }
// console.log(addTwo(6,7))

//implicity retrun
const addOne= (num3,num4) => num3+num4
console.log(addOne(8,7))
const obj= (num3,num4) => ({name:'usman'})
console.log(obj())
let testing =(test) => {

}