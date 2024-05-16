// de structure array 
// const arr = [1, 2, 3, 4, 5];
// const [a, b, c, d, e] = arr;
// console.log(a);

//object de structure
const course={
    name:'React',
    price:100,
    duration:'2 months',
    instructor:'Usman'
}
const {instructor: teacher } = course
console.log(teacher)
//loop through object
// for(const[key,value] of Object.entries(course)){
//     console.log(`${key}: ${value}`)
// }
for(const key in course){
        if (course.hasOwnProperty(key)) {
            console.log(`${key}: ${course[key]}`);
        }
    
    
}