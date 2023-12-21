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
for(let i=0 ; i < cont.length; i++){
    if(cont [i] === 'imran'){
        console.log(`Usman is found at index ${i}`)
        break;
    }else{
        console.log('Usman not found so print ', run)
    }
}

