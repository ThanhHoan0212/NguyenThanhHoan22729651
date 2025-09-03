export class Person{
    name: String;
    age: number;

    constructor(name: String , age: number){
        this.name = name;
        this.age = age;
    }
    public getPerson(): void{
        console.log(`Name: ${person.name} - Age: ${person.age}`)
    }
    
}

var person = new Person("Hoan",20)
person.getPerson()




