"use strict";
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getCar() {
        console.log(`Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`);
    }
}
var car = new Car("Mercedes-Benz", "S 450 4MATIC", 2025);
car.getCar();
