// there are two ways to declare arrow function 
const arrow = (num1,num2) => num1 + num2;     // this is called imiplicit arrow function where we don't write the return key word it automatically detect that
console.log(arrow(2,3))

// const arrow1 = (num1,num2) => ({name : 'usman', age : 38})     // this is called imiplicit arrow function where we don't write the return key word it automatically detect that
// console.log(arrow1(2,3))

const arrow3 = (num3 , num4) => {
    return num3 / num4
}
console.log(arrow3(1200,4))