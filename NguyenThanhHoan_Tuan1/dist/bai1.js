"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPerson() {
        console.log(`Name: ${person.name} - Age: ${person.age}`);
    }
}
exports.Person = Person;
var person = new Person("Hoan", 20);
person.getPerson();
