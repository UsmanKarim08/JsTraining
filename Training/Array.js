const myArr =[1,2,3,4,5,6,7,8,9,10];
//console.log(myArr.length);

//Methods of Array
myArr.push(11);
//console.log(myArr);
myArr.pop();
// console.log(myArr);
myArr.unshift(0);
//console.log(myArr);
myArr.shift();
//console.log(myArr);
const MyArr = myArr.join('-');
//console.log(MyArr);
const myArr2 = MyArr.split('-');
//console.log(myArr2);
const myArr3 = myArr.slice(2,5);
console.log(myArr3);