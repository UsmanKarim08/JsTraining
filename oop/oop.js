function car(seats,tires,color,make,year){
    this.make = make
    this.year = year
    this.color = color
    this.seats = seats
    this.tires = tires
}
 let honda = new car('Honda',2023,'Black',4,4)
 let toyota = new car ('Toyota',2023,'Black',4,4)
    let ford = new car ('Ford',2023,'Black',4,4)
    console.log(honda)
    console.log(toyota)
    console.log(ford)
 