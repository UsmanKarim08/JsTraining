new Promise(function(resolve,reject){
setTimeout(function(){
    console.log('Hey I am time out')
    resolve()
})
}).then(function(){
    console.log('Hello')
})