// falsy values: false, 0, -0, 0n, "", null, undefined, NaN
// truthy values: '0','false',' ',[],{},function(){},
//  const arr = []
//  if (arr.length === 0) {
//     console.log('array is empty')
//  }

// how to check obj is empty
const obj = {}
if(Object.keys(obj).length === 0){
    console.log('obj is empty');
    
}
// Nullish coalescing operator (??) : for null undefined


//Terinary operator
tea >= 80 ? console.log('Test') : console.log('fail');
