const bookLibrary = document.querySelector('.book-library')
const bookList = document.querySelector('.book-list')
const dialog = document.querySelector('dialog')
const addBookBtn = document.querySelector('.add-book')
const cancelBtn = document.querySelector('.cancel')
const submitBookBtn = document.querySelector('.submit-book')

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function displayTotalBooks() {
    const totalBook = document.querySelector('.total-books');
    totalBook.textContent = myLibrary.length;
}

displayTotalBooks()

function addBook(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)

    myLibrary.push(newBook)

    createBookShelf(newBook)
    displayTotalBooks();
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
    bookReadStatus.classList.add('read-status')

    function update() {
        bookReadStatus.textContent = book.read ? "Read" : "Not read"
        bookReadStatus.style.color = book.read ? "Green" : "Red"
    }
    update();

    bookReadStatus.addEventListener('click', () => {
        book.read = !book.read;
        update();
    })

    const removeBook = document.createElement('p');
    removeBook.innerHTML = `<img src="icons/trash.svg" alt="remove icon" />`;

    removeBook.addEventListener('click', () => {
        bookShelf.remove()
        const index = myLibrary.findIndex(b => b.id === book.id)
        if (index > -1) myLibrary.splice(index, 1)

        displayTotalBooks()
    })

    bookShelf.appendChild(bookTitle)
    bookShelf.appendChild(bookAuthor)
    bookShelf.appendChild(bookPages)
    bookShelf.appendChild(bookReadStatus)
    bookShelf.appendChild(removeBook)

    bookList.appendChild(bookShelf)
}

function getBookData(event) {
    const titleValue = document.getElementById('title').value
    const authorValue = document.getElementById('author').value
    const pagesValue = document.getElementById('pages').value
    const checkedRadio = document.querySelector('input[name="read-status"]:checked')
    const readValue = checkedRadio.value === 'read'

    if (titleValue && authorValue && pagesValue && checkedRadio) {
        addBook(titleValue, authorValue, pagesValue, readValue);

        event.target.form.reset();
        dialog.close();
    }
}

addBookBtn.addEventListener('click', () => {
    dialog.showModal();
})

cancelBtn.addEventListener('click', () => {
    dialog.close();
})

submitBookBtn.addEventListener('click', (event) => getBookData(event))

addBook("Atomic Habits", "James Clear", 320, true)
addBook("Ego is the enemy", "Ryan Holiday", 226, false)
addBook("The Alchemist", "Paulo Coelho", 208, true) 