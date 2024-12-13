let myHero = ['mario', 'luigi', 'yoshi'];
let myMarvel = ['ironman', 'spiderman', 'captain america'];
let con = myHero.concat(myMarvel)
// console.log(con)

//spread operator
let spr = [...myHero, ...myMarvel]
//console.log(spr)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// this will convert all the arrays into one array
const real_another_array = another_array.flat(Infinity)
 //console.log(real_another_array)
//how to make array from string with from method
//console.log((Array.from('Usman')))

//how to create an array with Array.of
let score1 = 100
let score2 = 200
let score3 = 300
console.log((Array.of(score1,score2,score3)))