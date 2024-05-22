// IIFE function is use to clear global polution
(()=> {
    console.log('Usman')
})();
((userName)=> {
    console.log(`Name is ${userName}`)
})('rayyan')