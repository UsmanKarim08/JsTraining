// const newNum = [1,2,3,4,5,6,7,8,9,10]
// let myNum = newNum.map((num) => num  + 10).map((num) => num * 9).filter((num) => num >= 144)
// console.log(myNum)
 function rem(str){
    return str.replace(/[aeiouAEIOU]/g, '')
 }

 let a = "This website is for losers LOL!"
 let result = rem(a)
 let test = (result)=>{
    if (!/[aeiouAEIOU]/.test(result)){
        console.log('Removed')
    }
    return result
}
 console.log(test(result))
