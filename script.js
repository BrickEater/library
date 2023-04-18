/* const addBook = document.getElementById('add-book');

addBook.addEventListener('click', function() {}); */

// Get references to the modal and button elements
const modal = document.getElementById("modal-window");
const button = document.getElementById("open-modal-btn");

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
