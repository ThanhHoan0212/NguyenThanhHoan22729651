"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        var dt;
        dt = this.width * this.height;
        console.log(dt);
        return dt;
    }
    Perimeter() {
        var cv;
        cv = (this.height + this.width) * 2;
        console.log(cv);
        return cv;
    }
}
var rectangle = new Rectangle(2, 8);
rectangle.calculateArea();
rectangle.Perimeter();
