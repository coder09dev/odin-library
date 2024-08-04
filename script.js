function Book(author, title, pages, isRead = false) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.changeReadStatus = function () {
    this.isRead = !this.isRead;
}


const myLibrary = [];

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(book) {
    const table = document.getElementById("books");
    let row = table.insertRow();
    row.insertCell().textContent = book.author;
    row.insertCell().textContent = book.title;
    row.insertCell().textContent = book.pages;
    row.insertCell().textContent = (book.isRead) ? "Yes" : "No";
}

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('isRead').value;

    const book = new Book(
        author, 
        title,
        Number(pages),
        isRead.toLowerCase() === "yes" ? true : false,
    );
    addBookToLibrary(book);
    displayBooks(book);
});
