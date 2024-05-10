const myArr =[1,2,3,4,5,6,7,8,9,10];
//console.log(myArr.length);
// myArr.unshift(0);
// console.log(myArr);

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
//console.log(myArr3);
const heros = ['Super','thor','spiderman'];
const dc_heros = ['batman','superman','wonderwoman'];
const allHeros = [...heros,...dc_heros,...myArr]
// console.table(allHeros);
allHeros.forEach(allHeros => {
    if(allHeros.includes('superman')){
        console.log('found')
    }
    else{
        console.log('not found');
    }
    console.log(allHeros)
});
if(allHeros.includes('superman')){
    console.log('superman found')
}else{
    console.log('not found')
}

console.log(Array.from('Usman'))
const score = 1
const score2 = 2
const score3 = 3
console.log(Array.of(score,score2,score3))