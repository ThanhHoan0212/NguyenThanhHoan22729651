class Book{
    title: String
    author: String
    year: number

    constructor(title: String,author: String,year: number){
        this.title = title
        this.author = author
        this.year = year
    }
    public getBook(): void{
        console.log(`Title: ${this.title},Author: ${this.author},Year: ${this.year}`);
    }
}

var book = new Book("Your Name","Hoan", 2013)
book.getBook()