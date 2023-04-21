function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};



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

const addBook = document.getElementById('new-book-form');

addBook.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('Form submitted');
});
