"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
class Student extends bai1_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getStudent() {
        this.getPerson();
        console.log(`Grade: ${student.grade}`);
    }
}
var student = new Student("Hoan", 20, "Gioi");
student.getStudent();
