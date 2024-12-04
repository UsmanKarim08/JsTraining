//primitive data types
// 1. Number => 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10.5, 10.6
// 2. String => 'hello', "hello", `hello`
// 3. Boolean => true, false
// 4. Undefined => undefined
// 5. Null => null
// 6. Symbol => Symbol('hello')
// 7. BigInt => 100

//non-primitive data types / reference data types
// 1. Array => []
// 2. Object => {}
// 3. Function => function(){}
// 4. Date => new Date()

const num = 10;
const str = 'hello';
const bool = true;
const undef = undefined;
const nul = null;
const sym = Symbol('hello');
const bigInt = 100n;
console.log(typeof (num));
console.log(typeof (str));
console.log(typeof (bool));
console.log(typeof (undef));
console.log(typeof (nul));
console.log(typeof (sym));
console.log(typeof (bigInt));

const myFunction = function () {
    console.log('hello');
}
console.log(typeof (myFunction));
let obj={
    name:'Usman',
    age:30
}
console.log(typeof (obj));
let arr = [1,2,3,4,5]
console.log(typeof (arr));

// *********************** memory ***********************
// 1. Stack Memory => Number, String, Boolean, Undefined, Null, Symbol, BigInt (give copy to primitive data types)
// 2. Heap Memory => Array, Object, Function, Date (give reference to non-primitive data types)

// stack memory
let a = 10;
let b = a;
a = 20;
console.log(b);
console.log(a);

// heap memory
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1.push(4);
console.log(arr1);
console.log(arr2);