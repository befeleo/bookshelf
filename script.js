const bookLibrary = document.querySelector('.book-library')
const bookList = document.querySelector('.book-list')

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
    displayBook(newBook)
    createBookShelf(newBook)
}


function displayBook() {
    myLibrary.forEach(book => {
        console.log(book)
    })
}

function createBookShelf(book) {
    const bookShelf = document.createElement('div')
    bookShelf.classList.add('book-shelf')

    const bookTitle = document.createElement('p')
    bookTitle.textContent = `${book.title}`

    const bookAuthor = document.createElement('p')
    bookAuthor.textContent = `${book.author}`

    const bookPages = document.createElement('p')
    bookPages.textContent = `${book.pages}`

    const bookReadStatus = document.createElement('p')

    function update() {
        bookReadStatus.textContent = book.read ? "Read" : "Not read"
        bookReadStatus.style.color = book.read ? "Green" : "Red"
    }
    update();

    bookReadStatus.addEventListener('click', () => {
        book.read = !book.read;
        update();
    });

    bookShelf.appendChild(bookTitle)
    bookShelf.appendChild(bookAuthor)
    bookShelf.appendChild(bookPages)
    bookShelf.appendChild(bookReadStatus)

    bookList.appendChild(bookShelf)
}

addBook("Atomic Habits", "James Clear", 200, true)
addBook("Ego is the enemy", "Ryan Holiday", 300, false)
addBook("The subtle arts of not giving a fuck", "Ryan Holiday", 200, true)
