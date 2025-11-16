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

function addBook(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}

function displayBook() {
    myLibrary.forEach(book => {
        console.log(book)
    })
}

