const Library = document.querySelector(".library");
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

addBookToLibrary("1984", "George Orwell", 368, "Read")
addBookToLibrary("The Hobbit", "JRR Tolkien", 265, "Unread")
addBookToLibrary("Their Eyes Were Watching God", "Zora N Hurston", 231, "Read")


function displayBooks(){
    for (let i = 0; i < myLibrary.length; i++){
        const bookDiv = document.createElement('div');
        bookDiv.className = "book";

        //Title
        const title = document.createElement('h1');
        title.textContent = myLibrary[i].title;

        //Author
        const author = document.createElement('h3');
        author.textContent = myLibrary[i].author;

        //Pages
        const pages = document.createElement('p');
        pages.textContent = myLibrary[i].pages;

        //Read
        const read = document.createElement('p');
        read.textContent = myLibrary[i].read;

        //Delete
        const deleteBtn = document.createElement('button')
        deleteBtn.className = "delete";
        deleteBtn.textContent = "Delete";

        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(pages);
        bookDiv.appendChild(read);
        bookDiv.appendChild(deleteBtn);
        Library.appendChild(bookDiv);
    }
}

displayBooks();

//Modal
const modal = document.querySelector('#modal');
const add = document.querySelector('#add-book');
const cancel = document.querySelector('#cancel');

add.addEventListener('click', () => {
    modal.showModal();
})

cancel.addEventListener('click', () => {
    modal.close();
})