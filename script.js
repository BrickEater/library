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
  console.log(myLibrary);
});

