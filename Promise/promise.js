// const promiseOne = new Promise((resolve,reject) => {
//     setTimeout(function () {
//         console.log('Task completed')
//          resolve()
//     }, 1000)
   
// })
// promiseOne.then(() => {
//   console.log('Promise resolved')
// })
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Second Promise')
//         resolve()
//     }, 1000);
// }).then(() => {
//     console.log('Second Promise Resolved')
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Third Promise')
//         resolve(['usman','imran','rayyan'])
//     }, 1000);
// }).then((myArr) => {
// console.log(myArr)
// })

// const promiseFourth = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({userName: 'Usman', email:'some@example.com'})
//         } else {
//             console.log('Opps Some Thing Went Wrong')
//         }
//     }, 1000);
// })
// promiseFourth.then((user) => {
// return user.userName
// }).then((userName) => {
//     console.log(userName)
// }).catch((error) => {
// console.log(error)
// }).finally(() => console.log('Promise either resolved or rejected'))

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({userName: 'Usman', email:'some@example.com'}) 
        } else {
            console.log('Opps Some Thing Went Wrong')
        }
    }, 1000);
})
 async function consumePromiseFive(params) {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()
 
// async function getAllUsers() {
//     const respone = await fetch('https://jsonplaceholder.typicode.com/users')
//     const res = await respone.json()
//     console.log(res)
// }
// getAllUsers()
fetch('https://jsonplaceholder.typicode.com/users')
    .then((respone) => {
        return respone.json()
    }).then((data)=> {
        console.log(data)
    })
    .catch((error) => console.log(error))