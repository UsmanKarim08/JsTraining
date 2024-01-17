// function sedan (model,make,year){
//     this.model = model;
//     this.make = make;
//     this.year =year
// }
// let honda = new sedan('accord','honda',2024)
// console.log(honda)
function sedan(model,make,year){
    this.model = model;
    this.make = make;
    this.year = year
}
sedan.prototype.getDetails=function() {
    return this.make + ' ' + this.model + ' ' + this.year;
}
let hond = new sedan('Accord','Honda',2024)
console.log(hond.getDetails())