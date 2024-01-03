let prm = new Promise((resolve,reject)=> {
    setTimeout(()=> {
        let error = false;
        if(!error){
            resolve({userName:'usman',email:'u@gmail.com'})
        }
        else{
            reject('ERROR: Some Thing Went Wrong')
        }
    },1000)
}).then((user)=> {return user.userName})
.then((userName) => console.log(userName))
.catch((ERROR) => console.log(ERROR))
.finally(() => console.log("Promise is resolved or rejected"))

fetch('https://jsonplaceholder.typicode.com/users/')
.then((repsonse)=> {
    return repsonse.json()
}).then((data) => console.log(data))
.catch((Error) => console.log(Error))