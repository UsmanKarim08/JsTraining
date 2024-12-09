function test(...num1){
    return num1
}
console.log(test(1,2,3,4));
 user={
    firstName : 'Usman',
    Dob: 1984,
    haveCC: true
 }
 function creditCard(ccInfo){
    console.log(`${ccInfo.firstName} DOB: ${ccInfo.Dob} and he has the Chase Credit Card ${ccInfo.haveCC}`)
 }
 creditCard(user)