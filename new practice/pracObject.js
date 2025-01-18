let student = {
    name: "Alice",
    age: 20,
    grades: [90, 85, 88]
};
let address = { city: "New York", zip: "10001" };
     let fullProfile = { ...student, ...address };
// for (const key in student) {
//    console.log(`${key}: ${student[key]}`)
// }
let sp= {...student,...address}
// console.log(sp)

//check properties
console.log(student.hasOwnProperty(('name')))
console.log(Object.entries(student))