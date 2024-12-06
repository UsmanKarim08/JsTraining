let date = new Date
//console.log(date.toISOString()) // iso format is the standard format for date and time
//console.log(date.toDateString()) // toDateString() returns the date portion of a Date object in human readable form
//console.log(date.toTimeString()) // toTimeString() returns the time portion of a Date object in human readable form
//console.log(date.toLocaleDateString()) // toLocaleDateString() returns the date portion of a Date object in human readable form in local time
//console.log(date.toJSON()) // toJSON() returns the date as a string in JSON format

let myDate = new Date(1983,10,8)
console.log(myDate.toLocaleString())
// console.log(`${myDate.getDay()} and time is ${myDate.getTime()}`)
console.log(`${myDate.toLocaleString('en-US', { weekday: 'short' })} and time is ${myDate.toLocaleTimeString('en-US')}`);
let myTime = new Date()
console.log(myTime.getTime())
myTime.toLocaleString({
    Weekday : 'long'
})