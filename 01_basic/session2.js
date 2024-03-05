const arrObj= [
    {name: 'John', age: 25},
    {name: 'Andrew', age: 30},
]
// for(let i of arrObj){
//     console.log(`Name:  ${i.name} ' Age:   ${i.age}`)
// }
for(var obj in arrObj){
    console.log(arrObj[obj ])
}
//for of is for arrays and for in is for objects