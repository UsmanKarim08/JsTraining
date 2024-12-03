// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const num of arr) {
//     console.log(num);
    
// }
// const str = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
// for (const val of str) {
//     console.log(val);
    
// }

//Map
const map = new Map()
map.set('a', 1)
map.set('b', 2)
map.set('c', 3)
console.log(map);
for(const [key,valye] of map){
    console.log(key, '=> ' ,valye);
    
}