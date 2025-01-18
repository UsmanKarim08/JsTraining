let user ={
    fName: 'Usman',
    lName:'Karim',
    email: 'some@gmail.com',
    age: 26,
}
let user2 ={
    givenName: 'Imran',
    familyName:'Khatana',
    emailAccess: 'how@gmail.com',
}
//let obj = Object.assign({},user,user2)
let obj = {...user,...user2}
console.log(obj)