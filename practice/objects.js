let user = {
    name : 'usman',
    lastName : "karim",
    age : 38,
    lastLoggedIn : ['Monday','tuesday']
}
user.name= 'imran'
user.greeting= () => {
    console.log(`Welcome ${user.name} you last logged in on ${user.lastLoggedIn}`)
}
console.log(user.greeting())