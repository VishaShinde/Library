const myLibrary = [];

function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}


function displayBooks(){
    const bookContainer = document.getElementById('book-container');
    bookContainer.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.setAttribute('data-index', index);

        bookCard.innerHTML = `
           <h2>${book.title}</h2>
           <p>Author : ${book.author}</p>
           <p>Pages : ${book.pages}</p>
           <p>Read : ${book.read}</p>
           <button onclick="removeBook(${index}">Remove</button>
           <button onclick="toggleRead"(${index})>Toggle Read</button>
        `;

        bookContainer.appendChild(bookCard);
    })
}

function toggleForm() {
    const formContainer = document.getElementById('form-container');
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
  }

function addNewBook(event){
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(author, title, pages, read);
    myLibrary.push(newBook);
    displayBooks();

    document.getElementById('book-form').reset();
}

function removeBook(index){
    myLibrary.splice(index,1);
    displayBooks();
}

function toggleRead(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

document.getElementById('book-form').addEventListener('submit', addNewBook);
document.getElementById('new-book-btn').addEventListener('click', toggleForm);