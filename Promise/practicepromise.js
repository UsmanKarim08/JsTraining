const prm = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error =false
        if (!error) {
            
            resolve({username: 'Usman', email:'some@example.com'})
            
        } else {
            console.log('opps some thing went wrong')
        }
    }, 1000);
})
prm.then((userName)=> {
return userName.email
}).then((userName)=> {
    console.log(userName)


})

fetch('https://jsonplaceholder.typicode.com/users')
.then((resp) => {
    return resp.json()
}).then((data) => {
 console.log(data)
}).catch(() => {console.log('Error')})