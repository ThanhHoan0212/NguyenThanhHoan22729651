class Rectangle{
    width: number
    height: number

    constructor(width: number, height: number){
        this.width = width
        this.height = height
    }

    public calculateArea(): number{
        var dt
        dt = this.width*this.height
        console.log(dt)
        return dt
    }
    public Perimeter(): number{
        var cv
        cv = (this.height+this.width)*2
        console.log(cv)
        return cv
    }
}

 var rectangle = new Rectangle(2,8)
 rectangle.calculateArea()
 rectangle.Perimeter()