// const a = 14;
// const b = 3;
// console.log(a%b)
// const a = 14;
// const fy = () =>{
   
//   return a+3
// }
// console.log(fy())

let ran = ['usman', 'ali', 'ahmed', 12, 34, false];
let run = ['hassan','imran']
let cont = [...ran,...run]
let found = false; // flag variable

for(let i=0 ; i < cont.length; i++){
    if(cont[i] === 'aleem'){
        console.log(`Imran is found at index ${i}`)
        found = true;
        break;
    }
}

if (!found) {
    console.log('Imran not found in the array')
}