class Car{
    brand: String
    model: String
    year: number

    constructor(brand: String,model: String,year: number){
        this.brand = brand
        this.model = model
        this.year = year
    }
    public getCar(): void{
        console.log(`Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`)
    }
}


var car = new Car("Mercedes-Benz", "S 450 4MATIC", 2025)
car.getCar()