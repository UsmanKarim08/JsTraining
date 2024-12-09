//how to delcare literal object
let user={}
// how to declare singleton object
let newObj = new Object()
newObj.name= 'usman'
newObj.age = 40
//console.log(newObj)

let newUse= {
    name:'usman',
    fullname:{
        firstName:'imran',
        anOther:{
last_name: 'karim'
        }

    }
}
//console.log(newUse.fullname.anOther.last_name)
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
let obj7 = {...obj1,...obj2,...obj4}
console.log(obj7);
console.log(Object.keys(obj1))
console.log(obj1.hasOwnProperty('5'))


