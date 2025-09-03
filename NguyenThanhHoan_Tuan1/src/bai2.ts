import { Person } from "./bai1";
class Student extends Person{
    grade: String

    constructor(name: String, age: number, grade: String){
        super(name,age)
        this.grade = grade
    }
    public getStudent(): void{
        this.getPerson();
        console.log(`Grade: ${student.grade}`);
    }
}


var student = new Student("Hoan",20,"Gioi")
student.getStudent()