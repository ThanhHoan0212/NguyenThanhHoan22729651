"use strict";
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getBook() {
        console.log(`Title: ${this.title},Author: ${this.author},Year: ${this.year}`);
    }
}
var book = new Book("Your Name", "Hoan", 2013);
book.getBook();
