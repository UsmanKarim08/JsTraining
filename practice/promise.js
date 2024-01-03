// new Promise(function(resolve,reject){
// setTimeout(function(){
//     console.log('Hey I am time out')
//     resolve()
// })
// }).then(function(){
//     console.log('Hello')
// })
let prom = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({userName:'Usman',email:'ukarim@gmail.com'})
    },1000)

}).then((user) => {
    console.log(user);
})