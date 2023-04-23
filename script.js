function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

const myLibrary = [];

function createNewBook(e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').value;
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
}

function init() {
  const form = document.getElementById('new-book-form');
  form.addEventListener('submit', createNewBook);
}

// Get references to the modal and button elements
const modal = document.getElementById("modal-window");
const button = document.getElementById("add-book-btn");

// Get the close button element
const closeButton = document.getElementsByClassName("close")[0];

// Show the modal when the button is clicked
button.addEventListener("click", function() {
  modal.style.display = "block";
});

// Hide the modal when the close button is clicked
closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});

