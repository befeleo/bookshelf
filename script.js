const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();

    this.info = function () {
        this.readStatus = this.read ? "read" : "not read";
        return `${this.title} ${this.author} ${this.pages} ${this.readStatus} ${this.id}`
    }
}

function addBook() {
    const newBook = new Book("Atomic Habits", "James Clear", 200, true)
    myLibrary.push(newBook)
}

addBook()
console.log(myLibrary)
