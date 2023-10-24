// let myarr= "Welcome To Pakistan"
// for(const arr of myarr){
//     if(arr==" "){
//         break }
// console.log(arr)}

//How to declare map
// let mymap = new Map()
// //How to set value in map
// mymap.set("name", "Osman")
// mymap.set("age", 20)
// mymap.set('name1', 'imran')
// //How to get value from map
// // console.log(mymap)
// for(const key of mymap){
//     console.log(key)
// }
const myObj = {
    js : 'Java Script',
    RB : 'Ruby',
    CPP : 'C++'
}
    for(const key in myObj){
    console.log(`${key} stand for ${myObj[key]}`)
}

// to loop through the object we use for in loop
// too loop through the array we use for of loop