const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayBooks(){

}

const modal = document.querySelector('#modal');
const add = document.querySelector('#add-book');
const close = document.querySelector('#cancel')

add.addEventListener('click', () => {
    modal.showModal();
})

close.addEventListener('click', () => {
    modal.close();
})