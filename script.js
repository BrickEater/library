/*
-create input fields for the constructor arguments
-create a button to add a book to the library

*/


let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBooks() {
  const booksContainer = document.getElementById("books");
  console.log(booksContainer.innerHTML);
  booksContainer.innerHTML = ""; // clear the existing content
  console.log(booksContainer.innerHTML);

  myLibrary.forEach(book => {
    const bookDiv = document.createElement("div");

    const titleHeading = document.createElement("h2");
    titleHeading.textContent = "Title: " + book.title;
    bookDiv.appendChild(titleHeading);

    const authorPara = document.createElement("p");
    authorPara.textContent = "Author: " + book.author;
    bookDiv.appendChild(authorPara);

    const pagesPara = document.createElement("p");
    pagesPara.textContent = "Pages: " + book.pages;
    bookDiv.appendChild(pagesPara);

    const readPara = document.createElement("p");
    readPara.textContent = "Read: " + book.read;
    bookDiv.appendChild(readPara);

    booksContainer.appendChild(bookDiv);
  });
}

// Get a reference to the HTML form element
const form = document.getElementById("book-form");

// Add an event listener to the form submit button
form.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value);
  const read = document.getElementById("read").checked;

  // Call the addBookToLibrary function with the form data as arguments
  addBookToLibrary(title, author, pages, read);
  // Call the displayBooks function to display the new book
  displayBooks();
});


